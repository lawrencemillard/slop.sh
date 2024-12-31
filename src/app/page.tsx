import GridPattern from "@/components/ui/grid-pattern";
import LetterPullup from "@/components/ui/letter-pullup";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Metadata } from "next";

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
        url: "/meta.png",
        width: 800,
        height: 200,
        alt: "Slop",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://slop.sh"),
};

export default function Home() {
  return (
    <>
      <GridPattern
        className="fixed inset-0 text-primary/10 z-0"
        height={50}
        width={50}
        style={{ opacity: 0.1 }}
      />
      <Navbar />
      <div className="bg-background text-foreground flex flex-col items-center justify-center h-screen">
        <Link
          className="text-4xl font-bold glow hover:bg-primary/10 rounded transition-colors duration-200 ease-in-out px-8 select-none"
          href="/"
          about="slop.sh"
        >
          <LetterPullup
            words="slop.sh"
            className="text-foreground"
            delay={0.15}
          />
        </Link>
      </div>
    </>
  );
}
