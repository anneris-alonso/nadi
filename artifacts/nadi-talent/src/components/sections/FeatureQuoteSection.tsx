import { motion } from "framer-motion";
import BrandSlicedArt from "../BrandSlicedArt";

export default function FeatureQuoteSection() {
  return (
    <section className="bg-white text-black border-y border-black/5 relative overflow-hidden flex flex-col lg:flex-row items-stretch">
      {/* Brand Art Side (Left) */}
      <div className="lg:w-2/5 w-full bg-white relative">
        <BrandSlicedArt />
      </div>

      {/* Quote Side (Right) */}
      <div className="lg:w-3/5 flex items-center justify-center p-8 md:p-24 py-20 lg:py-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
            "We don't just fill seats; we architect the human infrastructure of your <span className="italic text-primary">future growth</span>."
          </h2>
          
          <div className="mt-12 h-px w-32 bg-black/10"></div>
          <div className="mt-8 text-sm uppercase tracking-widest text-black/40 font-medium font-serif italic">
            The Nadi Commitment
          </div>
        </motion.div>
      </div>
    </section>
  );
}
