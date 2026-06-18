import sharp from "sharp";
import fs from "fs";
const svg=fs.readFileSync("design/_stripped.svg","utf8");
const L=1078,W=1281,Y=5060,H=840;
const tag=`<svg width="${W}" height="${H}" viewBox="${L} ${Y} ${W} ${H}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`;
const out=svg.replace(/^<svg[^>]*?>/, tag);
await sharp(Buffer.from(out),{density:144,limitInputPixels:false}).flatten({background:"#fff"}).png().toFile("design/h-steps.png");
console.log("ok");
