import sharp from "sharp";
import fs from "fs";
const log=(m)=>fs.appendFileSync("design/_frames.log",m+"\n");
fs.writeFileSync("design/_frames.log","");
const svg=fs.readFileSync("design/_stripped.svg","utf8");
const frames=[["home",1078,1281],["services",3839,1283],["contact",5203,1281]];
for(const [name,L,W] of frames){
  try{
    const tag=`<svg width="${W}" height="9482" viewBox="${L} 0 ${W} 9482" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`;
    const out=svg.replace(/^<svg[^>]*?>/, tag);
    await sharp(Buffer.from(out),{density:72,limitInputPixels:false})
      .flatten({background:"#444444"})
      .trim({background:"#444444",threshold:18})
      .png().toFile(`design/page-${name}.png`);
    const m=await sharp(`design/page-${name}.png`).metadata();
    log(`${name} ${m.width}x${m.height}`);
  }catch(e){log(`${name} ERR ${e.message}`);}
}
log("done");
