import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import Statistics from "@/components/home/Statistics";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <Statistics />
    </main>
  );
}