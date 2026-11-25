import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Grandma's rendang simmered six hours in coconut milk until the beef fell apart on my tongue, and I ate it cross-legged on her kitchen floor while rain drummed the tin roof.";

function validateEntry(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  // One clean sentence: exactly one sentence-ending mark, at the end.
  const terminators = text.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1 || !text.endsWith(".")) {
    throw new Error("entry must be a single sentence ending with a period");
  }
}

function main(): void {
  validateEntry(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
