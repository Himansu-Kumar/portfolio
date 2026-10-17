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
  role: "Software developer",
  heroIntro:
    "I build web applications, explore backend systems, and enjoy solving real-world problems with code.",
  tagline: "Turning ideas into working software",
  // Technologies used in verified portfolio projects (see context/skills.md).
  // Listed without proficiency levels.
  stack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB"],
  metaDescription:
    "Himansu Kumar — software developer. I build web applications, explore backend systems, and enjoy solving real-world problems with code.",
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
