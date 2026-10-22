"use client";

import { useEffect, useState } from "react";
import { navItems } from "../_content/profile";

export function NavLinks() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = ["#top", ...navItems.map((item) => item.href)]
      .map((selector) => document.querySelector(selector))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id === "top" ? null : `#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="-mr-2 flex items-center sm:gap-3">
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            aria-current={active === item.href ? "location" : undefined}
            className="label-mono link-underline flex min-h-11 items-center px-2 text-fg-soft [--underline-base:transparent] hover:text-fg focus-visible:text-fg [&[aria-current]]:text-fg"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
