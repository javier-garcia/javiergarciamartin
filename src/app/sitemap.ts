import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const paths = ["", "/work/morae", "/work/shared-multisite", "/work/revalidation-flow"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path, index) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-08-19"),
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
