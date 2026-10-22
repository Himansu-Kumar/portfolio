import { profile, socials } from "../_content/profile";

export function SiteFooter() {
  const links = [
    ...socials.map((s) => ({ ...s, external: true })),
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      srLabel: undefined,
      external: false,
    },
  ];

  return (
    <footer className="shell overflow-hidden pb-8">
      <div className="flex flex-col gap-6 border-t border-rule-strong pt-6 md:flex-row md:items-center md:justify-between">
        <nav aria-label="Profiles">
          <ul className="-ml-2 flex flex-wrap gap-x-2 gap-y-1 sm:gap-x-4">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="label-mono link-underline flex min-h-11 items-center px-2 text-fg-soft [--underline-base:transparent] hover:text-fg focus-visible:text-fg"
                >
                  {link.srLabel ? (
                    <>
                      <span aria-hidden="true">{link.label}</span>
                      <span className="sr-only">{link.srLabel}</span>
                    </>
                  ) : (
                    link.label
                  )}
                  {link.external && (
                    <span className="sr-only"> (external site)</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#top"
          className="group label-mono inline-flex min-h-11 items-center gap-2 self-start text-fg-soft hover:text-fg focus-visible:text-fg md:self-auto"
        >
          <span className="link-underline">Back to top</span>
          <span
            aria-hidden="true"
            className="text-fg-muted transition-[color,translate] duration-200 ease-out-quint group-hover:text-accent group-focus-visible:text-accent motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:-translate-y-0.5"
          >
            ↑
          </span>
        </a>
      </div>

      <p
        aria-hidden="true"
        className="numeral-outline mt-12 text-[clamp(3rem,14.5vw,12.5rem)] tracking-[-0.02em] whitespace-nowrap md:mt-16"
      >
        {profile.fullName}
      </p>

      <div className="label-mono mt-6 flex flex-wrap justify-between gap-x-6 gap-y-2 text-fg-faint">
        <p>© 2026 HK.</p>
        <p>Somewhere in the corner of internet</p>
      </div>
    </footer>
  );
}
