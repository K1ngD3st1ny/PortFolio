// ─── Portfolio Content Data ────────────────────────────────────────
// Edit this file to update all text content on the site.
// No other files need to be changed for content updates.

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface Project {
  index: string;
  title: string;
  summary: string;
  stack: string[];
  bullets: string[];
  github: string; // TODO: replace with actual GitHub repo URL
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Achievement {
  text: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  detail: string;
  location: string;
}

export interface Position {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export const siteMetadata = {
  title: "Deepu Vishwakarma — Backend-Focused Full-Stack Developer",
  description:
    "Portfolio of Deepu Vishwakarma — building secure APIs, payment systems, and real-time services. B.Tech CSE, IIIT Una.",
  url: "https://deepuvishwakarma.dev", // TODO: replace with actual domain
};

export const hero = {
  name: "Deepu Vishwakarma",
  tagline:
    "Backend-focused full-stack developer building secure APIs, payment systems, and real-time services.",
  location: "Varanasi, Uttar Pradesh",
  education: "B.Tech CSE, IIIT Una",
  email: "deepuiiituna@gmail.com",
  phone: "+91-6393323419",
  github: "https://github.com/K1ngD3st1ny", // TODO: replace with actual GitHub URL
  linkedin: "#", // TODO: replace with actual LinkedIn URL
  resumeUrl: "/Deepu_Vishwakarma_Resume.pdf",
};

export const experience: Experience[] = [
  {
    company: "ApnaGharAshram",
    role: "Software Developer Intern",
    period: "May 2026 – Jun 2026",
    bullets: [
      "Engineered a secure, role-based admin dashboard with access control, empowering non-technical staff to manage website content and reducing dependency on developers for daily updates.",
      "Integrated Supabase for media storage, retrieval, and real-time synchronization, powering a gallery with uploads managed through the admin panel.",
      "Refactored legacy components into reusable Next.js modules, improving maintainability and page load times.",
    ],
  },
];

export const projects: Project[] = [
  {
    index: "01",
    title: "KawaiCrafts",
    summary: "A digital-products store backend",
    stack: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "Zod",
      "Razorpay",
      "Supabase",
    ],
    bullets: [
      "REST API on serverless PostgreSQL (Neon) with Drizzle ORM and a shared schema covering users, products, orders, downloads, and wishlists; deployed on Vercel serverless functions.",
      "Stateless Google OAuth 2.0 (PKCE via Arctic) with short-lived state cookies, JWT sessions in HttpOnly/Secure/SameSite cookies, and role-based admin access via middleware.",
      "Payment pipeline with Razorpay/Stripe: orders created as pending, HMAC-SHA256 signature verification on callbacks/webhooks, then order completion and download-rights grant on success.",
      "Purchased PDFs delivered through Supabase Storage with access gated by ownership records; request payloads validated with Zod, multipart uploads handled with Multer.",
    ],
    github: "#", // TODO: replace with actual GitHub repo URL
  },
  {
    index: "02",
    title: "PayBack",
    summary: "Expense splitting and settlement",
    stack: [
      "Node.js",
      "Express",
      "MongoDB (Mongoose)",
      "Redis",
      "JWT",
      "Stripe Connect",
      "Razorpay",
      "Cloudinary",
    ],
    bullets: [
      "MVC-style Express REST API with models for users, groups, expenses, and transactions, JWT auth, bcrypt hashing, Helmet/CORS/Morgan middleware.",
      "Custom graph-based debt simplification algorithm that minimizes the number of settlement transactions within a group, supporting equal and unequal splits.",
      "Payment modules with Stripe Connect and Razorpay for real-time settlements, Cloudinary uploads via Multer, Redis (ioredis) caching.",
    ],
    github: "#", // TODO: replace with actual GitHub repo URL
  },
  {
    index: "03",
    title: "SAGE",
    summary: "Aerial detection with live operator alerts",
    stack: [
      "Node.js",
      "Express",
      "Socket.io",
      "Multer",
      "Python",
      "YOLOv8",
      "Gemini API",
    ],
    bullets: [
      "Event-driven Node.js/Express backend with Socket.io for instant detection alerts, and a Multer-based pipeline for multipart thermal image uploads with persistent metadata logging.",
      "Integrated REST APIs with a dedicated Python YOLOv8 inference service for real-time aerial object detection; used the Gemini API to turn raw detections into plain-English situation summaries streamed live to operators.",
    ],
    github: "#", // TODO: replace with actual GitHub repo URL
  },
];

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "C", "C++"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "JWT",
      "OAuth 2.0 (PKCE)",
      "Zod",
      "Multer",
      "Microservices Integration",
    ],
  },
  {
    category: "Databases & Storage",
    items: [
      "PostgreSQL (Neon)",
      "MongoDB",
      "Redis",
      "Drizzle ORM",
      "Mongoose",
      "Supabase Storage",
      "Cloudinary",
    ],
  },
  {
    category: "Payments & Security",
    items: [
      "Stripe",
      "Stripe Connect",
      "Razorpay",
      "HMAC Signature Verification",
      "bcrypt",
      "Helmet",
      "RBAC",
    ],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "Vercel", "VS Code", "Linux"],
  },
  {
    category: "AI / ML",
    items: ["LLM APIs (Gemini)", "YOLOv8"],
  },
  {
    category: "Core Subjects",
    items: [
      "Data Structures and Algorithms",
      "DBMS",
      "Operating Systems",
      "Design and Analysis of Algorithms",
    ],
  },
];

export const achievements: Achievement[] = [
  {
    text: "Bronze Medal, Innovation Expo, MERAKI'25, IIIT Una — technology exhibition and innovation competition featuring student-led innovations.",
  },
  {
    text: "Designed and demonstrated a drone-based project (SAGE) at Sky Circuit, MERAKI'26, IIIT Una — a flagship drone-building and demonstration event.",
  },
  {
    text: "Knight at LeetCode: 700+ problems solved (rating 1865).",
  },
  {
    text: "2 Star on CodeChef (rating 1418).",
  },
];

export const education: Education[] = [
  {
    institution: "Indian Institute of Information Technology Una",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 – Present",
    detail: "CGPA 7.84",
    location: "Una, Himachal Pradesh",
  },
  {
    institution: "Delhi Public School, Varanasi",
    degree: "Senior Secondary",
    period: "2022",
    detail: "90.2%",
    location: "Varanasi, Uttar Pradesh",
  },
  {
    institution: "Delhi Public School, Varanasi",
    degree: "Secondary",
    period: "2020",
    detail: "93.6%",
    location: "Varanasi, Uttar Pradesh",
  },
];

export const positions: Position[] = [
  {
    role: "Executive Member",
    organization: "PicXcel (photography club), IIIT Una",
    period: "Sep 2023 – Present",
    description:
      "Organized 3+ workshops and events and served as core coordinator.",
  },
  {
    role: "Core Advisor",
    organization: "AAVESH (technical club), IIIT Una",
    period: "Sep 2023 – Present",
    description:
      "Organized 5+ workshops and events, core coordinator, and led development of a model rocket for TechTatva.",
  },
];

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
];
