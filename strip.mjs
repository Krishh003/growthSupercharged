import fs from "fs";
import sharp from "sharp";

const raw = fs.readFileSync("Final Design.svg", "utf8");

// 1. extract embedded photos for reference
const re = /data:image\/([a-zA-Z+]+);base64,([^"']+)/g;
let m, i = 0;
const exts = { "jpeg": "jpg", "jpg": "jpg", "png": "png", "svg+xml": "svg" };
while ((m = re.exec(raw)) !== null) {
  const ext = exts[m[1]] || "bin";
  try {
    fs.writeFileSync(`design/asset_${i}.${ext}`, Buffer.from(m[2], "base64"));
    console.log(`asset_${i}.${ext}  (${(m[2].length/1024/1024).toFixed(1)}MB b64)`);
  } catch (e) { console.log(`asset_${i} fail`, e.message); }
  i++;
}
console.log(`extracted ${i} images`);

// 2. stripped svg: replace each data uri with tiny gray placeholder
const stripped = raw.replace(re, "");
fs.writeFileSync("design/_stripped.svg", stripped, "utf8");
console.log("stripped svg:", (stripped.length/1024/1024).toFixed(1), "MB");

// 3. render vector overview
const meta = await sharp("design/_stripped.svg", { limitInputPixels: false }).metadata();
console.log("svg native:", meta.width, "x", meta.height);
await sharp("design/_stripped.svg", { limitInputPixels: false })
  .flatten({ background: "#ffffff" })
  .resize({ width: 1800 })
  .png()
  .toFile("design/_overview.png");
console.log("wrote design/_overview.png");
