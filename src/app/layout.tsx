import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import config from "../constants/config";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: config.SITE_NAME,
    template: "%s | " + config.SITE_NAME,
  },
  description: config.SITE_DESCRIPTION,
  keywords: ["dris", "ui", "component", "library"],
  robots: "index, follow",
  metadataBase: new URL(config.SITE_URL),
  openGraph: {
    title: config.SITE_NAME,
    description: config.SITE_DESCRIPTION,
    url: config.SITE_URL,
    siteName: config.SITE_NAME,
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: config.SITE_NAME,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.SITE_NAME,
    description: config.SITE_DESCRIPTION,
    images: ["/assets/og-image.png"],
  },
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}>
      <body className="font-inter bg-background text-foreground relative w-full min-h-screen">{children}</body>
    </html>
  );
}
