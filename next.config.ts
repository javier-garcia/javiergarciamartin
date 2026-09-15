import type { NextConfig } from "next";

const allowIndexing = process.env.SITE_ALLOW_INDEXING === "true";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/shared-multisite",
        destination: "/work/nti",
        permanent: true,
      },
    ];
  },
  async headers() {
    if (allowIndexing) return [];

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
