import { about } from "../_content/about";
import { SectionLabel } from "./section-label";

const tileBase =
  "group/tile relative overflow-hidden border border-rule transition-colors duration-200 hover:border-rule-strong";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="shell pt-[clamp(2.5rem,6vw,4.5rem)] pb-[clamp(5rem,12vw,10rem)]"
    >
      <SectionLabel index="02" title="About" aside="Beyond the build" />

      <div className="mt-8 grid grid-cols-1 gap-y-12 md:mt-12 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-7">
          <h2
            id="about-title"
            className="font-display text-display-l font-normal text-fg"
          >
            {about.headline}
            <span className="text-accent">.</span>
          </h2>
          <p className="mt-5 max-w-[30ch] font-display text-display-m text-fg-muted">
            {about.aside}
          </p>
        </div>

        <dl className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-3 self-end border-t border-rule pt-5 lg:col-span-4 lg:col-start-9">
          {about.spec.map((row) => (
            <div key={row.key} className="contents">
              <dt className="label-mono pt-0.5 text-fg-faint">{row.key}</dt>
              <dd className="text-fg-soft">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-8 md:gap-5 lg:grid-cols-12">
        <CricketTile />
        <FootballTile />
        <MentalityStrip />
        <FoodTile />
        <MoviesTile />
      </div>
    </section>
  );
}

function TileHeader({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="label-mono relative flex items-baseline justify-between gap-4 text-fg-faint">
      <h3>
        <span className="text-fg-muted">{index}</span>
        <span aria-hidden="true"> · </span>
        <span className="sr-only">, </span>
        {title}
      </h3>
      {note && <span>{note}</span>}
    </div>
  );
}

function Numeral({ value, className }: { value: string; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`numeral-outline pointer-events-none absolute ${className}`}
    >
      {value}
    </span>
  );
}

function CricketTile() {
  const c = about.cricket;
  return (
    <div
      className={`${tileBase} reveal flex min-h-80 flex-col justify-between gap-10 p-5 sm:p-7 md:col-span-8 lg:col-span-7`}
    >
      <Numeral
        value={c.numeral}
        className="-right-2 -bottom-6 text-[clamp(9rem,26vw,17rem)] sm:right-4"
      />
      <TileHeader index={c.index} title={c.title} note="On strike" />

      <p className="relative max-w-[14ch] font-display text-display-m text-fg">
        {c.headline}
      </p>

      <dl className="relative grid w-full max-w-md grid-cols-3 border-t border-l border-rule bg-bg/80">
        {c.card.map((cell) => (
          <div
            key={cell.key}
            className="min-w-0 border-r border-b border-rule px-2 py-2.5 sm:px-3"
          >
            <dt className="font-mono text-[0.6875rem] tracking-widest text-fg-faint uppercase">
              {cell.key}
            </dt>
            <dd className="mt-1 font-mono text-[0.8125rem] text-fg-soft">
              {cell.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function FootballTile() {
  const f = about.football;
  return (
    <div
      className={`${tileBase} reveal flex min-h-80 flex-col justify-between gap-6 p-5 sm:p-7 md:col-span-8 lg:col-span-5`}
    >
      <Numeral
        value={f.numeral}
        className="right-4 -bottom-8 text-[clamp(10rem,28vw,18rem)]"
      />
      <TileHeader index={f.index} title={f.title} note="Supporting" />

      <p className="relative font-display text-display-m text-fg">
        {f.headline}
      </p>

      <div className="relative pr-20 md:pr-24 lg:pr-32">
        <p className="mb-2 font-mono text-[0.8125rem] text-fg-muted">
          {f.idol}
        </p>
        <ul className="border-t border-rule">
          {f.clubs.map((club) => (
            <li
              key={club}
              className="flex items-center gap-3 border-b border-rule py-2 text-fg-soft"
            >
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 rounded-full bg-fg-faint"
              />
              {club}
            </li>
          ))}
        </ul>
        <blockquote className="mt-3 font-display text-base leading-snug text-fg-muted">
          <p>“{f.quote}”</p>
          <footer className="sr-only">Cristiano Ronaldo</footer>
        </blockquote>
      </div>
    </div>
  );
}

function MentalityStrip() {
  const m = about.mentality;
  return (
    <div className="reveal flex flex-col gap-3 border-y border-rule py-5 md:col-span-8 lg:col-span-12 lg:flex-row lg:items-baseline lg:gap-8">
      <p className="label-mono shrink-0 text-fg-faint">{m.label}</p>
      <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight text-fg">
        {m.traits.map((trait, i) => (
          <span key={trait}>
            {trait}
            <span
              className={
                i === m.traits.length - 1 ? "text-accent" : "text-fg-faint"
              }
            >
              .
            </span>{" "}
          </span>
        ))}
      </p>
      <p className="font-mono text-[0.8125rem] text-fg-muted lg:ml-auto lg:shrink-0">
        {m.note}
      </p>
    </div>
  );
}

function MoviesTile() {
  const mv = about.movies;
  return (
    <div className="reveal md:col-span-3 lg:col-span-4">
      <div
        className={`${tileBase} flex h-full min-h-48 flex-col justify-between gap-8 border-dashed p-5 sm:p-7`}
      >
        <span
          aria-hidden="true"
          className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rounded-full border border-rule bg-bg"
        />
        <span
          aria-hidden="true"
          className="absolute top-1/2 -right-3 size-6 -translate-y-1/2 rounded-full border border-rule bg-bg"
        />

        <TileHeader index={mv.index} title={mv.title} />
        <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <p className="font-display text-display-m text-fg">
            Also, movies<span className="text-accent">.</span>
          </p>
          <p className="font-mono text-[0.6875rem] tracking-widest whitespace-nowrap text-fg-faint uppercase">
            Admit one
          </p>
        </div>
      </div>
    </div>
  );
}

function FoodTile() {
  const fd = about.food;
  return (
    <div
      className={`${tileBase} reveal flex flex-col justify-between gap-10 bg-bg-raised p-5 sm:p-7 md:col-span-5 lg:col-span-8`}
    >
      <TileHeader index={fd.index} title={fd.title} note="Foodie" />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
        <p className="max-w-[16ch] font-display text-display-m text-fg">
          {fd.headline}
        </p>

        <div>
          <p className="font-mono text-[0.6875rem] tracking-widest text-fg-faint uppercase">
            Today’s specials
          </p>
          <ul className="mt-3">
            {fd.menu.map((item) => (
              <li
                key={item.dish}
                className="flex items-baseline gap-3 border-b border-rule py-3"
              >
                <span className="font-display text-[clamp(1.5rem,3.2vw,2.25rem)] leading-none text-fg">
                  {item.dish}
                </span>
                <span
                  aria-hidden="true"
                  className="min-w-4 flex-1 translate-y-[-0.25em] border-b border-dotted border-rule-strong"
                />
                <span className="shrink-0 font-mono text-[0.8125rem] text-fg-muted group-hover/tile:text-accent">
                  {item.note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
