import CaseStudyPage from "@/templates/CaseStudyPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Next.js cache revalidation case study",
  description:
    "Tracing a publishing issue across Craft CMS events, webhook payloads, GraphQL content state and Next.js path and tag revalidation.",
  path: "/work/revalidation-flow",
});

export default function Page() {
  return (
    <CaseStudyPage
      index="03"
      eyebrow="CMS events · Next.js caching"
      title="Following a publishing issue across every layer."
      lead="Diagnosing inconsistent content updates by tracing the complete route from CMS actions to the rendered Next.js page."
      context="The platform uses CMS events and webhook payloads to invalidate cached Next.js content. Standard entry updates worked, while disabling content or performing bulk actions produced inconsistent results."
      challenge="The visible symptom appeared in the frontend, but the cause crossed several boundaries: element lifecycle events, bulk action behaviour, payload construction, cache tags, paths and the final query response."
      phases={[
        {
          label: "Symptom",
          title: "Content remains visible",
          text: "A disabled entry could continue appearing even though the CMS had initiated a revalidation request.",
        },
        {
          label: "Trace",
          title: "Follow the complete event path",
          text: "Compare individual saves with bulk actions and inspect which CMS events fire, what data is available and what invalidation reaches Next.js.",
        },
        {
          label: "Correction",
          title: "Handle the real action lifecycle",
          text: "Use the correct action-level events for bulk operations and align path and tag invalidation with the affected content.",
        },
        {
          label: "Verification",
          title: "Test awkward states",
          text: "Validate publishing, disabling and bulk changes rather than assuming the successful happy path represents the whole workflow.",
        },
      ]}
      contributions={[
        "CMS event and bulk-action debugging",
        "Webhook payload design",
        "Next.js path and tag revalidation",
        "GraphQL content-state verification",
        "Testing edge cases across system boundaries",
      ]}
      stack={["Next.js", "React", "Craft CMS", "PHP", "GraphQL", "Webhooks"]}
      outcome="Complex issues are rarely solved by staring harder at the layer where the symptom appears. The useful skill is following the system until the assumptions diverge from reality."
      next={{ label: "Morae", href: "/work/morae" }}
    />
  );
}
