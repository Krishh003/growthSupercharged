import sharp from "sharp";
import fs from "fs";
const jobs=[["services",858,5795],["contact",858,4091]];
for(const [name,top,bot] of jobs){
  const f=`design/page-${name}.png`;
  const chh=bot-top, cw=1279;
  await sharp(f).extract({left:0,top,width:cw,height:chh}).toFile(`design/c-${name}.png`);
  // remove old tiles
  for(let k=0;k<8;k++){try{fs.unlinkSync(`design/t-${name}-${k}.png`);}catch{}}
  const tileH=1550,overlap=60;let i=0;
  for(let y=0;y<chh;y+=(tileH-overlap)){
    const th=Math.min(tileH,chh-y);if(th<40)break;
    await sharp(`design/c-${name}.png`).extract({left:0,top:y,width:cw,height:th}).toFile(`design/t-${name}-${i}.png`);
    i++;
  }
  console.log(`${name}: ${i} tiles (${cw}x${chh})`);
}
