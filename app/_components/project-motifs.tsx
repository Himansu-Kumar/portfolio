// Small, fact-based visual motifs for the two featured projects. Both are
// built from verified behaviour only (context/projects.md); no figures.

function FlowRow({
  label,
  steps,
  highlight,
}: {
  label: string;
  steps: string[];
  highlight?: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-[8.5rem_1fr] sm:items-center">
      <p className="label-mono text-fg-faint">{label}</p>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-2">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="h-px w-4 bg-rule-strong" />
            )}
            <span
              className={`border px-2.5 py-1 font-mono text-[0.75rem] ${
                step === highlight
                  ? "border-accent text-accent"
                  : "border-rule-strong text-fg-soft"
              }`}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Freelance Helper: the real data model and invoice lifecycle.
export function FreelanceFlow() {
  return (
    <figure className="flex flex-col gap-5 border-t border-rule pt-5">
      <FlowRow label="Data model" steps={["Client", "Project", "Invoice"]} />
      <FlowRow
        label="Invoice lifecycle"
        steps={["Draft", "Sent", "Paid / Overdue", "PDF"]}
        highlight="PDF"
      />
      <figcaption className="sr-only">
        Freelance Helper links each client to projects and invoices. Invoices
        move from draft to sent, then to paid or overdue, and can be exported
        as a PDF.
      </figcaption>
    </figure>
  );
}

const resources = [
  { name: "Carbon", unit: "g CO₂e" },
  { name: "Water", unit: "ml" },
  { name: "Land", unit: "cm²" },
];

// Planet-Prompt: what each logged prompt is converted into. Units only, no
// values; the product's own figures are estimates, not results to quote.
export function PlanetFootprint() {
  return (
    <figure className="border-t border-rule pt-5">
      <p className="label-mono flex flex-wrap items-center gap-2 text-fg-faint">
        <span>Prompt</span>
        <span aria-hidden="true">→</span>
        <span>Model</span>
        <span aria-hidden="true">→</span>
        <span className="text-accent">Footprint</span>
      </p>
      <dl className="mt-5 grid grid-cols-3 border-l border-rule">
        {resources.map((r) => (
          <div key={r.name} className="border-r border-rule px-2.5 sm:px-5">
            <dt className="font-display text-[clamp(1.5rem,4vw,3rem)] leading-none text-fg">
              {r.name}
            </dt>
            <dd className="mt-2 font-mono text-[0.75rem] tracking-[0.04em] text-fg-faint">
              {r.unit}
            </dd>
          </div>
        ))}
      </dl>
      <figcaption className="mt-5 max-w-[52ch] text-[0.9375rem] text-fg-muted">
        Each logged query is converted into carbon, water, and land estimates
        using per-model conversion factors. A prompt advisor suggests a leaner
        rewrite before it’s sent.
      </figcaption>
    </figure>
  );
}
