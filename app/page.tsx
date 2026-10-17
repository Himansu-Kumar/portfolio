import { Hero } from "./_components/hero";
import { PendingSection } from "./_components/pending-section";
import { ProjectsSection } from "./_components/projects-section";
import { SiteHeader, SkipLink } from "./_components/site-header";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProjectsSection />
        <PendingSection id="about" index="02" title="About" />
        <PendingSection id="contact" index="03" title="Contact" />
      </main>
    </>
  );
}
