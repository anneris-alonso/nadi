import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-40 bg-background relative overflow-hidden flex items-center justify-center">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-card border border-border p-12 md:p-20 text-center relative rounded-sm shadow-2xl overflow-hidden"
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
