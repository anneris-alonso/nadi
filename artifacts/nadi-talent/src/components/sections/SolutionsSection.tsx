import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CardProps {
  number?: string;
  title?: string;
  text?: string;
  isGlass?: boolean;
  image?: string;
  color?: string;
  arrowDirection?: "right" | "down" | "up" | "left" | null;
  className?: string;
  delay?: number;
}

const Card = ({ number, title, text, isGlass, image, color, arrowDirection, className, delay = 0 }: CardProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div className={`relative ${className}`}>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 1, 
          delay, 
          ease: [0.16, 1, 0.3, 1] as const // Apple-style curve
        }}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        className="relative w-full aspect-[4/5] md:aspect-auto md:h-[380px] overflow-hidden group rounded-none"
      >
        {isGlass ? (
          <div className="w-full h-full p-0 relative group rounded-none overflow-hidden border border-white/10 shadow-2xl">
            {image && (
              <motion.img 
                src={image} 
                alt="Context" 
                style={{ y }}
                className="absolute inset-0 w-full h-[120%] object-cover opacity-100 grayscale-[100%] saturate-0 group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            )}
            {/* Clear "Glass Frame" overlay - border and inner glow only, center is clear */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-none">
               <div className="absolute inset-0 border border-white/30 rounded-none shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"></div>
               {/* Refracted edge effect */}
               <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
               <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        ) : (
          <div 
            className="w-full h-full p-8 flex flex-col justify-between text-white relative z-20 group-hover:shadow-2xl transition-shadow rounded-none"
            style={{ backgroundColor: color }}
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 border-t border-l border-white/30"></div>
              <motion.span 
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 0.4, x: 0 }}
                transition={{ delay: delay + 0.3 }}
                className="text-4xl font-serif"
              >
                {number}
              </motion.span>
            </div>
            
            <div className="relative z-20">
              <h3 className="text-2xl font-serif mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
              <p className="text-sm opacity-80 leading-relaxed font-light">{text}</p>
            </div>
            
            {/* Decorative Corner */}
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/20"></div>
          </div>
        )}
      </motion.div>

      {/* Triangle Pointers (Desktop only) - Outside overflow container */}
      {arrowDirection && (
        <div className={`absolute z-30 hidden lg:block ${getArrowStyles(arrowDirection)}`}>
          <div 
            className="w-0 h-0" 
            style={{ 
              borderTop: "20px solid transparent",
              borderBottom: "20px solid transparent",
              borderLeft: `25px solid ${isGlass ? "rgba(255,255,255,0.3)" : color}`,
              filter: "drop-shadow(0 0 10px rgba(0,0,0,0.2))"
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

const getArrowStyles = (dir: string) => {
  switch (dir) {
    case "right": return "top-1/2 -right-3 -translate-y-1/2 translate-x-1/2";
    case "down": return "bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 rotate-90";
    case "up": return "top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-90";
    case "left": return "top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rotate-180";
    default: return "";
  }
};

export default function SolutionsSection() {
  const brandTeal = "#08646d";
  const brandGold = "#ac822f";

  const solutions = [
    {
      id: "01",
      title: "Manpower",
      text: "Rapid deployment of pre-trained, service-ready teams at scale. Seamlessly connecting the immense talent pools of Asia with the GCC.",
      color: brandTeal,
      img: "/images/hr_team_collaboration_1776111548169.png"
    },
    {
      id: "02",
      title: "Staffing Solutions",
      text: "Flexible and verified talent placement to meet your immediate operational demands. Fill critical roles in days, not months.",
      color: brandGold,
      img: "/images/corporate_handshake_trust_1776111577304.png"
    },
    {
      id: "03",
      title: "Specialized Search",
      text: "AI-powered, human-centric matching for highly skilled and critical roles. Top-tier professionals based on exact skills.",
      color: brandGold, // Changed to Gold to alternate with 01
      img: "/images/recruitment_tech_abstract_1776111562869.png"
    },
    {
      id: "04",
      title: "RPO (Recruitment Process Outsourcing)",
      text: "End-to-end management of your hiring infrastructure. Algorithmic sourcing and seamless relocation support.",
      color: brandTeal, // Changed to Teal to alternate with 02
      img: "/images/global_infrastructure_nodes_1776111591924.png"
    }
  ];

  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px] opacity-20"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-start md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-secondary text-sm tracking-[0.4em] uppercase mb-4 block font-medium"
            >
              Our Solutions
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white text-5xl md:text-7xl font-serif leading-[1.1]"
            >
              Tailored Excellence<br />at Every Stage.
            </motion.h2>
          </div>
        </div>

        {/* 8-Card Grid with 15px Gap (gap-4 is 16px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
          {/* Card 1: 01 Manpower */}
          <Card 
            number={solutions[0].id}
            title={solutions[0].title}
            text={solutions[0].text}
            color={solutions[0].color}
            arrowDirection="right"
            delay={0.1}
          />
          
          {/* Card 2: Glass (matches Manpower) */}
          <Card isGlass image={solutions[0].img} delay={0.2} />
          
          {/* Card 3: 03 Search */}
          <Card 
            number={solutions[2].id}
            title={solutions[2].title}
            text={solutions[2].text}
            color={solutions[2].color}
            arrowDirection="right"
            delay={0.5} 
          />
          
          {/* Card 4: Glass (matches Search) */}
          <Card isGlass image={solutions[2].img} delay={0.6} />

          {/* Row 2 */}
          
          {/* Card 5: Glass (Extra/Filler) */}
          <Card isGlass image="/images/global_infrastructure_nodes_1776111591924.png" delay={0.8} />

          {/* Card 6: 02 Staffing */}
          <Card 
            number={solutions[1].id}
            title={solutions[1].title}
            text={solutions[1].text}
            color={solutions[1].color}
            arrowDirection="right"
            delay={0.3}
          />
          
          {/* Card 7: Glass (matches Staffing) */}
          <Card isGlass image={solutions[1].img} delay={0.4} />
          
          {/* Card 8: 04 RPO */}
          <Card 
            number={solutions[3].id}
            title={solutions[3].title}
            text={solutions[3].text}
            color={solutions[3].color}
            delay={0.7}
          />
        </div>
      </div>
    </section>
  );
}
