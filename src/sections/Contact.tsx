import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, FileText, ArrowUpRight, Sparkles } from 'lucide-react';

const contactLinks = [
  {
    name: 'Resume',
    description: 'Download my CV',
    icon: FileText,
    href: '/resume.pdf',
    color: 'from-cyan/20 to-cyan/5',
  },
  {
    name: 'Email',
    description: 'Get in touch',
    icon: Mail,
    href: 'mailto:andrew@demers.com',
    color: 'from-purple/20 to-purple/5',
  },
  {
    name: 'LinkedIn',
    description: 'Connect professionally',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/andrew-demers/',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    name: 'GitHub',
    description: 'View my code',
    icon: Github,
    href: 'https://www.github.com/demersaj',
    color: 'from-green-500/20 to-green-500/5',
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Let&apos;s collaborate
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Ready to Build the Future?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Let&apos;s collaborate on building the next generation of AI-powered products. 
            I&apos;m always open to discussing innovative projects.
          </motion.p>
        </div>

        {/* Contact Links Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br border border-white/5 hover:border-cyan/30 transition-all duration-300 overflow-hidden"
              style={{ background: `linear-gradient(to bottom right, ${link.color})` }}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-1">{link.name}</h3>
                <p className="text-sm text-white/60">{link.description}</p>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-8 border-t border-white/5"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">Andrew Demers</span>
              <span className="text-muted-foreground">— AI Product Manager</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Andrew Demers. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
