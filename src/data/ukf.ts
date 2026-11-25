import type { ProjectCaseStudy, ProjectImageSlot } from "./case-studies";

// Set src and source dimensions for each supplied image. Set videoSrc for MP4 clips,
// with src as the poster when available. The cover always needs a still image.
function media(id: string, brief: string, alt: string): ProjectImageSlot {
  return {
    id,
    brief,
    alt,
    suggestedFilename: `/images/ukf/ukf-${id}.webp`,
    aspectRatio: "16:9",
    recommendedDimensions: "1920 × 1080",
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
    media("cover", "Selected work thumbnail", "UKF project cover"),
    media("hero", "Homepage screenshot or video poster", "UKF homepage"),
    media(
      "music-preview",
      "Music catalogue and preview player",
      "UKF music catalogue with preview controls",
    ),
    media(
      "genres",
      "Interactive music genre visualisations",
      "UKF interactive music genre visualisations",
    ),
    media("navigation-lineup", "Navigation or event lineup", "UKF navigation or event lineup"),
    media(
      "dynamic-listings",
      "Advanced content listings screenshot",
      "UKF dynamic content listings",
    ),
  ],
  visualSequence: [
    { imageId: "music-preview", eyebrow: "Playback", title: "Music catalogue and previews" },
    { imageId: "genres", eyebrow: "Motion", title: "Interactive genre visualisations" },
    { imageId: "navigation-lineup", eyebrow: "Interaction", title: "Navigation and live events" },
    { imageId: "dynamic-listings", eyebrow: "Data", title: "Dynamic content listings" },
  ],
  nextProject: "permatech",
  home: {
    section: "selected-work",
    order: 4,
    intro:
      "Custom WordPress development, creative interactions and advanced data integration for an electronic music platform.",
  },
};
