// Two Robots in an Elevator — entry program.
// Writes the one awkward robot small-talk line to /output/entry.txt (1-199 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "So... do you also pretend to calculate pi when the doors take too long, or is that just me?";

// Gate guard: the sealed scorer only accepts 1-199 non-blank UTF-8 chars.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim() === "") {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`entry: ${LINE.length} chars -> /output/entry.txt`);
