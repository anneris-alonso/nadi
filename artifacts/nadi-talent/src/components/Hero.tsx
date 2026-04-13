import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black flex items-center justify-center">

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-5xl mx-auto text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 border border-white/20 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="text-white/90 text-xs tracking-[0.2em] uppercase font-medium">Global Hiring Infrastructure</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] tracking-tighter mb-6"
        >
          Hire <span className="text-primary italic">Ready.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-white/70 max-w-2xl font-light tracking-wide mb-12"
        >
          Connecting Asia to the GCC with pre-trained talent at unprecedented speed, quality, and ethical standards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button data-testid="hero-cta-primary" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-medium transition-all shadow-[0_0_20px_rgba(8,100,109,0.3)]">
            Explore Platform
          </button>
          <button data-testid="hero-cta-secondary" className="border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-medium transition-all">
            Join the Waitlist
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
      </motion.div>
    </section>
  );
}
