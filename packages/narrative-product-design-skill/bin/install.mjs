#!/usr/bin/env node
import { access, cp, mkdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const packageRoot = path.resolve(fileURLToPath(import.meta.url), "../..");
const source = path.join(packageRoot, "skill", "narrative-product-design");
const args = process.argv.slice(2);

const help = `Install the narrative-product-design Codex skill.

Usage:
  npx narrative-product-design-skill
  npx narrative-product-design-skill --dir ~/.codex/skills
  npx narrative-product-design-skill --print

Options:
  --dir <path>   Install into this skills directory.
  --print        Print the bundled SKILL.md instead of installing.
  --help         Show this help.
`;

const expandHome = (value) => {
  if (!value || value === "~") return os.homedir();
  if (value.startsWith("~/")) return path.join(os.homedir(), value.slice(2));
  return value;
};

if (args.includes("--help") || args.includes("-h")) {
  console.log(help);
  process.exit(0);
}

if (args.includes("--print")) {
  console.log(await readFile(path.join(source, "SKILL.md"), "utf8"));
  process.exit(0);
}

let targetRoot = path.join(os.homedir(), ".codex", "skills");
const dirIndex = args.findIndex((arg) => arg === "--dir");
if (dirIndex >= 0) {
  const dir = args[dirIndex + 1];
  if (!dir) {
    console.error("Missing value for --dir.");
    process.exit(1);
  }
  targetRoot = path.resolve(expandHome(dir));
}

try {
  await access(path.join(source, "SKILL.md"));
} catch {
  console.error("Bundled skill files are missing. Please reinstall the package.");
  process.exit(1);
}

const target = path.join(targetRoot, "narrative-product-design");
await mkdir(targetRoot, { recursive: true });
await rm(target, { recursive: true, force: true });
await cp(source, target, { recursive: true });

console.log(`Installed narrative-product-design skill to ${target}`);
console.log("Use it by asking Codex to apply the narrative-product-design skill.");
