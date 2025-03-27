import type { Metadata } from "next";
import GridPattern from "@/components/ui/grid-pattern";
import "./globals.css";
import type { ReactNode } from "react";
import { Inter, League_Spartan } from "next/font/google";
import Navbar from "@/components/Navbar";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: "slop.sh",
  description: "sloppy slop",
  icons: [
    {
      url: "/favicon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://slop.sh",
    title: "slop.sh",
    description: "sloppy slop",
    images: [
      {
        url: "/meta.png",
        width: 900,
        height: 900,
        alt: "Slop",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://slop.sh"),
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${leagueSpartan.variable} ${inter.variable} dark`}
    >
      <body
        suppressHydrationWarning={true}
        className="dark min-h-screen antialiased"
      >
        <GridPattern
          className="fixed inset-0 text-primary/10 z-0 pointer-events-none"
          height={50}
          width={50}
          style={{ opacity: 0.1 }}
        />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
