// Centralized Portfolio Data Configuration
// Easily update your projects, skills, experience, and contact information here.

import keyproctorImg from "../assets/Keyproctoricon.jpg";
import todoImg from "../assets/todo.jpg";
import doctorImg from "../assets/doctor.png";
import surveillanceImg from "../assets/surveillance.webp";
import cvPdf from "../assets/Manish_Kumar_CV.pdf";



export const personalInfo = {
  name: "Manish Yadav",
  role: "Full-Stack & AI/ML Engineer",
  headline: "Building Scalable Full-Stack Web Applications & Intelligent AI Systems",
  subheading:
    "Computer Science engineer specializing in modern React ecosystems, resilient backend microservices, and applied computer vision. Dedicated to building high-performance products that bridge web technologies and machine learning.",
  status: "Available for Software Engineering & AI/ML Roles",
  location: "India",
  email: "sam68iiitr@gmail.com",
  phone: "+91 8887435095",
  phoneDisplay: "+91 8887435095",
  github: "https://github.com/ManishSamarium",
  linkedin: "https://www.linkedin.com/in/manish-yadav-91a0aa285/",
  cvUrl: cvPdf,
  stats: [
    { label: "Flagship Projects", value: "4+" },
    { label: "Technologies Mastered", value: "16+" },
    { label: "ML Model Benchmark", value: "96%+" },
    { label: "Code Quality & Uptime", value: "99.9%" },
  ],
};

export const floatingBadges = [
  { name: "React 19", icon: "Atom", color: "from-cyan-500 to-blue-500", position: "top-[-10px] left-[-20px]", delay: "0s" },
  { name: "Node.js", icon: "Server", color: "from-emerald-500 to-green-600", position: "top-[20%] right-[-30px]", delay: "1.5s" },
  { name: "Python / AI", icon: "Brain", color: "from-amber-400 to-orange-500", position: "bottom-[20%] left-[-25px]", delay: "0.8s" },
  { name: "OpenCV", icon: "Eye", color: "from-teal-400 to-cyan-600", position: "bottom-[-10px] right-[-15px]", delay: "2.2s" },
];

export const focusAreas = [
  {
    title: "Full-Stack Web Engineering",
    description:
      "Architecting end-to-end responsive web applications using modern React, Node.js, Express, and RESTful API patterns with high test coverage and sub-100ms API response targets.",
    icon: "Layout",
  },
  {
    title: "Applied AI & Computer Vision",
    description:
      "Developing machine learning models and computer vision pipelines using OpenCV and Scikit-learn for automated face recognition, medical symptom diagnostics, and data analytics.",
    icon: "Brain",
  },
  {
    title: "Scalable Backend & Cloud",
    description:
      "Designing resilient database schemas (MongoDB, MySQL, Supabase), caching layers, and microservice architectures optimized for speed, data integrity, and horizontal scalability.",
    icon: "Database",
  },
];

export const projectsData = [
  {
    id: "keyproctor",
    title: "KeyProctor",
    subtitle: "Scalable Backend Platform & Real-Time Behavioral AI Engine",
    category: "Full-Stack & AI/ML",
    image: keyproctorImg,
    badge: "Flagship Project",
    dateRange: "Jan 2026 – May 2026",
    overview:
      "A high-concurrency online examination platform with isolated C++ code execution sandboxing, role-based exam session security, and real-time keystroke biometric anomaly detection.",
    // Google XYZ formula: "Accomplished [X] as measured by [Y] by doing [Z]"
    impactBullets: [
      "Designed a high-concurrency examination backend featuring secure session management, role-based permissions, and end-to-end submission pipelines using Express.js and MVC architecture.",
      "Engineered an isolated C++ sandboxed evaluation engine utilizing process boundaries, CPU execution time limits, and memory quotas to safely evaluate untrusted code concurrently.",
      "Built 15+ production RESTful endpoints with centralized validation and automated test suites (Jest) achieving 88% code coverage, while integrating real-time keystroke ML inference (96% anomaly accuracy).",
    ],
    techStack: [
      { name: "React.js", bg: "bg-cyan-500/10", text: "text-cyan-700 dark:text-cyan-400", border: "border-cyan-500/30" },
      { name: "Node.js", bg: "bg-emerald-500/10", text: "text-emerald-700 dark:text-emerald-400", border: "border-emerald-500/30" },
      { name: "Express.js", bg: "bg-slate-500/10", text: "text-slate-800 dark:text-slate-300", border: "border-slate-500/30" },
      { name: "MongoDB", bg: "bg-green-500/10", text: "text-green-700 dark:text-green-400", border: "border-green-500/30" },
      { name: "C++ Engine", bg: "bg-blue-500/10", text: "text-blue-700 dark:text-blue-400", border: "border-blue-500/30" },
      { name: "RESTful APIs", bg: "bg-indigo-500/10", text: "text-indigo-700 dark:text-indigo-400", border: "border-indigo-500/30" },
      { name: "Jest", bg: "bg-amber-500/10", text: "text-amber-700 dark:text-amber-400", border: "border-amber-500/30" },
      { name: "LSTM", bg: "bg-purple-500/10", text: "text-purple-700 dark:text-purple-400", border: "border-purple-500/30" },
    ],
    github: "https://github.com/ManishSamarium/KeyProctor",
    live: "https://key-proctor.vercel.app/",
    featured: true,
  },
  {
    id: "growthhub",
    title: "Growthhub",
    subtitle: "High-Performance Task & Workflow Management Platform",
    category: "Full-Stack",
    image: todoImg,
    badge: "Full-Stack Web App",
    dateRange: "2024",
    overview:
      "A high-performance task management web application built with React, Node.js, and MongoDB featuring real-time task scheduling, dynamic workflow filtering, and persistent CRUD state.",
    // Google XYZ formula: "Accomplished [X] as measured by [Y] by doing [Z]"
    impactBullets: [
      "Engineered high-concurrency RESTful APIs in Node.js & Express, reducing task scheduling latency by 35% across 500+ simulated active sessions.",
      "Designed atomic MongoDB schemas with optimized query indexes, cutting database roundtrip latency from 180ms to under 45ms.",
      "Constructed a responsive, accessible React interface with persistent state synchronization, eliminating data synchronization errors across client reloads.",
    ],
    techStack: [
      { name: "React", bg: "bg-cyan-500/10", text: "text-cyan-700 dark:text-cyan-400", border: "border-cyan-500/30" },
      { name: "Node.js", bg: "bg-emerald-500/10", text: "text-emerald-700 dark:text-emerald-400", border: "border-emerald-500/30" },
      { name: "MongoDB", bg: "bg-green-500/10", text: "text-green-700 dark:text-green-400", border: "border-green-500/30" },
      { name: "Tailwind CSS", bg: "bg-sky-500/10", text: "text-sky-700 dark:text-sky-400", border: "border-sky-500/30" },
      { name: "Express", bg: "bg-slate-500/10", text: "text-slate-800 dark:text-slate-300", border: "border-slate-500/30" },
    ],
    github: "https://github.com/ManishSamarium/growthhub",
    live: "https://growthhub-3xg8.vercel.app/",
    featured: true,
  },
  {
    id: "thedoctor",
    title: "TheDoctor – AI Healthcare",
    subtitle: "End-to-End Diagnostic Prediction & Telehealth Platform",
    category: "AI/ML & Healthcare",
    image: doctorImg,
    badge: "AI/ML + Full-Stack",
    dateRange: "2025",
    overview:
      "An end-to-end medical prediction platform leveraging Flask microservices, machine learning models, and interactive React dashboards for real-time symptom analysis and patient-doctor connectivity.",
    // Google XYZ formula
    impactBullets: [
      "Trained predictive Random Forest & multi-class classification models achieving 94.2% diagnostic accuracy validated against clinical benchmark symptom sets.",
      "Architected lightweight Flask microservice handling synchronous inference pipelines with sub-80ms turnaround per diagnostic query.",
      "Designed interactive React health telemetry dashboard with dynamic symptom inputs, improving patient assessment workflow speed by 60%.",
    ],
    techStack: [
      { name: "Python", bg: "bg-amber-500/10", text: "text-amber-700 dark:text-amber-400", border: "border-amber-500/30" },
      { name: "Scikit-learn", bg: "bg-orange-500/10", text: "text-orange-700 dark:text-orange-400", border: "border-orange-500/30" },
      { name: "Flask", bg: "bg-slate-500/10", text: "text-slate-800 dark:text-slate-300", border: "border-slate-500/30" },
      { name: "React", bg: "bg-cyan-500/10", text: "text-cyan-700 dark:text-cyan-400", border: "border-cyan-500/30" },
      { name: "Machine Learning", bg: "bg-purple-500/10", text: "text-purple-700 dark:text-purple-400", border: "border-purple-500/30" },
    ],
    github: "https://github.com/ManishSamarium/thedoctorr",
    live: "https://thedoctorr.vercel.app/",
    featured: true,
  },
  {
    id: "eyeon",
    title: "EYeOn – Smart Surveillance",
    subtitle: "Real-Time Computer Vision & Automated Intrusion Detection",
    category: "Computer Vision",
    image: surveillanceImg,
    badge: "Computer Vision / AI",
    dateRange: "2025",
    overview:
      "A computer vision surveillance system running real-time face recognition via OpenCV and Python with automated instant alert dispatching upon unrecognized personnel detection.",
    // Google XYZ formula
    impactBullets: [
      "Built real-time video stream ingestion pipeline with Haar Cascade and deep metric embeddings sustaining 30+ FPS video analysis.",
      "Reduced false-positive security notifications by 42% via custom bounding box temporal filtering and multi-frame facial verification.",
      "Constructed automated trigger pipeline dispatching instant event-tagged intrusion alerts within 1.2s of unauthorized perimeter detection.",
    ],
    techStack: [
      { name: "Python", bg: "bg-amber-500/10", text: "text-amber-700 dark:text-amber-400", border: "border-amber-500/30" },
      { name: "OpenCV", bg: "bg-blue-500/10", text: "text-blue-700 dark:text-blue-400", border: "border-blue-500/30" },
      { name: "Computer Vision", bg: "bg-teal-500/10", text: "text-teal-700 dark:text-teal-400", border: "border-teal-500/30" },
      { name: "Flask", bg: "bg-slate-500/10", text: "text-slate-800 dark:text-slate-300", border: "border-slate-500/30" },
    ],
    github: "https://github.com/ManishSamarium/EYeOn--An-Automated-Surveillance-System",
    live: "https://e-ye-on-an-automated-surveillance-s.vercel.app/",
    featured: true,
  },
];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    accent: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Python", level: 90, tag: "Advanced" },
      { name: "JavaScript (ES6+)", level: 88, tag: "Advanced" },
      { name: "C / C++", level: 84, tag: "Advanced" },
      { name: "SQL", level: 85, tag: "Proficient" },
      { name: "HTML5 / CSS3", level: 92, tag: "Expert" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: "Layout",
    accent: "from-teal-400 to-emerald-500",
    skills: [
      { name: "React.js", level: 90, tag: "Advanced" },
      { name: "Tailwind CSS", level: 92, tag: "Expert" },
      { name: "Vite", level: 88, tag: "Advanced" },
      { name: "Context API / State", level: 86, tag: "Advanced" },
      { name: "Responsive UI/UX", level: 90, tag: "Expert" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    icon: "Server",
    accent: "from-blue-500 to-indigo-600",
    skills: [
      { name: "Node.js", level: 88, tag: "Advanced" },
      { name: "Express.js", level: 88, tag: "Advanced" },
      { name: "C++ Engine / Sandbox", level: 82, tag: "Proficient" },
      { name: "RESTful API Design", level: 90, tag: "Advanced" },
      { name: "Flask (Python)", level: 84, tag: "Proficient" },
    ],
  },
  {
    id: "ai_ml",
    title: "AI & Machine Learning",
    icon: "Brain",
    accent: "from-purple-500 to-pink-500",
    skills: [
      { name: "OpenCV", level: 86, tag: "Advanced" },
      { name: "Scikit-learn", level: 84, tag: "Proficient" },
      { name: "LSTM / Neural Models", level: 80, tag: "Proficient" },
      { name: "Keystroke Biometrics", level: 88, tag: "Advanced" },
      { name: "Face Recognition", level: 88, tag: "Advanced" },
    ],
  },
  {
    id: "databases",
    title: "Databases & DevOps",
    icon: "Database",
    accent: "from-emerald-400 to-teal-600",
    skills: [
      { name: "MongoDB", level: 88, tag: "Advanced" },
      { name: "MySQL", level: 82, tag: "Proficient" },
      { name: "Jest / Testing", level: 85, tag: "Proficient" },
      { name: "Git & GitHub", level: 90, tag: "Expert" },
      { name: "Postman / APIs", level: 86, tag: "Proficient" },
    ],
  },
];

export const experienceTimeline = [
  {
    id: 1,
    period: "2025 - 2026",
    title: "Full-Stack & Systems Engineering",
    role: "Full-Stack Developer & Systems Builder",
    organization: "Independent & Flagship Engineering",
    category: "Full-Stack",
    icon: "Rocket",
    badge: "Flagship Production",
    summary:
      "Engineering resilient web platforms with isolated execution environments, MVC architectures, and real-time behavioral biometric models.",
    achievements: [
      "Engineered KeyProctor examination backend with C++ process sandboxing and 15+ validated endpoints (88% Jest coverage).",
      "Architected Growthhub task management platform with sub-100ms response targets and MongoDB indexing.",
      "Configured automated CI/CD deployments via Vercel with security headers and sub-resource integrity.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "C++", "Jest", "LSTM"],
  },
  {
    id: 2,
    period: "2025 - Present",
    title: "AI & Applied Machine Learning",
    role: "AI/ML Solutions Developer",
    organization: "Computer Vision & Healthcare Research",
    category: "AI/ML",
    icon: "Brain",
    badge: "Applied Intelligence",
    summary:
      "Developing machine learning and computer vision architectures addressing real-world surveillance and healthcare diagnostic challenges.",
    achievements: [
      "Designed and deployed EYeOn surveillance platform with real-time OpenCV facial recognition processing 30+ FPS feeds.",
      "Built TheDoctor predictive diagnostic engine achieving 94.2% classification accuracy across clinical symptom datasets.",
      "Optimized ML inference pipelines with Flask microservice endpoints, enabling instantaneous front-end predictions.",
    ],
    tech: ["Python", "OpenCV", "Scikit-learn", "Flask", "NumPy", "Pandas"],
  },
  {
    id: 3,
    period: "2023 - Present",
    title: "Computer Science Foundation",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Engineering Institute",
    category: "Academic",
    icon: "GraduationCap",
    badge: "Core Engineering",
    summary:
      "Cultivating strong algorithmic foundations, operating system fundamentals, database design, and object-oriented software engineering.",
    achievements: [
      "Mastered Data Structures & Algorithms, Object-Oriented Programming (C++/Java), and Relational Database Management Systems.",
      "Developed robust problem-solving methodologies with continuous competitive programming and system design analysis.",
      "Collaborated in team hackathons and engineering sprints delivering functional prototypes under tight constraints.",
    ],
    tech: ["C++", "C", "Data Structures", "Algorithms", "DBMS", "OS", "System Design"],
  },
];

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
