import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as the fallback for browsers that cannot decode it
    formats: ["image/avif", "image/webp"],
    // the default list runs up to 3840; the hero slides use sizes="100vw", so
    // large screens were being sent 4K variants. Cap at 2048.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
};

export default nextConfig;
