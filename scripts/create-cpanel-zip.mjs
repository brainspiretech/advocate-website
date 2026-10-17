import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "out");
const zipFile = path.join(rootDir, "cpanel-deploy.zip");

console.log("==> Packaging out/ directory into cpanel-deploy.zip...");

if (!fs.existsSync(outDir)) {
  console.error("Error: 'out' directory not found! Run pnpm build first.");
  process.exit(1);
}

if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

execSync("cd out && zip -r -q ../cpanel-deploy.zip .", { stdio: "inherit" });

if (fs.existsSync(zipFile)) {
  const stats = fs.statSync(zipFile);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`\n✅ Successfully created: cpanel-deploy.zip (${sizeMb} MB)`);
  console.log("Upload this file directly to cPanel File Manager (public_html) and click 'Extract'.\n");
}
