import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'screenshots.meow.camera'}
    ]
  }
};

export default nextConfig;
