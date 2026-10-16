import { navItems, profile } from "../_content/profile";

export function SkipLink() {
  return (
    <a
      href="#main"
      className="label-mono sr-only z-50 bg-accent px-4 py-3 text-on-accent focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
    >
      Skip to content
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-(--header-h) border-b border-rule bg-bg">
      <div className="shell flex h-full items-center justify-between gap-4">
        <a
          href="#top"
          className="-ml-1 flex min-h-11 items-center px-1 font-display text-[1.75rem] leading-none text-fg"
        >
          <span aria-hidden="true">
            HK<span className="text-accent">.</span>
          </span>
          <span className="sr-only">{profile.fullName}, back to top</span>
        </a>

        <nav aria-label="Primary">
          <ul className="-mr-2 flex items-center sm:gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="label-mono link-underline flex min-h-11 items-center px-2 text-fg-muted hover:text-fg focus-visible:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
