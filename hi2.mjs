import sharp from "sharp";
import fs from "fs";
const svg=fs.readFileSync("design/_stripped.svg","utf8");
const L=1078,W=1281;
async function crop(name,Y,H){
  const tag=`<svg width="${W}" height="${H}" viewBox="${L} ${Y} ${W} ${H}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`;
  const out=svg.replace(/^<svg[^>]*?>/, tag);
  await sharp(Buffer.from(out),{density:144,limitInputPixels:false}).flatten({background:"#fff"}).png().toFile(`design/${name}.png`);
  const m=await sharp(`design/${name}.png`).metadata();
  console.log(name,m.width+"x"+m.height);
}
await crop("h-hero",2540,1320);
await crop("h-bento",3800,1320);
