import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import MenuOverlay from "./MenuOverlay";

import img1 from "./assets/home-img1.jpg";
import img2 from "./assets/home-img2.jpg";
import img3 from "./assets/home-img3.jpg";
import img4 from "./assets/home-img4.jpg";

const slides = [img1, img2, img3, img4];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Navbar visible={mounted} onMenuOpen={() => setMenuOpen(true)} />

      <MenuOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* ── Hero ── */}
      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Crossfading slides */}
        {slides.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1100 ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === current ? 1 : 0,
              zIndex: 1,
            }}
          />
        ))}

        {/* Scrim */}
        <div className="absolute inset-0 bg-black/38 z-2" />

        {/* Headline */}
        <div
          className={`absolute inset-0 z-5 flex items-center overflow-hidden pointer-events-none select-none transition-all duration-1100 ease-out delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1
            className="font-['Syne'] font-black text-white px-4 leading-[0.85] tracking-[-0.025em]"
            style={{ fontSize: "clamp(4rem, 16vw, 16rem)", marginTop: "-2vh" }}
          >
            THIS IS HK
          </h1>
        </div>

        {/* Slide dots */}
        <div
          className={`absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 transition-opacity duration-1000 delay-1300 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-500 ${
                i === current ? "w-6 bg-[#e8ff47]" : "w-1.5 bg-white/35"
              }`}
            />
          ))}
        </div>

        {/* Scroll circle */}
        <a
          href="#about"
          aria-label="Scroll down"
          className={`absolute bottom-7 right-7 z-10 w-17 h-17 rounded-full bg-white hover:bg-[#e8ff47] flex items-center justify-center no-underline transition-all duration-300 delay-1300 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-['JetBrains_Mono'] text-[9px] font-black uppercase tracking-[0.12em] text-black text-center leading-tight">
            SCROLL
          </span>
        </a>
      </section>
    </>
  );
}
