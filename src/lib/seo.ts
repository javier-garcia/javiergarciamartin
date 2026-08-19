import type { Metadata } from "next";

export const allowIndexing = process.env.SITE_ALLOW_INDEXING === "true";

export const siteConfig = {
  name: "Javi Garcia",
  title: "Senior React & Next.js Developer",
  description:
    "Senior React and Next.js developer helping digital agencies evolve complex web platforms across Craft CMS, WordPress and other content systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://javigarcia.dev",
  locale: "en_GB",
  email: "hello@javigarcia.dev",
  socialImage: "/images/morae-case-study.png",
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.socialImage,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: image, width: 3558, height: 1920, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: title }],
    },
  };
}
