import { profile } from "../_content/profile";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="shell pt-[clamp(3rem,10vw,7rem)] pb-[clamp(5rem,12vw,10rem)]"
    >
      <p className="label-mono flex flex-wrap gap-x-2 text-fg-faint">
        {profile.credential.map((part, i) => (
          <span key={part} className="whitespace-nowrap">
            {i > 0 && (
              <span aria-hidden="true" className="mr-2">
                ·
              </span>
            )}
            {part}
          </span>
        ))}
      </p>

      <div aria-hidden="true" className="animate-draw-x mt-4 h-px bg-rule" />

      <h1
        id="hero-title"
        className="mt-6 font-display text-display-xl font-normal text-fg md:mt-10"
      >
        <span className="animate-rise block">{profile.name.first}</span>
        <span className="animate-rise block [--delay:80ms]">
          {profile.name.last}
        </span>
      </h1>

      <div
        aria-hidden="true"
        className="animate-draw-x mt-8 h-px bg-rule [--delay:150ms] md:mt-12"
      />

      <div className="mt-8 grid grid-cols-4 gap-x-4 gap-y-8 md:mt-10 md:grid-cols-8 md:gap-x-6 lg:grid-cols-12 lg:gap-x-8">
        <p className="col-span-4 max-w-[62ch] text-body-l text-fg md:col-span-5 lg:col-span-7 lg:text-[1.375rem]">
          {profile.heroIntro}
        </p>

        <ul className="col-span-4 flex flex-col gap-1 md:col-span-3 lg:col-span-4 lg:col-start-9">
          <li>
            <a
              href="#projects"
              className="group inline-flex min-h-11 items-center gap-2 text-body-l text-fg"
            >
              <span className="link-underline">View projects</span>
              <span
                aria-hidden="true"
                className="text-fg-muted transition-[color,translate] duration-200 ease-out-quint group-hover:text-accent group-focus-visible:text-accent motion-safe:group-hover:translate-y-0.5 motion-safe:group-focus-visible:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </li>
          <li>
            <a
              href={profile.github.href}
              className="group inline-flex min-h-11 items-center gap-2 text-body-l text-fg"
            >
              <span className="link-underline">{profile.github.label}</span>
              <span
                aria-hidden="true"
                className="text-fg-muted transition-[color,translate] duration-200 ease-out-quint group-hover:text-accent group-focus-visible:text-accent motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5"
              >
                ↗
              </span>
              <span className="sr-only">(external site)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
