// ============================================================
// Portfolio Data — Single source of truth for all terminal output
// ============================================================

export const personalInfo = {
  name: "Md Jubayer Ahamed",
  handle: "jubayer",
  title: "Full Stack Developer & Digital Marketing Expert",
  subtitle: "Next.js | Go | React | Node.js | SEO | Digital Marketing",
  email: "tasinahmed423@gmail.com",
  phone: "+880 1732134482",
  location: "Dhaka, Bangladesh",
  bio: [
    "Full-Stack Web Developer and Digital Marketing Expert specializing in",
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
  resume: "/Md-Jubayer-Ahamed.pdf",
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
    id: "2",
    title: "BIIC — Study Abroad Center",
    description:
      "Professional study abroad & immigration center. Course display, testimonials, blog, optimized performance.",
    tech: ["WordPress", "PHP", "MySQL", "JavaScript", "SEO"],
    liveUrl: "http://biic.com.bd",
    featured: true,
    category: "fullstack",
  },
  {
    id: "3",
    title: "Go REST API Microservice",
    description:
      "High-performance RESTful API built with Go and Gin framework. JWT auth, rate limiting, PostgreSQL, Docker containerized.",
    tech: ["Go", "Gin", "PostgreSQL", "Docker", "JWT"],
    githubUrl: "https://github.com/tasinbi/go-rest-api",
    featured: true,
    category: "backend",
  },
  {
    id: "4",
    title: "Next.js Dashboard App",
    description:
      "Full-stack analytics dashboard with Next.js App Router, server actions, real-time charts, and role-based auth.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/tasinbi/nextjs-dashboard",
    featured: true,
    category: "fullstack",
  },
  {
    id: "5",
    title: "Shamz — Fashion E-commerce",
    description:
      "Stylish e-commerce for fashion & lifestyle. Product catalog, cart, payments, mobile-first design.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    liveUrl: "http://shamz.com.bd",
    featured: true,
    category: "fullstack",
  },
  {
    id: "6",
    title: "Go CLI Task Manager",
    description:
      "Terminal-based task manager built in Go with Cobra CLI. SQLite storage, priority system, Markdown export.",
    tech: ["Go", "Cobra", "SQLite", "CLI"],
    githubUrl: "https://github.com/tasinbi/go-task-cli",
    featured: false,
    category: "backend",
  },
  {
    id: "7",
    title: "Next.js Blog Platform",
    description:
      "MDX-powered blog with Next.js 14+, ISR, full-text search, dark mode, and SEO-optimized dynamic OG images.",
    tech: ["Next.js", "MDX", "Tailwind", "Vercel"],
    githubUrl: "https://github.com/tasinbi/nextjs-blog",
    featured: true,
    category: "frontend",
  },
  {
    id: "8",
    title: "90s Kick Official",
    description:
      "Sports footwear e-commerce. Product filtering, size selection, reviews, secure checkout.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL"],
    liveUrl: "http://90skickofficial.com",
    featured: false,
    category: "fullstack",
  },
  {
    id: "9",
    title: "Tasin E-commerce",
    description:
      "Modern React-based e-commerce. Full product catalog, cart, auth, responsive design.",
    tech: ["React", "JavaScript", "CSS", "Vercel"],
    liveUrl: "https://react-e-commerce-main-zeta.vercel.app/",
    githubUrl: "https://github.com/tasinzuba/React_E-Commerce-main",
    featured: true,
    category: "frontend",
  },
  {
    id: "10",
    title: "Go URL Shortener",
    description:
      "Fast URL shortener service with Go and Redis. Custom slugs, analytics dashboard, rate limiting, and REST API.",
    tech: ["Go", "Fiber", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/tasinbi/go-url-shortener",
    featured: false,
    category: "backend",
  },
  {
    id: "11",
    title: "Next.js SaaS Starter",
    description:
      "Production-ready SaaS template with Next.js. Stripe billing, auth, admin panel, multi-tenant architecture.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "NextAuth"],
    githubUrl: "https://github.com/tasinbi/nextjs-saas-starter",
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
    featured: false,
    category: "fullstack",
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
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Go (Golang)", level: 85 },
      { name: "Node.js / Express", level: 88 },
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
      { name: "Google Ads", level: 90 },
      { name: "SEO", level: 92 },
      { name: "Analytics", level: 88 },
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
    company: "Rethink",
    role: "Web Developer",
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
    company: "Banglay IELTS",
    role: "Web Developer",
    period: "Dec 2024 — Present",
    location: "Dhaka, Bangladesh",
    current: true,
    achievements: [
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
