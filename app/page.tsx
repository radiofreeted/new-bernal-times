"use client";

import { useState } from "react";

const LISTINGS = [
  {
    id: "116-elsie",
    address: "116 Elsie St.",
    neighborhood: "Bernal Heights, San Francisco",
    listed: "$3,995,000",
    sold: "$4,700,000",
    overAsking: "$705,000 over asking",
    beds: 4,
    baths: 6,
    sqft: "2,834",
    yearBuilt: 2018,
    imgUrl:
      "https://photos.zillowstatic.com/fp/326a23a90ee43a72cae3ec75acef0b52-cc_ft_1536.jpg",
    zillowUrl:
      "https://www.zillow.com/homedetails/116-Elsie-St-San-Francisco-CA-94110/125164135_zpid/",
    description:
      "A four-bedroom, six-bathroom home built in 2018 with a waterfall kitchen island and views of the hill. Clean lines. Good light. An espresso machine built into the cabinetry.",
    reaction:
      "Marcus and Julia offered $4,200,000. It felt, Marcus said, \"insane to type.\" An all-cash buyer with a clean offer letter beat them by half a million dollars. The house was on the market for five days.",
  },
  {
    id: "25-elsie",
    address: "25 Elsie St.",
    neighborhood: "Bernal Heights, San Francisco",
    listed: "$2,995,000",
    sold: "$4,000,000",
    overAsking: "$1,005,000 over asking",
    beds: 3,
    baths: 3,
    sqft: "2,361",
    yearBuilt: 1988,
    imgUrl:
      "https://photos.zillowstatic.com/fp/58df6dc5851225d1847c8b746292dcb3-cc_ft_1536.jpg",
    zillowUrl:
      "https://www.zillow.com/homedetails/25-Elsie-St-San-Francisco-CA-94110/15161163_zpid/",
    description:
      "A three-bedroom, three-bathroom home from 1988. The master bathroom hadn't been updated since the Clinton administration. The backyard was a project. The list price started with a two.",
    reaction:
      "\"It's listed under three million,\" Julia said on the drive over. \"That's almost reasonable.\" There were eleven bids. They were not the highest. The house sold for $4,000,000 — a million and five thousand dollars over asking.",
  },
  {
    id: "1497-shotwell",
    address: "1497 Shotwell St.",
    neighborhood: "Bernal Heights, San Francisco",
    listed: "$3,499,000",
    sold: "$4,650,000",
    overAsking: "$1,151,000 over asking",
    beds: 4,
    baths: 4,
    sqft: "2,545",
    yearBuilt: 1910,
    imgUrl:
      "https://photos.zillowstatic.com/fp/5d5bb1ad15fa89fb7f84c0383d60dbbb-cc_ft_1536.jpg",
    zillowUrl:
      "https://www.zillow.com/homedetails/1497-Shotwell-St-San-Francisco-CA-94110/15160090_zpid/",
    description:
      "A four-bedroom, four-bathroom Victorian built in 1910, with original built-ins and a claw-foot tub. Julia's grandmother walked past this house every Sunday on her way to St. Anthony's. \"This is the one,\" Julia said.",
    reaction:
      "They offered $3,800,000 and wrote a letter — about Bernal Heights, about their parents, about wanting to stay. The house sold for $4,650,000. The winning buyer had also grown up in the neighborhood. This did not help.",
  },
];

function QuizCard({ listing, index }: { listing: typeof LISTINGS[0]; index: number }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="my-10 border-t border-[#e2e2e2] pt-8">
      <p className="text-[11px] uppercase tracking-widest font-sans text-[#666] mb-3">
        Home {index + 1} of 3
      </p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={listing.imgUrl}
        alt={listing.address}
        className="w-full object-cover h-72 md:h-96"
      />
      <p className="text-[11px] text-[#888] font-sans italic mt-1 mb-5">
        {listing.address}, {listing.neighborhood}. <a href={listing.zillowUrl} target="_blank" rel="noopener noreferrer" className="underline">View on Zillow.</a>
      </p>

      {/* Specs */}
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-[13px] font-sans text-[#444] mb-4 border-l-2 border-[#121212] pl-4">
        <span>{listing.beds} bedrooms</span>
        <span>{listing.baths} bathrooms</span>
        <span>{listing.sqft} sq ft</span>
        <span>Built {listing.yearBuilt}</span>
      </div>

      <p className="text-[16px] leading-relaxed text-[#333] mb-6">{listing.description}</p>

      {/* Quiz */}
      <div className="bg-[#f7f4ef] border border-[#e2e2e2] p-5">
        <div className="flex justify-between items-baseline mb-4">
          <div>
            <p className="text-[11px] uppercase tracking-widest font-sans text-[#666]">Listed at</p>
            <p className="font-playfair font-bold text-2xl">{listing.listed}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-widest font-sans text-[#666]">Sold for</p>
            {revealed ? (
              <div>
                <p className="font-playfair font-bold text-2xl text-red-700">{listing.sold}</p>
                <p className="text-[11px] font-sans text-red-700 font-semibold mt-0.5">↑ {listing.overAsking}</p>
              </div>
            ) : (
              <button
                onClick={() => setRevealed(true)}
                className="font-playfair font-bold text-lg text-[#326891] underline cursor-pointer hover:text-[#121212] transition-colors"
              >
                What do you think?
              </button>
            )}
          </div>
        </div>

        {revealed && (
          <p className="text-[14px] leading-relaxed text-[#444] border-t border-[#e2e2e2] pt-4 mt-2">
            {listing.reaction}
          </p>
        )}

        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="w-full bg-[#121212] text-white text-[12px] uppercase tracking-widest font-sans py-3 hover:bg-[#333] transition-colors cursor-pointer"
          >
            Reveal sale price
          </button>
        )}
      </div>
    </div>
  );
}

function formatDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4">
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
          The Forager
        </span>
        <div className="flex-1 border-t border-[#121212]" />
      </div>

      {/* Article */}
      <article className="max-w-2xl mx-auto">
        <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mt-4 mb-3">
          They Grew Up Here. Now They Can&apos;t Afford to Stay.
        </h2>
        <p className="font-fell italic text-xl text-[#444] mb-4 leading-snug">
          A Bernal Heights family searches for a home in the neighborhood where they were raised — and finds that love of place is no longer a competitive advantage.
        </p>
        <div className="flex items-center gap-4 border-t border-b border-[#e2e2e2] py-2 mb-6">
          <p className="text-[11px] text-[#666] uppercase tracking-widest font-sans">
            By DOROTHEA WAINSCOTT-SMYTHE
          </p>
          <p className="text-[11px] text-[#666] font-sans">
            {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="text-[16px] leading-relaxed text-[#333] space-y-5">
          <p>
            Marcus and Julia Reyes have spent their whole lives on the eastern slope of Bernal Heights. Marcus grew up on Precita Avenue. Julia on Eugenia. They met at Mission High, left for college, came back — as people from Bernal tend to do — and have been renting a two-bedroom on Andover Street for six years, two blocks from Marcus&apos;s parents and four blocks from Julia&apos;s.
          </p>
          <p>
            Last spring, with their daughter Cora turning two and a second baby on the way, they decided it was time to buy. They had $800,000 saved. They were pre-approved for a jumbo loan. Their agent, Sandra, a patient woman who has been selling homes in Bernal Heights for nineteen years, told them the market was &ldquo;active.&rdquo;
          </p>
          <p>
            Below are the three homes they considered. For each one, we&apos;ve listed the asking price. See if you can guess what it actually sold for.
          </p>
        </div>

        {LISTINGS.map((listing, i) => (
          <QuizCard key={listing.id} listing={listing} index={i} />
        ))}

        <div className="text-[16px] leading-relaxed text-[#333] space-y-5 mt-4">
          <p>
            Marcus and Julia are still on Andover Street. The baby arrived in October — a boy, they named him Leo — and they have converted the dining room into a nursery. Sandra sends them listings when something comes up. The market, she says, remains active.
          </p>
          <p>
            &ldquo;We thought being from here would count for something,&rdquo; Julia said. Outside, a dog barked on the street below — the specific bark of a Bernal Heights dog, lazy and unhurried, the bark of a dog that lives somewhere.
          </p>
          <p>&ldquo;It didn&apos;t.&rdquo;</p>
        </div>

        <div className="border-t border-[#e2e2e2] mt-10 pt-4 text-[11px] text-[#888] font-sans">
          <p><em>This is a work of parody. The Reyes family is fictional. The listing and sale prices are real.</em></p>
        </div>
      </article>

      <footer className="border-t-2 border-[#121212] mt-10 py-4 text-center text-[10px] text-[#888] uppercase tracking-widest font-sans">
        © {new Date().getFullYear()} The New Bernal Times &nbsp;·&nbsp; Not affiliated with The New York Times &nbsp;·&nbsp; Parody
      </footer>
    </div>
  );
}
