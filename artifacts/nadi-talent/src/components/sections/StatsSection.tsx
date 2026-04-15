import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = value / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-32 bg-[#2e3233] text-white relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="text-center md:py-8">
            <div className="text-6xl md:text-8xl font-serif text-white mb-4">
              <AnimatedCounter value={50} suffix="K+" />
            </div>
            <div className="text-sm uppercase tracking-widest text-white/50 font-medium">Pre-trained Candidates</div>
          </div>

          <div className="text-center py-16 md:py-8">
            <div className="text-6xl md:text-8xl font-serif text-white mb-4">
              <AnimatedCounter value={12} />
            </div>
            <div className="text-sm uppercase tracking-widest text-white/50 font-medium">Source Countries</div>
          </div>

          <div className="text-center pt-16 md:py-8">
            <div className="text-6xl md:text-8xl font-serif text-white mb-4 text-secondary">
              <AnimatedCounter value={0} />
            </div>
            <div className="text-sm uppercase tracking-widest text-white/50 font-medium">Placement Fees for Talent</div>
          </div>

        </div>
      </div>
    </section>
  );
}
