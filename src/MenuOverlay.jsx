/**
 * MenuOverlay
 * Props:
 *   isOpen    boolean
 *   onClose   () => void
 *   links     Array<{ label: string, href: string }>
 *   socials   Array<{ label: string, href: string }>
 */

import { useEffect } from "react";

const DEFAULT_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const DEFAULT_SOCIALS = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];

export default function MenuOverlay({
  isOpen,
  onClose,
  links = DEFAULT_LINKS,
  socials = DEFAULT_SOCIALS,
}) {
  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col transition-opacity duration-[380ms] ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-8 md:px-14 py-5 border-b border-white/[0.08] shrink-0">
        <span className="font-['Syne'] text-[1.3rem] font-black text-white">
          HK<span className="text-[#e8ff47]">.</span>
        </span>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex items-center gap-2 bg-transparent border-none cursor-pointer text-white/40 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-[22px] leading-none">×</span>
          <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.2em] uppercase">
            Close
          </span>
        </button>
      </div>

      {/* ── Nav links ── */}
      <nav className="flex-1 flex flex-col justify-center px-8 md:px-14">
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className={`group flex items-baseline justify-between border-b border-white/[0.07] py-5 md:py-7 no-underline transition-all duration-[450ms] ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
            style={{ transitionDelay: `${i * 70 + 100}ms` }}
          >
            <span
              className="font-['Syne'] font-black text-white group-hover:text-[#e8ff47] transition-colors duration-300 leading-none"
              style={{ fontSize: "clamp(2.4rem, 6.5vw, 5.5rem)" }}
            >
              {link.label}
            </span>
            <span className="font-['JetBrains_Mono'] text-xs text-white/[0.18] group-hover:text-[#e8ff47] transition-colors duration-300">
              0{i + 1}
            </span>
          </a>
        ))}
      </nav>

      {/* ── Socials ── */}
      <div className="px-8 md:px-14 py-6 border-t border-white/[0.08] flex gap-8 shrink-0">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="font-['JetBrains_Mono'] text-[11px] tracking-[0.18em] uppercase text-white/30 hover:text-white no-underline transition-colors duration-300"
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
