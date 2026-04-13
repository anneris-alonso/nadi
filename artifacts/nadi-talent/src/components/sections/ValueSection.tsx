import { motion } from "framer-motion";

export default function ValueSection() {
  return (
    <section className="py-32 bg-black text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop" 
                alt="Corporate Architecture" 
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-white/20 m-4 rounded-sm mix-blend-overlay"></div>
              
              {/* Glassmorphism Card Overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-white/50">Status</span>
                  <span className="text-xs uppercase tracking-widest text-primary font-bold">Verified</span>
                </div>
                <div className="h-px w-full bg-white/10 mb-4"></div>
                <p className="font-serif text-xl">"NADI transformed our Q3 expansion. 40 engineers placed in 14 days."</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="text-secondary text-sm tracking-[0.2em] uppercase mb-4">The Platform</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              AI-Powered.<br />Human-Centric.
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed font-light">
              Our proprietary platform uses advanced machine learning to match candidates not just on skills, but on cultural fit, work style, and long-term potential. We automate the friction so you can focus on the connection.
            </p>

            <ul className="space-y-6">
              {[
                "Algorithmic candidate matching",
                "Automated credential verification",
                "Seamless interview scheduling",
                "End-to-end relocation support"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <span className="text-primary text-sm font-mono tracking-widest">0{i+1}</span>
                  <span className="text-lg font-serif">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
