import sharp from "sharp";
import fs from "fs";
const log=(m)=>{fs.appendFileSync("design/_slice.log",m+"\n");console.log(m);};
fs.writeFileSync("design/_slice.log","");
const names=["home","services","contact"];
for(const name of names){
  const f=`design/page-${name}.png`;
  const {data,info}=await sharp(f).raw().toBuffer({resolveWithObject:true});
  const w=info.width,h=info.height,ch=info.channels;
  const light=(x,y)=>{const i=(y*w+x)*ch;return data[i]>120&&data[i+1]>120&&data[i+2]>120;};
  // row is "page" if >40% light
  let top=-1,bot=-1;
  for(let y=0;y<h;y++){let c=0;for(let x=0;x<w;x+=4)c+=light(x,y)?1:0;const frac=c/(w/4);if(frac>0.4){if(top<0)top=y;bot=y;}}
  // also left/right
  let L=-1,R=-1;
  for(let x=0;x<w;x++){let c=0;for(let y=top;y<bot;y+=6)c+=light(x,y)?1:0;const frac=c/((bot-top)/6);if(frac>0.4){if(L<0)L=x;R=x;}}
  const cw=R-L, chh=bot-top;
  log(`${name}: content x[${L}-${R}] y[${top}-${bot}] => ${cw}x${chh}`);
  // crop content then slice vertically
  const cropped=`design/c-${name}.png`;
  await sharp(f).extract({left:L,top,width:cw,height:chh}).toFile(cropped);
  const tileH=1550, overlap=60;
  let i=0;
  for(let y=0;y<chh;y+=(tileH-overlap)){
    const th=Math.min(tileH,chh-y);
    if(th<40)break;
    await sharp(cropped).extract({left:0,top:y,width:cw,height:th}).toFile(`design/t-${name}-${i}.png`);
    i++;
  }
  log(`${name}: ${i} tiles`);
}
log("DONE");
