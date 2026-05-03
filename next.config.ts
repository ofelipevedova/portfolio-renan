import type { NextConfig } from "next";

import { siteBasePath } from "./src/lib/site-path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: siteBasePath || undefined,
};

export default nextConfig;
