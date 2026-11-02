import { useState } from "react";
import { skillCategories } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { 
  Code2, 
  Layout, 
  Server, 
  Brain, 
  Database, 
  Sparkles, 
  Terminal, 
  Zap 
} from "lucide-react";

const categoryIconMap = {
  languages: Code2,
  frontend: Layout,
  backend: Server,
  ai_ml: Brain,
  databases: Database,
};

export default function Skills() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "ai_ml", label: "AI & ML" },
    { id: "databases", label: "Databases & DevOps" },
  ];

  const displayedCategories = selectedCategory === "all"
    ? skillCategories
    : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section
      id="skills"
      className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark 
          ? "bg-slate-950 text-slate-100 border-slate-800/80" 
          : "bg-white text-slate-900 border-slate-200"
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 bg-cyan-500/10">
            <Sparkles size={13} />
            <span>Technical Proficiency & Toolset</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-gradient-cyan">Skills & Competencies</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive breakdown of languages, systems programming, modern web frameworks, AI models, and database architectures.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold shadow-md shadow-cyan-500/30 scale-105"
                    : "bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm dark:shadow-none"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

        {/* Recruiter Summary Strip */}
        <div className="mt-16 p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-900/50 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-md dark:shadow-none">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-400 text-slate-950 shrink-0">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Full-Stack & Applied AI Readiness</h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Ready to contribute across the entire product lifecycle — from sandboxed execution engines to modern React user interfaces.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#projects"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md cursor-pointer"
            >
              See Skills In Action
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function SkillCard({ category }) {
  const IconComponent = categoryIconMap[category.id] || Terminal;

  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all duration-300 bg-white dark:bg-slate-900/70 flex flex-col h-full group shadow-md hover:shadow-xl dark:shadow-none dark:hover:shadow-cyan-950/30">
      
      {/* Category Header */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
            <IconComponent size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
              {category.title}
            </h3>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              {category.skills.length} core competencies
            </span>
          </div>
        </div>

        <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 group-hover:animate-ping" />
      </div>

      {/* Skills List with Proficiency Indicators */}
      <div className="py-5 space-y-4 flex-1">
        {category.skills.map((skill, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                {skill.name}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-cyan-300 dark:border-slate-700">
                  {skill.tag}
                </span>
                <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                  {skill.level}%
                </span>
              </div>
            </div>

            {/* Glowing Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-transparent overflow-hidden p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-1000 shadow-sm"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Card Footer Tag */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
        <span>Confidence Index</span>
        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">High Proficiency</span>
      </div>

    </div>
  );
}
