import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-40 bg-[#2e3233] relative overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        src="/videos/nadi_logo_animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-lighten grayscale"
      />
      
      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-[#2e3233]/40 backdrop-blur-[2px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/95 backdrop-blur-2xl border border-white/20 p-12 md:p-24 lg:p-32 text-center relative rounded-sm shadow-2xl overflow-hidden"
        >
          {/* Gold Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-6 block">Join the Network</span>
          
          <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-8 leading-tight">
            Stop Searching.<br />Start <span className="italic text-secondary">Building.</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Request access to the world's most powerful hiring infrastructure. Pre-vetted, highly skilled talent ready to scale your vision.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button data-testid="bottom-cta-primary" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-medium transition-all">
              Hire Talent Now
            </button>
            <button data-testid="bottom-cta-secondary" className="border border-border hover:border-foreground/30 bg-transparent px-8 py-4 rounded-sm text-sm uppercase tracking-widest font-medium transition-all">
              View Platform Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
