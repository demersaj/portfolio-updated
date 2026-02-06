import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Technical Product Manager - AI Application',
    company: 'webAI',
    period: 'Feb. 2026 - Present',
    description: 'Own product strategy and execution for a decentralized, privacy-first AI platform enabling secure, on-device and peer-to-peer intelligence delivery. Lead cross-functional initiatives across AI infrastructure, on-device LLM inference, and distributed architecture; drive roadmap and long-term vision with Engineering, Design, and Leadership.',
    skills: ['Product Strategy', 'AI/ML', 'Distributed Systems', 'Cross-Functional Leadership', 'On-Device Inference'],
    url: 'https://webai.com',
  },
  {
    title: 'Technical Product Manager - AI Application',
    company: 'webAI',
    period: 'March 2024 - Feb. 2026',
    description: 'Led the end-to-end development of a no-code AI/ML platform, empowering users to build and deploy models without coding. Bridged complex technology with intuitive design and optimized for Apple hardware to enhance on-device performance and privacy.',
    skills: ['AI/ML', 'Product Strategy', 'No-Code Platform', 'Apple Silicon'],
    url: 'https://webai.com',
  },
  {
    title: 'Software Project Manager',
    company: 'Apptronik',
    period: 'June 2023 - Feb. 2024',
    description: 'Led the end-to-end delivery of AI/ML software for a general-purpose, humanoid robot, managing project plans to ensure on-time and on-budget execution. Acted as the key bridge between engineering teams, aligning software development with hardware delivery to ensure successful integration.',
    skills: ['Robotics', 'AI/ML', 'Project Management', 'Hardware Integration'],
    url: 'https://apptronik.com',
  },
  {
    title: 'Associate Product Manager - Computer Vision',
    company: 'Flash',
    period: 'July 2022 - April 2023',
    description: 'Managed the product roadmap and development for a computer vision program, making key trade-offs and working with cross-functional teams to deliver innovative SaaS features. Responsibilities included defining product requirements based on market data and creating testing protocols for the rapid deployment of both hardware and software.',
    skills: ['Computer Vision', 'SaaS', 'Product Roadmap', 'Agile'],
    url: 'https://flashparking.com',
  },
  {
    title: 'Project Manager I/II - Strategic Projects',
    company: 'Flash',
    period: 'June 2021 - July 2022',
    description: 'Oversaw the end-to-end software development lifecycle for B2B2C engineering projects, managing technical risks and ensuring agile execution across cross-functional teams. Focused on spearheading technical execution to deploy robust software solutions on schedule while managing resources to meet budgetary constraints.',
    skills: ['B2B2C', 'Agile', 'Risk Management', 'Resource Planning'],
    url: 'https://flashparking.com',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-cyan text-sm font-medium uppercase tracking-widest mb-4"
          >
            Experience
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Career Journey
          </motion.h2>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-cyan/20 to-transparent hidden sm:block" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-0 hidden sm:block ${
                index % 2 === 0 ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
              }`}>
                <div className="w-4 h-4 rounded-full bg-cyan border-4 border-background shadow-glow" />
              </div>
              
              {/* Card */}
              <div className={`ml-12 sm:ml-0 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                <div className="group p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyan/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-cyan" />
                        <span className="text-sm text-cyan font-medium">{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <a 
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-cyan transition-colors"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-muted-foreground border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
