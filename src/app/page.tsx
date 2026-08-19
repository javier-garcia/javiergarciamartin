import { AboutSection } from "@/components/home/AboutSection";
import { AvailabilitySection } from "@/components/home/AvailabilitySection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ScrollEffects } from "@/components/home/ScrollEffects";
import { WorkingSection } from "@/components/home/WorkingSection";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StructuredData } from "@/components/seo/StructuredData";
import { siteConfig } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: siteConfig.name,
          url: siteConfig.url,
          email: `mailto:${siteConfig.email}`,
          jobTitle: siteConfig.title,
          knowsAbout: ["React", "Next.js", "TypeScript", "Craft CMS", "WordPress", "GraphQL"],
        }}
      />
      <ScrollEffects />
      <SiteHeader />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExpertiseSection />
        <WorkingSection />
        <AboutSection />
        <AvailabilitySection />
      </main>
      <ContactFooter />
    </>
  );
}
