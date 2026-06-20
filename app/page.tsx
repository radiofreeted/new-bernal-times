"use client";

import { useState } from "react";

const LISTINGS = [
  {
    num: 1,
    title: "New Construction on Elsie, Six Bathrooms",
    address: "116 Elsie St.",
    listed: "$3,995,000",
    sold: "$4,700,000",
    overAsking: "$705,000 over asking",
    beds: 4,
    baths: 6,
    sqft: "2,834",
    yearBuilt: 2018,
    taxes: "$14,200 a year",
    imgUrl: "https://photos.zillowstatic.com/fp/326a23a90ee43a72cae3ec75acef0b52-cc_ft_1536.jpg",
    zillowUrl: "https://www.zillow.com/homedetails/116-Elsie-St-San-Francisco-CA-94110/125164135_zpid/",
    description: `This four-bedroom, six-bathroom home, built in 2018, felt almost aggressively new — the kind of house that arrives on the market looking as though no one has ever opened a cabinet in anger. At 2,834 square feet, it offered the family the space they needed, with a waterfall-edge kitchen island, a built-in espresso machine and a primary suite that Ms. Reyes described as "honestly kind of embarrassing, in a good way." The upstairs office could have served as a nursery. The downstairs bedroom could have been her mother's. A small deck off the kitchen offered a partial view of Bernal Hill. The commute to Mr. Reyes's office in SoMa would have been, with traffic, about twelve minutes. Six bathrooms for a family of four struck Mr. Reyes as "possibly too many bathrooms." Listed at $3,995,000, with annual property taxes of approximately $14,200.`,
    lossNarrative: `They offered $4,200,000. An all-cash buyer, identity unknown, waived inspection and won at $4,700,000. The house was on the market for five days.`,
    votesChoose: 52,
    votesBought: 61,
  },
  {
    num: 2,
    title: "A Fixer on Elsie, Listed Below Three Million",
    address: "25 Elsie St.",
    listed: "$2,995,000",
    sold: "$4,000,000",
    overAsking: "$1,005,000 over asking",
    beds: 3,
    baths: 3,
    sqft: "2,361",
    yearBuilt: 1988,
    taxes: "$11,800 a year",
    imgUrl: "https://photos.zillowstatic.com/fp/58df6dc5851225d1847c8b746292dcb3-cc_ft_1536.jpg",
    zillowUrl: "https://www.zillow.com/homedetails/25-Elsie-St-San-Francisco-CA-94110/15161163_zpid/",
    description: `At 2,361 square feet, this three-bedroom, three-bathroom house from 1988 was the most modestly priced option the family seriously considered — which is to say, it was listed at $2,995,000. The primary bathroom had not been updated since what Ms. Reyes called "a very specific era of tile." The backyard, a south-facing rectangle of overgrown potential, would have required work. The bones were good, said Ms. Carmichael, who noted that the lot size and the light were "two things you can't change." The layout was, in the words of Ms. Reyes, "a little mysterious in the middle." A child named Cora, age 2, was set down in the living room during the tour and immediately located a dead moth. Her parents looked at each other over her head with an expression that longtime house hunters will recognize. Listed at $2,995,000, with annual taxes of approximately $11,800.`,
    lossNarrative: `They offered $3,500,000. There were eleven bids. The house sold for $4,000,000, a million and five thousand dollars over asking, to a buyer Ms. Carmichael described only as "very motivated."`,
    votesChoose: 22,
    votesBought: 18,
  },
  {
    num: 3,
    title: "A 1910 Victorian on Shotwell, With Original Details",
    address: "1497 Shotwell St.",
    listed: "$3,499,000",
    sold: "$4,650,000",
    overAsking: "$1,151,000 over asking",
    beds: 4,
    baths: 4,
    sqft: "2,545",
    yearBuilt: 1910,
    taxes: "$13,100 a year",
    imgUrl: "https://photos.zillowstatic.com/fp/5d5bb1ad15fa89fb7f84c0383d60dbbb-cc_ft_1536.jpg",
    zillowUrl: "https://www.zillow.com/homedetails/1497-Shotwell-St-San-Francisco-CA-94110/15160090_zpid/",
    description: `Built in 1910 and preserving most of its original millwork, this four-bedroom, four-bathroom Victorian on Shotwell Street offered the kind of character that Ms. Carmichael said she "knew they would respond to." Original built-in bookshelves lined the dining room. The claw-foot tub in the upstairs bathroom prompted Ms. Reyes to photograph it and text the image to her mother, who replied with three exclamation points and a prayer-hands emoji. At 2,545 square feet, the house could accommodate Ms. Reyes's parents for extended visits — the ground-floor bedroom was "practically its own apartment," Ms. Carmichael said. Ms. Reyes noted that her grandmother had walked past this house every Sunday on her way to St. Anthony's. "This is the one," she said, in the kitchen, not yet to her husband. The electrical panel, Mr. Reyes was told, "had opinions." Listed at $3,499,000, with annual taxes of approximately $13,100.`,
    lossNarrative: `They offered $3,800,000 and wrote a letter — about Bernal Heights, about their parents, about wanting to stay. The house sold for $4,650,000. The winning buyer, Ms. Carmichael mentioned gently, had also grown up in the neighborhood.`,
    votesChoose: 26,
    votesBought: 21,
  },
];

function PollBar({ label, pct, check }: { label: string; pct: number; check?: "win" | "lose" }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-[13px] font-sans mb-1">
        <span>
          {label}{" "}
          {check === "win" && <span className="text-green-700 font-bold">✓</span>}
          {check === "lose" && <span className="text-red-700">✗</span>}
        </span>
        <span className="text-[#666]">{pct}%</span>
      </div>
      <div className="h-2 bg-[#e2e2e2] w-full">
        <div className="h-2 bg-[#121212]" style={{ width: `${pct}%` }} />
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
  const [chooseRevealed, setChooseRevealed] = useState(false);
  const [boughtRevealed, setBoughtRevealed] = useState(false);
  const [finalRevealed, setFinalRevealed] = useState(false);

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

      <article className="max-w-2xl mx-auto">

        {/* Headline & dek */}
        <p className="text-[11px] uppercase tracking-widest font-sans text-[#666] mt-4 mb-2">
          By DOROTHEA WAINSCOTT-SMYTHE &nbsp;|&nbsp;{" "}
          {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
        <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-3">
          Could They Raise Their Children in the Neighborhood Where They Were Raised?
        </h2>
        <p className="font-fell italic text-xl text-[#444] mb-5 leading-snug border-b border-[#e2e2e2] pb-5">
          With about $4,200,000 to spend, a young Bernal Heights family looked for a four-bedroom home within walking distance of their parents. Here&apos;s what they found.
        </p>

        {/* Origin story */}
        <div className="text-[16px] leading-relaxed text-[#333] space-y-4">
          <p>
            Marcus Reyes (33) and Julia Reyes (31) met at Mission High School, which is not in Bernal Heights but is of it, in the way that certain institutions belong to a neighborhood by loyalty rather than geography. Mr. Reyes was a junior; Ms. Reyes, a sophomore who had recently transferred and was, she said, &ldquo;trying to figure out the bus situation.&rdquo; Mr. Reyes knew the bus situation. They have been together, in one form or another, ever since.
          </p>
          <p>
            Both grew up on the eastern slope of the hill — Mr. Reyes on Precita Avenue, Ms. Reyes on Eugenia Street, four blocks apart, their childhoods running parallel without quite touching. They left for college, returned to the city within a year of each other, and eventually landed in a two-bedroom rental on Andover Street, two blocks from Mr. Reyes&apos;s parents and four from Ms. Reyes&apos;s. Their dog, a basset hound named Cortez, occupies most of the couch.
          </p>
          <p>
            Last spring, with their daughter Cora (2) and a second baby on the way, they decided it was time. &ldquo;Our parents are here,&rdquo; Ms. Reyes said. &ldquo;Cora&apos;s godparents are here. We grew up here. We just assumed we&apos;d figure it out.&rdquo; She paused. &ldquo;We had not done the math.&rdquo;
          </p>
        </div>

        {/* Reader solicitation */}
        <div className="border border-[#e2e2e2] bg-[#f7f4ef] p-4 my-6 text-[12px] font-sans text-[#555]">
          <strong className="text-[#121212]">Did you recently buy a home in the Bay Area?</strong>{" "}
          We want to hear from you. Email us at{" "}
          <a href="mailto:theforager@bernaltimes.local" className="underline">theforager@bernaltimes.local</a>.
          {" "}Want The Forager delivered to your inbox every week?{" "}
          <a href="#" className="underline">Sign up here.</a>
        </div>

        {/* Criteria */}
        <div className="text-[16px] leading-relaxed text-[#333] space-y-4 mb-8">
          <p>
            Pre-approved for a jumbo mortgage and drawing on $800,000 in savings accumulated over six years of two-income San Francisco renting — &ldquo;a sentence,&rdquo; Mr. Reyes noted, &ldquo;that would sound insane anywhere else&rdquo; — the couple set a budget of around $4,200,000 and confined their search to Bernal Heights proper. Must-haves included four bedrooms (one for Cora, one for the new baby, one for visiting grandparents, one for themselves), a yard generous enough for Cortez to stage his daily dramatic collapses, and proximity to the J-Church line for Ms. Reyes&apos;s commute to the Castro.
          </p>
          <p>
            They were represented by Sandra Carmichael of Vanguard Properties, who has been selling homes in Bernal Heights for nineteen years. &ldquo;I knew they would only want to see houses that had some character,&rdquo; Ms. Carmichael said. &ldquo;And I knew they understood the neighborhood. That part was easy.&rdquo;
          </p>
          <p>Among their options:</p>
        </div>

        {/* The three listings */}
        {LISTINGS.map((listing) => (
          <div key={listing.num} className="mb-10 border-t-2 border-[#121212] pt-6">
            <p className="text-[11px] uppercase tracking-widest font-sans font-bold mb-1">No. {listing.num}</p>
            <h3 className="font-playfair font-bold text-2xl mb-4">{listing.title}</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={listing.imgUrl} alt={listing.address} className="w-full object-cover h-72 mb-1" />
            <p className="text-[11px] text-[#888] font-sans italic mb-4">
              {listing.address}, Bernal Heights.{" "}
              <a href={listing.zillowUrl} target="_blank" rel="noopener noreferrer" className="underline">View on Zillow.</a>
            </p>
            <p className="text-[16px] leading-relaxed text-[#333]">{listing.description}</p>
          </div>
        ))}

        {/* Combined poll block */}
        <div className="border-t-2 border-[#121212] pt-6 space-y-6">

          {/* Poll 1: Which would you choose */}
          <div className="bg-[#f7f4ef] border border-[#e2e2e2] p-5">
            <p className="text-[11px] uppercase tracking-widest font-sans font-bold mb-4">Which Would You Choose?</p>
            {chooseRevealed ? (
              LISTINGS.map((l) => (
                <PollBar key={l.num} label={`No. ${l.num}: ${l.title}`} pct={l.votesChoose} />
              ))
            ) : (
              <button
                onClick={() => setChooseRevealed(true)}
                className="w-full bg-[#121212] text-white text-[11px] uppercase tracking-widest font-sans py-3 hover:bg-[#333] transition-colors cursor-pointer"
              >
                See reader votes
              </button>
            )}
          </div>

          {/* Poll 2: Which did they buy */}
          <div className="bg-[#f7f4ef] border border-[#e2e2e2] p-5">
            <p className="text-[11px] uppercase tracking-widest font-sans font-bold mb-4">Which Did They Buy?</p>
            {boughtRevealed ? (
              <>
                {LISTINGS.map((l) => (
                  <PollBar key={l.num} label={`No. ${l.num}: ${l.title}`} pct={l.votesBought} />
                ))}
              </>
            ) : (
              <button
                onClick={() => setBoughtRevealed(true)}
                className="w-full border border-[#121212] text-[#121212] text-[11px] uppercase tracking-widest font-sans py-3 hover:bg-[#121212] hover:text-white transition-colors cursor-pointer"
              >
                See reader votes
              </button>
            )}
          </div>
        </div>

        {/* The reveal */}
        <div className="mt-8 border-t-4 border-[#121212] pt-6">
          <p className="text-[11px] uppercase tracking-widest font-sans font-bold mb-3">Their Home:</p>
          {!finalRevealed ? (
            <button
              onClick={() => setFinalRevealed(true)}
              className="w-full bg-[#121212] text-white font-playfair text-xl py-5 hover:bg-[#333] transition-colors cursor-pointer"
            >
              Which did they choose?
            </button>
          ) : (
            <div className="space-y-4 text-[16px] leading-relaxed text-[#333]">
              <h3 className="font-playfair font-bold text-3xl">None of the Above.</h3>

              {LISTINGS.map((l) => (
                <div key={l.num} className="border-l-2 border-[#e2e2e2] pl-4 py-1">
                  <p className="text-[11px] uppercase tracking-widest font-sans font-bold text-[#666] mb-1">
                    No. {l.num} — Listed {l.listed} &nbsp;·&nbsp; <span className="text-red-700">Sold {l.sold} ({l.overAsking})</span>
                  </p>
                  <p>{l.lossNarrative}</p>
                </div>
              ))}

              <p>
                &ldquo;For one reason or another,&rdquo; Ms. Carmichael said, &ldquo;a deal can fall apart, so there is always a chance something will come back to us.&rdquo;
              </p>
              <p>
                Marcus and Julia Reyes are still on Andover Street. The baby arrived in October — a boy, Leo (0) — and they have converted the dining room into a nursery. Cortez has taken possession of the vacated Pack &lsquo;n Play. Ms. Carmichael sends listings when she finds them. &ldquo;The market,&rdquo; she has been saying, &ldquo;is very active right now.&rdquo;
              </p>
              <p>
                &ldquo;We thought being from here would count for something,&rdquo; Ms. Reyes said. Outside, a dog barked on the street below — the particular bark of a Bernal Heights dog, lazy and self-possessed, the bark of a dog that lives somewhere.
              </p>
              <p>&ldquo;It didn&apos;t.&rdquo;</p>
            </div>
          )}
        </div>

        {/* Email signoff */}
        <div className="border-t border-[#e2e2e2] mt-10 pt-4 text-[12px] font-sans text-[#888] space-y-1">
          <p>E-mail: <a href="mailto:theforager@bernaltimes.local" className="underline">theforager@bernaltimes.local</a></p>
          <p className="mt-3 italic">This is a work of parody. The Reyes family is fictional. The listing and sale prices are real.</p>
        </div>

      </article>

      <footer className="border-t-2 border-[#121212] mt-10 py-4 text-center text-[10px] text-[#888] uppercase tracking-widest font-sans">
        © {new Date().getFullYear()} The New Bernal Times &nbsp;·&nbsp; Not affiliated with The New York Times &nbsp;·&nbsp; Parody
      </footer>
    </div>
  );
}
