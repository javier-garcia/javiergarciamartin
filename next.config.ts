import type { NextConfig } from "next";

const allowIndexing = process.env.SITE_ALLOW_INDEXING !== "false" && process.env.VERCEL_ENV !== "preview";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/revalidation-flow",
        destination: "/case-studies/revalidation-flow",
        permanent: true,
      },
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
