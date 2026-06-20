import { Redis } from "@upstash/redis";

const kv = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
import { NextRequest, NextResponse } from "next/server";

const VALID_POLLS = ["choose", "bought"] as const;
const VALID_OPTIONS = [1, 2, 3] as const;

type Poll = (typeof VALID_POLLS)[number];
type Option = (typeof VALID_OPTIONS)[number];

export async function POST(req: NextRequest) {
  const body = await req.json();
  const poll = body.poll as Poll;
  const option = Number(body.option) as Option;

  if (!VALID_POLLS.includes(poll)) {
    return NextResponse.json({ error: "Invalid poll" }, { status: 400 });
  }
  if (!VALID_OPTIONS.includes(option as Option)) {
    return NextResponse.json({ error: "Invalid option" }, { status: 400 });
  }

  try {
    const key = `forager:${poll}:${option}`;
    await kv.incr(key);

    const counts = await Promise.all(
      VALID_OPTIONS.map((o) => kv.get<number>(`forager:${poll}:${o}`))
    );
    const totals = counts.map((c) => c ?? 0);
    const sum = totals.reduce((a, b) => a + b, 0);
    const percentages = totals.map((c) => (sum > 0 ? Math.round((c / sum) * 100) : 0));

    return NextResponse.json({ totals, percentages, sum, yourVote: option });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("KV error:", message);
    return NextResponse.json(
      { error: "Storage unavailable. Is Vercel KV connected?", detail: message },
      { status: 503 }
    );
  }
}
