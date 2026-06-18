import sharp from "sharp";
import fs from "fs";
const svg=fs.readFileSync("design/_stripped.svg","utf8");
// home column L=1078 W=1281; render hero band native y 1450..2620 at 2x
const L=1078,W=1281,Y=1430,H=1230;
const tag=`<svg width="${W*2}" height="${H*2}" viewBox="${L} ${Y} ${W} ${H}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`;
const out=svg.replace(/^<svg[^>]*?>/, tag);
await sharp(Buffer.from(out),{density:144,limitInputPixels:false}).flatten({background:"#fff"}).png().toFile("design/hero-home.png");
const m=await sharp("design/hero-home.png").metadata();
console.log("hero-home",m.width+"x"+m.height);
