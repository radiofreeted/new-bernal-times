"use client";

import { useEffect, useState } from "react";

interface Listing {
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

const HEADLINES: Record<string, { headline: string; subhead: string; byline: string }> = {
  "116-elsie": {
    headline: "Victorians at the Gate: 116 Elsie St. Beckons With Unmatched Charm",
    subhead: "In a neighborhood where fog meets ambition, a storied home finds its moment",
    byline: "By CORNELIUS P. HARRINGTON III",
  },
  "1497-shotwell": {
    headline: "Shotwell Stunner Listed; Neighbors Reportedly 'Cautiously Optimistic'",
    subhead: "Inspectors confirm: walls are still attached to house",
    byline: "By DOROTHEA WAINSCOTT-SMYTHE",
  },
  "25-elsie": {
    headline: "25 Elsie Enters Market; Block Braces for Wave of Open-House Visitors",
    subhead: "Property features door, roof, and assorted rooms — insiders say more detail forthcoming",
    byline: "By PERCIVAL DUNDAS-HEWLITT",
  },
};

function formatDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function ListingCard({ listing, index }: { listing: Listing; index: number }) {
  const meta = HEADLINES[listing.id] ?? {
    headline: listing.address,
    subhead: "",
    byline: "By STAFF CORRESPONDENT",
  };

  const isLead = index === 0;

  return (
    <article className={`${index > 0 ? "border-l border-[#e2e2e2] pl-5" : ""}`}>
      {listing.imgUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={listing.imgUrl}
          alt={listing.address}
          className={`w-full object-cover mb-3 ${isLead ? "h-56" : "h-40"}`}
        />
      ) : (
        <div
          className={`w-full bg-[#f0ede8] flex items-center justify-center mb-3 text-[#999] text-sm italic ${isLead ? "h-56" : "h-40"}`}
        >
          Photograph Unavailable
        </div>
      )}

      {listing.status && (
        <span className="text-[10px] uppercase tracking-widest text-[#666] font-sans font-semibold">
          {listing.status}
        </span>
      )}

      <h2
        className={`font-playfair font-bold leading-tight mt-1 mb-1 ${
          isLead ? "text-3xl" : "text-xl"
        }`}
      >
        {meta.headline}
      </h2>

      {isLead && meta.subhead && (
        <p className="font-fell italic text-lg text-[#444] mb-2 leading-snug">
          {meta.subhead}
        </p>
      )}

      <p className="text-[11px] text-[#666] uppercase tracking-widest font-sans mb-2">
        {meta.byline}
      </p>

      <div className="flex flex-wrap gap-2 text-xs text-[#555] mb-2 font-sans">
        {listing.price && (
          <span className="font-bold text-sm text-[#121212]">{listing.price}</span>
        )}
        {listing.beds && <span>{listing.beds}</span>}
        {listing.baths && <span>{listing.baths}</span>}
        {listing.sqft && <span>{listing.sqft}</span>}
        {listing.yearBuilt && <span>Built {listing.yearBuilt}</span>}
        {listing.lotSize && <span>Lot: {listing.lotSize}</span>}
      </div>

      {listing.description && (
        <p className="text-[14px] leading-relaxed text-[#333] mb-3 line-clamp-4">
          {listing.description}
        </p>
      )}

      <a
        href={listing.zillowUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] uppercase tracking-widest font-sans text-[#326891] hover:underline"
      >
        Full Listing on Zillow →
      </a>
    </article>
  );
}

function ErrorNote({ errors }: { errors: string[] }) {
  if (!errors.length) return null;
  return (
    <div className="bg-[#fff8e1] border border-[#f0c040] p-3 my-4 text-sm font-sans">
      <strong>Scraping notes:</strong>
      <ul className="list-disc list-inside mt-1 text-[#555]">
        {errors.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/listings")
      .then((r) => r.json())
      .then((data) => {
        setListings(data.listings ?? []);
        setErrors(data.errors ?? []);
      })
      .catch((e: Error) => setFetchError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const [lead, ...rest] = listings;

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

      {loading && (
        <div className="text-center py-20 font-fell italic text-xl text-[#888]">
          Dispatching our correspondents to Zillow&hellip;
        </div>
      )}

      {fetchError && (
        <div className="text-center py-10 text-red-700 font-sans text-sm">
          Error: {fetchError}
        </div>
      )}

      {!loading && !fetchError && (
        <>
          <ErrorNote errors={errors} />

          {listings.length === 0 ? (
            <div className="text-center py-20 font-fell italic text-xl text-[#888]">
              No listings returned — check your <code>SCRAPINGBEE_API_KEY</code>.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {lead && (
                <div className="md:col-span-2">
                  <ListingCard listing={lead} index={0} />
                </div>
              )}
              <div className="flex flex-col gap-6">
                {rest.map((l, i) => (
                  <ListingCard key={l.id} listing={l} index={i + 1} />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Footer */}
      <footer className="border-t-2 border-[#121212] py-4 text-center text-[10px] text-[#888] uppercase tracking-widest font-sans">
        © {new Date().getFullYear()} The New Bernal Times &nbsp;·&nbsp; Not affiliated with The New York Times &nbsp;·&nbsp; Parody
      </footer>
    </div>
  );
}
