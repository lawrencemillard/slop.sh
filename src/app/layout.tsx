import type { Metadata } from "next";
import ogImage from '@/assets/meta.png';
import "./globals.css";

export const metadata: Metadata = {
  title: "slop.sh",
  description: "coming soon...",
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
    description: "coming soon...",
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
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
      <body>{children}</body>
    </html>
  );
}
