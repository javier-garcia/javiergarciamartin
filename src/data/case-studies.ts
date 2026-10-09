export type ProjectImageSlot = {
  id: string;
  src?: string;
  videoSrc?: string;
  animated?: boolean;
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
    team: "I worked with a project manager, designer and lead developer, with backend support when needed.",
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
        technicalCaseHref: "/case-studies/revalidation-flow",
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
        sourceWidth: 3590,
        sourceHeight: 4956,
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
        src: "/images/morae-responsive-07ce4794faa7.webp",
        sourceWidth: 3594,
        sourceHeight: 14150,
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
      "Sole implementation of a designer-led Next.js and Craft CMS website, from responsive pages to interactive motion and 3D particles.",
    summary:
      "I implemented the entire Core One website, following the designer’s direction. My work covered the pages, CMS integration, responsive interface and all animation and interaction work, including the opening lines, Beyond the Mission, pointer-lit mountains, merging circles and 3D particle transformations.",
    role: "Sole developer · Full website implementation",
    team: "I worked directly with the designer and handled the full implementation.",
    areas: ["Creative frontend", "Animation", "3D", "Responsive implementation", "CMS integration"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Craft CMS"],
    challenge:
      "The project required translating the designer’s direction into a complete working website. I was responsible for implementing both the content experience and the distinctive behaviours: interactive graphics, pointer responses, animated lines and particles that transition between forms.",
    approach: [
      "Translate the designer’s direction into the site’s pages, components and animated behaviours.",
      "Carry implementation across the complete Next.js and Craft CMS website, including its responsive interface.",
      "Build the individual interactions as part of the surrounding page experience.",
    ],
    contribution: [
      "Implemented all pages and frontend components following the designer’s direction.",
      "Implemented the Next.js and Craft CMS integration and responsive website.",
      "Built Beyond the Mission, the opening line animations, pointer-lit mountains and the circles that merge near the end of the homepage.",
      "Implemented the 3D particle animation and transitions between particle forms.",
    ],
    technicalChallenges: [
      {
        title: "Connected interaction states",
        problem:
          "Beyond the Mission combines a selectable graphic with related content, so its visual and content states need to work together.",
        decision:
          "Implemented the connection between the selected circle segment, the active tab and its content.",
        importance: "The graphic acts as part of the navigation through the section’s content.",
      },
      {
        title: "Particle transformations",
        problem:
          "The particle experience includes movement between different forms as well as a 3D animated state.",
        decision:
          "Implemented the particle animation and the transitions connecting those forms.",
        importance: "The transformation itself becomes a visible part of the experience.",
      },
    ],
    outcome:
      "A complete Next.js and Craft CMS website implemented by one developer from the designer’s direction. The delivered experience brings together responsive pages, interactive graphics, pointer-driven effects and 3D particle animation. It demonstrates my ability to carry a visual concept through to its working implementation.",
    imageSlots: [
      {
        id: "cover",
        src: "/images/core-one-project-cover.webp",
        sourceWidth: 3590,
        sourceHeight: 1960,
        alt: "Core One website project preview",
        brief: "Independent Core One cover for the portfolio homepage.",
        suggestedFilename: "core-one-project-cover.webp",
        aspectRatio: "3590 / 1960",
        recommendedDimensions: "3590 × 1960 px",
      },
      {
        id: "hero",
        src: "/images/core-one-video-poster.webp",
        videoSrc: "/video/core-one-motion.mp4",
        sourceWidth: 1920,
        sourceHeight: 1038,
        alt: "Core One homepage motion and interaction showcase",
        brief:
          "Capture the opening of the actual homepage with navigation, headline and the animated lines clearly visible. Wait for a complete, readable state. Keep enough interface context for this image to also work as the portfolio homepage cover.",
        suggestedFilename: "core-one-project-hero.webp",
        aspectRatio: "16 / 10",
        recommendedDimensions: "1800 × 1125 px",
        priority: true,
      },
      {
        id: "motion",
        src: "/images/coreone_interaction.webp",
        animated: true,
        sourceWidth: 1920,
        sourceHeight: 1035,
        alt: "Beyond the Mission in its Anticipate, Innovate and Prevail states",
        brief:
          "Animated capture of Beyond the Mission showing its graphic, active tabs and associated content as the selection changes.",
        suggestedFilename: "coreone_interaction.webp",
        aspectRatio: "16 / 9",
        recommendedDimensions: "1800 × 1013 px",
      },
      {
        id: "particles",
        src: "/images/core-one-particles-poster.webp",
        videoSrc: "/video/core-one-particle-transformation.mp4",
        sourceWidth: 1920,
        sourceHeight: 1038,
        alt: "Core One particles in their initial form, during transformation and in their destination form",
        brief:
          "Video of the particle transformation in the real interface, showing how the particles move between forms alongside the page content.",
        suggestedFilename: "core-one-particle-transformation.mp4",
        aspectRatio: "1920 / 1038",
        recommendedDimensions: "1920 × 1038 px",
      },
      {
        id: "mobile",
        src: "/images/core-one-mobile.webp",
        sourceWidth: 2768,
        sourceHeight: 1268,
        alt: "Core One visual experience adapted for mobile screens",
        brief:
          "Show the same homepage section on desktop and mobile, preferably Beyond the Mission with the same tab selected. Include the full graphic and related content so the layout adaptation is visible. Use a focused section rather than full-page screenshots.",
        suggestedFilename: "core-one-mobile.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
    ],
    visualSequence: [
      {
        imageId: "motion",
        eyebrow: "Beyond the Mission",
        title: "A graphic you can interact with.",
      },
      {
        imageId: "particles",
        eyebrow: "3D particles",
        title: "From one particle form to another.",
      },
      {
        imageId: "mobile",
        eyebrow: "Responsive adaptation",
        title: "The same experience across screen sizes.",
      },
    ],
    nextProject: "nti",
    home: {
      intro:
        "Sole implementation of a designer-led website, including interactive graphics, responsive pages and 3D particle transformations.",
    },
    contentTodos: [
      "Confirm project duration.",
      "Document the animation and 3D tools and a specific implementation difficulty before adding deeper technical claims.",
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
      "Developing pages and components for a Next.js and Craft CMS multisite platform using shared UI packages.",
    summary:
      "NTI brings several branded websites together on a Next.js and Craft CMS multisite platform. My contribution focused on developing new pages using the common UI packages and contributing components within that shared frontend architecture.",
    role: "Frontend development · Pages and components",
    areas: ["Multisite development", "Shared UI packages", "Page implementation", "Responsive UI"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Craft CMS"],
    challenge:
      "New pages needed to fit the platform’s shared UI foundations while serving the content and visual identity of individual sites. The work involved building within a common system used across several brands.",
    approach: [
      "Build pages from the common UI packages used by the multisite platform.",
      "Contribute components within the shared frontend structure.",
      "Keep page composition consistent with the site’s visual identity and shared interface patterns.",
    ],
    contribution: [
      "Developed new pages using the platform’s shared UI packages.",
      "Contributed frontend components to the multisite project.",
      "Worked across page composition and reusable UI within the Next.js and Craft CMS platform.",
    ],
    technicalChallenges: [
      {
        title: "Building pages from shared UI",
        problem:
          "Individual pages need their own content composition while belonging to the wider site and component system.",
        decision:
          "Used the common UI packages to implement new pages within that system.",
        importance:
          "New page development builds on reusable interface foundations.",
      },
      {
        title: "Components in a multisite context",
        problem: "Component work sits within a frontend architecture shared by several branded websites.",
        decision:
          "Contributed components within the project’s shared structure alongside page implementation.",
        importance:
          "The work connects individual page delivery with development in a reusable UI system.",
      },
    ],
    outcome:
      "My contribution added pages and components to NTI’s multisite platform using its common UI packages. The project demonstrates my ability to deliver within a shared frontend architecture across branded site experiences.",
    imageSlots: [
      {
        id: "cover",
        alt: "Selected interfaces from the NTI multisite platform",
        src: "/images/nti-project-cover.webp",
        sourceWidth: 3592,
        sourceHeight: 1958,
        brief:
          "Horizontal composition of two or three representative sites, retaining their logos and enough interface detail to distinguish each brand. This is the independent portfolio homepage cover.",
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
        id: "page",
        src: "/images/nti-page-implementation.webp",
        sourceWidth: 3122,
        sourceHeight: 4964,
        alt: "Header, services and related projects from the NTI Networking page",
        brief:
          "Composition of three sections from the Networking page: header, services and related projects. Keep the captures at the same scale with a small gap between them to show page implementation using shared UI packages.",
        suggestedFilename: "nti-page-implementation.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
      {
        id: "responsive",
        src: "/images/nti-responsive-system.webp",
        sourceWidth: 2298,
        sourceHeight: 1268,
        alt: "The same NTI page section shown on desktop and mobile",
        brief:
          "Show the same section of the selected contribution page on desktop and mobile, with equivalent content. Keep text, cards and navigation large enough to see how the layout changes. One site is sufficient.",
        suggestedFilename: "nti-responsive-system.webp",
        aspectRatio: "3 / 2",
        recommendedDimensions: "1800 × 1200 px",
      },
    ],
    visualSequence: [
      {
        imageId: "page",
        eyebrow: "Page implementation",
        title: "New pages built on shared UI.",
        text: "My page implementation work used the common UI packages that underpin the multisite platform.",
      },
      {
        imageId: "responsive",
        eyebrow: "Responsive experience",
        title: "The same page across screen sizes.",
      },
    ],
    nextProject: "morae",
    home: {
      intro:
        "Developing pages and components across a multisite platform using shared UI packages.",
    },
    contentTodos: [
      "Confirm team composition and duration.",
      "Identify a specific page Javier implemented for the contribution and responsive captures.",
      "Confirm whether any project sector can be named.",
    ],
  },
  {
    slug: "saratoga",
    published: false,
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
      "This page documents confirmed implementation scope only. Project context, my specific contribution and outcomes are still being verified before publication.",
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
