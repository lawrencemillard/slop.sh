"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HomeCard from "@/components/HomeCard";
import GitHubActivity from "@/components/GitHubActivity";
import MozartGallery from "@/components/MozartGallery";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "react-responsive";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomeClient() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isDesktop ? (
        <ScrollArea className="h-screen">
          <Navbar />
          <main className="container mx-auto px-4 space-y-24 py-40">
            <Suspense fallback={<Skeleton className="h-24 w-full" />}>
              <HomeCard />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-24 w-full" />}>
              <GitHubActivity />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-24 w-full" />}>
              <MozartGallery />
            </Suspense>
          </main>
        </ScrollArea>
      ) : (
        <>
          <Navbar />
          <main className="container mx-auto px-4 space-y-24 py-40">
            <Suspense fallback={<Skeleton className="h-24 w-full" />}>
              <HomeCard />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-24 w-full" />}>
              <GitHubActivity />
            </Suspense>
            <Suspense fallback={<Skeleton className="h-24 w-full" />}>
              <MozartGallery />
            </Suspense>
          </main>
        </>
      )}
    </>
  );
}
