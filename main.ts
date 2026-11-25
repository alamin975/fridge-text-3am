// The 3AM Fridge Text — one line a smart fridge texts its owner at 3am.
import * as fs from "node:fs";

const entry = "It's 3am. The cake is gone, I didn't eat it, but I did watch you do it — twice.";

function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
