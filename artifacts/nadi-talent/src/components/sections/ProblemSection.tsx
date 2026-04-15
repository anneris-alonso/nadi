import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [250, -250]);

  const words = [
    { text: "Slow.", transform: y1, color: "text-foreground" },
    { text: "Limited.", transform: y2, color: "text-foreground/80" },
    { text: "Risky.", transform: y3, color: "text-foreground/60" },
    { text: "Expensive.", transform: y4, color: "text-primary" },
  ];

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="text-center mb-16">
        <span className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase">The Old Way</span>
      </div>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-16 px-4 max-w-6xl mx-auto">
        {words.map((word, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, 
              delay: i * 0.15,
              ease: [0.16, 1, 0.3, 1] as const
            }}
            className={`text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight ${word.color}`}
          >
            <motion.div style={{ y: word.transform }}>
              {word.text}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
