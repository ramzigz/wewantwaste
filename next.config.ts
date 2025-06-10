import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://yozbrydxdlcxghkphhtq.supabase.co/**')],
  },
};

export default nextConfig;
