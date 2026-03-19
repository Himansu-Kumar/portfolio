import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import MenuOverlay from "./MenuOverlay";

import img1 from "./assets/home-img1.jpg";
import img2 from "./assets/home-img2.jpg";
import img3 from "./assets/home-img3.jpg";
import img4 from "./assets/home-img4.jpg";

const slides = [img1, img2, img3, img4];

function Home() {
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

      <section className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background images */}
        {slides.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 z-1 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === current ? 1 : 0,
            }}
          />
        ))}

        {/* Dark scrim */}
        <div className="absolute inset-0 bg-black/40 z-2" />

        {/* Headline */}
        <div
          className={`absolute inset-0 z-5 flex items-center overflow-hidden pointer-events-none select-none transition-all duration-700 ease-out ${
            mounted
              ? "opacity-100 translate-y-0 delay-500"
              : "opacity-0 translate-y-10 delay-0"
          }`}
        >
          <h1 className="flex w-full justify-center items-center font-black text-white whitespace-nowrap font-[Syne,sans-serif] text-[clamp(3rem,10.5vw,12rem)] tracking-[-0.025em] leading-[0.85] px-[20px] mt-[-2vh]">
            THIS IS HK
          </h1>
        </div>

        {/* Slide dots */}
        <div
          className={`absolute bottom-9 left-1/2 -translate-x-1/2 flex items-center gap-2 transition-opacity duration-700 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ zIndex: 10, transitionDelay: mounted ? "1300ms" : "0ms" }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full border-0 cursor-pointer p-0 transition-all duration-500 ${
                i === current ? "w-6 bg-[#e8ff47]" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
