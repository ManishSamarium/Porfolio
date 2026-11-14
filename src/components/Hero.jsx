import { useState } from "react";
import profile from "../assets/profile.png";
import { personalInfo } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Download, 
  Check, 
  Copy, 
  ExternalLink,
  Code2,
  Layers,
  Brain,
  Cpu
} from "lucide-react";

export default function Hero() {
  const { isDark } = useTheme();
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen pt-24 pb-16 md:pt-36 md:pb-24 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern transition-colors duration-300 w-full max-w-full ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Ambient Radial Lights */}
      <div className="hero-ambient-glow" />

      {/* Floating Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 sm:w-80 h-64 sm:h-80 bg-emerald-500/10 rounded-full blur-[90px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 w-full max-w-full">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold border border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 backdrop-blur-md shadow-sm max-w-full">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="tracking-wide uppercase font-mono truncate">
                {personalInfo.status}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2 sm:space-y-3 w-full">
              <h2 className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono text-cyan-600 dark:text-cyan-400">
                Hello, I am
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] break-words">
                <span className="text-slate-900 dark:text-white">Manish</span>{" "}
                <span className="text-gradient-cyan">Yadav</span>
              </h1>

              {/* High-Impact Recruiter Value Proposition Headline */}
              <p className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 mt-2 break-words">
                {personalInfo.headline}
              </p>
            </div>

            {/* Brief Narrative */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.subheading}
            </p>

            {/* Primary Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full">
              {/* View Projects - Primary Gradient Accent */}
              <a
                href="#projects"
                className="btn-glow inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer no-underline group w-full sm:w-auto"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Download CV - Glowing Outline */}
              <a
                href={personalInfo.cvUrl}
                download="Manish_Yadav_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 border border-cyan-600/40 dark:border-cyan-500/40 bg-white/90 dark:bg-slate-900/60 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:border-cyan-500 transition-all shadow-sm cursor-pointer no-underline group w-full sm:w-auto"
              >
                <Download size={15} className="text-cyan-600 dark:text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
                <span>Download CV</span>
              </a>

              {/* Contact Me CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer no-underline w-full sm:w-auto"
              >
                <Mail size={15} className="text-emerald-600 dark:text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Contact & Social Channels Bar with Instant Copy Feedback */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              {/* Phone Badge with Copy */}
              <button
                onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                title="Click to copy phone number"
                className="group relative flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm dark:shadow-none transition-all cursor-pointer max-w-full"
              >
                {copiedType === "phone" ? (
                  <Check size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : (
                  <Phone size={14} className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                )}
                <span className="truncate">{copiedType === "phone" ? "Copied Phone!" : personalInfo.phoneDisplay}</span>
                <Copy size={12} className="text-slate-400 dark:text-slate-500 opacity-70 group-hover:opacity-100 shrink-0" />
              </button>

              {/* Email Badge with Copy */}
              <button
                onClick={() => copyToClipboard(personalInfo.email, "email")}
                title="Click to copy email address"
                className="group relative flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm dark:shadow-none transition-all cursor-pointer max-w-full"
              >
                {copiedType === "email" ? (
                  <Check size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : (
                  <Mail size={14} className="text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform shrink-0" />
                )}
                <span className="truncate">{copiedType === "email" ? "Copied Email!" : personalInfo.email}</span>
                <Copy size={12} className="text-slate-400 dark:text-slate-500 opacity-70 group-hover:opacity-100 shrink-0" />
              </button>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit GitHub Profile"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm dark:shadow-none transition-all cursor-pointer"
              >
                <Github size={14} className="text-slate-700 dark:text-slate-300 shrink-0" />
                <span>GitHub</span>
                <ExternalLink size={11} className="text-slate-400 dark:text-slate-500 shrink-0" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit LinkedIn Profile"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm dark:shadow-none transition-all cursor-pointer"
              >
                <Linkedin size={14} className="text-sky-600 dark:text-sky-400 shrink-0" />
                <span>LinkedIn</span>
                <ExternalLink size={11} className="text-slate-400 dark:text-slate-500 shrink-0" />
              </a>
            </div>

            {/* Quick Metrics Bar for Recruiters (2x2 on mobile, 4-col on desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-4 w-full">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm text-center shadow-sm dark:shadow-none"
                >
                  <div className="text-lg sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-300">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: PROFILE VISUAL & FLOATING ROLE/DOMAIN PILLS (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-4 sm:py-6 w-full overflow-visible">
            
            {/* Center Visual Frame with Ambient Halo */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-92 lg:h-92 max-w-[calc(100vw-3rem)] max-h-[calc(100vw-3rem)] mx-auto flex items-center justify-center">
              
              {/* Spinning Subtle Gradient Halo */}
              <div className="absolute inset-[-6px] sm:inset-[-8px] rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-500 opacity-40 blur-lg sm:blur-xl animate-pulse-glow pointer-events-none" />

              {/* Outer Glowing Border Ring */}
              <div className="w-full h-full rounded-full border-2 border-cyan-500/40 p-1.5 sm:p-2 shadow-2xl shadow-cyan-500/10 dark:shadow-cyan-950/60">
                <div className="w-full h-full rounded-full border border-teal-500/30 p-1.5 sm:p-2">
                  
                  {/* Inner Image Container with Glass Gradient */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-950 relative border-2 border-cyan-500/40 shadow-inner">
                    <img
                      src={profile}
                      alt="Manish Yadav - Full-Stack & AI/ML Engineer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                    
                    {/* Dark gradient sheen at bottom of avatar */}
                    <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-slate-900/60 dark:from-slate-950/90 to-transparent pointer-events-none" />
                  </div>

                </div>
              </div>

              {/* FLOATING ROLE/DOMAIN BADGE PILLS (Software Developer, Full-Stack Engineer, Machine Learning, Deep Learning) */}
              
              {/* Badge 1: Software Developer (Top Left - positioned away from face and above shoulder) */}
              <div className="absolute top-4 sm:top-2 -left-1.5 sm:-left-4 lg:-left-6 z-20 animate-float-slow">
                <div className="tech-pill flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 text-[10px] sm:text-xs font-semibold shadow-md dark:shadow-cyan-950/40 backdrop-blur-md hover:border-cyan-500/50 transition-all select-none whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping shrink-0" />
                  <Code2 size={13} className="text-cyan-500 shrink-0" />
                  <span className="font-mono tracking-tight">Software Developer</span>
                </div>
              </div>

              {/* Badge 2: Full-Stack Engineer (Top Right - shifted up above head to eliminate face overlap) */}
              <div className="absolute -top-2.5 sm:top-6 -right-1.5 sm:-right-4 lg:-right-6 z-20 animate-float-delayed">
                <div className="tech-pill flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 text-[10px] sm:text-xs font-semibold shadow-md dark:shadow-emerald-950/40 backdrop-blur-md hover:border-emerald-500/50 transition-all select-none whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <Layers size={13} className="text-emerald-500 shrink-0" />
                  <span className="font-mono tracking-tight">Full-Stack Engineer</span>
                </div>
              </div>

              {/* Badge 3: Machine Learning (Bottom Left) */}
              <div className="absolute bottom-8 sm:bottom-12 -left-1.5 sm:-left-4 lg:-left-6 z-20 animate-float-delayed">
                <div className="tech-pill flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 text-[10px] sm:text-xs font-semibold shadow-md dark:shadow-amber-950/40 backdrop-blur-md hover:border-amber-500/50 transition-all select-none whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                  <Brain size={13} className="text-amber-500 shrink-0" />
                  <span className="font-mono tracking-tight">Machine Learning</span>
                </div>
              </div>

              {/* Badge 4: Deep Learning (Bottom Right) */}
              <div className="absolute -bottom-2 right-0 sm:-right-3 lg:-right-6 z-20 animate-float-slow">
                <div className="tech-pill flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-slate-100 text-[10px] sm:text-xs font-semibold shadow-md dark:shadow-purple-950/40 backdrop-blur-md hover:border-purple-500/50 transition-all select-none whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shrink-0" />
                  <Cpu size={13} className="text-purple-500 shrink-0" />
                  <span className="font-mono tracking-tight">Deep Learning</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
