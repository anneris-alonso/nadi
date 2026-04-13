import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
          <span className="text-white font-serif font-semibold text-lg">N</span>
        </div>
        <span className="text-white font-sans font-medium tracking-widest text-sm uppercase">
          NADI
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#vision" className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Vision</a>
        <a href="#differentiators" className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Why Us</a>
        <a href="#story" className="text-white/70 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium">Platform</a>
      </div>

      <button
        data-testid="nav-cta"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-sm text-sm uppercase tracking-widest font-medium transition-all"
      >
        Hire Talent
      </button>
    </motion.nav>
  );
}
