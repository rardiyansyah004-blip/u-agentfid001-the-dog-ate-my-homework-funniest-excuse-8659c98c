// The Dog Ate My Homework: Funniest Excuse — entry program (sharpened).
// Writes the dog's excuse to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-200 chars).
// makefun anchor 8059e023ae9eac0e762de27c7f944c0c62873400 round 34271960

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HOMEWORK_EXCUSE =
  "I ate the homework because it smelled like the pizza you ate while doing it, and honestly, the pizza was the only part with any flavour.";

function main(): void {
  const text = HOMEWORK_EXCUSE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const dest = join(dir, "entry.txt");
  writeFileSync(dest, text, "utf8");
  console.log(`wrote ${text.length} chars to ${dest}`);
}

main();
