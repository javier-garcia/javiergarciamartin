import CaseStudyPage from "@/templates/CaseStudyPage";
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
      phases={[
        {
          label: "Original platform",
          title: "WordPress monolith",
          text: "I implemented functionality and updates on the original site, gaining direct knowledge of its editorial requirements and the decisions embedded in its content structure.",
        },
        {
          label: "Inherited architecture",
          title: "WordPress becomes headless",
          text: "A different company—not our team—introduced the first Next.js frontend with GraphQL and Apollo. The system we inherited already contained several generations of technical decisions.",
        },
        {
          label: "Frontend recovery",
          title: "Rebuilding with context",
          text: "Our team substantially recreated the frontend while retaining the existing headless WordPress backend. I worked within the inherited architecture and across the CMS and frontend boundary.",
        },
        {
          label: "Progressive migration",
          title: "Craft with WordPress fallback",
          text: "We introduced Craft CMS incrementally rather than replacing WordPress in one release. The two systems continued to serve the platform while individual content areas moved at their own pace.",
        },
      ]}
      chapters={[
        {
          label: "Understanding the legacy",
          title: "The old model was evidence, not baggage.",
          paragraphs: [
            "Having worked on the original WordPress site, I understood much of the history behind its content model and the requirements that had shaped it. That context helped distinguish genuine editorial needs from structures that existed mainly because of an earlier implementation.",
            "The Craft migration was therefore not a mechanical schema translation. Content structures could be preserved where they expressed the domain well and reconsidered where the new platform gave us a clearer option. Those decisions were discussed collaboratively with the Lead Developer and the wider team.",
          ],
        },
        {
          label: "Rethinking the content model",
          title: "Insights became distinct content types, then one frontend experience.",
          paragraphs: [
            "In WordPress, every Insight was stored in one Custom Post Type and differentiated through an Insight Type taxonomy. Articles, webinars, podcasts, white papers and checklists therefore shared a broad underlying model despite having different editorial requirements.",
            "In Craft, we modelled those formats separately so each could have an appropriate structure and fields. Next.js then aggregates them back into a shared Insights experience. The public interface remains coherent without forcing the CMS model to flatten meaningful differences.",
          ],
          comparison: {
            before: {
              label: "WordPress",
              items: [
                "One Insights Custom Post Type",
                "Insight Type taxonomy",
                "Shared general-purpose structure",
              ],
            },
            after: {
              label: "Craft CMS",
              items: [
                "Articles and webinars",
                "Podcasts and white papers",
                "Checklists",
                "Aggregated by Next.js as Insights",
              ],
            },
          },
        },
        {
          label: "Controlled flexibility for editors",
          title: "Flexible for editors. Controlled by the content model.",
          paragraphs: [
            "The platform offers roughly 20–30 configurable content components. Editors can assemble and reorder a landing page, while each Entry Type controls which components are valid in its content field. Craft previews help make those choices understandable inside the CMS.",
            "Most CMS components map to a frontend representation, but that does not mean duplicating UI code. A typeHandle selects the appropriate renderer, while reusable React components and variants provide the lower-level interface. The CMS and component system remain aligned without becoming identical.",
          ],
          flow: [
            "Craft component",
            "GraphQL data",
            "typeHandle",
            "Component renderer",
            "React component",
          ],
        },
        {
          label: "Progressive migration architecture",
          title: "The migration could move forward without a launch-day cliff edge.",
          paragraphs: [
            "For migrated areas, the frontend can query Craft first and fall back to the legacy WordPress source when the requested content is not there. If neither source contains it, the request resolves to a 404. Some production areas still use this transition logic.",
            "This allowed content types to move independently and reduced the need for a single high-risk migration event. Existing URLs remained an explicit requirement, while exports, CSV imports, plugins and selective manual work provided a pragmatic migration process rather than an overengineered bespoke tool.",
          ],
          migrationFlow: true,
        },
        {
          label: "Working across the CMS/frontend boundary",
          title: "Ownership extended beyond the component at the end of the chain.",
          paragraphs: [
            "Ownership of an area such as Insights could begin with understanding an incomplete editorial requirement and continue through Craft sections, entry types, fields and relationships; GraphQL queries and fragments; generated TypeScript types; Next.js pages; React components; routing and filtering; and preview behaviour.",
            "This work happened within a team led by another developer, with architectural decisions discussed collaboratively. GraphQL Code Generator runs as part of the build, helping expose incompatibilities between Craft schemas and frontend queries across development environments. Preview code also treats incomplete drafts as a real application state rather than assuming perfectly populated content.",
          ],
          flow: ["Craft schema", "GraphQL", "Codegen", "TypeScript", "Next.js"],
        },
        {
          label: "Future technical chapter",
          title: "Keeping published content synchronized.",
          paragraphs: [
            "Next.js cache revalidation has been one of the more technically involved areas of the platform. This space is reserved for a detailed account of that work once the Craft events, invalidation strategy and edge cases have been documented precisely.",
          ],
          future: true,
        },
      ]}
      contributions={[
        "Implementing features across Craft, GraphQL and Next.js",
        "Craft CMS content modelling and implementation for areas including Insights",
        "Building GraphQL queries, fragments and reusable React components",
        "Extending preview support across additional content channels",
        "Investigating requirements and proposing solutions with the team",
        "Working on caching, revalidation and redirects across platform layers",
      ]}
      stack={["Next.js", "React", "Craft CMS", "WordPress", "GraphQL", "Apollo"]}
      outcome="A substantially rebuilt Next.js frontend, a more deliberate Craft content architecture and a migration that can advance one content area at a time — while WordPress and Craft continue to support the live platform together."
      image={{
        src: "/images/morae-case-study.png",
        alt: "Morae legal intelligence platform homepage",
      }}
      next={{ label: "Shared multisite", href: "/work/shared-multisite" }}
    />
  );
}
