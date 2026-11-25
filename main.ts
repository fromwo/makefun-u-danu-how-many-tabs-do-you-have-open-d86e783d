// How Many Tabs Do You Have Open?
// One honest number: how many browser tabs are open right now — digits only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAB_COUNT = "83";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TAB_COUNT, "utf8");
