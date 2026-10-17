// Phase 1 only: empty anchor targets so the header and hero links resolve.
// Each one is replaced when its section is approved and built.

import { SectionLabel } from "./section-label";

type PendingSectionProps = {
  id: string;
  index: string;
  title: string;
};

export function PendingSection({ id, index, title }: PendingSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="shell py-[clamp(5rem,12vw,10rem)]"
    >
      <SectionLabel as="h2" id={`${id}-title`} index={index} title={title} />
    </section>
  );
}
