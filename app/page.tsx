import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <Navbar />
      <Hero />
      <Features />
      <Process />
      <Testimonials />
      <Pricing />
      {/* Sections will be added here */}
    </main>
  );
}
