import { useTheme } from "../context/ThemeContext";
import { personalInfo, focusAreas } from "../data/portfolioData";
import { 
  Download, 
  Code2, 
  Brain, 
  Database, 
  Layout, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function About() {
  const { isDark } = useTheme();

  const iconMap = {
    Layout: Layout,
    Brain: Brain,
    Database: Database,
  };

  const engineeringHighlights = [
    "Proven experience building full-stack production systems with React, Node.js, Express, MongoDB, and sandboxed C++ engines.",
    "Hands-on machine learning engineering: trained behavioral LSTM keystroke biometric models (96% anomaly detection) and real-time OpenCV detection pipelines.",
    "Strong Computer Science core: Data Structures, Algorithms, DBMS, Operating Systems, and System Design.",
    "Passionate about user-centric product engineering, sub-100ms microservices, and clean, modular architectures.",
  ];

  return (
    <section
      id="about"
      className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark 
          ? "bg-slate-950 text-slate-100 border-slate-800/80" 
          : "bg-white text-slate-900 border-slate-200"
      }`}
    >
      {/* Decorative ambient radial spot */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 bg-cyan-500/10">
            <Sparkles size={13} />
            <span>Background & Engineering Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About <span className="text-gradient-cyan">My Journey</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Bridging foundational computer science principles with modern full-stack web and applied AI engineering.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Key Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Code2 className="text-cyan-600 dark:text-cyan-400" size={24} />
                <span>Crafting High-Performance Systems</span>
              </h3>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I am a Computer Science engineer driven by the challenge of turning complex problems into elegant, reliable software. My work lives at the intersection of modern full-stack engineering and practical artificial intelligence.
              </p>

              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Whether implementing C++ process-isolated code sandboxes with memory quotas, optimizing MongoDB aggregation pipelines for sub-50ms query turnaround, or training behavioral ML biometric models, my focus is always on <strong className="text-cyan-700 dark:text-cyan-400 font-semibold">speed, reliability, and tangible value delivery</strong>.
              </p>

              {/* Bullet checklist of engineering values */}
              <div className="pt-4 space-y-3.5 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-600 dark:text-slate-400 font-semibold">
                  Core Engineering Capabilities:
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {engineeringHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CV Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={personalInfo.cvUrl}
                  download="Manish_Yadav_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md shadow-cyan-950"
                >
                  <Download size={16} />
                  <span>Download Complete Resume</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all bg-white dark:bg-slate-900/50 shadow-sm dark:shadow-none"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
              <Cpu size={18} />
              <span>Core Specializations</span>
            </h3>

            <div className="space-y-4">
              {focusAreas.map((area, index) => {
                const IconComponent = iconMap[area.icon] || Code2;
                return (
                  <div
                    key={index}
                    className="glass-card rounded-xl p-5 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group bg-white dark:bg-slate-900/70 shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all shrink-0">
                        <IconComponent size={22} />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {area.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Tech Highlights Pill Box */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-none">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold block mb-3">
                Primary Stack Focus:
              </span>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Node.js", "C++ Engine", "Python", "OpenCV", "Express", "MongoDB", "Tailwind CSS", "Jest", "LSTM"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium font-mono bg-white dark:bg-slate-800/80 text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-cyan-500/20 shadow-sm dark:shadow-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
