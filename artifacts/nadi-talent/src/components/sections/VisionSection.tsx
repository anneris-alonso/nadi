import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);

  return (
    <section id="vision" ref={containerRef} className="py-40 bg-black text-white relative min-h-[100dvh] flex items-center">
      {/* Background Image */}
      <img
        src="/images/people-backgound.jpg"
        alt="People background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale"
      />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight">
          We are building a world where hiring is <br />
          <span className="italic text-primary">fast</span>,{" "}
          <span className="italic text-primary">transparent</span>, and{" "}
          <span className="italic text-primary">ethical</span>.
        </h2>
        <div className="mt-12 flex justify-center">
          <div className="w-[1px] h-24 bg-gradient-to-b from-secondary to-transparent"></div>
        </div>
      </motion.div>
    </section>
  );
}
