import type { Project } from "../_content/projects";

// Shared pieces used by every project layout, so spacing, type, and link
// behaviour stay consistent across the different compositions.

// Project marker (1.1, 1.2, …): thin rule, muted number. Deliberately quieter
// than SectionLabel so sections and projects read as different levels.
export function ProjectIndexRow({ project }: { project: Project }) {
  return (
    <div className="label-mono flex items-baseline justify-between gap-4 border-t border-rule pt-3 text-fg-faint">
      <span>
        <span className="sr-only">Project </span>
        <span className="text-fg-muted">{project.index}</span>
        <span aria-hidden="true"> · </span>
        <span className="sr-only">, </span>
        {project.kind}
      </span>
      <span>{project.year}</span>
    </div>
  );
}

export function ProjectHighlights({
  project,
  columns = 2,
}: {
  project: Project;
  columns?: 1 | 2;
}) {
  return (
    <dl
      className={`grid gap-x-6 gap-y-5 ${columns === 2 ? "sm:grid-cols-2" : ""}`}
    >
      {project.highlights.map((h) => (
        <div key={h.label}>
          <dt className="label-mono text-fg-faint">{h.label}</dt>
          <dd className="mt-1.5 text-[0.9375rem] text-fg-muted">{h.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProjectPurpose({ text }: { text: string }) {
  return (
    <div>
      <p className="label-mono text-fg-faint">Purpose</p>
      <p className="mt-2 text-fg-muted">{text}</p>
    </div>
  );
}

export function ProjectSpecs({ project }: { project: Project }) {
  return (
    <dl className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-3 border-t border-rule pt-5">
      <dt className="label-mono pt-0.5 text-fg-faint">Role</dt>
      <dd className="text-fg-soft">{project.role}</dd>
      <dt className="label-mono pt-0.5 text-fg-faint">Stack</dt>
      <dd>
        <ul className="label-mono flex flex-wrap gap-x-2 gap-y-1 text-fg-soft">
          {project.stack.map((tech, i) => (
            <li key={tech} className="flex gap-2">
              {tech}
              {i < project.stack.length - 1 && (
                <span aria-hidden="true" className="text-fg-faint">
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </dd>
    </dl>
  );
}

const arrowClass =
  "text-fg-muted transition-[color,translate] duration-200 ease-out-quint group-hover:text-accent group-focus-visible:text-accent motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5";

export function ProjectLinks({ project }: { project: Project }) {
  const links = [
    { label: "Live site", href: project.links.live },
    { label: "Source code", href: project.links.source },
  ];

  return (
    <ul className="flex flex-wrap gap-x-8 gap-y-1">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="group inline-flex min-h-11 items-center gap-2 font-mono text-[0.8125rem] tracking-[0.08em] text-fg-soft uppercase hover:text-fg focus-visible:text-fg"
          >
            <span className="link-underline">
              {link.label}
              <span className="sr-only">
                {" "}
                for {project.name} (external site)
              </span>
            </span>
            <span aria-hidden="true" className={arrowClass}>
              ↗
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
