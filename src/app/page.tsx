import GridPattern from "@/components/ui/grid-pattern";
import Navbar from "@/components/Navbar";
import HomeCard from "@/components/HomeCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <GridPattern
        className="fixed inset-0 text-primary/10 z-0"
        height={50}
        width={50}
        style={{ opacity: 0.1 }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto">
        <HomeCard />
      </main>
    </div>
  );
}
