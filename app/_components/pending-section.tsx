// Phase 1 only: empty anchor targets so the header and hero links resolve.
// Each one is replaced when its section is approved and built.

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
      <div aria-hidden="true" className="h-px bg-rule" />
      <h2 id={`${id}-title`} className="label-mono mt-4 text-fg-faint">
        <span aria-hidden="true">{index} — </span>
        {title}
      </h2>
    </section>
  );
}
