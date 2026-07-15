// ============================================================
// Portfolio Data — Single source of truth for all terminal output
// ============================================================

export const personalInfo = {
  name: "Md Jubayer Ahamed",
  handle: "jubayer",
  title: "Full Stack Developer & SEO, Digital Marketing Expert",
  subtitle: "Next.js | Go | React | Node.js | SEO | Digital Marketing",
  email: "tasinahmed423@gmail.com",
  phone: "+880 1732134482",
  location: "Dhaka, Bangladesh",
  bio: [
    "Full-Stack Web Developer and SEO Optimizer & Digital Marketing Expert specializing in",
    "Next.js, React, Go, Node.js, WordPress, Facebook Marketing, SEO, and",
    "comprehensive digital marketing strategies.",
    "",
    "Currently working at Rethink and Banglay IELTS, focusing on",
    "web development, digital marketing, and content optimization.",
    "",
    "Passionate about building blazing-fast APIs with Go, server-rendered",
    "apps with Next.js, and driving business growth through effective",
    "digital marketing campaigns.",
  ],
  social: {
    github: "https://github.com/tasinzuba",
    linkedin: "https://www.linkedin.com/in/md-jubayer-ahamed-b92736358/",
    facebook: "https://www.facebook.com/jubayerahamed82",
    whatsapp: "https://wa.me/8801732134482",
  },
  resume: "/CV%20Jubayer.pdf",
};

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "fullstack" | "frontend" | "backend" | "marketing";
}

export const projects: Project[] = [
  // ── Client projects (priority) ─────────────────────────────
  {
    id: "1",
    title: "Banglay IELTS",
    description:
      "IELTS coaching platform for Bengali speakers. SEO-optimized, Lighthouse 90+, conversion-focused CTAs.",
    tech: ["WordPress", "Tailwind CSS", "PHP", "MySQL", "SEO"],
    liveUrl: "http://banglayielts.com",
    featured: true,
    category: "fullstack",
  },
  {
    id: "biic-new",
    title: "BIIC — Banglay IELTS & Immigration Center",
    description:
      "Heddless app for study abroad & immigration services. SEO-optimized, Lighthouse 90+, conversion-focused CTAs. Built with Next.js, React, Tailwind CSS, and server-side rendering (SSR) for optimal performance.",
    tech: ["Next.js", "React", "Tailwind CSS", "SSR"],
    liveUrl: "https://biic.com.bd/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "bielts-dashboard",
    title: "Banglay IELTS Teacher Dashboard",
    description:
      "Teacher management dashboard for IELTS preparation platform. PWA-enabled, real-time data, role-based access, mobile-optimized. Teacher automation, analytics, and performance tracking. Built with Next.js, TypeScript, Tailwind CSS, and PWA features for offline access.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PWA"],
    liveUrl: "#",
    featured: true,
    category: "fullstack",
  },
  {
    id: "12",
    title: "CDIELTS",
    description:
      "IELTS mock test system. Practice exams, scoring algorithms, analytics, real-time feedback.",
    tech: ["Vue.js", "Laravel", "MySQL", "Analytics"],
    liveUrl: "http://cdielts.org",
    featured: true,
    category: "fullstack",
  },
  // ── Portfolio & apps ───────────────────────────────────────
  {
    id: "tiz-portfolio",
    title: "TIZ — Cinematic Video Editor Portfolio",
    description:
      "Portfolio & course platform for a professional video editor. Showcases editing services, online course, testimonials, and cinematic work.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    featured: true,
    category: "frontend",
  },
  {
    id: "IELTS Practice App",
    title: "IELTS Workbook & Practice Portal",
    description:
      "IELTS preparation platform with practice tests, study materials, and progress tracking.",
    tech: ["Next.js", "React", "Tailwind CSS", "SSR"],
    liveUrl: "https://offline.banglayielts.com/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "organization-website",
    title: "Konabari Bhai Brother Organization",
    description:
      "Non-profit organization website with event management, donation system, and volunteer registration.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://konabari-bhai-brothers.vercel.app/",
    featured: true,
    category: "fullstack",
  },
  // ── Other projects ─────────────────────────────────────────
  {
    id: "3",
    title: "Kajla Society Website",
    description:
      "Community website for Kajla Society. Event listings, member directory, and news updates.",
    tech: ["Next.js", "React", "PostgreSQL", "NextAuth.js", "JWT"],
    githubUrl: "https://frontend-jade-kappa-95.vercel.app/",
    featured: true,
    category: "fullstack",
  },
  {
    id: "4",
    title: "Paycheque - Full stack Company Salary Management Software",
    description:
      "Full-stack salary management software for companies. Employee records, payroll processing, tax calculations, and reporting. all authentication and authorization handled with NextAuth.js and JWT.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    githubUrl: "https://salary-management-zeta.vercel.app",
    featured: false,
    category: "fullstack",
  },
  {
    id: "5",
    title: "Shamz — Fashion E-commerce",
    description:
      "Stylish e-commerce for fashion & lifestyle. Product catalog, cart, payments, mobile-first design.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    liveUrl: "http://shamz.com.bd",
    featured: false,
    category: "fullstack",
  },
  {
    id: "6",
    title: "reThink - Study Planner & Task Manager",
    description:
      "Task management app for students. Task scheduling, reminders, progress tracking, and analytics.",
    tech: ["Next.js", "React", "neondb"],
    githubUrl: "https://rethink-study-planner.vercel.app/",
    featured: false,
    category: "fullstack",
  },
  {
    id: "8",
    title: "90s Kick Official",
    description:
      "Sports footwear e-commerce. Product filtering, size selection, reviews, secure checkout.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    liveUrl: "#",
    featured: false,
    category: "fullstack",
  },
  {
    id: "9",
    title: "Tasin E-commerce",
    description:
      "Modern React-based e-commerce. Full product catalog, cart, auth, responsive design.",
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    liveUrl: "#",
    featured: false,
    category: "frontend",
  },
];

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", level: 90 },
      { name: "React", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
      {name: "bootstrap", level: 85},
      {name: "framer motion", level: 80},
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Go (Golang)", level: 85 },
      { name: "REST API Design", level: 92 },
    ],
  },
  {
    name: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 82 },
      { name: "Redis", level: 78 },
      { name: "Docker", level: 80 },
    ],
  },
  {
    name: "Digital Marketing",
    skills: [
      { name: "Facebook Ads", level: 95 },
      { name: "SEO", level: 92 },
      { name: "Analytics", level: 88 },
      {name: "Content Marketing", level: 90},
      {name: "Google Tags & GTM", level: 85},
    ],
  },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    company: "reThink",
    role: "Web Developer & Content Optimizer",
    period: "Oct 2025 — Present",
    location: "Dhaka, Bangladesh",
    current: true,
    achievements: [
      "Building and maintaining web applications",
      "Full-stack development with modern tech stack",
      "Collaborating with cross-functional teams",
    ],
  },
  {
    company: "Banglay IELTS & Immigration Center",
    role: "Web Developer",
    period: "Dec 2024 — Present",
    location: "Dhaka, Bangladesh",
    current: true,
    achievements: [
      "Developed and maintained multiple client websites",
      "ILTS preparation platform with practice tests, study materials, and progress tracking",
      "Maintained and optimized CDIELTS mock test system with real-time feedback and analytics",
      "SEO optimization → 150% organic traffic increase",
      "Conversion-optimized CTAs → 40% enrollment boost",
      "Lighthouse performance scores 90+ across all projects",
      "Automated backup & security protocols",
    ],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "Jun 2024 — Present",
    location: "Remote",
    current: true,
    achievements: [
      "Delivered 15+ WordPress sites with custom themes",
      "Built Go microservices with Docker deployment",
      "Next.js apps with server components & ISR",
      "100% client satisfaction rate",
    ],
  },

      {
    company: "Next Level Web Development Bootcamp",
    role: "Student — Level 2 Batch 6",
    period: "Dec 2025 — Jun 2026",
    location: "Online",
    current: false,
    achievements: [
      "Completed full-stack web development course",
      "Built 15+ hands-on projects",
      "Mastered React, Node.js, MongoDB stack",
      "Golang (Go) microservices development",
      "Docker deployment and containerization",
      "AI integration with OpenAI API",
    ],
  },
  {
    company: "Programming Hero",
    role: "Student — Batch 8",
    period: "Jun 2023 — Dec 2023",
    location: "Online",
    current: false,
    achievements: [
      "Completed full-stack web development course",
      "Built 10+ hands-on projects",
      "Mastered React, Node.js, MongoDB stack",
    ],
  },
];
