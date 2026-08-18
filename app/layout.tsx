import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javi Garcia — Portfolio",
  description: "Independent React and Next.js developer building clear, resilient digital systems.",
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
