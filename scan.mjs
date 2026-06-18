import sharp from "sharp";
import fs from "fs";
const W = 3571;
const { data, info } = await sharp("design/_base.png").raw().toBuffer({ resolveWithObject: true });
const w = info.width, h = info.height, ch = info.channels;
let minX=w, minY=h, maxX=0, maxY=0;
for (let y=0; y<h; y++) {
  for (let x=0; x<w; x++) {
    const i=(y*w+x)*ch, r=data[i], g=data[i+1], b=data[i+2];
    // board gray ~ (68,68,68). content = white/blue/etc => far from gray
    if (Math.abs(r-68)>25 || Math.abs(g-68)>25 || Math.abs(b-68)>25) {
      if (x<minX)minX=x; if (x>maxX)maxX=x; if (y<minY)minY=y; if (y>maxY)maxY=y;
    }
  }
}
const scale = 7562/w;
const box = { L:Math.round(minX*scale), T:Math.round(minY*scale), W:Math.round((maxX-minX)*scale), H:Math.round((maxY-minY)*scale) };
console.log("base content px:", {minX,minY,maxX,maxY});
console.log("native box:", box);
fs.writeFileSync("design/_bbox.json", JSON.stringify(box));
