const TICKS = Array.from({ length: 24 }, (_, i) => i * 15);

export function OrbitMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g stroke="var(--color-rule-strong)" strokeOpacity="0.55">
        <circle cx="120" cy="120" r="104" />
        <circle cx="120" cy="120" r="64" strokeDasharray="2 5" />
        <circle cx="146" cy="120" r="34" />
        {TICKS.map((deg) => (
          <line
            key={deg}
            x1="120"
            y1={deg % 90 === 0 ? 8 : 12}
            x2="120"
            y2="16"
            transform={`rotate(${deg} 120 120)`}
          />
        ))}
        <line x1="120" y1="120" x2="194" y2="46" strokeOpacity="0.8" />
      </g>
      <circle cx="120" cy="120" r="1.5" fill="var(--color-fg-faint)" />
      <circle cx="193.5" cy="46.5" r="3.5" fill="var(--color-accent)" />
    </svg>
  );
}
