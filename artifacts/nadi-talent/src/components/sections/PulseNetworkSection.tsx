import { motion } from "framer-motion";

export default function PulseNetworkSection() {
  return (
    <section className="py-24 bg-[#2e3233] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-secondary text-sm tracking-[0.2em] uppercase mb-4 block">Opportunities</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight tracking-tight">
              Looking for your <br />
              <span className="italic text-primary">dream job?</span>
            </h2>
            <p className="mt-8 text-white/60 text-lg font-light leading-relaxed max-w-md">
              Join our exclusive talent network and get matched with top-tier opportunities in the GCC and beyond.
            </p>
            <div className="mt-10">
               <button className="border border-white/30 hover:border-primary hover:text-primary transition-all px-8 py-3 rounded-full text-sm uppercase tracking-widest font-medium">
                 Get Started
               </button>
            </div>
          </motion.div>

          {/* Right Side: Spline Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-2xl mx-auto min-h-[500px] overflow-hidden rounded-2xl bg-[#252828] shadow-2xl">
              <video 
                src="/videos/app.mp4"
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
