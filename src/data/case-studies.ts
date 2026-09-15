export type ProjectImageSlot = {
  id: string;
  src?: string;
  alt: string;
  caption?: string;
  brief: string;
  suggestedFilename: string;
  aspectRatio: string;
  recommendedDimensions: string;
  sourceWidth?: number;
  sourceHeight?: number;
  objectPosition?: string;
  priority?: boolean;
};

export type TechnicalChallenge = {
  title: string;
  problem: string;
  decision: string;
  importance: string;
  technicalCaseHref?: string;
};

export type VisualSequenceItem = {
  imageId: string;
  eyebrow: string;
  title: string;
  text?: string;
};

export type ProjectCaseStudy = {
  slug: string;
  number: string;
  title: string;
  client: string;
  sector?: string;
  eyebrow: string;
  intro: string;
  summary: string;
  role: string;
  team?: string;
  duration?: string;
  areas: string[];
  technologies: string[];
  challenge?: string;
  approach: string[];
  contribution: string[];
  technicalChallenges: TechnicalChallenge[];
  outcome: string;
  imageSlots: ProjectImageSlot[];
  visualSequence: VisualSequenceItem[];
  nextProject: string;
  published?: boolean;
  contentNotice?: string;
  home: {
    intro: string;
  };
  contentTodos?: string[];
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "morae",
    number: "01",
    title: "Morae",
    client: "Morae",
    eyebrow: "Platform evolution · Next.js + headless CMS",
    intro:
      "Rebuilding and progressively evolving an established headless platform without discarding the knowledge embedded in its history.",
    summary:
      "I returned to a platform I had previously worked on in its monolithic WordPress period. That context became useful when our agency team took over its headless successor, substantially rebuilt the frontend and progressively introduced Craft CMS alongside the existing WordPress content source.",
    role: "Frontend development / CMS integration",
    team: "Project manager, designer, lead developer, Javier and occasional backend support",
    duration: "Approximately 2–3 years",
    areas: [
      "Platform evolution",
      "Page building",
      "Editorial workflows",
      "Preview and revalidation",
      "UX and interaction",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Craft CMS",
      "GraphQL",
      "WordPress",
    ],
    challenge:
      "The live platform carried several generations of frontend, CMS and editorial decisions. The work required understanding which legacy requirements still mattered, rebuilding substantial interface areas and allowing content to move progressively rather than forcing a one-time replacement.",
    approach: [
      "Read the inherited system in the context of its earlier WordPress implementation.",
      "Work collaboratively with the lead developer while taking ownership of substantial vertical features.",
      "Keep editorial workflows, URLs and live content working while Craft and WordPress coexisted.",
    ],
    contribution: [
      "Implemented work across Craft content models, GraphQL queries, generated types, Next.js routes and React components.",
      "Contributed to the page-building system, interaction details and responsive frontend experience.",
      "Extended preview, publishing, redirect and cache-revalidation behaviour across migrated content areas.",
    ],
    technicalChallenges: [
      {
        title: "Understand before replacing",
        problem:
          "The previous content model mixed genuine editorial requirements with structures shaped by the original WordPress implementation.",
        decision:
          "Use the migration to preserve domain knowledge while reconsidering structures that no longer represented the content clearly.",
        importance:
          "The new architecture could evolve without treating every legacy decision as either sacred or disposable.",
      },
      {
        title: "Progressive CMS migration",
        problem:
          "Craft could not replace every WordPress content area in one release without increasing migration risk.",
        decision:
          "Prefer Craft for migrated areas while retaining WordPress as a fallback for content that had not yet moved.",
        importance:
          "Individual content types could evolve while the production platform continued operating.",
      },
      {
        title: "Semantic cache revalidation",
        problem:
          "Publishing, disabling or changing related CMS content could affect several cached frontend dependencies.",
        decision:
          "Extend event-driven tag and path invalidation, including targeted relationship handling for assets and content state transitions.",
        importance:
          "CMS changes could invalidate the relevant cached representation instead of relying on global or time-based regeneration.",
        technicalCaseHref: "/work/revalidation-flow",
      },
    ],
    outcome:
      "The frontend was substantially rebuilt, Craft could be introduced area by area and editors retained important workflows while WordPress continued supporting content that had not yet moved. The result is an evolving platform rather than a rewrite presented as a clean break from its history.",
    imageSlots: [
      {
        id: "hero",
        src: "/images/morae-case-study.png",
        alt: "Morae legal intelligence platform homepage",
        caption: "Morae legal intelligence platform.",
        brief:
          "Panoramic capture of a visually representative Morae page showing interface quality and finished production work. Avoid admin panels or code.",
        suggestedFilename: "morae-project-hero.webp",
        aspectRatio: "16 / 10",
        recommendedDimensions: "1800 × 1125 px",
        sourceWidth: 3558,
        sourceHeight: 1920,
        objectPosition: "top",
        priority: true,
      },
      {
        id: "page-system",
        alt: "Morae page-building system across several page and module configurations",
        brief:
          "Composition of two or three pages or modules demonstrating editorial flexibility and variation across the page-building system.",
        suggestedFilename: "morae-page-system.webp",
        src: "/images/morae-page-system.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
      {
        id: "interaction",
        alt: "Detailed Morae interaction or animated interface component",
        brief:
          "Detail of a carefully implemented interaction, animation or component. A short visual sequence can be used if a still image is insufficient.",
        suggestedFilename: "morae-interaction-detail.webp",
        aspectRatio: "4 / 3",
        recommendedDimensions: "1600 × 1200 px",
      },
      {
        id: "responsive",
        alt: "Desktop and mobile versions of the same Morae experience",
        brief:
          "Desktop and mobile composition of the same experience, showing actual responsive behaviour rather than decorative device mockups.",
        suggestedFilename: "morae-responsive.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
    ],
    visualSequence: [
      {
        imageId: "page-system",
        eyebrow: "Editorial system",
        title: "Flexible composition inside controlled boundaries.",
        text: "Editors can compose and reorder pages from an established component set, while each content type controls which modules are valid in that context.",
      },
      {
        imageId: "interaction",
        eyebrow: "Frontend experience",
        title: "Interaction work remained part of the platform, not an isolated flourish.",
        text: "Animation and interface detail were implemented alongside the content model, responsive behaviour and production constraints.",
      },
      {
        imageId: "responsive",
        eyebrow: "Responsive delivery",
        title: "The same content system had to remain coherent across screen sizes.",
      },
    ],
    nextProject: "core-one",
    home: {
      intro:
        "Rebuilding an established headless platform and progressively changing its CMS architecture while it remained live.",
    },
  },
  {
    slug: "core-one",
    number: "02",
    title: "Core One",
    client: "Core One",
    eyebrow: "Creative frontend · Motion and 3D",
    intro:
      "A Next.js and Craft CMS platform combining structured content with demanding animation and 3D frontend work.",
    summary:
      "Core One combines structured content with motion and 3D frontend work inside a CMS-driven Next.js platform.",
    role: "Frontend development",
    areas: ["Creative frontend", "Animation", "3D", "Responsive implementation", "CMS integration"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Craft CMS"],
    challenge:
      "The frontend needed to support visually demanding animation and 3D elements without allowing the experience to become disconnected from the wider content platform or responsive interface.",
    approach: [
      "Implement motion and 3D as part of the production frontend rather than as an isolated prototype.",
      "Keep the surrounding pages and content experience coherent beyond the most recognisable visual moment.",
      "Adapt the experience for smaller screens without treating the desktop composition as a fixed canvas.",
    ],
    contribution: [
      "Frontend implementation involving animation and 3D elements.",
      "Integration of the visual experience into the Next.js and Craft CMS platform.",
      "Responsive behaviour and production-facing interface work.",
    ],
    technicalChallenges: [
      {
        title: "Motion inside a content platform",
        problem:
          "Visually demanding frontend elements still needed to coexist with CMS content and the rest of the site experience.",
        decision:
          "Treat animation and 3D as integrated interface behaviour rather than a separate showcase layer.",
        importance: "The visual work could remain part of a maintainable Next.js application.",
      },
      {
        title: "Responsive visual behaviour",
        problem:
          "Large-screen motion and spatial composition cannot simply be scaled down for mobile.",
        decision:
          "Adapt composition and behaviour for the available viewport while retaining a clear content hierarchy.",
        importance: "The project experience remains usable beyond the desktop presentation.",
      },
    ],
    outcome:
      "The implementation combines a CMS-driven Next.js platform with animation and 3D as part of the frontend experience.",
    imageSlots: [
      {
        id: "hero",
        alt: "Core One main experience featuring its most recognisable visual or 3D element",
        brief:
          "Capture the primary Core One experience with its most recognisable visual or 3D element. Show the real interface rather than an isolated render.",
        suggestedFilename: "core-one-project-hero.webp",
        aspectRatio: "16 / 10",
        recommendedDimensions: "1800 × 1125 px",
        priority: true,
      },
      {
        id: "motion",
        alt: "Sequence showing multiple states of a Core One animation",
        brief:
          "Two or three states from an animation or interaction sequence. This may later be replaced by video if motion is essential to understanding it.",
        suggestedFilename: "core-one-motion-sequence.webp",
        aspectRatio: "16 / 9",
        recommendedDimensions: "1800 × 1013 px",
      },
      {
        id: "content",
        alt: "Core One interior content page",
        brief:
          "Interior page demonstrating that the project extends beyond the hero and includes a complete content experience.",
        suggestedFilename: "core-one-content-experience.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
      {
        id: "mobile",
        alt: "Core One visual experience adapted for mobile screens",
        brief:
          "Mobile adaptation of the actual experience, ideally alongside the equivalent desktop state without decorative device frames obscuring the UI.",
        suggestedFilename: "core-one-mobile.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
    ],
    visualSequence: [
      {
        imageId: "motion",
        eyebrow: "Motion sequence",
        title: "Movement should explain the experience, not compete with it.",
      },
      {
        imageId: "content",
        eyebrow: "Content experience",
        title: "The platform extends beyond its most visually distinctive moment.",
      },
      {
        imageId: "mobile",
        eyebrow: "Responsive adaptation",
        title: "Spatial and animated behaviour needs a mobile-specific composition.",
      },
    ],
    nextProject: "nti",
    home: {
      intro:
        "Combining a structured Next.js platform with animation and 3D frontend implementation.",
    },
    contentTodos: [
      "Confirm project duration and team composition.",
      "Confirm the exact animation and 3D implementation details Javier can describe publicly.",
      "Confirm whether any project sector can be named.",
    ],
  },
  {
    slug: "nti",
    number: "03",
    title: "NTI",
    client: "NTI",
    eyebrow: "Multisite platform · Shared component system",
    intro:
      "A multisite Next.js platform balancing shared frontend foundations with the needs of individual sites.",
    summary:
      "NTI uses a shared component library across a Craft CMS multisite platform. The central challenge is deciding where consistency creates value and where each site needs controlled variation.",
    role: "Frontend development",
    areas: ["Multisite architecture", "Shared components", "CMS-driven variation", "Responsive UI"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Craft CMS"],
    challenge:
      "Changes to a shared component can affect several site experiences, while duplicating components for every local requirement would undermine the value of the common system.",
    approach: [
      "Identify behaviour and interface patterns that are genuinely shared.",
      "Use controlled variants where sites need to differ without duplicating whole components.",
      "Consider the effect of each change across the wider multisite platform.",
    ],
    contribution: [
      "Worked with the shared React component library across the multisite platform.",
      "Implemented CMS-driven variations while preserving common frontend behaviour.",
      "Delivered responsive interface work with awareness of cross-site regressions.",
    ],
    technicalChallenges: [
      {
        title: "Shared without becoming identical",
        problem:
          "Each site needed access to common interface foundations without losing room for legitimate local requirements.",
        decision:
          "Keep reusable behaviour in shared components and express site differences through controlled variants.",
        importance:
          "The system can support consistency without turning every exception into a duplicated component.",
      },
      {
        title: "Cross-site impact",
        problem: "A local-looking component change may alter several site experiences.",
        decision:
          "Treat the wider usage and responsive states as part of the implementation scope.",
        importance:
          "Shared changes are evaluated as system changes rather than isolated page edits.",
      },
    ],
    outcome:
      "A shared component system supports the multisite platform while allowing controlled differences between site experiences.",
    imageSlots: [
      {
        id: "cover",
        alt: "Selected interfaces from the NTI multisite platform",
        brief:
          "Horizontal composition showing two or three representative NTI sites as one related multisite family.",
        suggestedFilename: "nti-project-cover.webp",
        aspectRatio: "16 / 10",
        recommendedDimensions: "1800 × 1125 px",
      },
      {
        id: "hero",
        src: "/images/nti-project-family.webp",
        alt: "Several NTI sites shown as one related multisite family",
        brief:
          "Panoramic composition showing several sites or experiences from the NTI system so the multisite character is immediately visible.",
        suggestedFilename: "nti-project-family.webp",
        aspectRatio: "3384 / 4956",
        recommendedDimensions: "1200 × 1757 px",
        sourceWidth: 3384,
        sourceHeight: 4956,
        objectPosition: "top",
        priority: true,
      },
      {
        id: "components",
        alt: "Shared NTI components used across different sites and page contexts",
        brief:
          "Compare shared components in different pages or sites, showing both coherence and controlled variation without using code screenshots.",
        suggestedFilename: "nti-shared-components.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
      {
        id: "responsive",
        alt: "Responsive NTI multisite experiences across desktop and mobile",
        brief:
          "Desktop and mobile examples demonstrating how the shared system responds across viewports.",
        suggestedFilename: "nti-responsive-system.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
    ],
    visualSequence: [
      {
        imageId: "components",
        eyebrow: "Shared library",
        title: "One component foundation, several contexts.",
        text: "The useful boundary is not complete uniformity. It is a shared implementation that makes intentional variation explicit.",
      },
      {
        imageId: "responsive",
        eyebrow: "System behaviour",
        title: "Responsive states are part of the shared contract.",
      },
    ],
    nextProject: "saratoga",
    home: {
      intro:
        "A multisite platform balancing shared components with the particular needs of each site.",
    },
    contentTodos: [
      "Confirm team composition and duration.",
      "Confirm examples of specific shared component decisions Javier can describe publicly.",
      "Confirm whether any project sector can be named.",
    ],
  },
  {
    slug: "saratoga",
    number: "04",
    title: "Saratoga",
    client: "Saratoga",
    eyebrow: "Next.js · Craft CMS platform",
    intro: "A frontend platform implemented with Next.js, Craft CMS, TypeScript and Tailwind CSS.",
    summary:
      "The currently verified project record covers frontend implementation in Next.js and TypeScript, integrated with a headless Craft CMS platform.",
    role: "Frontend development",
    areas: ["Frontend implementation", "CMS integration", "Responsive UI"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Craft CMS"],
    approach: [],
    contribution: [],
    technicalChallenges: [],
    outcome:
      "The verified public record currently establishes the implementation stack and frontend scope. Project context, team structure and a defensible outcome still need to be documented.",
    imageSlots: [
      {
        id: "hero",
        alt: "Most representative Saratoga project page",
        brief: "Panoramic capture of the most representative Saratoga page.",
        suggestedFilename: "saratoga-project-hero.webp",
        aspectRatio: "16 / 10",
        recommendedDimensions: "1800 × 1125 px",
        priority: true,
      },
      {
        id: "detail",
        alt: "Saratoga interior page or component collection",
        brief: "Interior page or collection of real interface components from Saratoga.",
        suggestedFilename: "saratoga-page-detail.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
      {
        id: "responsive",
        alt: "Saratoga experience across desktop and mobile",
        brief: "Desktop and mobile composition showing the same Saratoga experience.",
        suggestedFilename: "saratoga-responsive.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
    ],
    visualSequence: [
      {
        imageId: "detail",
        eyebrow: "Project detail",
        title: "Interior page and component system.",
      },
      {
        imageId: "responsive",
        eyebrow: "Responsive experience",
        title: "Desktop and mobile implementation.",
      },
    ],
    nextProject: "morae",
    contentNotice:
      "This page documents confirmed implementation scope only. Project context, Javier’s specific contribution and outcomes are still being verified before publication.",
    home: {
      intro: "Frontend implementation across a Next.js and Craft CMS platform.",
    },
    contentTodos: [
      "Confirm project context and original brief.",
      "Confirm Javier's specific contribution and team structure.",
      "Confirm technical challenges and a defensible functional outcome.",
      "Confirm duration and sector if publishable.",
    ],
  },
  {
    slug: "brookstein",
    number: "05",
    title: "Brookstein",
    client: "Brookstein",
    eyebrow: "Next.js · Craft CMS platform",
    intro: "A frontend platform implemented with Next.js, Craft CMS, TypeScript and Tailwind CSS.",
    summary:
      "Brookstein was implemented as a Next.js frontend integrated with Craft CMS, using TypeScript and Tailwind CSS.",
    role: "Frontend development",
    areas: ["Frontend implementation", "CMS integration", "Responsive UI"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Craft CMS"],
    approach: [],
    contribution: [],
    technicalChallenges: [],
    outcome:
      "A Next.js frontend integrated with Craft CMS and implemented with TypeScript and Tailwind CSS.",
    imageSlots: [
      {
        id: "hero",
        alt: "Most representative Brookstein project page",
        brief: "Panoramic capture of the most representative Brookstein page.",
        suggestedFilename: "brookstein-project-hero.webp",
        aspectRatio: "16 / 10",
        recommendedDimensions: "1800 × 1125 px",
        priority: true,
      },
      {
        id: "detail",
        alt: "Brookstein interior page or component collection",
        brief: "Interior page or collection of real interface components from Brookstein.",
        suggestedFilename: "brookstein-page-detail.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
      {
        id: "responsive",
        alt: "Brookstein experience across desktop and mobile",
        brief: "Desktop and mobile composition showing the same Brookstein experience.",
        suggestedFilename: "brookstein-responsive.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
    ],
    visualSequence: [
      {
        imageId: "detail",
        eyebrow: "Project detail",
        title: "Interior page and component system.",
      },
      {
        imageId: "responsive",
        eyebrow: "Responsive experience",
        title: "Desktop and mobile implementation.",
      },
    ],
    nextProject: "morae",
    published: false,
    home: {
      intro: "Frontend implementation across a Next.js and Craft CMS platform.",
    },
    contentTodos: [
      "Confirm project context and original brief.",
      "Confirm Javier's specific contribution and team structure.",
      "Confirm technical challenges and a defensible functional outcome.",
      "Confirm duration and sector if publishable.",
    ],
  },
];

export const projectCaseStudiesBySlug = new Map(
  projectCaseStudies.map((project) => [project.slug, project]),
);

export const publishedProjectCaseStudies = projectCaseStudies.filter(
  (project) => project.published !== false,
);

export function getProjectCaseStudy(slug: string) {
  return projectCaseStudiesBySlug.get(slug);
}
