import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    degree: 'M.S. in Artificial Intelligence',
    school: 'University of Colorado Boulder',
    year: '2027 (expected)',
    description: 'Deep, specialized dive into the theory and application of modern AI.',
    icon: Award,
    highlight: true,
  },
  {
    degree: 'Master of Business Administration',
    school: 'Louisiana State University Shreveport',
    year: '2022',
    description: 'Specialized in Data Analytics and Business Intelligence.',
    icon: GraduationCap,
    highlight: false,
  },
  {
    degree: 'B.S. in Computer Science',
    school: 'Oregon State University',
    year: '2019',
    description: 'Focus on data structures, algorithms, and software engineering.',
    icon: GraduationCap,
    highlight: false,
  },
  {
    degree: 'B.S. in Mechanical Engineering',
    school: 'James Madison University',
    year: '2015',
    description: 'Business minor with a focus on mechanical engineering.',
    icon: GraduationCap,
    highlight: false,
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 sm:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-cyan text-sm font-medium uppercase tracking-widest mb-4"
          >
            Education
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Academic Background
          </motion.h2>
        </div>

        {/* Education Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group relative p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                item.highlight 
                  ? 'bg-gradient-to-br from-cyan/10 to-purple/10 border border-cyan/30 hover:border-cyan/50' 
                  : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10'
              }`}
            >
              {/* Highlight Badge */}
              {item.highlight && (
                <div className="absolute -top-3 right-6">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-cyan text-background">
                    In Progress
                  </span>
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  item.highlight ? 'bg-cyan/20' : 'bg-white/5'
                }`}>
                  <item.icon className={`w-6 h-6 ${item.highlight ? 'text-cyan' : 'text-muted-foreground'}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.degree}</h3>
                  <p className="text-muted-foreground mb-2">{item.school}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-cyan mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.year}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
