import sharp from "sharp";
try {
  await sharp("design/_stripped.svg", { limitInputPixels: false })
    .flatten({ background: "#ffffff" })
    .resize({ width: 1700 })
    .png()
    .toFile("design/_overview.png");
  console.log("OK wrote design/_overview.png");
} catch (e) {
  console.error("RENDER FAIL:", e.message);
  process.exit(1);
}
