import { lazy, Suspense } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import VisionSection from "@/components/sections/VisionSection";

// Lazy loaded sections
const DifferentiatorSection = lazy(() => import("@/components/sections/DifferentiatorSection"));
const SolutionsSection = lazy(() => import("@/components/sections/SolutionsSection"));
const FeatureQuoteSection = lazy(() => import("@/components/sections/FeatureQuoteSection"));
const ValueSection = lazy(() => import("@/components/sections/ValueSection"));
const StorySection = lazy(() => import("@/components/sections/StorySection"));
const PulseNetworkSection = lazy(() => import("@/components/sections/PulseNetworkSection"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const StatsSection = lazy(() => import("@/components/sections/StatsSection"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal fallback to maintain layout stability during hydration
const SectionFallback = () => <div className="min-h-[400px] bg-[#2e3233]/20 animate-pulse w-full" />;

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] bg-background text-foreground">
      <Nav />
      <Hero />
      <ProblemSection />
      <VisionSection />
      
      <Suspense fallback={<div className="min-h-[800px] bg-[#2e3233]/10" />}>
        <DifferentiatorSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[1200px] bg-[#2e3233]/10" />}>
        <SolutionsSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[600px] bg-white" />}>
        <FeatureQuoteSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[800px] bg-[#2e3233]/10" />}>
        <ValueSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[800px] bg-[#2e3233]/10" />}>
        <StorySection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[800px] bg-[#2e3233]/10" />}>
        <PulseNetworkSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[500px] bg-[#2e3233]/10" />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[400px] bg-[#2e3233]/10" />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[300px] bg-[#2e3233]/10" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
