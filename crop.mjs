import sharp from "sharp";
import fs from "fs";
const log = (m) => { fs.appendFileSync("design/_crop.log", m + "\n"); };
fs.writeFileSync("design/_crop.log", "");
const base = "design/_base.png";
const meta = await sharp(base).metadata();
log("base " + meta.width + "x" + meta.height);
// trim uniform gray board
await sharp(base).trim({ background: "#444444", threshold: 20 }).toFile("design/_content.png");
const c = await sharp("design/_content.png").metadata();
log("content " + c.width + "x" + c.height);
