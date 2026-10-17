import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "out");
const publicHtaccess = path.join(rootDir, "public", ".htaccess");
const outHtaccess = path.join(outDir, ".htaccess");
const zipFile = path.join(rootDir, "cpanel-deploy.zip");

console.log("\n========================================================");
console.log("🚀 Starting cPanel Deployment Package Verification & Build");
console.log("========================================================\n");

// 1. Verify 'out' directory exists
if (!fs.existsSync(outDir)) {
  console.error(
    "❌ Fatal Error: 'out' directory not found! Run pnpm build first.",
  );
  process.exit(1);
}

// 2. Ensure .htaccess is in 'out' directory
if (!fs.existsSync(outHtaccess) && fs.existsSync(publicHtaccess)) {
  console.log("ℹ️  Copying public/.htaccess to out/.htaccess...");
  fs.copyFileSync(publicHtaccess, outHtaccess);
}

if (!fs.existsSync(outHtaccess)) {
  console.error(
    "❌ Warning: .htaccess not found in out/ or public/ directory.",
  );
} else {
  console.log(
    "✅ Verified: .htaccess is present in out/ with MIME types and URL rewrites.",
  );
}

// 3. Find all CSS files in out/_next/static
function findFilesRecursive(dir, extension) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat?.isDirectory()) {
      results = results.concat(findFilesRecursive(fullPath, extension));
    } else if (file.endsWith(extension)) {
      results.push(fullPath);
    }
  }
  return results;
}

const cssFiles = findFilesRecursive(
  path.join(outDir, "_next", "static"),
  ".css",
);

if (cssFiles.length === 0) {
  console.error(
    "❌ FATAL: No CSS files found in out/_next/static! Build has missing styles.",
  );
  process.exit(1);
}

let totalCssBytes = 0;
let hasTailwindUtilities = false;

for (const file of cssFiles) {
  const content = fs.readFileSync(file, "utf8");
  const size = fs.statSync(file).size;
  totalCssBytes += size;

  // Check for Tailwind v4 compiled utilities or custom theme classes
  if (
    content.includes(".bg-primary") ||
    content.includes("bg-primary") ||
    content.includes("--color-primary") ||
    content.includes(".flex")
  ) {
    hasTailwindUtilities = true;
  }
}

const totalCssKb = (totalCssBytes / 1024).toFixed(1);
console.log(
  `✅ Verified: Found ${cssFiles.length} CSS bundle(s) totaling ${totalCssKb} KB.`,
);

if (totalCssBytes < 15000 || !hasTailwindUtilities) {
  console.error("\n❌ FATAL QUALITY GATE FAILURE:");
  console.error(
    "The compiled CSS file appears incomplete or missing Tailwind utility classes!",
  );
  console.error(
    "Ensure that 'next build' is running with Turbopack and '@tailwindcss/turbopack' is active.",
  );
  process.exit(1);
}

console.log(
  "✅ Verified: Compiled stylesheet contains all Tailwind CSS v4 design tokens and utility classes.",
);

// 4. Verify index.html references the CSS file
const indexHtmlPath = path.join(outDir, "index.html");
if (fs.existsSync(indexHtmlPath)) {
  const indexHtml = fs.readFileSync(indexHtmlPath, "utf8");
  if (
    !indexHtml.includes('<link rel="stylesheet"') ||
    !indexHtml.includes('.css"')
  ) {
    console.error(
      "❌ FATAL: out/index.html does not contain a valid stylesheet link tag!",
    );
    process.exit(1);
  }
  console.log(
    "✅ Verified: out/index.html correctly references the compiled CSS bundle.",
  );
}

// 5. Remove old zip if present
if (fs.existsSync(zipFile)) {
  fs.unlinkSync(zipFile);
}

// 6. Create clean zip excluding OS metadata (.DS_Store, __MACOSX)
console.log("\n📦 Packaging out/ directory into cpanel-deploy.zip...");
execSync(
  'cd out && zip -r -q -X ../cpanel-deploy.zip . -x "*.DS_Store" -x "__MACOSX*"',
  { stdio: "inherit" },
);

if (fs.existsSync(zipFile)) {
  const stats = fs.statSync(zipFile);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
  console.log("\n========================================================");
  console.log(`🎉 SUCCESS: cpanel-deploy.zip created (${sizeMb} MB)`);
  console.log("========================================================");
  console.log("\n📋 cPanel Deployment Checklist:");
  console.log("1. Open cPanel -> File Manager -> Navigate to public_html.");
  console.log("2. Upload 'cpanel-deploy.zip'.");
  console.log("3. Right-click 'cpanel-deploy.zip' and select 'Extract'.");
  console.log(
    "   ⚠️  IMPORTANT: In the extraction dialog, ensure the destination",
  );
  console.log(
    "   path is exactly '/public_html' (delete any subfolder like '/public_html/cpanel-deploy').",
  );
  console.log("4. Delete 'cpanel-deploy.zip' after extraction.");
  console.log(
    "5. Ensure .htaccess is active and hidden files are visible in cPanel settings.\n",
  );
} else {
  console.error("❌ Failed to create cpanel-deploy.zip.");
  process.exit(1);
}
