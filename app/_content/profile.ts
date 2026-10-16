// Public portfolio content. Mirrors the verified notes in `context/` (which is
// gitignored and must not be imported). Only add facts confirmed there.

export type ExternalLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: `#${string}`;
};

export const profile = {
  name: { first: "Himansu", last: "Kumar" },
  fullName: "Himansu Kumar",
  credential: ["B.Tech CSE", "NIT Rourkela", "Odisha, India"],
  // Short hero intro, composed only from wording in the approved introduction.
  heroIntro:
    "Computer Science and Engineering undergraduate at NIT Rourkela, interested in full-stack development, backend systems, and problem solving. I enjoy building applications involving APIs, authentication, databases, and analytics.",
  metaDescription:
    "Himansu Kumar — Computer Science and Engineering undergraduate at NIT Rourkela, interested in full-stack development, backend systems, and problem solving.",
  github: {
    label: "GitHub",
    href: "https://github.com/Himansu-Kumar",
  } satisfies ExternalLink,
} as const;

export const navItems: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
