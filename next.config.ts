import type { NextConfig } from "next";

// Railway builds a standalone server; Cloudflare gets a static export. The
// page has no server-side behaviour -- no route handlers, no next/image, no
// rewrites -- so both come off the same source without a second codebase.
const config: NextConfig = {
  output: process.env.STATIC_EXPORT ? "export" : "standalone",
  poweredByHeader: false,
};
export default config;
