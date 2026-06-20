import { Redis } from "@upstash/redis";

const kv = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
import { NextRequest, NextResponse } from "next/server";

const VALID_POLLS = ["choose", "bought"] as const;
const VALID_OPTIONS = [1, 2, 3] as const;

type Poll = (typeof VALID_POLLS)[number];

export async function GET(req: NextRequest) {
  const poll = req.nextUrl.searchParams.get("poll") as Poll;
  if (!poll || !VALID_POLLS.includes(poll)) {
    return NextResponse.json({ error: "Invalid poll" }, { status: 400 });
  }

  const counts = await Promise.all(
    VALID_OPTIONS.map((o) => kv.get<number>(`forager:${poll}:${o}`))
  );
  const totals = counts.map((c) => c ?? 0);
  const sum = totals.reduce((a, b) => a + b, 0);
  const percentages = totals.map((c) => (sum > 0 ? Math.round((c / sum) * 100) : 0));

  return NextResponse.json({ totals, percentages, sum });
}
