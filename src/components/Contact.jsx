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
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from "lucide-react";

/**
 * Web3Forms Access Key Setup Instructions:
 * 1. Go to https://web3forms.com (100% free, no credit card required)
 * 2. Enter your email: sam68iiitr@gmail.com to generate your access key
 * 3. Add to your .env file or Vercel Environment Variables:
 *    WEB_WEB3FORMS_ACCESS_KEY=your_access_key_here
 */
const WEB3FORMS_ACCESS_KEY = 
  import.meta.env.WEB_WEB3FORMS_ACCESS_KEY || 
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 
  "34b1e2f6-798f-44e5-aa34-e326fc08c88a";

export default function Contact() {
  const { isDark } = useTheme();
  const [copiedItem, setCopiedItem] = useState(null);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  const validateForm = () => {
    if (!formState.name.trim()) return "Please enter your name.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email.trim())) return "Please enter a valid email address.";
    if (!formState.message.trim()) return "Please enter your message.";
    return null;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setSubmissionStatus("sending");

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
        name: formState.name.trim(),
        email: formState.email.trim(),
        subject: formState.subject?.trim() || `Portfolio Contact Inquiry from ${formState.name.trim()}`,
        message: formState.message.trim(),
        from_name: formState.name.trim(),
        replyto: formState.email.trim(),
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setSubmissionStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmissionStatus("error");
        if (!WEB3FORMS_ACCESS_KEY) {
          setErrorMessage(
            "Web3Forms access key not configured. Add WEB_WEB3FORMS_ACCESS_KEY to your .env or Vercel Environment Variables. You can also contact me directly via sam68iiitr@gmail.com."
          );
        } else {
          setErrorMessage(data.message || "Failed to send message. Please try again or email directly.");
        }
      }
    } catch {
      setSubmissionStatus("error");
      setErrorMessage(
        "Network connection failed. Please check your internet connection or email directly at sam68iiitr@gmail.com."
      );
    }
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
      className={`relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t transition-colors duration-300 w-full max-w-full ${
        isDark 
          ? "bg-slate-950 text-slate-100 border-slate-800/80" 
          : "bg-white text-slate-900 border-slate-200"
      }`}
    >
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 bg-cyan-500/10">
            <Sparkles size={13} />
            <span>Let&apos;s Build Together</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400">
            Interested in hiring, collaborating on high-concurrency backend systems, or discussing AI/ML engineering roles? Send an automated message directly to my inbox.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 w-full">
          
          {/* Left Column: Direct Contact Channels & Availability (5 cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 w-full">
            
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="text-cyan-600 dark:text-cyan-400" size={20} />
                <span>Contact Channels</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Reach out anytime. Emails and inquiries are routed directly to my personal inbox and answered within 24 hours.
              </p>
            </div>

            {/* Channels Cards */}
            <div className="space-y-3">
              {contactChannels.map((channel, idx) => {
                const IconComponent = channel.icon;
                const isCopied = copiedItem === channel.title;

                return (
                  <div
                    key={idx}
                    className="glass-card rounded-xl p-3.5 sm:p-4 border border-slate-200 dark:border-white/10 hover:border-teal-400/40 transition-all duration-300 bg-white/90 dark:bg-slate-900/60 shadow-sm dark:shadow-none flex items-center justify-between gap-3 group max-w-full"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2 sm:p-2.5 rounded-lg ${channel.bg} ${channel.color} border ${channel.border} group-hover:scale-105 transition-transform shrink-0`}>
                        <IconComponent size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {channel.title}
                        </div>
                        <a
                          href={channel.href}
                          target={channel.action === "link" ? "_blank" : undefined}
                          rel={channel.action === "link" ? "noopener noreferrer" : undefined}
                          className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors truncate block"
                        >
                          {channel.value}
                        </a>
                      </div>
                    </div>

                    {/* Action Icon: Copy or External Link */}
                    {channel.action === "copy" ? (
                      <button
                        onClick={() => handleCopy(channel.value, channel.title)}
                        title={`Click to copy ${channel.title}`}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all cursor-pointer shrink-0"
                      >
                        {isCopied ? (
                          <Check size={15} className="text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Copy size={15} />
                        )}
                      </button>
                    ) : (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open profile"
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all shrink-0"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Availability Status Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50 dark:from-cyan-950/40 dark:via-slate-900/70 dark:to-emerald-950/30 border border-cyan-200 dark:border-cyan-500/30 space-y-2 shadow-sm dark:shadow-none">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Current Status</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Open for New Opportunities</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                Actively seeking Software Developer, Full-Stack Engineer, and AI/ML Engineering positions, internships, and high-impact software roles.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Automated Message Form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card rounded-2xl p-5 sm:p-8 border border-slate-200 dark:border-white/10 hover:border-teal-400/30 bg-white/90 dark:bg-slate-900/70 shadow-xl shadow-slate-200/50 dark:shadow-none space-y-5 sm:space-y-6 w-full">
              
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Sends directly to <strong className="text-cyan-700 dark:text-cyan-400 font-mono">sam68iiitr@gmail.com</strong> in the background. No mail client required.
                </p>
              </div>

              {/* INLINE SUCCESS TOAST / BANNER */}
              {submissionStatus === "success" && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 text-slate-800 dark:text-emerald-200 space-y-2 animate-fadeInDown">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Message sent! I&apos;ll get back to you within 24 hours.</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Thank you for reaching out! A confirmation has been dispatched to my inbox.
                  </p>
                </div>
              )}

              {/* INLINE ERROR BANNER */}
              {submissionStatus === "error" && (
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-500/40 text-slate-800 dark:text-amber-200 space-y-2 animate-fadeInDown">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-amber-800 dark:text-amber-300 font-semibold">
                    <AlertCircle size={18} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs">
                    <a
                      href={`mailto:${personalInfo.email}?subject=Inquiry&body=Hello Manish,`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold text-slate-900 bg-amber-200 hover:bg-amber-300 transition-colors"
                    >
                      <Mail size={13} />
                      <span>Email directly to sam68iiitr@gmail.com</span>
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      <ExternalLink size={13} />
                      <span>Open in Gmail Web</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5 w-full">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-1 focus:ring-cyan-500 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all shadow-inner"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5 w-full">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-1 focus:ring-cyan-500 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5 w-full">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Developer / Full-Stack Opportunity"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-1 focus:ring-cyan-500 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all shadow-inner"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5 w-full">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hello Manish, I saw your portfolio projects (KeyProctor, Growthhub) and would love to discuss..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-950 focus:ring-1 focus:ring-cyan-500 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none transition-all resize-none shadow-inner"
                  />
                </div>

                {/* Submit CTA with active loader */}
                <button
                  type="submit"
                  disabled={submissionStatus === "sending"}
                  className="btn-glow w-full flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 disabled:opacity-75 transition-all shadow-md shadow-cyan-950 cursor-pointer"
                >
                  {submissionStatus === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin text-slate-950" />
                      <span>Sending...</span>
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
