import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Lightbulb, Users, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Expertise',
    description: 'Deep understanding of machine learning models and their practical applications',
  },
  {
    icon: Lightbulb,
    title: 'Product Strategy',
    description: 'Translating complex technical concepts into scalable, user-centric products',
  },
  {
    icon: Users,
    title: 'Cross-functional Leadership',
    description: 'Bridging the gap between technical teams and business objectives',
  },
  {
    icon: Rocket,
    title: 'End-to-End Delivery',
    description: 'From concept to production, managing the full product lifecycle',
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-cyan text-sm font-medium uppercase tracking-widest mb-4"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Bridging AI & Product
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                I am a dedicated professional at the intersection of machine learning and product 
                management, driven by a passion for building innovative, data-informed solutions 
                that deliver meaningful impact.
              </p>
              <p>
                With a strong foundation in developing and deploying machine learning models, 
                combined with strategic product management expertise, I excel at transforming 
                complex technical concepts into scalable, user-centric products.
              </p>
              <p>
                Throughout my career, I&apos;ve led cross-functional teams to conceptualize, design, 
                and deliver AI-powered solutions that solve real-world problems. I thrive in roles 
                that challenge me to bridge the gap between technical teams and business objectives.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyan/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
