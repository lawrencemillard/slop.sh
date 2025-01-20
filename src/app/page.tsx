import HomeCard from "@/components/HomeCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 container mx-auto">
          <HomeCard />
        </main>
      </div>
    </>
  );
}
