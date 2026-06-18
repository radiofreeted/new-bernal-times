import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The New Bernal Times — The Forager",
};

const LISTINGS = [
  {
    id: "116-elsie",
    address: "116 Elsie St, San Francisco, CA 94110",
    price: "$4,884,600",
    beds: "4 bd",
    baths: "6 ba",
    sqft: "2,834 sqft",
    yearBuilt: "2018",
    imgUrl:
      "https://photos.zillowstatic.com/fp/326a23a90ee43a72cae3ec75acef0b52-cc_ft_1536.jpg",
    zillowUrl:
      "https://www.zillow.com/homedetails/116-Elsie-St-San-Francisco-CA-94110/125164135_zpid/",
    headline: "Victorians at the Gate: 116 Elsie St. Beckons With Unmatched Charm",
    subhead: "In a neighborhood where fog meets ambition, a storied home finds its moment",
    byline: "By CORNELIUS P. HARRINGTON III",
    body: "Built in 2018 and stretching across 2,834 square feet, this six-bathroom marvel on Elsie Street represents something rare in Bernal Heights: ambition made manifest in drywall and reclaimed wood. Four bedrooms await the discerning buyer, each one whispering of dinner parties not yet thrown, of children not yet born, of a Peloton that will absolutely be used this time.",
  },
  {
    id: "1497-shotwell",
    address: "1497 Shotwell St, San Francisco, CA 94110",
    price: "$4,661,500",
    beds: "4 bd",
    baths: "4 ba",
    sqft: "2,545 sqft",
    yearBuilt: "1910",
    imgUrl:
      "https://photos.zillowstatic.com/fp/5d5bb1ad15fa89fb7f84c0383d60dbbb-cc_ft_1536.jpg",
    zillowUrl:
      "https://www.zillow.com/homedetails/1497-Shotwell-St-San-Francisco-CA-94110/15160090_zpid/",
    headline: "Shotwell Stunner Listed; Neighbors Reportedly 'Cautiously Optimistic'",
    subhead: "A 1910 classic enters the market with all four walls intact",
    byline: "By DOROTHEA WAINSCOTT-SMYTHE",
    body: "Originally constructed in 1910, this Shotwell Street property has survived two world wars, the Summer of Love, and the dot-com bust — and it shows, in the best possible way. Four bedrooms, four bathrooms, and 2,545 square feet of what agents are calling 'historic character' and what buyers will call 'their problem now.'",
  },
  {
    id: "25-elsie",
    address: "25 Elsie St, San Francisco, CA 94110",
    price: "$4,000,000",
    beds: "3 bd",
    baths: "3 ba",
    sqft: "2,361 sqft",
    yearBuilt: "1988",
    imgUrl:
      "https://photos.zillowstatic.com/fp/58df6dc5851225d1847c8b746292dcb3-cc_ft_1536.jpg",
    zillowUrl:
      "https://www.zillow.com/homedetails/25-Elsie-St-San-Francisco-CA-94110/15161163_zpid/",
    headline: "25 Elsie Enters Market; Block Braces for Wave of Open-House Visitors",
    subhead: "Three bedrooms, three baths, and a price tag that requires sitting down first",
    byline: "By PERCIVAL DUNDAS-HEWLITT",
    body: "Listed at an even $4,000,000 — a number that real estate professionals describe as 'a conversation starter' — this 1988-built residence on Elsie Street offers 2,361 square feet of living space and the ineffable satisfaction of being able to say you live on Elsie Street. Three bedrooms, three bathrooms, and presumably a drawer full of takeout menus.",
  },
];

function formatDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const [lead, ...rest] = LISTINGS;

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Masthead */}
      <header className="border-b-4 border-[#121212] pt-5 pb-2 mb-1">
        <div className="flex justify-between items-end text-[11px] font-sans text-[#666] mb-2 uppercase tracking-widest">
          <span>{formatDate()}</span>
          <span>Vol. I &nbsp;·&nbsp; No. 1</span>
          <span>bernaltimes.local</span>
        </div>
        <h1 className="font-blackletter text-center text-5xl md:text-7xl leading-none tracking-tight text-[#121212] py-2">
          The New Bernal Times
        </h1>
        <p className="text-center font-fell italic text-sm text-[#555] border-t border-[#e2e2e2] pt-2 mt-1">
          &ldquo;All the Real Estate News That&apos;s Fit to Print&rdquo; &nbsp;·&nbsp; Bernal Heights, San Francisco
        </p>
      </header>

      {/* Section label */}
      <div className="flex items-center gap-3 my-3">
        <div className="flex-1 border-t border-[#121212]" />
        <span className="text-[11px] uppercase tracking-widest font-sans font-bold px-1">
          The Forager &mdash; Property Intelligence
        </span>
        <div className="flex-1 border-t border-[#121212]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Lead story */}
        <div className="md:col-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lead.imgUrl}
            alt={lead.address}
            className="w-full object-cover h-64 mb-3"
          />
          <span className="text-[10px] uppercase tracking-widest text-[#666] font-sans font-semibold">
            For Sale
          </span>
          <h2 className="font-playfair font-bold text-3xl leading-tight mt-1 mb-1">
            {lead.headline}
          </h2>
          <p className="font-fell italic text-lg text-[#444] mb-2 leading-snug">
            {lead.subhead}
          </p>
          <p className="text-[11px] text-[#666] uppercase tracking-widest font-sans mb-2">
            {lead.byline}
          </p>
          <div className="flex gap-3 text-xs text-[#555] font-sans mb-3">
            <span className="font-bold text-sm text-[#121212]">{lead.price}</span>
            <span>{lead.beds}</span>
            <span>{lead.baths}</span>
            <span>{lead.sqft}</span>
            <span>Built {lead.yearBuilt}</span>
          </div>
          <p className="text-[15px] leading-relaxed text-[#333] mb-3">{lead.body}</p>
          <a
            href={lead.zillowUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-widest font-sans text-[#326891] hover:underline"
          >
            Full Listing on Zillow →
          </a>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {rest.map((listing) => (
            <article key={listing.id} className="border-l border-[#e2e2e2] pl-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={listing.imgUrl}
                alt={listing.address}
                className="w-full object-cover h-40 mb-3"
              />
              <span className="text-[10px] uppercase tracking-widest text-[#666] font-sans font-semibold">
                For Sale
              </span>
              <h2 className="font-playfair font-bold text-xl leading-tight mt-1 mb-1">
                {listing.headline}
              </h2>
              <p className="text-[11px] text-[#666] uppercase tracking-widest font-sans mb-2">
                {listing.byline}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-[#555] font-sans mb-2">
                <span className="font-bold text-sm text-[#121212]">{listing.price}</span>
                <span>{listing.beds}</span>
                <span>{listing.baths}</span>
                <span>{listing.sqft}</span>
              </div>
              <p className="text-[13px] leading-relaxed text-[#333] mb-3 line-clamp-4">
                {listing.body}
              </p>
              <a
                href={listing.zillowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-widest font-sans text-[#326891] hover:underline"
              >
                Full Listing on Zillow →
              </a>
            </article>
          ))}
        </div>
      </div>

      <footer className="border-t-2 border-[#121212] py-4 text-center text-[10px] text-[#888] uppercase tracking-widest font-sans">
        © {new Date().getFullYear()} The New Bernal Times &nbsp;·&nbsp; Not affiliated with The New York Times &nbsp;·&nbsp; Parody
      </footer>
    </div>
  );
}
