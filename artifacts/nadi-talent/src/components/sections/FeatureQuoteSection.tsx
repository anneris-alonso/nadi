import { motion } from "framer-motion";
import BrandSlicedArt from "../BrandSlicedArt";

export default function FeatureQuoteSection() {
  return (
    <section className="bg-white text-black border-y border-black/5 relative overflow-hidden flex flex-col items-center">
      {/* Brand Art Side (Left) - Disabled for performance reasons during presentation */}
      {/* <div className="lg:w-2/5 w-full bg-white relative">
        <BrandSlicedArt />
      </div> */}

      {/* Quote Side (Right) - Now centered and full width */}
      <div className="w-full flex items-center justify-center p-8 md:p-24 py-20 lg:py-40 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h2 className="text-xl md:text-4xl lg:text-6xl font-serif leading-[1.1] tracking-tight">
            "We don't just fill seats; we architect the human infrastructure of your <span className="italic text-primary">future growth</span>."
          </h2>
          
          <div className="mt-12 h-px w-32 bg-black/10 mx-auto"></div>
          <div className="mt-8 text-sm uppercase tracking-widest text-black/40 font-medium font-serif italic">
            The Nadi Commitment
          </div>
        </motion.div>
      </div>
    </section>
  );
}
