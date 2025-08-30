import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    devtools: false,
  },
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
