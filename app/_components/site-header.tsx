import { profile } from "../_content/profile";
import { NavLinks } from "./nav-links";

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
    <header className="surface sticky top-0 z-40 h-(--header-h) border-b border-rule">
      <div className="shell flex h-full items-center justify-between gap-4">
        <a
          href="#top"
          className="group -ml-1 flex min-h-11 items-center px-1 font-display text-[1.875rem] leading-none tracking-[-0.015em] text-fg"
        >
          <span aria-hidden="true">
            HK
            <span className="text-accent transition-colors duration-200 group-hover:text-fg group-focus-visible:text-fg">
              .
            </span>
          </span>
          <span className="sr-only">{profile.fullName}, back to top</span>
        </a>

        <nav aria-label="Primary">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
