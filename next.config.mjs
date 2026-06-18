/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits a self-contained server in .next/standalone for a tiny Docker image.
  output: "standalone",
  eslint: { ignoreDuringBuilds: true },
  images: {
    // Internal server: skip server-side image optimization so the box needs
    // no outbound internet and no sharp install. Browsers load Unsplash images
    // directly. To re-enable optimization, remove this line and add "sharp"
    // (npm install sharp) so the optimizer has its native backend.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
