import { NextResponse } from "next/server";

const ZILLOW_LISTINGS = [
  {
    id: "116-elsie",
    url: "https://www.zillow.com/homedetails/116-Elsie-St-San-Francisco-CA-94110/125164135_zpid/",
  },
  {
    id: "1497-shotwell",
    url: "https://www.zillow.com/homedetails/1497-Shotwell-St-San-Francisco-CA-94110/15160090_zpid/",
  },
  {
    id: "25-elsie",
    url: "https://www.zillow.com/homedetails/25-Elsie-St-San-Francisco-CA-94110/15161163_zpid/",
  },
];

interface ZillowListing {
  id: string;
  address: string;
  price: string;
  beds: string;
  baths: string;
  sqft: string;
  description: string;
  imgUrl: string;
  zillowUrl: string;
  status: string;
  yearBuilt: string;
  lotSize: string;
}

function extractBetween(html: string, start: string, end: string): string {
  const startIdx = html.indexOf(start);
  if (startIdx === -1) return "";
  const from = startIdx + start.length;
  const endIdx = html.indexOf(end, from);
  if (endIdx === -1) return "";
  return html.slice(from, endIdx).trim();
}

function extractMeta(html: string, property: string): string {
  const re = new RegExp(
    `<meta[^>]+(?:property|name)=["']${property}["'][^>]+content=["']([^"']+)["']`,
    "i"
  );
  let m = re.exec(html);
  if (m) return m[1];
  // alternate order
  const re2 = new RegExp(
    `<meta[^>]+content=["']([^"']+)["'][^>]+(?:property|name)=["']${property}["']`,
    "i"
  );
  m = re2.exec(html);
  return m ? m[1] : "";
}

function extractJsonLd(html: string): Record<string, unknown> | null {
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    try {
      const data = JSON.parse(m[1]);
      if (data["@type"] === "SingleFamilyResidence" || data["@type"] === "House" || data.price || data.name) {
        return data;
      }
    } catch {
      // skip
    }
  }
  return null;
}

function extractZillowData(html: string, url: string, id: string): ZillowListing {
  // Try JSON-LD first
  const ld = extractJsonLd(html);

  // og tags
  const ogTitle = extractMeta(html, "og:title");
  const ogDesc = extractMeta(html, "og:description");
  const ogImage = extractMeta(html, "og:image");

  // Price: look for common patterns
  const pricePatterns = [
    /"\$[\d,]+"/,
    /listPrice["\s:]+(\$?[\d,]+)/,
    /price["\s:]+["']?\$?([\d,]+)/i,
    /"price":"?\$?([\d,]+)"?/,
    /(\$[\d,]{4,})/,
  ];
  let price = "";
  for (const pat of pricePatterns) {
    const m = pat.exec(html);
    if (m) {
      price = m[1] || m[0];
      // clean up
      price = price.replace(/"/g, "").trim();
      if (!price.startsWith("$")) price = "$" + price;
      break;
    }
  }

  // Address from og:title or ld
  let address = "";
  if (ld && typeof ld.name === "string") address = ld.name;
  else if (ogTitle) address = ogTitle.split("|")[0].trim();

  // Beds/baths/sqft from description or html
  const bdMatch = /(\d+)\s*(?:bed|bd)/i.exec(ogDesc || html);
  const baMatch = /(\d+(?:\.\d+)?)\s*(?:bath|ba)/i.exec(ogDesc || html);
  const sqftMatch = /([\d,]+)\s*(?:sqft|sq\s*ft)/i.exec(ogDesc || html);

  const beds = bdMatch ? bdMatch[1] + " bd" : "";
  const baths = baMatch ? baMatch[1] + " ba" : "";
  const sqft = sqftMatch ? sqftMatch[1].replace(",", "") + " sqft" : "";

  const description = ogDesc || (ld && typeof ld.description === "string" ? ld.description : "");

  const imgUrl = ogImage || "";

  // Status
  const statusMatch = /(For Sale|For Rent|Sold|Pending|Active)/i.exec(html);
  const status = statusMatch ? statusMatch[1] : "For Sale";

  const yearMatch = /yearBuilt["\s:]+["']?(\d{4})["']?/i.exec(html);
  const yearBuilt = yearMatch ? yearMatch[1] : "";

  const lotMatch = /lotSize["\s:]+["']?([\d,.]+ ?(sqft|acres?))["']?/i.exec(html);
  const lotSize = lotMatch ? lotMatch[1] : "";

  return {
    id,
    address,
    price,
    beds,
    baths,
    sqft,
    description: description.slice(0, 400),
    imgUrl,
    zillowUrl: url,
    status,
    yearBuilt,
    lotSize,
  };
}

async function scrapeWithScrapingBee(url: string): Promise<string> {
  const apiKey = process.env.SCRAPINGBEE_API_KEY;
  if (!apiKey) throw new Error("SCRAPINGBEE_API_KEY not set");

  const params = new URLSearchParams({
    api_key: apiKey,
    url,
    render_js: "true",
    premium_proxy: "true",
    country_code: "us",
    wait: "3000",
  });

  const res = await fetch(`https://app.scrapingbee.com/api/v1/?${params}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`ScrapingBee error ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.text();
}

export async function GET() {
  const apiKey = process.env.SCRAPINGBEE_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "SCRAPINGBEE_API_KEY environment variable is not set." },
      { status: 500 }
    );
  }

  const results: ZillowListing[] = [];
  const errors: string[] = [];

  for (const listing of ZILLOW_LISTINGS) {
    try {
      const html = await scrapeWithScrapingBee(listing.url);
      const data = extractZillowData(html, listing.url, listing.id);
      results.push(data);
    } catch (err) {
      errors.push(`${listing.id}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return NextResponse.json({ listings: results, errors });
}
