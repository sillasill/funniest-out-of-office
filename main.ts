import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I'm out until Monday. My auto-reply got promoted to my job, so please send urgent emails to it. It answers faster than I ever did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
