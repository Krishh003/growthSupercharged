import sharp from "sharp";
const m = await sharp("design/_base.png").metadata();
// full-width band below palette to locate page frames
const top = 800, height = Math.min(1700, m.height-top);
await sharp("design/_base.png").extract({ left:0, top, width:m.width, height }).resize({ width:1500 }).toFile("design/_band1.png");
console.log("band1 y",top,"-",top+height,"of",m.height);
