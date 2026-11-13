export const services = [
  [
    "01",
    "Web platforms & engineering",
    "Complex web platforms, headless CMS architectures, reusable component systems and third-party integrations. React, Next.js, TypeScript, Craft CMS, WordPress and GraphQL.",
  ],
  [
    "02",
    "Digital products & data visualization",
    "Dashboards, interactive data interfaces, digital tools and user-centered applications. React, APIs, UX/UI and data visualization.",
  ],
  [
    "03",
    "Creative technology & interaction",
    "Interactive experiences, generative visuals, creative coding and immersive interfaces. Three.js, WebGL, Processing and animation.",
  ],
  [
    "04",
    "Connected systems & IoT",
    "Personal research and practical prototyping with connected devices, environmental monitoring and sensor data. MQTT, Node.js, ESP8266, Raspberry Pi, InfluxDB and Grafana.",
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

export const insideWorkStories = [
  {
    project: "Morae",
    title: "Progressive platform evolution",
    description:
      "Moving from WordPress-origin structures towards Craft while preserving publishing, preview and redirect behaviour that still mattered.",
    action: "Explore project",
    href: "/work/morae#technical-challenges",
  },
  {
    project: "Morae",
    title: "Publishing state and cache invalidation",
    description:
      "Resolving which cached pages and dependencies should change when related CMS content is published, disabled or updated.",
    action: "Read technical case",
    href: "/case-studies/revalidation-flow",
  },
  {
    project: "NTI",
    title: "Shared components across multiple sites",
    description:
      "Keeping genuinely common behaviour reusable while allowing controlled variation for individual sites.",
    action: "Explore project",
    href: "/work/nti#technical-challenges",
  },
  {
    project: "Core One",
    title: "Motion and 3D inside a content platform",
    description:
      "Integrating expressive visual behaviour into a responsive, CMS-driven Next.js application rather than an isolated demo.",
    action: "Explore project",
    href: "/work/core-one#technical-challenges",
  },
] as const;
