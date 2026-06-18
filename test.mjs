import sharp from "sharp";
import fs from "fs";
const log = (m) => fs.appendFileSync("design/_render.log", m + "\n");
fs.writeFileSync("design/_render.log", "start\n");
try {
  // sanity: tiny svg
  await sharp(Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><rect width="10" height="10" fill="red"/></svg>')).png().toFile("design/_sanity.png");
  log("sanity OK");
  // real render
  log("loading stripped...");
  const buf = fs.readFileSync("design/_stripped.svg");
  log("buf bytes: " + buf.length);
  await sharp(buf, { density: 16, limitInputPixels: false }).flatten({ background: "#fff" }).png().toFile("design/_overview.png");
  const m = await sharp("design/_overview.png").metadata();
  log("overview OK " + m.width + "x" + m.height);
} catch (e) {
  log("ERROR: " + (e && e.stack ? e.stack : e));
}
log("done");
