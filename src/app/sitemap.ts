import type { MetadataRoute } from "next";
import { publishedProjectCaseStudies } from "@/data/case-studies";
import { siteConfig } from "@/lib/seo";

const projectPaths = publishedProjectCaseStudies.map((project) => `/work/${project.slug}`);
const paths = ["", ...projectPaths, "/work/revalidation-flow"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path, index) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-08-20"),
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : path === "/work/revalidation-flow" ? 0.6 : 0.8,
  }));
}
