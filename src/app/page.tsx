import HomeCard from "@/components/HomeCard";
import Navbar from "@/components/Navbar";
import MozartGallery from "@/components/MozartGallery";
import GitHubActivity from "@/components/GitHubActivity";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 container mx-auto">
          <HomeCard />
          <GitHubActivity />
          <MozartGallery />
        </main>
      </div>
    </>
  );
}
