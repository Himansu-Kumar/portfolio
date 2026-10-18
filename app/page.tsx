import { AboutSection } from "./_components/about-section";
import { ContactSection } from "./_components/contact-section";
import { Hero } from "./_components/hero";
import { ProjectsSection } from "./_components/projects-section";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader, SkipLink } from "./_components/site-header";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader />
      <main id="main">
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
