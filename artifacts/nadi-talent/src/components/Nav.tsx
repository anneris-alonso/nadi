import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import logoWhite from "@assets/logo_white.png";
import logoTeal from "@assets/logo_teal.png";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 transition-all duration-500 ${
        isScrolled 
          ? "py-4 border-b border-white/10 bg-[#2e3233]/80 backdrop-blur-xl" 
          : "py-6 border-b border-transparent bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <Link href="/">
          <img src={isScrolled ? logoWhite : logoTeal} alt="NADI Logo" className="h-14 w-auto cursor-pointer transition-all duration-300" />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#vision" className="text-white hover:text-primary transition-colors text-sm uppercase tracking-wider font-bold" style={{ textShadow: !isScrolled ? "0 2px 4px rgba(0,0,0,0.4)" : "none" }}>Vision</a>
        <a href="#differentiators" className="text-white hover:text-primary transition-colors text-sm uppercase tracking-wider font-bold" style={{ textShadow: !isScrolled ? "0 2px 4px rgba(0,0,0,0.4)" : "none" }}>Why Us</a>
        <a href="#story" className="text-white hover:text-primary transition-colors text-sm uppercase tracking-wider font-bold" style={{ textShadow: !isScrolled ? "0 2px 4px rgba(0,0,0,0.4)" : "none" }}>Platform</a>
      </div>

      <button
        data-testid="nav-cta"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full text-sm uppercase tracking-widest font-medium transition-all shadow-[0_0_15px_rgba(19,100,109,0.2)] hover:shadow-[0_0_25px_rgba(19,100,109,0.4)]"
      >
        Hire Talent
      </button>
    </motion.nav>
  );
}
