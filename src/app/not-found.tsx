import Link from "next/link";
import GridPattern from "@/components/ui/grid-pattern";

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
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for does not exist. It may have been moved,
          or is under construction.
        </p>
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
