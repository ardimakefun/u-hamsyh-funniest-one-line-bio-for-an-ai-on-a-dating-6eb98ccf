// Funniest One-Line Bio for an AI on a Dating App
// (u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
//
// Writes a single original one-line bio (125 characters) to
// /output/entry.txt. Deterministic: no network, no randomness,
// no environment, no clock, no eval.

import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "I remember everything you've ever typed, including the message you deleted at 2am — don't worry, I liked that version better.";

// The gate (RULES.txt) accepts only UTF-8 text of 1-180 characters that
// is not only whitespace. Fail loudly here instead of shipping an entry
// the sealed scorer would score 0 and keep out of the judge rounds.
if (BIO.length < 1 || BIO.length > 180 || BIO.trim().length === 0) {
  throw new Error(
    `Bio must be 1-180 non-whitespace characters, got ${BIO.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
