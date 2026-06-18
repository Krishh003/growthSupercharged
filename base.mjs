import sharp from "sharp";
import fs from "fs";
const log = (m) => fs.appendFileSync("design/_base.log", m + "\n");
fs.writeFileSync("design/_base.log", "start\n");
try {
  const buf = fs.readFileSync("design/_stripped.svg");
  log("rendering base @ density 34...");
  await sharp(buf, { density: 34, limitInputPixels: false })
    .flatten({ background: "#fff" }).png().toFile("design/_base.png");
  const m = await sharp("design/_base.png").metadata();
  log("base OK " + m.width + "x" + m.height);
} catch (e) { log("ERR " + (e.stack||e)); }
log("done");
