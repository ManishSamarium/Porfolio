import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  ArrowUpRight,
  Loader2,
  ExternalLink,
  CheckCircle2
} from "lucide-react";

export default function Contact() {
  const { isDark } = useTheme();
  const [copiedItem, setCopiedItem] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [lastDispatchedUrls, setLastDispatchedUrls] = useState({ mailto: "", gmail: "", body: "" });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }

    setSubmissionStatus("sending");

    const subjectText = formState.subject?.trim() || `Portfolio Contact Inquiry from ${formState.name.trim()}`;
    const bodyText = `Hi Manish,\n\n${formState.message.trim()}\n\n---\nSender Information:\nName: ${formState.name.trim()}\nEmail: ${formState.email.trim()}\nSent via Portfolio Contact Form`;
    
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    setLastDispatchedUrls({ mailto: mailtoUrl, gmail: gmailUrl, body: bodyText });

    // Simulate active dispatching with smooth feedback
    setTimeout(() => {
      // Trigger active link creation and click to avoid browser navigation cancel
      try {
        const link = document.createElement("a");
        link.href = mailtoUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch {
        window.location.href = mailtoUrl;
      }

      setSubmissionStatus("success");
    }, 900);
  };

  const resetForm = () => {
    setFormState({ name: "", email: "", subject: "", message: "" });
    setSubmissionStatus("idle");
  };

  const contactChannels = [
    {
      title: "Email Address",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      action: "copy",
      color: "text-cyan-600 dark:text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
    },
    {
      title: "Phone / WhatsApp",
      value: personalInfo.phoneDisplay,
      href: `tel:${personalInfo.phone}`,
      icon: Phone,
      action: "copy",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
    },
    {
      title: "LinkedIn Profile",
      value: "linkedin.com/in/manish-yadav",
      href: personalInfo.linkedin,
      icon: Linkedin,
      action: "link",
      color: "text-sky-600 dark:text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/30",
    },
    {
      title: "GitHub Profile",
      value: "github.com/ManishSamarium",
      href: personalInfo.github,
      icon: Github,
      action: "link",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
    },
  ];

  return (
    <section
      id="contact"
      className={`relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 ${
        isDark 
          ? "bg-slate-950 text-slate-100 border-slate-800/80" 
          : "bg-white text-slate-900 border-slate-200"
      }`}
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 bg-cyan-500/10">
            <Sparkles size={13} />
            <span>Let&apos;s Build Together</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Interested in hiring, collaborating on high-concurrency backend systems, or discussing AI/ML engineering roles? Reach out directly.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Channels & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="text-cyan-600 dark:text-cyan-400" size={20} />
                <span>Contact Channels</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Feel free to email me directly, drop a message on LinkedIn, or connect by phone. I typically respond within 24 hours.
              </p>
            </div>

            {/* Channels Cards */}
            <div className="space-y-3.5">
              {contactChannels.map((channel, idx) => {
                const IconComponent = channel.icon;
                const isCopied = copiedItem === channel.title;

                return (
                  <div
                    key={idx}
                    className="glass-card rounded-xl p-4 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-lg ${channel.bg} ${channel.color} border ${channel.border} group-hover:scale-105 transition-transform`}>
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                          {channel.title}
                        </div>
                        <a
                          href={channel.href}
                          target={channel.action === "link" ? "_blank" : undefined}
                          rel={channel.action === "link" ? "noopener noreferrer" : undefined}
                          className="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                        >
                          {channel.value}
                        </a>
                      </div>
                    </div>

                    {/* Action Icon: Copy or External Link */}
                    {channel.action === "copy" ? (
                      <button
                        onClick={() => handleCopy(channel.value, channel.title)}
                        title="Click to copy"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all cursor-pointer"
                      >
                        {isCopied ? (
                          <Check size={16} className="text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    ) : (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open profile"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Availability Status Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 dark:from-cyan-950/40 dark:via-slate-900/70 dark:to-emerald-950/30 border border-cyan-200 dark:border-cyan-500/30 space-y-3 shadow-sm dark:shadow-none">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Current Status</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Open for New Opportunities</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Actively seeking Full-Stack Web Development, Systems Engineering, and AI/ML positions, internships, and high-impact engineering roles.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Fill out the form below. It dispatches directly to <strong className="text-cyan-700 dark:text-cyan-400 font-mono">{personalInfo.email}</strong>.
                </p>
              </div>

              {/* SUCCESS STATE FEEDBACK BANNER */}
              {submissionStatus === "success" && (
                <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-slate-800 dark:text-emerald-200 space-y-3 animate-fadeInDown">
                  <div className="flex items-center gap-2.5 font-bold text-sm text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 size={20} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Email Dispatch Triggered Successfully!</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Your email client was triggered with pre-filled details addressed to <strong className="font-mono text-emerald-700 dark:text-emerald-300">{personalInfo.email}</strong>. If your email application did not launch automatically, choose an option below:
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={lastDispatchedUrls.gmail}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors shadow-sm"
                    >
                      <ExternalLink size={13} />
                      <span>Open in Gmail Web</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopy(lastDispatchedUrls.body, "formBody")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      {copiedItem === "formBody" ? (
                        <>
                          <Check size={13} className="text-emerald-500" />
                          <span>Copied Message!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-700 dark:text-cyan-300 hover:underline cursor-pointer"
                    >
                      <span>Send Another</span>
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all shadow-inner"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack / AI Opportunity Discussion"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all shadow-inner"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Manish, I was impressed by your KeyProctor and Growthhub projects and would like to discuss..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-1 focus:ring-cyan-500 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all resize-none shadow-inner"
                  />
                </div>

                {/* Submit CTA with active loader */}
                <button
                  type="submit"
                  disabled={submissionStatus === "sending"}
                  className="btn-glow w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 disabled:opacity-75 transition-all shadow-md shadow-cyan-950 cursor-pointer"
                >
                  {submissionStatus === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin text-slate-950" />
                      <span>Dispatching to sam68iiitr@gmail.com...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message to Manish</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
