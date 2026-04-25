import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default nextConfig;
