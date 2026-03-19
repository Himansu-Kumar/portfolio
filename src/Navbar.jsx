/**
 * Navbar
 * Props:
 *   onMenuOpen  () => void
 *   visible     boolean
 */

const MARQUEE_TEXT =
  "Building for the web  ·  Full-Stack Developer  ·  UI / UX Design  ·  React  ·  Node.js  ·  Open to work  ";

function Marquee() {
  const full = Array(8).fill(MARQUEE_TEXT).join("");
  return (
    <div className="overflow-hidden flex-1 min-w-0">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="text-xs tracking-widest uppercase text-white/60">
          {full + full}
        </span>
      </div>
    </div>
  );
}

export default function Navbar({ onMenuOpen, visible = true }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 flex items-stretch border-b border-white/15 bg-black/20 backdrop-blur-md transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center px-8 py-5 border-r border-white/15 shrink-0">
        <a href="/" className="no-underline">
          <span
            className="text-xl font-black text-white tracking-tight leading-none"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            HK<span className="text-[#e8ff47]">.</span>
          </span>
        </a>
      </div>

      {/* Scrolling marquee */}
      <div className="flex items-center flex-1 min-w-0 border-r border-white/15 px-6 py-5 overflow-hidden">
        <Marquee />
      </div>

      {/* Menu button */}
      <button
        onClick={onMenuOpen}
        aria-label="Open navigation menu"
        className="flex items-center gap-2 px-8 py-5 shrink-0 bg-transparent border-none cursor-pointer group"
      >
        <span className="text-white/50 text-base leading-none group-hover:text-[#e8ff47] transition-colors duration-300">
          +
        </span>
        <span
          className="text-xs tracking-[0.2em] uppercase text-white font-bold group-hover:text-[#e8ff47] transition-colors duration-300"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Menu
        </span>
      </button>
    </header>
  );
}
