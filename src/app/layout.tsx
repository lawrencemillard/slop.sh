import type { Metadata } from "next";
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
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
