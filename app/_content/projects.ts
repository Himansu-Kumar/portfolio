// Project content for the Projects section. Mirrors the verified notes in
// `context/projects.md` (gitignored; do not import). Only add facts confirmed
// there or in each project's own code. Items marked TODO need input.

type ImageExt = "png" | "webp" | "jpg" | "jpeg" | "avif";

export type ProjectImage = {
  /** Path under /public, with the file's real extension. */
  src: `/images/projects/${string}.${ImageExt}`;
  alt: string;
  /** Intrinsic size of the source file. */
  width: number;
  height: number;
  /** CSS aspect ratio of the frame. Defaults to the image's own ratio. */
  frame?: `${number} / ${number}`;
  /** CSS object-position used when the frame crops the image. */
  focus?: string;
  /**
   * When set, the placeholder is shown instead of the image and this explains
   * what still needs confirming.
   */
  pending?: string;
};

export type Highlight = { label: string; text: string };

export type Project = {
  slug: string;
  /** Project number within the Projects section (section 01): 1.1, 1.2, … */
  index: `1.${number}`;
  name: string;
  year: string;
  kind: string;
  role: string;
  description: string;
  purpose: string;
  highlights: Highlight[];
  stack: string[];
  links: { live: string; source: string };
  image: ProjectImage;
};

export const freelanceHelper: Project = {
  slug: "freelance-helper",
  index: "1.1",
  name: "Freelance Helper",
  year: "2026",
  kind: "Full-stack web app",
  role: "Solo",
  description:
    "A full-stack app for freelancers to manage clients, projects, and invoices, with JWT authentication, a REST API, revenue tracking, and PDF invoice export.",
  purpose:
    "Helps freelancers manage their client workflow in one place: the clients, the projects for them, and the invoices that follow.",
  highlights: [
    {
      label: "Auth",
      text: "JWT login, bcrypt password hashing, and protected routes with per-user ownership checks.",
    },
    {
      label: "API",
      text: "20 versioned REST endpoints across auth, clients, projects, and invoices.",
    },
    {
      label: "Data",
      text: "Four Mongoose models linked by references; deleting a client also removes its projects.",
    },
    {
      label: "Invoicing",
      text: "Draft → Sent → Paid / Overdue lifecycle, auto-numbered invoices, totals from line items.",
    },
    {
      label: "Dashboard",
      text: "Total revenue, pending invoices, overdue alerts, and per-client revenue.",
    },
    {
      label: "PDF",
      text: "On-demand invoice PDFs generated with jsPDF and AutoTable.",
    },
  ],
  stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Tailwind CSS"],
  links: {
    live: "https://freelance-helper-six.vercel.app/",
    source: "https://github.com/Himansu-Kumar/freelance-helper",
  },
  image: {
    // Project banner built from the real dashboard screenshot.
    src: "/images/projects/freelance-helper-banner.png",
    alt: "Freelance Helper banner: the title and the line “Manage clients, projects & invoices — all in one place” beside an angled preview of the app’s dashboard.",
    width: 2560,
    height: 1280,
  },
};

export const planetPrompt: Project = {
  slug: "planet-prompt",
  index: "1.2",
  name: "Planet Prompt",
  year: "2026",
  kind: "Hackathon project",
  // TODO: hackathon name, if you want it shown. It did not place; never imply it did.
  role: "Hackathon team of 4",
  description:
    "A sustainability analytics platform that logs AI model usage and estimates its carbon, water, and land footprint, with a prompt advisor that suggests leaner rewrites.",
  purpose:
    "Makes the environmental cost of AI usage visible to the developers and teams generating it, not just the cost in dollars.",
  // Features as described in the project README and present in its codebase.
  // No measured savings or results; the product's own figures are estimates.
  highlights: [
    {
      label: "Tracking",
      text: "Logs each LLM query and converts it into carbon (g CO₂e), water (ml), and land (cm²) estimates.",
    },
    {
      label: "Models",
      text: "Per-model conversion factors stored in PostgreSQL through a Prisma schema.",
    },
    {
      label: "Advisor",
      text: "Rewrites a draft prompt into a leaner version and compares the two side by side.",
    },
    {
      label: "Dashboard",
      text: "Usage and footprint charts over time, built with Recharts.",
    },
    {
      label: "Reports",
      text: "Monthly sustainability reports with everyday equivalents to make the numbers tangible.",
    },
    {
      label: "Teams",
      text: "Clerk authentication with organizations, so a team can share one view of its AI usage.",
    },
  ],
  stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Recharts", "Tailwind CSS"],
  links: {
    live: "https://planet-prompt-tau.vercel.app/",
    source: "https://github.com/Himansu-Kumar/planet-prompt",
  },
  image: {
    // The project's own README banner: landing page over the dashboard.
    src: "/images/projects/planet-prompt.png",
    alt: "Planet Prompt banner: the landing page headline “Optimize Your AI Footprint With Green Prompts” layered over the footprint analytics dashboard.",
    width: 1920,
    height: 700,
  },
};

export const xora: Project = {
  slug: "xora",
  index: "1.3",
  name: "Xora",
  year: "2025",
  kind: "Frontend project",
  role: "Solo",
  // TODO: if this followed a tutorial or a provided design, say so here.
  description:
    "A polished, responsive landing page for an AI video-editing product concept, with a glowing dark interface across hero, features, pricing, FAQ, testimonials, and download sections. Built from reusable React components styled with Tailwind CSS, with page content kept in one data file.",
  purpose: "Practice in modern frontend development and responsive design.",
  highlights: [
    { label: "Header", text: "Restyles on scroll, with a mobile menu." },
    { label: "Pricing", text: "Monthly / annual toggle with animated counters." },
    { label: "FAQ", text: "Expandable accordion and smooth-scroll navigation." },
  ],
  stack: ["React", "Vite", "Tailwind CSS"],
  links: {
    live: "https://xora-landing-page-delta.vercel.app/",
    source: "https://github.com/Himansu-Kumar/xora-landing-page",
  },
  image: {
    src: "/images/projects/xora.png",
    alt: "Xora landing page hero with the headline “Amazingly Simple”, a centred navigation bar, and a glowing 3D illustration.",
    width: 1897,
    height: 910,
    frame: "16 / 10",
    focus: "50% 50%",
  },
};

export const brainwave: Project = {
  slug: "brainwave",
  index: "1.4",
  name: "Brainwave",
  year: "2025",
  kind: "Frontend project",
  role: "Solo",
  // Describes only what the code renders today (header + hero, built on a
  // shared component system). Do not list sections that are not built yet.
  // TODO: if this followed a tutorial or a provided design, say so here.
  description:
    "A responsive landing page for Brainwave, an AI chat app concept. Built as a component-driven React app: responsive navigation, a layered hero, and a shared system of section frames, custom-shaped buttons, and SVG ornaments.",
  purpose: "A component-driven frontend for an AI chat app landing page.",
  highlights: [
    { label: "Navigation", text: "Mobile menu that locks page scroll while open." },
    {
      label: "Hero",
      text: "Scroll parallax, floating UI cards, and an “AI is generating” indicator.",
    },
    { label: "System", text: "Reusable section and button components with custom SVG shapes." },
  ],
  stack: ["React", "Vite", "Tailwind CSS", "React Router"],
  links: {
    live: "https://brainwave-eta-three.vercel.app/",
    source: "https://github.com/Himansu-Kumar/brainwave",
  },
  image: {
    src: "/images/projects/brainwave.webp",
    alt: "Brainwave landing page hero with the headline “Explore the Possibilities of AI Chatting with Brainwave” above a robot illustration.",
    width: 1600,
    height: 1200,
  },
};

export const projectsIntro =
  "Some projects: a solo full-stack app, a hackathon team build, and two frontend projects. Each one links to its source code and a live deployment.";
