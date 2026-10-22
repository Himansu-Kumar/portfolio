import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { ProjectImage } from "../_content/projects";

function hasPublicFile(src: string) {
  return existsSync(path.join(process.cwd(), "public", src));
}

type ProjectShotProps = {
  image: ProjectImage;
  name: string;
  sizes: string;
  className?: string;
};

export function ProjectShot({
  image,
  name,
  sizes,
  className = "",
}: ProjectShotProps) {
  const ready = !image.pending && hasPublicFile(image.src);
  const aspectRatio = image.frame ?? `${image.width} / ${image.height}`;

  return (
    <figure className={`group/shot relative ${className}`}>
      <div
        className="relative overflow-hidden border border-rule bg-bg-raised transition-colors duration-200 group-hover/shot:border-rule-strong"
        style={{ aspectRatio }}
      >
        {ready ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            className="object-cover"
            style={image.focus ? { objectPosition: image.focus } : undefined}
          />
        ) : (
          <ShotPlaceholder name={name} src={image.src} note={image.pending} />
        )}
      </div>

      <CornerTicks />
    </figure>
  );
}

function ShotPlaceholder({
  name,
  src,
  note,
}: {
  name: string;
  src: string;
  note?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="blueprint absolute inset-0 flex flex-col justify-between p-4 sm:p-6"
    >
      <span className="font-mono text-[0.6875rem] tracking-widest text-fg-faint uppercase">
        {note ?? "Screenshot pending"}
      </span>
      <span className="font-display text-[clamp(2rem,7vw,5.5rem)] leading-[0.9] tracking-[-0.02em] text-fg/10">
        {name}
      </span>
      <span className="truncate font-mono text-[0.6875rem] text-fg-faint">
        {src}
      </span>
    </div>
  );
}

function CornerTicks() {
  const base =
    "pointer-events-none absolute size-2 border-rule-strong transition-colors duration-200 group-hover/shot:border-accent";
  return (
    <>
      <span
        aria-hidden="true"
        className={`${base} -top-1.5 -left-1.5 border-t border-l`}
      />
      <span
        aria-hidden="true"
        className={`${base} -top-1.5 -right-1.5 border-t border-r`}
      />
      <span
        aria-hidden="true"
        className={`${base} -bottom-1.5 -left-1.5 border-b border-l`}
      />
      <span
        aria-hidden="true"
        className={`${base} -right-1.5 -bottom-1.5 border-r border-b`}
      />
    </>
  );
}
