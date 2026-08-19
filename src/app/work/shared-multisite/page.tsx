import CaseStudyPage from "@/templates/CaseStudyPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Shared Next.js multisite case study",
  description:
    "A shared React and Next.js architecture supporting multiple related websites with reusable components and controlled CMS-driven variation.",
  path: "/work/shared-multisite",
});

export default function Page() {
  return (
    <CaseStudyPage
      index="02"
      eyebrow="Frontend systems · Multiple websites"
      title="One system. Multiple sites. Controlled variation."
      lead="A shared frontend architecture that lets related websites reuse the right things without forcing every product into the same shape."
      context="The platform serves several related websites from a shared React codebase. Components, behaviours and content patterns need to be reused, but each site still has its own requirements and release risk."
      challenge="A seemingly local change can affect several products. The work requires understanding shared boundaries, CMS-driven variation and how to extend the system without multiplying exceptions or creating regressions elsewhere."
      phases={[
        {
          label: "Orientation",
          title: "Map shared boundaries",
          text: "Identify what is genuinely common, where site-specific behaviour lives and how content choices affect the rendered frontend.",
        },
        {
          label: "Implementation",
          title: "Extend without duplication",
          text: "Add reusable React behaviour and controlled variants rather than copying whole components for each website.",
        },
        {
          label: "Risk control",
          title: "Trace the blast radius",
          text: "Review the impact across sites, content types and responsive layouts before treating a change as complete.",
        },
        {
          label: "Delivery",
          title: "Ship within the team",
          text: "Work inside existing conventions, reviews and release processes so the architecture improves without blocking delivery.",
        },
      ]}
      contributions={[
        "Reusable React component architecture",
        "CMS-driven variants across related sites",
        "Responsive and accessible interface behaviour",
        "Regression-aware changes in a shared codebase",
        "Integration with an established agency delivery process",
      ]}
      stack={["React", "Next.js", "TypeScript", "GraphQL", "Headless CMS"]}
      outcome="This is the kind of environment where senior capacity matters: not because each component is exotic, but because every decision has consequences across a larger system."
      next={{ label: "Revalidation flow", href: "/work/revalidation-flow" }}
    />
  );
}
