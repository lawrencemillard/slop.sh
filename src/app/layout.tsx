import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GridPattern from "@/components/ui/grid-pattern";
import "./globals.css";

export const metadata: Metadata = {
  title: "slop.sh",
  description: "this site sucks lmao",
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
    description: "this site sucks lmao",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning={true}>
        <GridPattern
          className="fixed inset-0 text-primary/10 z-0"
          height={50}
          width={50}
          style={{ opacity: 0.1 }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
