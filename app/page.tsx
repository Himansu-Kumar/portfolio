import { Hero } from "./_components/hero";
import { PendingSection } from "./_components/pending-section";
import { SiteHeader, SkipLink } from "./_components/site-header";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <Hero />
        <PendingSection id="projects" index="01" title="Projects" />
        <PendingSection id="about" index="02" title="About" />
        <PendingSection id="contact" index="03" title="Contact" />
      </main>
    </>
  );
}
