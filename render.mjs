import sharp from "sharp";
const src = "Final Design.svg";
// overview: render full canvas scaled to 1800px wide
const meta = await sharp(src, { density: 72, limitInputPixels: false }).metadata();
console.log("native svg px:", meta.width, "x", meta.height);
await sharp(src, { density: 72, limitInputPixels: false })
  .resize({ width: 1800 })
  .png()
  .toFile("design/_overview.png");
console.log("wrote design/_overview.png");
