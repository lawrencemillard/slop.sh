import Link from "next/link";
import GridPattern from "@/components/ui/grid-pattern";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | slop.sh",
  description: "Page Not Found",
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
    title: "404 | slop.sh",
    description: "Page Not Found",
  },
  metadataBase: new URL("https://slop.sh"),
};

export default function NotFound() {
  return (
    <>
      <GridPattern
        className="fixed inset-0 text-primary/10 z-0"
        height={50}
        width={50}
        style={{ opacity: 0.1 }}
      />
      <div className="flex flex-col items-center justify-center h-screen text-foreground">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <Link
          className="text-lg font-bold hover:bg-primary/10 rounded transition-colors duration-200 ease-in-out px-8 py-2 select-none"
          href="/"
        >
          Go back home
        </Link>
      </div>
    </>
  );
}
