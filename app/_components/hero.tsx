import { profile } from "../_content/profile";
import { OrbitMark } from "./orbit-mark";

const arrowClass =
  "transition-[color,translate] duration-200 ease-out-quint group-hover:text-accent group-focus-visible:text-accent";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="shell lg:flex lg:min-h-[calc(100svh-var(--header-h))] lg:flex-col"
    >
      <div className="grid grid-cols-4 gap-x-4 pt-[clamp(3.5rem,10vw,7rem)] pb-[clamp(3.5rem,8vw,6rem)] md:grid-cols-8 md:gap-x-6 lg:flex-1 lg:grid-cols-12 lg:gap-x-8 lg:pt-[clamp(2.5rem,7vh,6rem)] lg:pb-[clamp(2rem,5vh,4rem)]">
        <div className="col-span-4 self-center md:col-span-8 lg:col-span-8">
          <p className="label-mono flex items-center gap-3 text-fg-soft">
            <span aria-hidden="true" className="h-px w-6 bg-accent" />
            {profile.role}
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-display text-display-xl font-normal text-fg md:mt-8"
          >
            <span className="animate-rise block">{profile.name.first}</span>
            <span className="animate-rise block [--delay:80ms]">
              {profile.name.last}
            </span>
          </h1>

          <div className="mt-8 max-w-[44ch] text-body-l text-fg-soft md:mt-10 lg:text-[1.375rem]">
            <div className="label-mono flex min-h-16 items-center gap-3 border-t border-rule py-5 text-fg-faint">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 rounded-full bg-accent"
              />
              {profile.tagline}
            </div>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-1 md:mt-10">
            <li>
              <a
                href="#projects"
                className="group inline-flex min-h-11 items-center gap-3 font-mono text-[0.8125rem] tracking-[0.08em] uppercase"
              >
                <span className="link-accent">View projects</span>
                <span
                  aria-hidden="true"
                  className={`${arrowClass} text-accent motion-safe:group-hover:translate-y-0.5 motion-safe:group-focus-visible:translate-y-0.5`}
                >
                  ↓
                </span>
              </a>
            </li>
            <li>
              <a
                href={profile.github.href}
                className="group inline-flex min-h-11 items-center gap-3 font-mono text-[0.8125rem] tracking-[0.08em] uppercase text-fg-soft hover:text-fg focus-visible:text-fg"
              >
                <span className="link-underline">{profile.github.label}</span>
                <span
                  aria-hidden="true"
                  className={`${arrowClass} text-fg-muted motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-focus-visible:translate-x-0.5 motion-safe:group-focus-visible:-translate-y-0.5`}
                >
                  ↗
                </span>
                <span className="sr-only">(external site)</span>
              </a>
            </li>
          </ul>
        </div>

        <aside
          aria-labelledby="stack-label"
          className="col-span-4 mt-14 flex flex-col gap-12 md:col-span-8 lg:col-span-3 lg:col-start-10 lg:mt-0 lg:justify-between lg:py-4"
        >
          <div className="border-t border-rule pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
            <p id="stack-label" className="label-mono text-fg-faint">
              Worked with
            </p>
            <ol className="label-mono mt-4 flex flex-wrap gap-x-6 gap-y-2 text-fg-soft lg:flex-col lg:gap-y-2.5">
              {profile.stack.map((tech, i) => (
                <li key={tech} className="flex gap-3">
                  <span aria-hidden="true" className="text-fg-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {tech}
                </li>
              ))}
            </ol>
          </div>

          <OrbitMark className="hidden w-full max-w-60 self-end lg:block" />
        </aside>
      </div>
    </section>
  );
}
