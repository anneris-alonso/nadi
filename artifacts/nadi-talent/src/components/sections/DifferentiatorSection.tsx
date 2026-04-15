import { motion } from "framer-motion";
import { Zap, ShieldCheck, Globe, Scale } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-secondary" />,
    title: "Unprecedented Speed",
    description: "Our pre-trained talent pool means you skip the sourcing phase. Fill critical roles in days, not months."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-secondary" />,
    title: "Verified Quality",
    description: "Every candidate undergoes rigorous technical, cultural, and linguistic assessment before joining the NADI network."
  },
  {
    icon: <Globe className="w-6 h-6 text-secondary" />,
    title: "Global Scale",
    description: "Seamlessly connecting the immense talent pools of Asia with the rapidly expanding demands of the GCC."
  },
  {
    icon: <Scale className="w-6 h-6 text-secondary" />,
    title: "Zero Candidate Fees",
    description: "We believe in ethical hiring. Candidates never pay a fee to find work, ensuring you get talent driven by merit, not circumstance."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function DifferentiatorSection() {
  return (
    <section id="differentiators" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase mb-4 block">The Infrastructure</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">Engineered for the Modern Economy</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="group p-8 border border-border bg-card hover:bg-[#2e3233] hover:text-white transition-all duration-500 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary transition-colors duration-500 rounded-t-2xl"></div>
              <div className="mb-6 p-4 rounded-full bg-muted/50 w-fit group-hover:bg-white/10 transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-white">{feature.title}</h3>
              <p className="text-muted-foreground group-hover:text-white/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
