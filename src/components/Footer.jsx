import { personalInfo, navigationLinks } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowUp
} from "lucide-react";

export default function Footer() {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 ${
        isDark 
          ? "bg-slate-950 text-slate-400 border-slate-800/80" 
          : "bg-slate-100 text-slate-600 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-emerald-400 p-[2px] shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400 text-base">
                  MY
                </div>
              </div>
              <span className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Manish Yadav
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Web Developer & AI/ML Engineer building scalable, accessible, and high-performance digital solutions.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-sm dark:shadow-none"
              >
                <Github size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-sm dark:shadow-none"
              >
                <Linkedin size={18} />
              </a>

              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                title="Send Email"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-sm dark:shadow-none"
              >
                <Mail size={18} />
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                title="Direct Call"
                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 hover:scale-110 transition-all shadow-sm dark:shadow-none"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Explore Sections
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Recruiter Quick Actions (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold">
              Recruiter Resources
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={personalInfo.cvUrl}
                download="Manish_Yadav_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors py-1 font-semibold"
              >
                <span>Download Resume (PDF)</span>
              </a>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Location: {personalInfo.location}
              </p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium">
                ● Open for immediate opportunities
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} {personalInfo.name}. Engineered with React 19, Tailwind CSS & Vite.</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
