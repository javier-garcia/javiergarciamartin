import type { ProjectCaseStudy, ProjectImageSlot } from "./case-studies";

function screenshot(
  id: string,
  filename: string,
  alt: string,
  [sourceWidth, sourceHeight] = [1920, 1080],
): ProjectImageSlot {
  const src = `/images/ukf/ukf-${filename}.webp`;

  return {
    id,
    src,
    alt,
    brief: alt,
    suggestedFilename: src,
    aspectRatio: `${sourceWidth} / ${sourceHeight}`,
    recommendedDimensions: `${sourceWidth} × ${sourceHeight}`,
    sourceWidth,
    sourceHeight,
  };
}

export const ukf: ProjectCaseStudy = {
  slug: "ukf",
  number: "09",
  title: "UKF — The Home of Bass Music",
  displayTitle: "UKF",
  subtitle: "The Home of Bass Music",
  client: "UKF",
  sector: "Electronic music",
  projectType: "Commercial",
  categories: ["Web platforms", "Creative technology", "Interactive experiences"],
  eyebrow: "Electronic music · Custom WordPress development",
  seoTitle: "UKF — Custom WordPress & Creative Development",
  seoDescription:
    "Custom WordPress development for UKF, combining advanced JavaScript, GSAP animations, multimedia API integrations and complex SQL-powered content listings.",
  intro:
    "UKF brings together artists, music releases, editorial content, videos and live events on one electronic music platform.",
  summary:
    "Custom WordPress development, creative interactions and advanced data integration for an electronic music platform.",
  challenge:
    "The team combined the editorial flexibility of WordPress with a digital experience that reflected the energy and visual identity of electronic music culture.",
  role: "Web Developer",
  collaboration: "One designer and two developers",
  areas: ["WordPress & PHP", "Creative development", "SQL & data integration"],
  technologies: [
    "WordPress",
    "PHP",
    "SQL",
    "JavaScript",
    "Elementor",
    "JetEngine",
    "JetSmartFilters",
    "GSAP",
    "ScrollTrigger",
    "Lenis",
    "CSS",
    "YouTube IFrame API",
  ],
  approach: [
    "The team built the platform on WordPress with Elementor and JetEngine, extending it through a custom child theme, PHP, JavaScript, SQL and extensive CSS customisation.",
    "Custom interactions, multimedia integrations and content retrieval worked within the existing CMS, preserving the editorial workflow.",
  ],
  contribution: [
    "I was responsible for the advanced JavaScript, including the custom music preview system, motion and project-specific interactions.",
    "I wrote the advanced SQL queries that powered the platform’s more complex dynamic content listings.",
  ],
  technicalChallengesLabel: "Inside the work",
  technicalChallenges: [
    {
      title: "Custom Music Preview System",
      problem:
        "Music previews needed to work directly inside listings that JetEngine and JetSmartFilters update through AJAX.",
      decision:
        "I used the YouTube IFrame API to initialise players on demand, manage playback state, transition volume, time previews and handle Spotify links.",
      importance:
        "I coordinated player initialisation with the rendering lifecycle so playback controls also worked after filtering or loading more content.",
    },
    {
      title: "Motion & Creative Development",
      problem:
        "The site’s motion had to carry the visual identity across screen sizes and work with dynamically generated content.",
      decision:
        "I used JavaScript, GSAP, ScrollTrigger and Lenis to build smooth scrolling with a synchronised, draggable scrollbar, animated navigation and menu transitions, and interactive genre visualisations.",
      importance:
        "I also built animated typography, scrolling marquees and responsive event lineup interactions, integrating the animations with dynamically rendered content.",
    },
    {
      title: "Advanced SQL & Dynamic Listings",
      problem:
        "Some listings needed to combine content from multiple sources within the WordPress database.",
      decision:
        "I wrote advanced SQL queries to power dynamic listings and support more complex relationships between content types.",
      importance:
        "The queries extended WordPress and JetEngine’s content retrieval while preserving the editorial flexibility of the CMS.",
    },
    {
      title: "Extending WordPress",
      problem: "The project needed behaviour beyond the standard Elementor and JetEngine features.",
      decision:
        "The team extended a custom child theme with PHP hooks and filters, JetEngine callbacks and macros, and JavaScript loaded according to content type and page context.",
      importance:
        "The implementation also covered AJAX filtering and content loading, responsive styling and WordPress administration customisation within the existing CMS.",
    },
  ],
  outcome: "Awwwards — Honorable Mention",
  externalLinks: [{ label: "Visit UKF", href: "https://ukf.com/" }],
  omitMissingMedia: true,
  imageSlots: [
    screenshot(
      "cover",
      "cover",
      "UKF logotype framing a DJ and crowd beneath blue and yellow lights",
    ),
    screenshot(
      "hero",
      "home",
      "UKF homepage with its navigation, welcome marquee and live music imagery",
    ),
    screenshot(
      "player",
      "player",
      "Feature.fm preview panel opened from UKF Releases, showing the pause control and streaming links",
    ),
    screenshot(
      "genres",
      "genres",
      "UKF genre selector with three circular choices against a pattern of concentric rings",
    ),
    screenshot(
      "listings",
      "listings",
      "UKF Releases catalogue with the Genre filter expanded beside the Artist, Label and Sort controls",
    ),
    screenshot(
      "events",
      "events",
      "Past events on UKF Rave with the UKF New Zealand lineup expanded",
    ),
    screenshot(
      "mobile-home",
      "mobile-home",
      "Mobile UKF homepage with its menu, logotype and latest releases heading",
      [780, 1688],
    ),
    screenshot(
      "mobile-listings",
      "mobile-listings",
      "Mobile UKF Releases catalogue with four filter controls and the first release card",
      [780, 1688],
    ),
  ],
  visualSequence: [
    {
      imageId: "player",
      eyebrow: "Playback",
      title: "Music previews in the live catalogue",
      text: "The current Releases page opens a Feature.fm preview panel. The custom YouTube IFrame implementation described below was part of the original project.",
    },
    { imageId: "genres", eyebrow: "Motion", title: "Interactive genre selector" },
    { imageId: "listings", eyebrow: "Data", title: "Filterable release listings" },
    { imageId: "events", eyebrow: "Interaction", title: "Live events and lineups" },
    { imageId: "mobile-home", eyebrow: "Mobile", title: "The UKF homepage on mobile" },
    { imageId: "mobile-listings", eyebrow: "Mobile", title: "Browsing releases on mobile" },
  ],
  nextProject: "permatech",
  home: {
    section: "selected-work",
    order: 4,
    intro:
      "Custom WordPress development, creative interactions and advanced data integration for an electronic music platform.",
  },
};
