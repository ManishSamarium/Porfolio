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
  Sparkles, 
  Check, 
  Copy, 
  ExternalLink 
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
      className={`relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Ambient Radial Lights */}
      <div className="hero-ambient-glow" />

      {/* Floating Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO CONTENT (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-cyan-500/40 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="tracking-wide uppercase font-mono text-[11px]">
                {personalInfo.status}
              </span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h2 className="text-sm sm:text-base font-semibold tracking-wider uppercase font-mono text-cyan-600 dark:text-cyan-400">
                Hello, I am
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-slate-900 dark:text-white">Manish</span>{" "}
                <span className="text-gradient-cyan">Yadav</span>
              </h1>

              {/* High-Impact Recruiter Value Proposition Headline */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 mt-2">
                {personalInfo.headline}
              </p>
            </div>

            {/* Brief Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {personalInfo.subheading}
            </p>

            {/* Primary Interactive CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              {/* View Projects - Primary Gradient Accent */}
              <a
                href="#projects"
                className="btn-glow inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer no-underline group"
              >
                <span>Explore Projects</span>
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Download CV - Glowing Outline */}
              <a
                href={personalInfo.cvUrl}
                download="Manish_Yadav_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-cyan-700 dark:text-cyan-300 border border-cyan-600/40 dark:border-cyan-500/40 bg-white/90 dark:bg-slate-900/60 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 hover:border-cyan-500 transition-all shadow-sm cursor-pointer no-underline group"
              >
                <Download size={16} className="text-cyan-600 dark:text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
                <span>Download CV</span>
              </a>

              {/* Contact Me CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer no-underline"
              >
                <Mail size={16} className="text-emerald-600 dark:text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Contact & Social Channels Bar with Copy Feedback */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* Phone Badge with Copy */}
              <button
                onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                title="Click to copy phone number"
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm dark:shadow-none transition-all cursor-pointer"
              >
                {copiedType === "phone" ? (
                  <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Phone size={14} className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                )}
                <span>{copiedType === "phone" ? "Copied Phone!" : personalInfo.phoneDisplay}</span>
                <Copy size={12} className="text-slate-400 dark:text-slate-500 opacity-70 group-hover:opacity-100" />
              </button>

              {/* Email Badge with Copy */}
              <button
                onClick={() => copyToClipboard(personalInfo.email, "email")}
                title="Click to copy email address"
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm dark:shadow-none transition-all cursor-pointer"
              >
                {copiedType === "email" ? (
                  <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Mail size={14} className="text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform" />
                )}
                <span>{copiedType === "email" ? "Copied Email!" : personalInfo.email}</span>
                <Copy size={12} className="text-slate-400 dark:text-slate-500 opacity-70 group-hover:opacity-100" />
              </button>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit GitHub Profile"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm dark:shadow-none transition-all cursor-pointer"
              >
                <Github size={14} className="text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
                <ExternalLink size={11} className="text-slate-400 dark:text-slate-500" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit LinkedIn Profile"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 shadow-sm dark:shadow-none transition-all cursor-pointer"
              >
                <Linkedin size={14} className="text-sky-600 dark:text-sky-400" />
                <span>LinkedIn</span>
                <ExternalLink size={11} className="text-slate-400 dark:text-slate-500" />
              </a>
            </div>

            {/* Quick Metrics Bar for Recruiters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 w-full">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm text-center shadow-sm dark:shadow-none"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-500 dark:from-cyan-400 dark:to-teal-300">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: PROFILE VISUAL & FLOATING TECH PILLS (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            
            {/* Center Visual Frame with Ambient Halo */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Spinning Subtle Gradient Halo */}
              <div className="absolute inset-[-8px] rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-500 opacity-40 blur-xl animate-pulse-glow pointer-events-none" />

              {/* Outer Glowing Border Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/40 p-2 shadow-2xl shadow-cyan-500/10 dark:shadow-cyan-950/60">
                <div className="w-full h-full rounded-full border border-teal-500/30 p-2">
                  
                  {/* Inner Image Container with Glass Gradient */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-950 relative border-2 border-cyan-500/40 shadow-inner">
                    <img
                      src={profile}
                      alt="Manish Yadav - Full-Stack & AI/ML Engineer"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                      loading="eager"
                    />
                    
                    {/* Dark gradient sheen at bottom of avatar */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/60 dark:from-slate-950/90 to-transparent pointer-events-none" />
                  </div>

                </div>
              </div>

              {/* FLOATING TECH BADGE PILL TAGS AROUND AVATAR */}
              
              {/* Badge 1: React (Top Left) */}
              <div className="absolute top-2 -left-4 sm:-left-8 z-20 animate-float-slow">
                <div className="tech-pill flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 dark:border-cyan-400/30 bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-cyan-300 text-xs font-semibold shadow-lg shadow-slate-300/40 dark:shadow-cyan-950/50">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
                  <span className="font-mono">⚛️ React.js</span>
                </div>
              </div>

              {/* Badge 2: Node.js (Top Right) */}
              <div className="absolute top-8 -right-4 sm:-right-8 z-20 animate-float-delayed">
                <div className="tech-pill flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 dark:border-emerald-400/30 bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-emerald-300 text-xs font-semibold shadow-lg shadow-slate-300/40 dark:shadow-emerald-950/50">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-mono">🟢 Node.js</span>
                </div>
              </div>

              {/* Badge 3: Python & AI (Bottom Left) */}
              <div className="absolute bottom-10 -left-6 sm:-left-10 z-20 animate-float-delayed">
                <div className="tech-pill flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 dark:border-amber-400/30 bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-amber-300 text-xs font-semibold shadow-lg shadow-slate-300/40 dark:shadow-amber-950/50">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="font-mono">🐍 Python AI</span>
                </div>
              </div>

              {/* Badge 4: OpenCV (Bottom Right) */}
              <div className="absolute -bottom-2 right-0 sm:-right-4 z-20 animate-float-slow">
                <div className="tech-pill flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 dark:border-blue-400/30 bg-white/95 dark:bg-slate-900/90 text-slate-800 dark:text-sky-300 text-xs font-semibold shadow-lg shadow-slate-300/40 dark:shadow-blue-950/50">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  <span className="font-mono">👁️ OpenCV</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
