import { useTheme } from "../context/ThemeContext";
import { experienceTimeline } from "../data/portfolioData";
import { 
  Rocket, 
  Brain, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Code2
} from "lucide-react";

const iconMap = {
  Rocket: Rocket,
  Brain: Brain,
  GraduationCap: GraduationCap,
};

export default function Experience() {
  const { isDark } = useTheme();

  return (
    <section
      id="experience"
      className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark 
          ? "bg-slate-950 text-slate-100 border-slate-800/80" 
          : "bg-slate-50 text-slate-900 border-slate-200"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 bg-cyan-500/10">
            <Sparkles size={13} />
            <span>Growth & Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering <span className="text-gradient-cyan">Journey & Experience</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A chronological timeline of hands-on software development, applied artificial intelligence projects, and computer science foundations.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* Vertical Central Glowing Neon Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-cyan-500 via-teal-400 to-emerald-500/30 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]" />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {experienceTimeline.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Code2;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Glowing Node Point */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 z-20">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-950 border-2 border-cyan-500 dark:border-cyan-400 p-2 shadow-lg shadow-cyan-500/20 dark:shadow-cyan-500/40 flex items-center justify-center group hover:scale-115 hover:border-emerald-500 transition-all duration-300">
                      <IconComponent size={20} className="text-cyan-600 dark:text-cyan-400 group-hover:text-emerald-500 transition-colors" />
                    </div>
                  </div>

                  {/* Content Card (Opposite sides on desktop, offset on mobile) */}
                  <div
                    className={`w-full md:w-[calc(50%-40px)] pl-16 md:pl-0 ${
                      isEven ? "md:text-left" : "md:text-left"
                    }`}
                  >
                    <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all duration-300 bg-white dark:bg-slate-900/75 shadow-lg shadow-slate-200/50 dark:shadow-2xl dark:shadow-cyan-950/40 group">
                      
                      {/* Top Badges Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400">
                          <Calendar size={13} />
                          <span>{item.period}</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/30">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Role */}
                      <div className="mt-3 space-y-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-300">
                          {item.role}
                        </p>
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {item.organization}
                        </p>
                      </div>

                      {/* Summary */}
                      <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {item.summary}
                      </p>

                      {/* Concise Engineering Achievements */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold block">
                          Key Achievements:
                        </span>
                        <ul className="space-y-2">
                          {item.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                              <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Chips */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                        {item.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800/90 dark:text-cyan-300 dark:border-slate-700/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
