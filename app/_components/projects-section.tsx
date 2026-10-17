import {
  brainwave,
  freelanceHelper,
  planetPrompt,
  projectsIntro,
  xora,
  type Project,
} from "../_content/projects";
import { FreelanceFlow, PlanetFootprint } from "./project-motifs";
import {
  ProjectHighlights,
  ProjectIndexRow,
  ProjectLinks,
  ProjectPurpose,
  ProjectSpecs,
} from "./project-parts";
import { ProjectShot } from "./project-shot";
import { SectionLabel } from "./section-label";

const FEATURED_SIZES = "(min-width: 1280px) 700px, (min-width: 1024px) 56vw, 100vw";
const SECONDARY_SIZES = "(min-width: 1280px) 584px, (min-width: 1024px) 46vw, 100vw";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="shell pt-[clamp(2.5rem,6vw,4.5rem)] pb-[clamp(5rem,12vw,10rem)]"
    >
      <SectionLabel index="01" title="Selected work" aside="2025 — 2026" />

      <div className="mt-8 grid grid-cols-1 gap-y-6 md:mt-12 lg:grid-cols-12 lg:gap-x-8">
        <h2
          id="projects-title"
          className="font-display text-display-l font-normal text-fg lg:col-span-7"
        >
          Things I’ve built<span className="text-accent">.</span>
        </h2>
        <p className="max-w-[44ch] text-fg-muted lg:col-span-4 lg:col-start-9 lg:self-end">
          {projectsIntro}
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-[clamp(5rem,11vw,9rem)] md:mt-24">
        <FeaturedFreelanceHelper />
        <FeaturedPlanetPrompt />
        <div className="grid grid-cols-1 gap-y-[clamp(4rem,9vw,6rem)] lg:grid-cols-2 lg:gap-x-8">
          <SecondaryProject project={xora} />
          <SecondaryProject project={brainwave} className="lg:mt-32" />
        </div>
      </div>
    </section>
  );
}

function ProjectTitle({
  project,
  size = "l",
}: {
  project: Project;
  size?: "l" | "m";
}) {
  return (
    <h3
      id={`${project.slug}-title`}
      className={`font-display font-normal text-fg ${size === "l" ? "text-display-l" : "text-display-m"}`}
    >
      {project.name}
    </h3>
  );
}

// 1.1: text left, screenshot and workflow right.
function FeaturedFreelanceHelper() {
  const p = freelanceHelper;
  return (
    <article aria-labelledby={`${p.slug}-title`} className="reveal">
      <ProjectIndexRow project={p} />
      <div className="mt-8 grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12">
        <header className="flex flex-col gap-6 lg:col-span-5">
          <ProjectTitle project={p} />
          <p className="max-w-[46ch] text-body-l text-fg-soft">{p.description}</p>
          <ProjectPurpose text={p.purpose} />
        </header>

        <div className="flex flex-col gap-8 lg:col-span-7 lg:row-span-2">
          <ProjectShot
            image={p.image}
            name={p.name}
            sizes={FEATURED_SIZES}
          />
          <FreelanceFlow />
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5">
          <ProjectHighlights project={p} />
          <ProjectSpecs project={p} />
          <ProjectLinks project={p} />
        </div>
      </div>
    </article>
  );
}

// 1.2: mirrored. Banner and footprint motif left, text right.
function FeaturedPlanetPrompt() {
  const p = planetPrompt;
  return (
    <article aria-labelledby={`${p.slug}-title`} className="reveal">
      <ProjectIndexRow project={p} />
      <div className="mt-8 grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12">
        <header className="flex flex-col gap-6 lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <ProjectTitle project={p} />
          <p className="max-w-[46ch] text-body-l text-fg-soft">{p.description}</p>
          <ProjectPurpose text={p.purpose} />
        </header>

        <div className="flex flex-col gap-8 lg:col-span-7 lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <ProjectShot
            image={p.image}
            name={p.name}
            sizes={FEATURED_SIZES}
          />
          <PlanetFootprint />
        </div>

        <div className="flex flex-col gap-8 lg:col-span-5 lg:col-start-8 lg:row-start-2">
          <ProjectHighlights project={p} />
          <ProjectSpecs project={p} />
          <ProjectLinks project={p} />
        </div>
      </div>
    </article>
  );
}

// 1.3 and 1.4: screenshot-led, half width, staggered.
function SecondaryProject({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className={`reveal flex flex-col ${className}`}
    >
      <ProjectIndexRow project={project} />
      <ProjectShot
        image={project.image}
        name={project.name}
        sizes={SECONDARY_SIZES}
        className="mt-6"
      />
      <div className="mt-8 flex flex-col gap-6">
        <ProjectTitle project={project} size="m" />
        <p className="max-w-[56ch] text-fg-soft">{project.description}</p>
        <ProjectPurpose text={project.purpose} />
        <ProjectHighlights project={project} columns={1} />
        <ProjectSpecs project={project} />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
