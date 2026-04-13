import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="h-[200vh] bg-background relative">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        <div className="absolute top-10 left-10 z-10">
          <span className="text-xs uppercase tracking-widest text-primary font-medium">The Shift</span>
        </div>

        <motion.div style={{ x }} className="flex gap-32 px-10 md:px-32 items-center w-[200vw]">
          
          {/* Pain Point */}
          <div className="w-[50vw] flex-shrink-0">
            <h3 className="text-3xl md:text-5xl font-serif text-muted-foreground mb-6 leading-tight">
              Months spent sourcing.<br />
              Agencies charging 20%.<br />
              Candidates ghosting.
            </h3>
            <div className="h-px w-24 bg-border"></div>
          </div>

          {/* Solution */}
          <div className="w-[50vw] flex-shrink-0">
            <h3 className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight">
              A pre-vetted network.<br />
              Zero fees for talent.<br />
              Hired in <span className="text-primary italic">days.</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-md font-light">
              We built the infrastructure so you can build your company. Quality is guaranteed by our rigorous vetting protocols.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
