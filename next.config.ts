import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img-ecomm-rl-prod-fye5gqbxdtbghqer.a03.azurefd.net",
      },
    ],
  },
};

export default nextConfig;
