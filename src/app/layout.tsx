import type { Metadata } from "next";
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
        url: "https://r2.e-z.host/ca19848c-de8c-4cae-9a10-858d6fd864b7/kkhp19rx.png",
        width: 442,
        height: 109,
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
