import { contact } from "../_content/contact";
import { profile } from "../_content/profile";
import { CopyEmail } from "./copy-email";
import { SectionLabel } from "./section-label";

// 03 Contact: oversized closing question, short invitation, and the email
// address as the single primary call to action. Profiles live in the footer.
export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="shell pt-[clamp(2.5rem,6vw,4.5rem)] pb-[clamp(4rem,10vw,8rem)]"
    >
      <SectionLabel index="03" title="Contact" aside="Say hello" />

      <div className="reveal mt-10 md:mt-16">
        <h2
          id="contact-title"
          className="font-display text-[clamp(3rem,10.5vw,9.5rem)] leading-[0.9] font-normal tracking-[-0.03em] text-fg"
        >
          {contact.headline.lines.map((line, i) => (
            <span key={line} className="block">
              {line}
              {i === contact.headline.lines.length - 1 && (
                <span className="text-accent">{contact.headline.end}</span>
              )}
            </span>
          ))}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-y-10 md:mt-16 lg:grid-cols-12 lg:gap-x-8">
          <p className="max-w-[36ch] text-body-l text-fg-soft lg:col-span-4 lg:self-end">
            {contact.invite}
          </p>

          <div className="border-t border-rule-strong pt-5 lg:col-span-7 lg:col-start-6">
            <p className="label-mono text-fg-faint">{contact.ctaLabel}</p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-4 inline-flex max-w-full items-baseline gap-3 font-display text-[clamp(1.25rem,5.4vw,3.25rem)] leading-tight text-fg sm:gap-5"
            >
              <span className="link-underline min-w-0 wrap-anywhere">
                {profile.email}
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-accent transition-[translate] duration-200 ease-out-quint motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1 motion-safe:group-focus-visible:translate-x-1 motion-safe:group-focus-visible:-translate-y-1"
              >
                ↗
              </span>
            </a>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.75rem] text-fg-faint">
              <p>{contact.ctaHint}</p>
              <span aria-hidden="true">·</span>
              <CopyEmail email={profile.email} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
