import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";

const outDir = join(process.cwd(), "out");

function walk(dir) {
  return readdirSync(dir).flatMap((entry) => {
    const fullPath = join(dir, entry);
    return statSync(fullPath).isDirectory() ? walk(fullPath) : [fullPath];
  });
}

if (existsSync(outDir)) {
  for (const file of walk(outDir)) {
    const parts = relative(outDir, file).split(sep);
    const nextIndex = parts.findIndex((part) => part.startsWith("__next."));

    if (nextIndex === -1 || nextIndex === parts.length - 1) {
      continue;
    }

    const routeDir = join(outDir, ...parts.slice(0, nextIndex));
    const aliasName = parts.slice(nextIndex).join(".");
    const aliasPath = join(routeDir, aliasName);

    if (aliasPath !== file) {
      mkdirSync(dirname(aliasPath), { recursive: true });
      copyFileSync(file, aliasPath);
    }
  }
}
