import { motion } from "framer-motion";

const Slice = ({ letter, index, delay }: { letter: string; index: number; delay: number }) => {
  const entranceDelay = delay + (index * 0.2);
  const revealDelay = entranceDelay + 1.2;

  return (
    <motion.div
      initial={{ x: -150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileHover="hover"
      transition={{ 
        delay: entranceDelay, 
        duration: 1.4, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="flex-1 flex items-center w-full gap-0 overflow-hidden relative group cursor-pointer bg-transparent"
    >
      {/* Translucent Green Overlay on Hover */}
      <motion.div 
        variants={{
          hover: { opacity: 0.15 }
        }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 bg-primary pointer-events-none z-30 transition-opacity duration-300"
      />

      {/* Sliced Rectangle (Strip) */}
      <div className="h-[18vh] flex-grow flex-shrink-0 relative z-20 overflow-hidden">
        {/* Layer 1: Subtle Entrance Gradient (STAY IN STRIP ONLY) */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 to-neutral-900 border-y border-black/5" />
        
        {/* Layer 2: Office Image (Delayed Reveal) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: revealDelay, duration: 0.8 }}
          className="absolute inset-0 border-y border-black/5"
          style={{ 
            backgroundImage: "url(/images/brand_sliced_bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        />
      </div>

      {/* Letter Layering (No dark background here) */}
      <div className="h-[19vh] flex items-center justify-start flex-shrink-0 relative z-20 min-w-[15vh]" style={{ marginLeft: "-10px" }}>
        {/* Solid Letter for Entrance */}
        <motion.h1 
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: revealDelay, duration: 0.6 }}
          className="absolute h-full text-[19vh] font-serif font-black uppercase text-neutral-800 leading-[1] select-none border-y border-transparent"
        >
          {letter}
        </motion.h1>

        {/* Image-Clipped Letter for Reveal */}
        <motion.h1 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: revealDelay, duration: 0.8 }}
          className="h-full text-[19vh] font-serif font-black uppercase text-transparent bg-clip-text leading-[1] select-none border-y border-black/5"
          style={{ 
            backgroundImage: "url(/images/brand_sliced_bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          {letter}
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default function BrandSlicedArt() {
  const letters = ["n", "a", "d", "i"];

  return (
    <div className="relative w-full h-[60vh] bg-white flex flex-col p-4 lg:p-12 justify-center overflow-hidden">
      <div className="flex flex-col h-full max-h-[800px] gap-2 lg:gap-4">
        {letters.map((char, i) => (
          <Slice key={i} letter={char} index={i} delay={0.5} />
        ))}
      </div>
      
      {/* Identity Label */}
      <div className="absolute top-1/2 -left-6 -translate-y-1/2 z-30 -rotate-90">
        <span className="text-[10px] uppercase tracking-[0.5em] text-black/20 font-medium whitespace-nowrap">
          Nadi Visual Identity
        </span>
      </div>
    </div>
  );
}
