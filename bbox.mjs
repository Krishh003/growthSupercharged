import sharp from "sharp";
import fs from "fs";
const { data, info } = await sharp("design/_base.png")
  .trim({ background: "#444444", threshold: 20 })
  .toBuffer({ resolveWithObject: true });
const baseW = 3571, nativeW = 7562, scale = nativeW / baseW;
const L = Math.round((info.trimOffsetLeft|0) * -1 * scale);
const T = Math.round((info.trimOffsetTop|0) * -1 * scale);
const W = Math.round(info.width * scale);
const H = Math.round(info.height * scale);
console.log(JSON.stringify({ trimmedBase: [info.width, info.height], offset: [info.trimOffsetLeft, info.trimOffsetTop], nativeBox: [L, T, W, H] }));
fs.writeFileSync("design/_bbox.json", JSON.stringify({ L, T, W, H }));
