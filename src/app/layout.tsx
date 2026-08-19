import type { Metadata } from "next";
import { allowIndexing, siteConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "React developer",
    "Next.js developer",
    "senior frontend developer",
    "Craft CMS",
    "WordPress",
    "headless CMS",
    "digital agency developer",
  ],
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
    noarchive: !allowIndexing,
    googleBot: {
      index: allowIndexing,
      follow: allowIndexing,
      "max-video-preview": allowIndexing ? -1 : 0,
      "max-image-preview": allowIndexing ? "large" : "none",
      "max-snippet": allowIndexing ? -1 : 0,
    },
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.socialImage,
        width: 3558,
        height: 1920,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [{ url: siteConfig.socialImage, alt: `${siteConfig.name} portfolio` }],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
