import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import Statistics from "@/components/home/Statistics";
import Features from "@/components/home/Features";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import AiTutor from "@/components/home/AiTutor";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <Statistics />
      <Features />
      <FeaturedCourses />
      <AiTutor />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}