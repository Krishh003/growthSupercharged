import sharp from "sharp";
// low density => small native raster, no giant intermediate
await sharp("design/_stripped.svg", { density: 16, limitInputPixels: false })
  .flatten({ background: "#ffffff" })
  .png()
  .toFile("design/_overview.png");
const m = await sharp("design/_overview.png").metadata();
console.log("OK", m.width + "x" + m.height);
