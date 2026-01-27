import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';

const certifications = [
  {
    name: 'Cognitive Project Management for AI (CPMAI)+ PLUS',
    issuer: 'Project Management Institute',
    date: 'June 2025',
    description: 'Advanced certification for managing AI and cognitive computing projects with proven methodologies.',
    skills: ['AI Project Management', 'ML Operations', 'Agile AI'],
    url: 'https://www.pmi.org',
  },
  {
    name: 'Certified Scrum Product Owner (CSPO)',
    issuer: 'Scrum Alliance',
    date: 'June 2022',
    description: 'Certified in Scrum product ownership, backlog management, and agile product delivery.',
    skills: ['Scrum', 'Agile', 'Product Ownership'],
    url: 'https://www.scrumalliance.org',
  },
  {
    name: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute',
    date: 'April 2022',
    description: 'Globally recognized certification for project management excellence and best practices.',
    skills: ['Project Management', 'Risk Management', 'Stakeholder Management'],
    url: 'https://www.pmi.org',
  },
];

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-cyan text-sm font-medium uppercase tracking-widest mb-4"
          >
            Certifications
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
          >
            Professional Credentials
          </motion.h2>
        </div>

        {/* Certifications Grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyan/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mb-5 group-hover:from-cyan/30 group-hover:to-purple/30 transition-all">
                <Award className="w-7 h-7 text-cyan" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                {cert.name}
              </h3>
              
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-cyan transition-colors mb-3"
              >
                {cert.issuer}
                <ExternalLink className="w-3 h-3" />
              </a>
              
              <div className="flex items-center gap-2 text-sm text-cyan mb-4">
                <Calendar className="w-4 h-4" />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {cert.description}
              </p>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-cyan/10 text-cyan"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
