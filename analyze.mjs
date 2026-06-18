import sharp from "sharp";
import fs from "fs";
const { data, info } = await sharp("design/_base.png").raw().toBuffer({ resolveWithObject: true });
const w=info.width, h=info.height, ch=info.channels;
const isContent=(x,y)=>{const i=(y*w+x)*ch;return Math.abs(data[i]-68)>22||Math.abs(data[i+1]-68)>22||Math.abs(data[i+2]-68)>22;};
// column projection over mid band to find frame x-segments
const y0=900,y1=2300;
const col=new Array(w).fill(0);
for(let x=0;x<w;x++){let c=0;for(let y=y0;y<y1;y+=3)if(isContent(x,y))c++;col[x]=c;}
const thr=8; // min content hits to count column as "in frame"
const segs=[];let s=-1;
for(let x=0;x<w;x++){if(col[x]>thr){if(s<0)s=x;}else{if(s>=0){if(x-s>40)segs.push([s,x]);s=-1;}}}
if(s>=0)segs.push([s,w]);
// for each x-seg, find y-extent (full height)
const frames=segs.map(([x0,x1])=>{
  let yT=h,yB=0;const xm=Math.floor((x0+x1)/2);
  for(let y=0;y<h;y++){let any=false;for(let x=x0;x<x1;x+=4)if(isContent(x,y)){any=true;break;}if(any){if(y<yT)yT=y;if(y>yB)yB=y;}}
  return {x0,x1,yT,yB,wBase:x1-x0,hBase:yB-yT};
});
const scale=7562/w;
const native=frames.map(f=>({L:Math.round(f.x0*scale),T:Math.round(f.yT*scale),W:Math.round((f.x1-f.x0)*scale),H:Math.round((f.yB-f.yT)*scale)}));
console.log("segments(base):",JSON.stringify(frames));
console.log("native boxes:",JSON.stringify(native));
fs.writeFileSync("design/_frames.json",JSON.stringify(native));
