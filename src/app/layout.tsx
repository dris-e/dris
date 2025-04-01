import Providers from "@/components/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloudflare Next.js Template",
  description: "A template for building a website with Cloudflare Next.js",
  keywords: ["cloudflare", "next.js", "template"],
  robots: "index, follow",
  metadataBase: new URL("https://cloudflare-nextjs-template.com"),
  openGraph: {
    title: "Cloudflare Next.js Template",
    description: "A template for building a website with Cloudflare Next.js",
    url: "https://cloudflare-nextjs-template.com",
    siteName: "Cloudflare Next.js Template",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cloudflare Next.js Template",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloudflare Next.js Template",
    description: "A template for building a website with Cloudflare Next.js",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-geist-sans bg-background text-foreground relative tracking-tight w-full min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
