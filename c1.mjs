import sharp from "sharp";
const m = await sharp("design/_base.png").metadata();
console.log("base", m.width, m.height);
// view top region where frames sit
await sharp("design/_base.png").extract({ left:0, top:0, width: Math.min(1000,m.width), height: Math.min(900,m.height) }).toFile("design/_top.png");
console.log("wrote _top.png");
