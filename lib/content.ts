import {
  Cloud,
  Database,
  LayoutGrid,
  Server,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Build", href: "#build" },
  { label: "Stack", href: "#stack" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const LinkedInUrl = "https://www.linkedin.com/in/bernieweb3/";
export const ContactEmail = "bernie@hackon.team";

/* -------------------------------------------------------------------------- */
/*                                   Projects                                 */
/* -------------------------------------------------------------------------- */

export type ProjectStatus = "active" | "concept" | "past";

export type ProjectMedia =
  | { kind: "video"; src: string; alt: string; caption?: string }
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    }
  | { kind: "placeholder"; label: string };

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  status: ProjectStatus;
  statusLabel: string;
  /** Optional: some entries ship without a written description. */
  description?: string;
  achievement?: string;
  stack?: string[];
  deployments?: string[];
  repo?: string;
  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    id: "pact",
    name: "Pact",
    subtitle: "Intent-based stablecoin payment routing layer.",
    status: "active",
    statusLabel: "Active Development",
    description:
      "Web3 wallets are highly fragmented. Pact acts as an intelligent intermediary layer that evaluates user-defined conditions to automatically route and execute the most optimal stablecoin payment. Designed to deliver Web2-level UX for crypto transactions.",
    achievement: "Best Submission & Evidence — UniHackfest 2026",
    stack: [
      "Solana Devnet",
      "Express",
      "Vitest",
      "Zod",
      "React",
      "Vite",
      "OpenRouter",
    ],
    repo: "https://github.com/agenticbernie/agent-pact",
    media: [
      {
        kind: "video",
        src: "TmT_gXTNUjw",
        alt: "Pact screencast demo",
        caption: "Pact — screencast demo",
      },
    ],
  },
  {
    id: "saystrike",
    name: "SayStrike",
    subtitle: "Skill-based English speaking practice.",
    status: "active",
    statusLabel: "Active Development",
    description:
      'Most language apps gamify through anxiety. SayStrike replaces fear-based retention with joy-based progression, using real-time AI interaction and "boss-fight" mechanics to gamify actual speaking behavior.',
    stack: ["Hono", "SQLite3", "Zod", "React", "Vite"],
    repo: "https://github.com/agenticbernie/saystrike-app",
    media: [
      {
        kind: "image",
        src: "/images/saystrike.jpg",
        alt: "SayStrike — Speak. Strike. Improve.",
        width: 1080,
        height: 1080,
        caption: "SayStrike — Speak. Strike. Improve.",
      },
    ],
  },
  {
    id: "weap",
    name: "Weap",
    subtitle: "Visual full-stack web app builder.",
    status: "concept",
    statusLabel: "Concept / Research",
    description:
      "AI coding agents are becoming expensive and often bottleneck builders. Weap is a conceptual drag-and-drop environment for UI, workflows, and pipelines, enabling builders to generate and deploy full-stack applications directly to major cloud providers.",
    deployments: ["Render", "Vercel", "Netlify", "Cloudflare"],
    media: [
      { kind: "placeholder", label: "Weap — interface preview pending" },
    ],
  },
  {
    id: "aerotwin-ai",
    name: "AeroTwin AI",
    subtitle: "Agentic AI for aviation maintenance and diagnostics.",
    status: "past",
    statusLabel: "Selected Past Work",
    achievement:
      "Top 5 Shortlist — Aviation Track, Agentic AI Build Week 2026",
    stack: [
      "FastAPI",
      "uvicorn",
      "WebSocket",
      "Neo4j",
      "Pydantic",
      "OpenCV",
      "Ultralytics",
      "Scikit-learn",
      "YOLO v11",
      "React",
      "Tailwind CSS",
      "Vite",
    ],
    repo: "https://github.com/agenticbernie/aerotwin-ai",
    media: [
      {
        kind: "video",
        src: "K-CrOEKbgHQ",
        alt: "AeroTwin AI demo video",
        caption: "AeroTwin AI — demo walkthrough",
      },
      {
        kind: "image",
        src: "/images/aerotwin-certificate.png",
        alt: "Certificate of Achievement — HackOn Team, Agentic AI Build Week 2026",
        width: 1920,
        height: 1080,
        caption:
          "Certificate of Achievement — Agentic AI Build Week 2026, Ho Chi Minh City",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                 Tech stack                                 */
/* -------------------------------------------------------------------------- */

export interface StackItem {
  name: string;
  note?: string;
}

export interface StackGroup {
  title: string;
  icon: LucideIcon;
  items: StackItem[];
}

export const stackGroups: StackGroup[] = [
  {
    title: "Backend & API",
    icon: Server,
    items: [
      { name: "Hono" },
      { name: "Express" },
      { name: "Fastify" },
      { name: "FastAPI" },
    ],
  },
  {
    title: "Frontend",
    icon: LayoutGrid,
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Svelte" },
      { name: "Astro" },
      { name: "SolidJS" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    items: [
      { name: "PostgreSQL", note: "Supabase · Neon" },
      { name: "SQLite", note: "Cloudflare D1" },
      { name: "Cloudflare KV" },
      { name: "Neo4j" },
      { name: "Cloudflare R2" },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    items: [
      { name: "Cloudflare Workers" },
      { name: "Render" },
      { name: "Railway" },
      { name: "Botkeep.cloud" },
      { name: "Vercel" },
      { name: "Netlify" },
    ],
  },
  {
    title: "AI & LLM Infrastructure",
    icon: Sparkles,
    items: [
      { name: "OpenAI" },
      { name: "Anthropic" },
      { name: "OpenRouter" },
      { name: "Groq" },
      { name: "NVIDIA NIM" },
    ],
  },
  {
    title: "Testing & Quality",
    icon: ShieldCheck,
    items: [
      { name: "Vitest" },
      { name: "Large-scale test suites" },
      { name: "Strict typing", note: "Zod · Pydantic" },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*                                    Team                                    */
/* -------------------------------------------------------------------------- */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: "Bernie Nguyen",
    role: "Founder & Technical Lead",
    bio: "Drives overall technical direction, system architecture, and day-to-day operations.",
    image: "/images/bernie.png",
    linkedin: LinkedInUrl,
  },
  {
    name: "An Vu",
    role: "Co-founder & Founding Manager",
    bio: "Owns operational execution. Coordinates workflows for HackOn Team and HackerHome, ensuring strategic direction translates into shipped deliverables.",
    image: "/images/anvu.png",
  },
  {
    name: "Henry Nguyen",
    role: "Advisor & External Relations",
    bio: "Focuses on strategic partnerships, external resource alignment, and advisory for HackOn Team and HackerHome initiatives.",
    image: "/images/henry.png",
  },
];

/* -------------------------------------------------------------------------- */
/*                                  Ecosystem                                 */
/* -------------------------------------------------------------------------- */

export interface EcosystemItem {
  name: string;
  meta: string;
  description: string;
}

export const ecosystem: EcosystemItem[] = [
  {
    name: "HackerHome",
    meta: "24/7 · Ho Chi Minh City",
    description:
      "A 24/7 physical hacker house in Ho Chi Minh City. We provide living space and infrastructure for builders to deeply focus, collaborate, and ship products during hackathons, buildathons, and startup competitions.",
  },
  {
    name: "Build Things",
    meta: "Hardware · IoT · Robotics",
    description:
      "A hands-on Hardware, IoT, and Robotics program hosted at HackerHome. We fill the gap in software-heavy builder communities by providing sponsored hardware kits, monthly thematic challenges, and guided practice to help builders create tangible portfolios.",
  },
];
