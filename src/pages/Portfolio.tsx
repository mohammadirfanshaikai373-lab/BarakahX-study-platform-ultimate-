import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Download, 
  Database, 
  Cpu, 
  Layout, 
  Shield, 
  ExternalLink,
  Award,
  Globe
} from 'lucide-react';

const Portfolio = () => {
  const competencies = [
    { 
      title: 'Analytics & BI', 
      icon: Database, 
      desc: 'Expertise in Power BI, SQL, and data storytelling to drive business decisions.' 
    },
    { 
      title: 'AI-Assisted Modeling', 
      icon: Cpu, 
      desc: 'Developing predictive models and leveraging AI for complex problem-solving.' 
    },
    { 
      title: 'Frontend Foundations', 
      icon: Layout, 
      desc: 'Building responsive, user-centric web interfaces with React and Tailwind.' 
    },
    { 
      title: 'Ethical AI Systems', 
      icon: Shield, 
      desc: 'Focused on interpretable decision systems and responsible AI development.' 
    }
  ];

  const projects = [
    {
      title: 'AI-Driven Customer Delinquency Risk Analysis',
      problem: 'High default rates in micro-lending due to lack of granular risk assessment.',
      approach: 'Developed a machine learning pipeline using historical payment data and behavioral patterns.',
      tools: 'Python, Scikit-learn, SQL, Power BI',
      impact: 'Reduced default rates by 14% and improved approval speed by 30%.',
      highlights: 'Implemented SHAP values for model interpretability.'
    },
    {
      title: 'AI-Powered Collections Strategy Framework',
      problem: 'Inefficient allocation of collection resources leading to high operational costs.',
      approach: 'Built a segmentation model to prioritize high-value/low-risk recovery targets.',
      tools: 'Power BI, Azure Machine Learning, SQL',
      impact: 'Increased recovery rate by 22% while reducing staff workload.',
      highlights: 'Dynamic dashboard for real-time resource allocation.'
    },
    {
      title: 'BarakahX Educational Platform',
      problem: 'Fragmented career resources for students in emerging tech hubs.',
      approach: 'Architected a comprehensive learning management system with 3D visuals.',
      tools: 'React, Three.js, Tailwind, Node.js',
      impact: 'Onboarded 500+ students within the first month of pilot.',
      highlights: 'Custom 3D particle background and glassmorphic UI.'
    }
  ];

  const simulations = [
    { name: 'Tata Group', role: 'Data Analytics Simulation' },
    { name: 'Deloitte', role: 'Data Analytics Simulation' },
    { name: 'BCG', role: 'Data Science Simulation' }
  ];

  const certifications = [
    'Microsoft Power BI Data Analyst Associate',
    'Microsoft Azure AI Fundamentals (AI-900)',
    'Generative AI Fundamentals - Google Cloud',
    'Data Analytics Professional Certificate - Google'
  ];

  const languages = [
    { name: 'English', level: 95 },
    { name: 'Telugu', level: 85 },
    { name: 'Hindi', level: 95 },
    { name: 'Urdu', level: 100 },
    { name: 'Arabic', level: 50 }
  ];
  

  return (
    <div className="max-w-6xl mx-auto space-y-24 pb-20">
      {/* Hero Section */}
      <section className="text-center pt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/20"
        >
          AI-Augmented Analyst
        </motion.div>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          MOHAMMAD <span className="text-emerald-500">IRFAN</span> SHAIK
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          AI-augmented undergraduate with strong foundations in data analytics, business intelligence, and frontend development. Focused on ethical AI and interpretable decision systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
            <MapPin size={18} className="text-emerald-500" />
            <span>GMR Institute of Technology, AP</span>
          </div>
          <a 
            href="mailto:mohammadirfanshaikai373@gmail.com"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-xl font-bold transition-all"
          >
            <Mail size={18} /> Contact Me
          </a>
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-2 rounded-xl font-bold transition-all border border-white/10">
            <Download size={18} /> Download Resume
          </button>
        </div>
      </section>

      {/* Core Competencies */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-0.5 bg-emerald-500" /> Core Competencies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((comp) => (
            <motion.div
              key={comp.title}
              whileHover={{ y: -5 }}
              className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-2xl group"
            >
              <comp.icon className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">{comp.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{comp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-0.5 bg-emerald-500" /> Project Showcase
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 rounded-3xl overflow-hidden flex flex-col lg:flex-row group">
              <div className="lg:w-1/3 bg-emerald-500/5 p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-emerald-900/10">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.split(', ').map(tool => (
                    <span key={tool} className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/70 bg-emerald-500/10 px-2 py-1 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-emerald-500 font-bold text-sm group-hover:gap-3 transition-all">
                  View Case Study <ExternalLink size={16} />
                </button>
              </div>
              <div className="lg:w-2/3 p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">The Problem</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Technical Approach</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.approach}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Business Impact</h4>
                  <p className="text-emerald-400 font-bold text-sm">{project.impact}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Tech Highlight</h4>
                  <p className="text-gray-300 text-sm italic">"{project.highlights}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-emerald-500" /> Industry Experience
          </h2>
          <div className="space-y-4">
            {simulations.map((sim) => (
              <div key={sim.name} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{sim.name}</h3>
                  <p className="text-sm text-gray-500">{sim.role}</p>
                </div>
                <Award className="text-emerald-500/50" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-emerald-500" /> Certifications
          </h2>
          <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-3xl space-y-6">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <p className="text-gray-300 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Languages & Leadership */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-emerald-500" /> Languages
          </h2>
          <div className="bg-[#0f0f0f]/60 backdrop-blur-xl border border-emerald-900/20 p-8 rounded-3xl space-y-6">
            {languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-bold">{lang.name}</span>
                  <span className="text-emerald-500 text-xs">{lang.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.level}%` }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="w-12 h-0.5 bg-emerald-500" /> Leadership
          </h2>
          <div className="bg-emerald-600/10 border border-emerald-500/20 p-8 rounded-3xl relative overflow-hidden group">
            <Globe className="absolute -right-10 -bottom-10 text-emerald-500/10 group-hover:scale-110 transition-transform" size={240} />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Founder & Lead</h3>
              <p className="text-emerald-400 text-xl font-bold mb-4">BarakahX Educational Initiative</p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Spearheading a world-class educational platform designed to empower students with industry-relevant skills in AI, Data Analytics, and Professional Communication.
              </p>
              <div className="flex items-center gap-2 text-emerald-500 font-bold">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Driving Change
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
