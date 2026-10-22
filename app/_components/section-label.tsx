type SectionLabelProps = {
  index: string;
  title: string;
  aside?: string;
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
