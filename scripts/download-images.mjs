import fs from "node:fs";
import https from "node:https";
import path from "node:path";

const images = [
  {
    dest: "public/images/advocates/rajesh-narayan.jpg",
    url: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800&h=1000",
  },
  {
    dest: "public/images/advocates/meenakshi-swaminathan.jpg",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000",
  },
  {
    dest: "public/images/advocates/anand-vardhan-singh.jpg",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800&h=1000",
  },
  {
    dest: "public/images/hero/court-columns.jpg",
    url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=1920&h=1080",
  },
  {
    dest: "public/images/chambers/library.jpg",
    url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1600&h=1000",
  },
  {
    dest: "public/images/practice/commercial-disputes-arbitration.jpg",
    url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1000&h=650",
  },
  {
    dest: "public/images/practice/corporate-insolvency-ibc.jpg",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000&h=650",
  },
  {
    dest: "public/images/practice/white-collar-crime-defense.jpg",
    url: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=1000&h=650",
  },
  {
    dest: "public/images/practice/constitutional-administrative-law.jpg",
    url: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=1000&h=650",
  },
  {
    dest: "public/images/practice/real-estate-rera-property.jpg",
    url: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&q=80&w=1000&h=650",
  },
  {
    dest: "public/images/practice/intellectual-property-technology.jpg",
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000&h=650",
  },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (
          response.statusCode >= 300 &&
          response.statusCode < 400 &&
          response.headers.location
        ) {
          return downloadFile(response.headers.location, dest)
            .then(resolve)
            .catch(reject);
        }
        if (response.statusCode !== 200) {
          return reject(
            new Error(
              `Failed to download ${url}: status ${response.statusCode}`,
            ),
          );
        }
        response.pipe(file);
        file.on("finish", () => {
          file.close(() => resolve(dest));
        });
      })
      .on("error", (err) => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

async function main() {
  console.log("Downloading curated legal photographic assets...");
  for (const item of images) {
    try {
      await downloadFile(item.url, item.dest);
      const stats = fs.statSync(item.dest);
      console.log(`✅ ${item.dest} (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`❌ ${item.dest}:`, err.message);
    }
  }
  console.log("All assets downloaded successfully!");
}

main();
