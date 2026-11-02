import { useState } from "react";
import { projectsData } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ArrowUpRight,
  Calendar
} from "lucide-react";

export default function Projects() {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState("All");

  const categories = [
    "All", 
    "Full-Stack & AI/ML", 
    "Full-Stack", 
    "AI/ML & Healthcare", 
    "Computer Vision"
  ];

  const filteredProjects = filter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark 
          ? "bg-slate-950 text-slate-100 border-slate-800/80" 
          : "bg-slate-50 text-slate-900 border-slate-200"
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 bg-cyan-500/10">
            <Sparkles size={13} />
            <span>Engineered for Production & Scale</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Featured <span className="text-gradient-cyan">Engineering Projects</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real-world systems engineered with measurable impact, clear architectural separation, and Google XYZ achievement metrics.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? "bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/30 scale-105"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub Footnote */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-md dark:shadow-none">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm">
              <Github size={18} className="text-cyan-600 dark:text-cyan-400" />
              <span>Want to explore more source code, commits, and experiments?</span>
            </div>
            <a
              href="https://github.com/ManishSamarium"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 hover:border-cyan-400 transition-all cursor-pointer"
            >
              <span>Visit GitHub Repositories</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all duration-500 flex flex-col h-full bg-white dark:bg-slate-900/70 shadow-lg shadow-slate-200/50 dark:shadow-2xl dark:shadow-cyan-950/40 group"
    >
      {/* Live Preview Image Container with Dynamic Hover Zoom & crisp aspect ratio */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Sheen Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Top Badges (Category & Date) */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-white/95 dark:bg-slate-950/90 backdrop-blur-md text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 shadow-md">
            {project.badge}
          </span>
          {project.dateRange && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900/85 backdrop-blur-md text-slate-300 border border-slate-700 shadow-md">
              <Calendar size={11} className="text-cyan-400" />
              <span>{project.dateRange}</span>
            </span>
          )}
        </div>

        {/* Quick Action Overlay on Image */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              title="Open Live Deployment"
              className="p-2 rounded-lg bg-white/90 dark:bg-slate-950/85 backdrop-blur-md text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all shadow-md"
            >
              <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              className="p-2 rounded-lg bg-white/90 dark:bg-slate-950/85 backdrop-blur-md text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all shadow-md"
            >
              <Github size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 space-y-4">
        
        {/* Title and Subtitle */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight size={18} className="text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors shrink-0" />
          </h3>
          <p className="text-xs sm:text-sm font-mono text-cyan-700 dark:text-cyan-400/90 font-medium mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Project Overview */}
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {project.overview}
        </p>

        {/* GOOGLE XYZ IMPACT HIGHLIGHTS */}
        <div className="space-y-2.5 pt-3 border-t border-slate-200 dark:border-slate-800/80">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold block">
            Key Impact & Engineering Results:
          </span>
          <ul className="space-y-2">
            {project.impactBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap gap-1.5 mt-auto">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${tech.bg} ${tech.text} ${tech.border}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Dedicated Action CTA Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          {/* GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 transition-all cursor-pointer no-underline"
          >
            <Github size={15} />
            <span>Source Code</span>
          </a>

          {/* Live Demo Button with Glowing Accent */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md shadow-cyan-950 cursor-pointer no-underline"
          >
            <Zap size={14} />
            <span>Live Demo</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </div>
  );
}
