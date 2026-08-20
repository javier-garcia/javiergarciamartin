import CaseStudyPage from "@/templates/CaseStudyPage";
import { RevalidationStory } from "@/components/case-studies/RevalidationStory";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Keeping Craft CMS and Next.js in sync",
  description:
    "Extending and debugging event-driven cache revalidation across Craft CMS lifecycle events, semantic dependencies and Next.js caching.",
  path: "/work/revalidation-flow",
});

export default function Page() {
  return (
    <CaseStudyPage
      index="03"
      eyebrow="CMS events · Next.js caching"
      title="Keeping Craft CMS and Next.js in sync."
      lead="Extending and debugging an event-driven cache revalidation system across Craft CMS, GraphQL and Next.js."
      context="This issue came from a long-running Craft CMS and Next.js platform where CMS lifecycle events drive targeted cache revalidation."
      challenge="The hard part was not calling a Next.js cache API. It was identifying what should become stale when relational CMS content changed state."
      metadata={[
        { label: "Type", value: "Technical case" },
        { label: "System", value: "Craft CMS / Next.js" },
        { label: "Focus", value: "Caching / events / debugging" },
        { label: "Context", value: "Production headless platform" },
      ]}
      showOverview={false}
      showVisual={false}
      next={{ label: "Morae", href: "/work/morae" }}
    >
      <RevalidationStory />
    </CaseStudyPage>
  );
}
