// Top-level section marker: strong rule, lime two-digit number (01, 02, …).
// Projects inside a section use the quieter ProjectIndexRow (1.1, 1.2, …).

type SectionLabelProps = {
  index: string;
  title: string;
  /** Optional right-aligned note, e.g. a date range. */
  aside?: string;
  /** Render the label as the section heading (for sections without one). */
  as?: "p" | "h2";
  id?: string;
};

export function SectionLabel({
  index,
  title,
  aside,
  as: Tag = "p",
  id,
}: SectionLabelProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-rule-strong pt-4">
      <Tag id={id} className="label-mono flex items-center gap-3 text-fg-soft">
        <span className="text-accent">{index}</span>
        <span aria-hidden="true" className="h-px w-6 bg-rule-strong" />
        {title}
      </Tag>
      {aside && <span className="label-mono text-fg-faint">{aside}</span>}
    </div>
  );
}
