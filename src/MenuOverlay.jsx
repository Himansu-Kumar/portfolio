import { useEffect } from "react";

const DEFAULT_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const DEFAULT_SOCIALS = [
  { label: "GitHub", href: "https://github.com/Himansu-Kumar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/himansu-kumar/" },
  { label: "Twitter", href: "https://x.com/himansu_kumar_" },
];

function MenuOverlay({
  isOpen,
  onClose,
  links = DEFAULT_LINKS,
  socials = DEFAULT_SOCIALS,
}) {
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
      className={`fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between h-20 px-12 py-5 border-b border-white/10 shrink-0">
        <a
          href="/"
          className="flex items-center shrink-0 no-underline w-30 justify-center"
          style={{
            fontFamily: "'Syne', sans-serif",
          }}
        >
          <span className="text-xl font-black text-white tracking-tight leading-none">
            HK<span className="text-[#e8ff47]">.</span>
          </span>
        </a>
        <button
          onClick={onClose}
          className="flex items-center justify-center w-30 gap-2 bg-transparent border-none cursor-pointer text-white/40 hover:text-white transition-colors duration-300"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="text-2xl leading-none">×</span>
          <span className="text-xs tracking-widest uppercase">Close</span>
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 flex flex-col justify-center px-12 overflow-hidden">
        {links.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className={`group flex items-center justify-between border-b border-white/10 px-5 no-underline transition-all duration-500 ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
            style={{
              transitionDelay: `${i * 70 + 100}ms`,
              flex: 1,
              maxHeight: "22%",
            }}
          >
            <span
              className="font-black text-white group-hover:text-[#e8ff47] transition-colors duration-300 leading-none"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)",
              }}
            >
              {link.label}
            </span>
            <span
              className="text-xs text-white/20 group-hover:text-[#e8ff47] transition-colors duration-300"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              0{i + 1}
            </span>
          </a>
        ))}
      </nav>

      {/* Socials */}
      <div className="flex gap-8 px-12 py-6 border-t border-white/10 shrink-0">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="text-xs tracking-widest uppercase text-white/30 hover:text-white no-underline transition-colors duration-300"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default MenuOverlay;
