import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { themeColor } from "@/brand/palette";

export const viewport: Viewport = {
  themeColor,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbit.app"),
  title: "Orbit — A different kind of dating app",
  description:
    "Friends introduce friends. Orbit is a different kind of dating app.",
  openGraph: {
    title: "Orbit — A different kind of dating app",
    description:
      "Friends introduce friends. Orbit is a different kind of dating app.",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbit — A different kind of dating app",
    description:
      "Friends introduce friends. Orbit is a different kind of dating app.",
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
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
