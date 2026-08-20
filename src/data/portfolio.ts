export type Project = {
  number: string;
  title: string;
  href: string;
  eyebrow: string;
  intro: string;
  detail: string;
  result: string;
  image?: { src: string; alt: string };
};

export const projects: Project[] = [
  {
    number: "01",
    image: {
      src: "/images/morae-case-study.png",
      alt: "Morae's Case Study",
    },
    title: "Morae",
    href: "/work/morae",
    eyebrow: "Platform evolution · Next.js + Craft CMS",
    intro:
      "Rebuilding an established headless platform and progressively changing its CMS architecture while it remains live.",
    detail:
      "I had worked on Morae when its website was still a monolithic WordPress build. A different company later delivered its first headless implementation. When our team took over, that history helped me understand the inherited content model, contribute to a substantial frontend rebuild and progressively introduce Craft CMS while both systems continued to coexist.",
    result:
      "Previous knowledge helped separate legacy requirements worth preserving from implementation structures that could be redesigned as the platform evolved.",
  },
  {
    number: "02",
    title: "Shared multisite",
    href: "/work/shared-multisite",
    eyebrow: "Frontend systems · Multiple websites",
    intro:
      "A shared component system that lets related sites evolve consistently without forcing them to become identical.",
    detail:
      "Working inside an established multi-site codebase means understanding where consistency is valuable and where each website needs room to differ. The work combines reusable React architecture, CMS-driven variation and careful changes that do not create regressions across the wider platform.",
    result:
      "One senior developer who can reason across the system, isolate the impact of a change and ship it safely across several sites.",
  },
  {
    number: "03",
    title: "Revalidation flow",
    href: "/work/revalidation-flow",
    eyebrow: "Craft CMS · Next.js caching",
    intro:
      "Tracing a stale-cache issue across Craft lifecycle events, semantic dependencies and Next.js invalidation.",
    detail:
      "A disabled Entry could remain represented by stale cached data. I tested whether element-index actions followed a different lifecycle, rejected that hypothesis and traced the actual problem to application logic that skipped revalidation once the Entry's new state was disabled.",
    result:
      "The final fix retained the existing Entry lifecycle and removed the guard that suppressed the invalidation required by the state transition.",
  },
];

export const services = [
  [
    "01",
    "Extra senior capacity",
    "Join an agency team for a demanding delivery phase, backlog or deadline and start contributing inside the existing workflow.",
  ],
  [
    "02",
    "Complex issue resolution",
    "Trace problems across React, Next.js, APIs, CMS integrations, caching, previews, redirects and content workflows until the real cause is found.",
  ],
  [
    "03",
    "Platform evolution",
    "Refactor, migrate or extend mature systems — whether they use Craft, WordPress or another CMS — without ignoring their technical and editorial history.",
  ],
  [
    "04",
    "Frontend architecture",
    "Build reusable React systems that remain understandable when multiple sites, content types and developers are involved.",
  ],
] as const;

export const workingSteps = [
  [
    "01",
    "Read the system",
    "I map the architecture, conventions and immediate risk before changing code.",
  ],
  [
    "02",
    "Join the team",
    "I work with the existing people, tools and delivery process rather than creating a parallel universe.",
  ],
  [
    "03",
    "Resolve and ship",
    "I take ownership of issues, communicate trade-offs and deliver production-ready work.",
  ],
] as const;
