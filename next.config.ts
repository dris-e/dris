import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

setupDevPlatform().catch(console.error);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
