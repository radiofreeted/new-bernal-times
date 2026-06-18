import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Forager | The New Bernal Times",
  description: "They grew up on these streets. Now they can't afford to stay.",
};

const LISTINGS = [
  {
    id: "116-elsie",
    address: "116 Elsie St.",
    listed: "$3,995,000",
    sold: "$4,700,000",
    overAsking: "$705,000 over asking",
    beds: "4 bd",
    baths: "6 ba",
    sqft: "2,834 sq ft",
    yearBuilt: "2018",
    imgUrl:
      "https://photos.zillowstatic.com/fp/326a23a90ee43a72cae3ec75acef0b52-cc_ft_1536.jpg",
    zillowUrl:
      "https://www.zillow.com/homedetails/116-Elsie-St-San-Francisco-CA-94110/125164135_zpid/",
    caption: "116 Elsie St., built 2018. Six bathrooms.",
    buyerThought: "\"We could actually see ourselves here,\" said Marcus.",
    sellerResult: "It sold in five days for $4,700,000 — $705,000 over asking — to an all-cash buyer who waived inspection.",
  },
  {
    id: "25-elsie",
    address: "25 Elsie St.",
    listed: "$2,995,000",
    sold: "$4,000,000",
    overAsking: "$1,005,000 over asking",
    beds: "3 bd",
    baths: "3 ba",
    sqft: "2,361 sq ft",
    yearBuilt: "1988",
    imgUrl:
      "https://photos.zillowstatic.com/fp/58df6dc5851225d1847c8b746292dcb3-cc_ft_1536.jpg",
    zillowUrl:
      "https://www.zillow.com/homedetails/25-Elsie-St-San-Francisco-CA-94110/15161163_zpid/",
    caption: "25 Elsie St., three bedrooms. Listed under $3 million.",
    buyerThought: "\"It's listed under three million,\" Julia said. \"That's almost reasonable.\"",
    sellerResult: "It sold for $4,000,000. The winning offer was $1,005,000 over asking. There were eleven bids.",
  },
  {
    id: "1497-shotwell",
    address: "1497 Shotwell St.",
    listed: "$3,499,000",
    sold: "$4,650,000",
    overAsking: "$1,151,000 over asking",
    beds: "4 bd",
    baths: "4 ba",
    sqft: "2,545 sq ft",
    yearBuilt: "1910",
    imgUrl:
      "https://photos.zillowstatic.com/fp/5d5bb1ad15fa89fb7f84c0383d60dbbb-cc_ft_1536.jpg",
    zillowUrl:
      "https://www.zillow.com/homedetails/1497-Shotwell-St-San-Francisco-CA-94110/15160090_zpid/",
    caption: "1497 Shotwell St., built 1910. Original details.",
    buyerThought: "\"My grandmother used to walk past this house,\" Julia said.",
    sellerResult: "It sold for $4,650,000 — $1,151,000 over asking. Marcus and Julia had offered $3,800,000.",
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

function ListingCallout({
  listing,
  index,
}: {
  listing: (typeof LISTINGS)[0];
  index: number;
}) {
  return (
    <div className={`my-8 ${index % 2 === 0 ? "md:float-right md:ml-8 md:w-80" : "md:float-left md:mr-8 md:w-80"} w-full`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={listing.imgUrl}
        alt={listing.address}
        className="w-full object-cover h-48"
      />
      <p className="text-[11px] text-[#666] font-sans italic mt-1 mb-2">
        {listing.caption}
      </p>
      <div className="border-t border-b border-[#121212] py-3 my-2">
        <p className="font-playfair font-bold text-lg">{listing.address}</p>
        <div className="flex justify-between items-baseline mt-1">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#666] font-sans">Listed</p>
            <p className="font-playfair text-xl font-bold">{listing.listed}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-[#666] font-sans">Sold</p>
            <p className="font-playfair text-xl font-bold text-red-700">{listing.sold}</p>
          </div>
        </div>
        <p className="text-[11px] text-red-700 font-sans font-semibold mt-1">
          ↑ {listing.overAsking}
        </p>
        <div className="flex gap-3 text-[11px] text-[#555] font-sans mt-2">
          <span>{listing.beds}</span>
          <span>{listing.baths}</span>
          <span>{listing.sqft}</span>
          <span>Built {listing.yearBuilt}</span>
        </div>
      </div>
      <a
        href={listing.zillowUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] uppercase tracking-widest font-sans text-[#326891] hover:underline"
      >
        Zillow listing →
      </a>
    </div>
  );
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
            Published {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="prose-article text-[16px] leading-relaxed text-[#333] space-y-5 clearfix">

          <p>
            Marcus and Julia Reyes have spent their whole lives on the eastern slope of Bernal Heights. Marcus grew up on Precita Avenue. Julia on Eugenia. They met at Mission High, left for college, came back — as people from Bernal tend to do — and have been renting a two-bedroom on Andover Street for the past six years, two blocks from Marcus&apos;s parents and four blocks from Julia&apos;s.
          </p>

          <p>
            Last spring, with their daughter Cora turning two and a second baby on the way, they decided it was time to buy.
          </p>

          <p>
            &ldquo;We always assumed we&apos;d end up here,&rdquo; Julia said. &ldquo;Our parents are here. Cora&apos;s godparents are here. We just figured — we&apos;re from here, we know how it works, we&apos;ll figure it out.&rdquo;
          </p>

          <p>They had $800,000 in savings. They were pre-approved for a jumbo loan. Their realtor, a patient woman named Sandra who has been selling homes in Bernal Heights for nineteen years, told them the market was &ldquo;active.&rdquo;</p>

          <p>&ldquo;Active,&rdquo; Marcus repeated, when asked what she&apos;d said. &ldquo;Yeah. She said active.&rdquo;</p>

          <ListingCallout listing={LISTINGS[0]} index={0} />

          <p>
            The first house they toured was on Elsie Street — a four-bedroom built in 2018, with six bathrooms and clean modern lines that felt, as Julia put it, &ldquo;almost aggressively new.&rdquo; It was listed at $3,995,000. Sandra had warned them that the list price was a formality.
          </p>

          <p>
            &ldquo;We could actually see ourselves here,&rdquo; Marcus said, standing in the kitchen, which had a waterfall island and a Miele espresso machine built into the cabinetry. He opened a cabinet. He closed it. &ldquo;Like, genuinely. This is a real house.&rdquo;
          </p>

          <p>
            They offered $4,200,000. It felt, Marcus said, &ldquo;insane to type.&rdquo; It was not enough. The house sold in five days for $4,700,000 — $705,000 over asking — to an all-cash buyer who waived inspection and had, according to Sandra, &ldquo;a very clean offer letter.&rdquo;
          </p>

          <p>
            &ldquo;Who has four point seven million in cash?&rdquo; Julia asked. She was not really asking.
          </p>

          <ListingCallout listing={LISTINGS[1]} index={1} />

          <p>
            The second house was also on Elsie Street — a three-bedroom from 1988, a little more worn, listed at $2,995,000. Julia noticed that the list price started with a two. This seemed meaningful.
          </p>

          <p>
            &ldquo;It&apos;s listed under three million,&rdquo; she said to Marcus, in the car on the way there. &ldquo;That&apos;s almost reasonable.&rdquo;
          </p>

          <p>
            The house needed work. The master bathroom had not been updated since the Clinton administration. The backyard was a project. Cora, upon being set down in the living room, immediately found a dead moth and tried to eat it. Marcus and Julia looked at each other over their daughter&apos;s head with an expression that longtime homebuyers will recognize as cautious hope.
          </p>

          <p>
            They offered $3,500,000. There were eleven other bids. The house sold for $4,000,000 — $1,005,000 over asking. Sandra delivered the news by text. &ldquo;So sorry,&rdquo; she wrote. &ldquo;Market is very active right now.&rdquo;
          </p>

          <ListingCallout listing={LISTINGS[2]} index={2} />

          <p>
            The third house was on Shotwell Street, a 1910 Victorian with original built-ins and a claw-foot tub that Julia photographed and texted to her mother. It was listed at $3,499,000. Julia&apos;s grandmother had walked past this house every Sunday on her way to St. Anthony&apos;s.
          </p>

          <p>
            &ldquo;This is the one,&rdquo; Julia said. She meant it.
          </p>

          <p>
            They offered $3,800,000. They wrote a letter — the kind that real estate agents say doesn&apos;t matter anymore — about Bernal Heights, about their parents, about Cora, about wanting to stay. Sandra submitted it with the offer. The letter, presumably, was read by no one.
          </p>

          <p>
            The house sold for $4,650,000. That is $1,151,000 over asking. The winning buyer, Sandra told them, had also grown up in the neighborhood. This did not help.
          </p>

          <p>
            Marcus and Julia are still on Andover Street. The baby arrived in October — a boy, they named him Leo — and they have converted the dining room into a nursery. They are still looking, Sandra tells them. The market, she says, remains active.
          </p>

          <p>
            &ldquo;We thought being from here would count for something,&rdquo; Julia said. She paused. Outside, a dog barked on the street below, the specific bark of a Bernal Heights dog, lazy and unhurried, the bark of a dog that lives somewhere.
          </p>

          <p>&ldquo;It didn&apos;t.&rdquo;</p>

        </div>

        <div className="border-t border-[#e2e2e2] mt-10 pt-4 text-[11px] text-[#888] font-sans">
          <p><em>This is a work of parody. The Reyes family is fictional. The listing prices and sale prices are real.</em></p>
        </div>
      </article>

      <footer className="border-t-2 border-[#121212] mt-10 py-4 text-center text-[10px] text-[#888] uppercase tracking-widest font-sans">
        © {new Date().getFullYear()} The New Bernal Times &nbsp;·&nbsp; Not affiliated with The New York Times &nbsp;·&nbsp; Parody
      </footer>
    </div>
  );
}
