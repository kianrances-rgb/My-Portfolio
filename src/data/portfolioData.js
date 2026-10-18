/**
 * Interstellar Portfolio Data Store
 * Centralized data extracted and formatted for Kian Rances Cagadas Cosmic Portfolio.
 */

export const personal = {
  name: "KIAN RANCES CAGADAS",
  role: "Software Developer, Systems Architect & Cosmic Explorer",
  missionTag: "MISSION BRIEF - INTERSTELLAR PORTFOLIO",
  coordinateTag: "SOL-3 - DEV - 2026",
  footerMotto: "Human-crafted computational excellence in the vast cosmic expanse. Typography set in Space Grotesk.",
  latLong: "SOL-3 - LAT: 12.8797° N - LON: 121.7740° E",
};

export const navItems = [
  { id: "intro", label: "SINGULARITY" },
  { id: "galaxy", label: "EDUCATION" },
  { id: "supernova", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

export const education = [
  {
    epoch: "COLLEGE",
    degreeBadge: "COLLEGE LEVEL",
    timeRange: "2023 — PRESENT",
    institution: "ICCT Colleges Inc",
    department: "College of Engineering and Digital Technology",
    image: "/assets/images/galaxy-college.jpg",
    summary:
      "Advanced academic studies in digital technology, computer engineering, distributed architecture, and software systems. Developing cutting-edge computational logic, scalable database systems, and human-centered user experiences.",
    highlights: [
      {
        title: "College of Engineering and Digital Technology",
        desc: "Rigorous mastery of software engineering methodologies, modern systems architecture, and resilient computational applications.",
      },
      {
        title: "Core Systems & Lab Focus",
        desc: "Real-time systems engineering, WebGL graphics rendering, scalable cloud backend development, and high-efficiency algorithmic implementations.",
      },
    ],
    tags: [
      "Software Engineering",
      "Digital Technology",
      "Distributed Systems",
      "Database Architecture",
      "Advanced Web Systems",
      "Interactive Graphics",
    ],
  },
  {
    epoch: "SENIOR HIGH",
    degreeBadge: "SENIOR HIGH SCHOOL",
    timeRange: "2017 — 2018",
    institution: "DAEHAN College of Business and Technology Inc",
    department: "Information, Communication and Technology Strand",
    image: "/assets/images/galaxy-senior-high.jpg",
    summary:
      "Specialized academic and technical curriculum within the Information, Communication and Technology (ICT) track, building fundamental competence in algorithmic problem solving, computer systems, and digital networks.",
    highlights: [
      {
        title: "Information, Communication and Technology Strand",
        desc: "Specialized focus on computer programming principles, networking foundations, and digital systems architecture.",
      },
      {
        title: "Technical Projects",
        desc: "Hands-on development in computer servicing, algorithmic logic, database basics, and structured software creation.",
      },
    ],
    tags: [
      "ICT Strand",
      "Computer Programming",
      "Database Fundamentals",
      "Systems Servicing",
      "Algorithmic Logic",
    ],
  },
];

export const skillCategories = [
  {
    id: "languages",
    title: "Core Languages & Runtimes",
    icon: "⌨",
    desc: "The fundamental vernaculars for structuring logic, memory, and asynchronous workflows.",
    skills: [
      "JavaScript (ES2024+)",
      "TypeScript",
      "Python",
      "C / C++",
      "HTML5 / Semantic DOM",
      "CSS3 / Modern CSS Architecture",
      "SQL (Postgres Dialect)",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Interactive Graphics",
    icon: "✦",
    desc: "Architecting immersive, 60fps web experiences with high visual fidelity and clean component lifecycles.",
    skills: [
      "React.js & React Hooks",
      "Next.js (App Router / SSR)",
      "WebGL & GLSL Shaders",
      "Canvas 2D Rendering API",
      "Web Audio API (Procedural Synthesis)",
      "Responsive Design & Accessibility (a11y)",
      "Performance Optimization (Core Web Vitals)",
    ],
  },
  {
    id: "backend",
    title: "Backend & Data Infrastructure",
    icon: "⚡",
    desc: "Resilient server-side services, stateless APIs, and optimized query pipelines.",
    skills: [
      "Node.js Ecosystem",
      "Express.js & RESTful APIs",
      "PostgreSQL & Prisma ORM",
      "MongoDB & Document Stores",
      "Redis Caching & Pub/Sub",
      "JWT, Session & OAuth2 Security",
      "WebSockets & Real-Time Sync",
    ],
  },
  {
    id: "devops",
    title: "DevOps, Tooling & Systems",
    icon: "⚙",
    desc: "Disciplined developer ergonomics, version control hygiene, and containerized deployments.",
    skills: [
      "Git & GitHub Workflows",
      "Docker & Containerization",
      "Linux / Bash Shell Scripting",
      "Vite, Webpack & Rollup Bundlers",
      "CI/CD (GitHub Actions)",
      "Cloudflare & Edge Functions",
      "Clean Code & Test-Driven Discipline",
    ],
  },
];

export const contact = {
  email: "Kianrances@gmail.com",
  githubUrl: "https://github.com/kianrances-rgb",
  githubHandle: "@kianrances-rgb",
  facebookUrl: "https://www.facebook.com/100024036827109/",
  channels: [
    {
      type: "email",
      label: "Email Address",
      value: "Kianrances@gmail.com",
      instruction: "Click to transmit an email directly to this address",
      btnText: "TRANSMIT VIA EMAIL ↗",
      href: "mailto:Kianrances@gmail.com",
    },
    {
      type: "github",
      label: "GitHub Account",
      value: "@kianrances-rgb",
      instruction: "Click to explore repositories, commits & codebase",
      btnText: "OPEN GITHUB PROFILE ↗",
      href: "https://github.com/kianrances-rgb",
    },
    {
      type: "facebook",
      label: "Facebook Profile",
      value: "https://www.facebook.com/100024036827109/",
      instruction: "Click to visit profile page and initiate message",
      btnText: "OPEN FACEBOOK PAGE ↗",
      href: "https://www.facebook.com/100024036827109/",
    },
  ],
};

export const mascotGreetings = [
  "Hi! I'm Astronaut Kian! 👨‍🚀",
  "To the Space and Beyond! 🚀🌌",
  "Systems Operational - All Cores Online ⚡",
  "Exploring the Event Horizon... 🕳️",
  "Welcome to My Cosmic Portfolio! ✨",
];

const portfolioData = {
  personal,
  navItems,
  education,
  skillCategories,
  contact,
  mascotGreetings,
};

export default portfolioData;
