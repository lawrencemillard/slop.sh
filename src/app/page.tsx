import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import HomeCard from "@/components/HomeCard";
import GitHubActivity from "@/components/GitHubActivity";
import MozartGallery from "@/components/MozartGallery";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <ScrollArea className="h-screen">
      <Navbar />
      <main className="container mx-auto px-4 space-y-24 py-40">
        <Suspense fallback={<div>Loading...</div>}>
          <HomeCard />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <GitHubActivity />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <MozartGallery />
        </Suspense>
      </main>
    </ScrollArea>
  );
}
