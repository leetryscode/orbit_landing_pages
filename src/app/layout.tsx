import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { themeColor } from "@/brand/palette";

export const viewport: Viewport = {
  themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbit.app"),
  title: "Orbit — Introductions replace algorithms",
  description:
    "Orbit brings trusted introductions into the present. Stewardship, not swiping.",
  openGraph: {
    title: "Orbit — Introductions replace algorithms",
    description:
      "Orbit brings trusted introductions into the present. Stewardship, not swiping.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit — Introductions replace algorithms",
    description:
      "Orbit brings trusted introductions into the present. Stewardship, not swiping.",
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
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
