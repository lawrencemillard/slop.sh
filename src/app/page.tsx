import GridPattern from "@/components/ui/grid-pattern";
import LetterPullup from "@/components/ui/letter-pullup";
import Navbar from "@/components/Navbar";

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
        <button className="text-4xl font-bold glow hover:bg-primary/10 rounded transition-colors duration-200 ease-in-out px-8 select-none">
          <LetterPullup
            words="slop.sh"
            className="text-foreground"
            delay={0.15}
          />
        </button>
      </div>
    </>
  );
}
