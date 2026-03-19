const MARQUEE_TEXT =
  "Building for the web  ·  Full-Stack Developer  ·  UI / UX Design  ·  React  ·  Node.js  ·  Open to work  ";

function Marquee() {
  const full = Array(8).fill(MARQUEE_TEXT).join("· ");
  return (
    <div className="overflow-hidden flex-1 min-w-0">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span
          className="text-xs tracking-widest uppercase text-white/60"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {full + full}
        </span>
      </div>
    </div>
  );
}

function Navbar({ onMenuOpen, visible = true }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 h-20 flex items-stretch border-b border-white/10 bg-black/20 backdrop-blur-md transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Logo */}
      <a
        href="/"
        className="flex items-center border-r border-white/10 shrink-0 no-underline w-30 justify-center"
        style={{
          fontFamily: "'Syne', sans-serif",
        }}
      >
        <span className="text-xl font-black text-white tracking-tight leading-none">
          HK<span className="text-[#e8ff47]">.</span>
        </span>
      </a>

      {/* Marquee */}
      <div className="flex items-center flex-1 min-w-0 border-r border-white/10 overflow-hidden px-0 py-6">
        <Marquee />
      </div>

      {/* Menu button */}
      <button
        onClick={onMenuOpen}
        aria-label="Open menu"
        className="flex items-center gap-2 shrink-0 bg-transparent border-none cursor-pointer group w-30 justify-center"
      >
        <span className="text-white/50 text-lg leading-none group-hover:text-[#e8ff47] transition-colors duration-300">
          +
        </span>
        <span
          className="text-xs tracking-widest uppercase font-bold text-white group-hover:text-[#e8ff47] transition-colors duration-300"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          Menu
        </span>
      </button>
    </header>
  );
}

export default Navbar;
