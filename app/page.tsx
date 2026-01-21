import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Strategy from "@/components/Strategy";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <Hero />
      <Features />
      <Process />
      <Comparison />
      <Testimonials />
      <Strategy />

      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
