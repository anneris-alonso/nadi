import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import VisionSection from "@/components/sections/VisionSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import FeatureQuoteSection from "@/components/sections/FeatureQuoteSection";
import ValueSection from "@/components/sections/ValueSection";
import PulseNetworkSection from "@/components/sections/PulseNetworkSection";
import StorySection from "@/components/sections/StorySection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] bg-background text-foreground">
      <Nav />
      <Hero />
      <ProblemSection />
      <VisionSection />
      <DifferentiatorSection />
      <SolutionsSection />
      <FeatureQuoteSection />
      <ValueSection />
      <PulseNetworkSection />
      <StorySection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
