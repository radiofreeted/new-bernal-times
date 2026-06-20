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
    lossNarrative: `They offered $4,200,000 — a number Mr. Reyes described as "genuinely upsetting to type" — and felt, briefly, good about it. The house received nine offers. The winning bid was $4,700,000, all cash, no contingencies, no inspection, no apparent concern about any of it. The buyer's agent did not write a letter. Ms. Carmichael, to her credit, did not say "I told you so." She said "the market is very competitive right now," which is the same thing.`,
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
    lossNarrative: `The list price started with a two. This felt meaningful. They toured on a Sunday, made an offer by Tuesday, and were informed by Thursday that there had been eleven bids and they had not been among the interesting ones. The house sold for $4,000,000 — a million and five thousand dollars over a number that already had three million in it — to a buyer Ms. Carmichael described, with characteristic diplomacy, as "well-positioned." Mr. Reyes asked what that meant. Ms. Carmichael said it meant cash.`,
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
    description: `Built in 1910 and preserving most of its original millwork, this four-bedroom, four-bathroom Victorian on Shotwell Street offered the kind of character that Ms. Carmichael said she "knew they would respond to." Original built-in bookshelves lined the dining room. The claw-foot tub in the upstairs bathroom prompted Ms. Reyes to photograph it and text the image to her mother, who replied with three exclamation points and a prayer-hands emoji. At 2,545 square feet, the house could accommodate Ms. Reyes's parents for extended visits — the ground-floor bedroom was "practically its own apartment," Ms. Carmichael said. Ms. Reyes noted that her grandmother had walked past this house every Sunday on her way to St. Kevin's. "This is the one," she said, in the kitchen, not yet to her husband. The electrical panel, Mr. Reyes was told, "had opinions." The sellers, a couple who have lived in the house for twenty-two years, are longtime members of the Bernal Heights Democratic Club, and have been vocal, on the record, about their belief that housing should not function as an investment vehicle or a store of intergenerational wealth. They listed at $3,499,000. Annual property taxes: approximately $13,100.`,
    lossNarrative: `They offered $3,800,000 and, at Ms. Carmichael's suggestion, wrote a letter. It was a good letter. It mentioned the hill, the grandparents, St. Kevin's, Cortez the basset hound, the lottery ticket purchased at the Valero on Cortland. Ms. Reyes cried a little writing it, which she had not planned to do. The sellers received fourteen offers. After reviewing them, the sellers — the same couple who have spoken at three Bernal Heights Democratic Club meetings about the corrosive effect of treating housing as a commodity — accepted the highest one. The house sold for $4,650,000, $1,151,000 over asking. In a statement relayed through Ms. Carmichael, the sellers said they were "grateful for the community's support over the years" and were "looking forward to the next chapter." They did not comment on the commodity question. The winning buyer had also grown up in the neighborhood. His parents had been active in designating the Bernal Heights Special Use District — the zoning protections widely credited with preserving the neighborhood's character, its independent businesses, its architectural integrity, and, not incidentally, its property values. Upon hearing of the sale, the buyer's parents reportedly expressed relief that gentrifiers weren't moving in. The buyer works in artificial intelligence. He did not write a letter. He did not need to. "Letters are lovely," Ms. Carmichael said, later, carefully. "They don't appraise."`,
  },
];

interface PollResults {
  percentages: number[];
  totals: number[];
  sum: number;
  yourVote?: number;
}

function PollBar({ label, pct, votes, highlight }: { label: string; pct: number; votes: number; highlight?: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-[13px] font-sans mb-1">
        <span className={highlight ? "font-bold" : ""}>{label}</span>
        <span className="text-[#666]">{pct}% <span className="text-[#aaa] text-[11px]">({votes})</span></span>
      </div>
      <div className="h-2.5 bg-[#e2e2e2] w-full">
        <div
          className={`h-2.5 transition-all duration-700 ${highlight ? "bg-[#121212]" : "bg-[#999]"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Poll({
  poll,
  question,
  results,
  onVote,
  voting,
}: {
  poll: string;
  question: string;
  results: PollResults | null;
  onVote: (poll: string, option: number) => void;
  voting: boolean;
}) {
  return (
    <div className="bg-[#f7f4ef] border border-[#e2e2e2] p-5">
      <p className="text-[11px] uppercase tracking-widest font-sans font-bold mb-4">{question}</p>

      {results ? (
        <div>
          {LISTINGS.map((l, i) => (
            <PollBar
              key={l.num}
              label={`No. ${l.num}: ${l.title}`}
              pct={results.percentages[i]}
              votes={results.totals[i]}
              highlight={results.yourVote === l.num}
            />
          ))}
          <p className="text-[11px] text-[#888] font-sans mt-2">{results.sum} {results.sum === 1 ? "vote" : "votes"} total</p>
        </div>
      ) : (
        <div className="space-y-2">
          {LISTINGS.map((l) => (
            <button
              key={l.num}
              onClick={() => onVote(poll, l.num)}
              disabled={voting}
              className="w-full text-left border border-[#ccc] bg-white text-[13px] font-sans px-4 py-3 hover:border-[#121212] hover:bg-[#f0ede8] transition-colors cursor-pointer disabled:opacity-50"
            >
              <span className="font-bold">No. {l.num}</span> — {l.title}
            </button>
          ))}
        </div>
      )}
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
  const [chooseResults, setChooseResults] = useState<PollResults | null>(null);
  const [boughtResults, setBoughtResults] = useState<PollResults | null>(null);
  const [voting, setVoting] = useState(false);
  const finalRevealed = chooseResults !== null && boughtResults !== null;
  const [voteError, setVoteError] = useState<string | null>(null);

  async function handleVote(poll: string, option: number) {
    setVoting(true);
    setVoteError(null);
    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ poll, option }),
      });
      const data = await res.json();
      if (!res.ok) {
        setVoteError(data.detail ?? data.error ?? "Vote failed");
        return;
      }
      if (poll === "choose") setChooseResults(data);
      else setBoughtResults(data);
    } catch (e) {
      setVoteError(e instanceof Error ? e.message : "Network error");
    } finally {
      setVoting(false);
    }
  }

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
          After winning the California Lottery, a young Bernal Heights family tried to buy a home in the neighborhood where they grew up. Here&apos;s what happened.
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
            The decision to buy was accelerated, in February, by an unexpected development: Mr. Reyes won $2,800,000 in the California Lottery. A Powerball ticket purchased at the Valero on Cortland, selected using Cora&apos;s birthday and a number Mr. Reyes described as &ldquo;just a feeling.&rdquo; After taxes, the family cleared approximately $1,900,000 — enough, combined with their existing savings and a pre-approved jumbo loan, to enter the Bernal Heights market as serious buyers. &ldquo;We won the lottery,&rdquo; Ms. Reyes said. &ldquo;Literally. We won the lottery.&rdquo; She let that sit for a moment. &ldquo;And we still weren&apos;t sure it would be enough.&rdquo; It was not enough.
          </p>
        </div>

        {/* Reader solicitation */}
        <div className="border border-[#e2e2e2] bg-[#f7f4ef] p-4 my-6 text-[12px] font-sans text-[#555]">
          <strong className="text-[#121212]">Did you recently buy a home in the Bay Area?</strong>{" "}
          We want to hear from you. Email us at{" "}
          <a href="mailto:theforager@bernaltimes.local" className="underline">theforager@bernaltimes.local</a>.{" "}
          Want The Forager delivered to your inbox every week?{" "}
          <a href="#" className="underline">Sign up here.</a>
        </div>

        {/* Criteria */}
        <div className="text-[16px] leading-relaxed text-[#333] space-y-4 mb-8">
          <p>
            Between the lottery winnings, their savings, and a jumbo mortgage for which they were pre-approved by a lender who did not visibly flinch, the couple assembled a budget of approximately $4,200,000 and confined their search to Bernal Heights proper. Must-haves included four bedrooms, a yard generous enough for Cortez to stage his daily dramatic collapses, and proximity to the J-Church line for Ms. Reyes&apos;s commute to the Castro.
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

        {/* Polls */}
        <div className="border-t-2 border-[#121212] pt-6 space-y-4">
        {voteError && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-[12px] font-sans p-3">
            <strong>Voting error:</strong> {voteError}
          </div>
        )}
          <Poll
            poll="choose"
            question="Which Would You Choose?"
            results={chooseResults}
            onVote={handleVote}
            voting={voting}
          />
          <Poll
            poll="bought"
            question="Which Do You Think They Bought?"
            results={boughtResults}
            onVote={handleVote}
            voting={voting}
          />
        </div>

        {/* The reveal */}
        <div className="mt-8 border-t-4 border-[#121212] pt-6">
          <p className="text-[11px] uppercase tracking-widest font-sans font-bold mb-3">Their Home:</p>
          {!finalRevealed ? (
            <p className="font-fell italic text-lg text-[#888]">Vote in both polls above to see what happened.</p>
          ) : (
            <div className="space-y-4 text-[16px] leading-relaxed text-[#333]">
              <h3 className="font-playfair font-bold text-3xl">None of the Above. Not Even Close.</h3>
              {LISTINGS.map((l) => (
                <div key={l.num} className="border-l-2 border-[#e2e2e2] pl-4 py-1">
                  <p className="text-[11px] uppercase tracking-widest font-sans font-bold text-[#666] mb-1">
                    No. {l.num} — Listed {l.listed} &nbsp;·&nbsp; <span className="text-red-700">Sold {l.sold} ({l.overAsking})</span>
                  </p>
                  <p>{l.lossNarrative}</p>
                </div>
              ))}
              <p>
                Ms. Carmichael remains optimistic, which is either her greatest professional asset or a diagnosable condition. &ldquo;For one reason or another,&rdquo; she said, &ldquo;a deal can fall apart. There is always a chance something comes back to us.&rdquo; She has been saying this since March. It is now November.
              </p>
              <p>
                Marcus and Julia Reyes are still on Andover Street. The baby arrived in October — a boy, Leo (0) — and they have converted the dining room into a nursery. Cora has been told she is &ldquo;getting a roommate.&rdquo; Cortez has claimed the vacated Pack &lsquo;n Play. The apartment, at 950 square feet, now houses two adults, two children, and a basset hound who takes up more room than his proportions suggest.
              </p>
              <p>
                Ms. Carmichael sends listings when she finds them. They are never under four million dollars. &ldquo;The market,&rdquo; she continues to say, &ldquo;is very active right now.&rdquo;
              </p>
              <p>
                &ldquo;We thought being from here would count for something,&rdquo; Ms. Reyes said. She was sitting on the floor of the dining room-nursery, assembling a crib that had not come with enough screws. Outside, somewhere on the block, a dog was barking — the particular bark of a Bernal Heights dog, lazy and proprietary, the bark of an animal that has somewhere to be.
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
