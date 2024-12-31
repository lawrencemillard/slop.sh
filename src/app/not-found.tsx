import Link from "next/link";
import GridPattern from "@/components/ui/grid-pattern";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for could not be found." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slop.sh/404" />
        <meta property="og:title" content="404 - Page Not Found" />
        <meta property="og:description" content="The page you are looking for could not be found." />
        <meta property="og:image" content="https://slop.sh/meta.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:alt" content="Slop" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://slop.sh/404" />
        <meta name="twitter:title" content="404 - Page Not Found" />
        <meta name="twitter:description" content="The page you are looking for could not be found." />
        <meta name="twitter:image" content="https://slop.sh/meta.png" />
      </Head>
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