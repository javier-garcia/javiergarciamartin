import CaseStudyPage from "@/templates/CaseStudyPage";
import { MoraeStory } from "@/components/case-studies/MoraeStory";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Rebuilding and evolving Morae's headless platform",
  description:
    "Taking over an established Next.js and WordPress platform, rebuilding its frontend and progressively introducing Craft CMS while the site remained live.",
  path: "/work/morae",
  image: "/images/morae-case-study.png",
});

export default function Page() {
  return (
    <CaseStudyPage
      index="01"
      eyebrow="Platform evolution · Next.js + Craft CMS"
      title="Rebuilding and evolving an established headless platform."
      lead="Taking over an existing Next.js and WordPress platform, rebuilding much of its frontend and progressively introducing Craft CMS without requiring a disruptive one-time migration."
      context="I had worked on Morae before its current headless architecture existed, when the website was still a monolithic WordPress build. A different company later moved it to WordPress, GraphQL and Next.js. When our team took over, I brought first-hand knowledge of the platform's history as well as its inherited code and content model."
      challenge="This was a mature production platform with hundreds of entries and assets, established URLs, SEO data, redirects and editorial workflows. We needed to substantially improve the frontend and evolve the CMS architecture while the live site continued to operate and while WordPress and Craft coexisted."
      metadata={[
        { label: "Role", value: "Frontend development / CMS integration" },
        { label: "Context", value: "Long-term agency collaboration" },
        { label: "Stack", value: "Next.js / React / TypeScript / Craft / GraphQL" },
        { label: "Involvement", value: "Approximately 2–3 years" },
      ]}
      image={{
        src: "/images/morae-case-study.png",
        alt: "Morae legal intelligence platform homepage",
      }}
      next={{ label: "Shared multisite", href: "/work/shared-multisite" }}
    >
      <MoraeStory />
    </CaseStudyPage>
  );
}
