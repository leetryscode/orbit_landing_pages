import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { themeColor } from "@/brand/palette";

export const viewport: Viewport = {
  themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbit.app"),
  title: "Orbit — Trusted introductions, without pressure",
  description:
    "Orbit connects singles through people who know them. No swiping, no algorithms. Just trusted introductions.",
  openGraph: {
    title: "Orbit — Trusted introductions, without pressure",
    description:
      "Orbit connects singles through people who know them. No swiping, no algorithms. Just trusted introductions.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit — Trusted introductions, without pressure",
    description:
      "Orbit connects singles through people who know them. No swiping, no algorithms. Just trusted introductions.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh flex flex-col bg-background-main text-text-dark font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
