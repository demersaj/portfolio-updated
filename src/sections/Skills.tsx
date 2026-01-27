import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, Database, Globe, Layout, 
  BarChart3, Eye, Target, GitBranch, 
  Cloud, Palette, Bot, Workflow,
  Layers, Cpu, MessageSquare, Sparkles
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    skills: [
      { name: 'Python', icon: Database },
      { name: 'JavaScript ES6+', icon: Globe },
      { name: 'SQL', icon: Database },
      { name: 'React', icon: Layout },
      { name: 'MongoDB/JSON', icon: Database },
    ],
  },
  {
    title: 'Applications & Tools',
    icon: BarChart3,
    skills: [
      { name: 'Redash', icon: BarChart3 },
      { name: 'Looker', icon: Eye },
      { name: 'Tableau', icon: BarChart3 },
      { name: 'Jira', icon: Target },
      { name: 'Postman', icon: MessageSquare },
      { name: 'Git', icon: GitBranch },
      { name: 'AWS', icon: Cloud },
      { name: 'Figma', icon: Palette },
      { name: 'Miro', icon: Layers },
    ],
  },
  {
    title: 'AI/ML Technologies',
    icon: Bot,
    skills: [
      { name: 'Hugging Face', icon: Bot },
      { name: 'LangChain', icon: Workflow },
      { name: 'n8n', icon: Workflow },
    ],
  },
];

const aiExpertise = [
  { name: 'LLMs', icon: Sparkles, description: 'Large Language Models' },
  { name: 'Agentic AI', icon: Bot, description: 'Autonomous AI Agents' },
  { name: 'Machine Learning', icon: Cpu, description: 'ML Models & Pipelines' },
  { name: 'Computer Vision', icon: Eye, description: 'CV & Image Processing' },
  { name: 'SLMs', icon: Cpu, description: 'Small Language Models' },
  { name: 'MLLMs', icon: Sparkles, description: 'Multimodal LLMs' },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-cyan text-sm font-medium uppercase tracking-widest mb-4"
          >
            Skills
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Technical Expertise
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building AI-powered products
          </motion.p>
        </div>

        {/* AI Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-white mb-6 text-center">AI & ML Specializations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {aiExpertise.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="group p-4 rounded-xl bg-gradient-to-br from-cyan/10 to-purple/10 border border-white/5 hover:border-cyan/30 transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-cyan/20 transition-colors">
                  <item.icon className="w-5 h-5 text-cyan" />
                </div>
                <h4 className="text-white font-medium text-sm mb-1">{item.name}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-cyan" />
                </div>
                <h3 className="text-white font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <skill.icon className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-sm text-white">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
