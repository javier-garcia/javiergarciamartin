# Portfolio evolution

## Architecture and decisions

Next.js App Router statically generates `/work/[slug]` from `publishedProjectCaseStudies`. Local content remains in `src/data/case-studies.ts`; no new content system or dependencies. Existing Tailwind tokens, section spacing, media renderer, scroll reveals, reduced-motion handling and case-study template are reused.

The optional `categories` array is independent from `home.section` and `home.order`. Optional `year`, `projectType`, `featured`, `externalLinks` and `storySections` support multidisciplinary work without changing legacy content. `published: false` continues to hide drafts from routes, sitemap and homepage. `featured` is available for future curation; homepage placement is explicitly controlled by `home.section`.

`ProjectCard` serves both homepage sections. It uses an editorial text layout when media is intentionally omitted. `omitMissingMedia` hides unfilled media slots for CeBIT; existing project fallbacks remain unchanged. `storySections` offers flexible narrative sections within the shared template; existing engineering stories keep their original rendering. Inside-the-work entries now live in `src/data/portfolio.ts`; future entries can link to any project section or technical route. No future technical articles were created.

Existing case-study descriptions, slugs and metadata generation are preserved. Saratoga and Brookstein were already unpublished; their publication states remain unchanged. CeBIT now uses the owner-supplied Behance HTML, its original project plates and its Vimeo embed. The event year is 2016; Behance publication was 19 October 2015. These dates refer to different things.

## Add a project

1. Add one `ProjectCaseStudy` entry in `src/data/case-studies.ts` with a unique slug and number.
2. Set `published: true`, `home.section: "creative-technology"` and `home.order`. The homepage, static route and sitemap update automatically. Categories do not determine placement.
3. Supply confirmed role, technologies and narrative. Use `storySections` for a custom sequence of headings and paragraphs, or the existing summary/contribution/technical-challenge structure. Do not invent outcomes; an empty outcome is omitted.
4. Add original media under `public/images` or `public/video`. Set `src`, dimensions and descriptive `alt`. Use `visualSequence` entries referencing image-slot IDs for the gallery. `videoSrc` supports native video; a numeric `vimeoId` supports a lazy Vimeo iframe with player controls and a direct fallback link. Use a local `src` poster for homepage cards. Supply descriptive captions and captions/transcripts where speech requires them.
5. Choose a published `nextProject` slug. Optional `externalLinks` appear below the story. Keep `omitMissingMedia: true` while preparing original assets to avoid public production notes or broken images.
6. Run `npx tsc --noEmit`, `npm run lint`, and `npm run build`.

## CeBIT sources and media

Primary reference: https://www.behance.net/gallery/29890051/CeBIT-Generative-Key-Visual-2016

Direct browsing was blocked, but the owner subsequently supplied the rendered Behance HTML. It contains four project images and one Vimeo iframe. The original images were downloaded and inspected; no stock or generated substitutes were used. Files are stored locally so production does not depend on Behance image hosting.

| Local file                                  | Actual dimensions | Original URL                                                                               |
| ------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------ |
| `public/images/cebit-project-hero.webp`     | 1400 × 1279       | https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/93d1c329890051.5624a32bf3cf5.jpg |
| `public/images/cebit-system-structure.webp` | 1400 × 1591       | https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/bf81fb29890051.5624ae929f168.jpg |
| `public/images/cebit-creation-tool.webp`    | 1400 × 1014       | https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/81d1b429890051.5624ae92a0671.jpg |
| `public/images/cebit-project-closing.jpg`   | 1400 × 323        | https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/159b0e29890051.5624aef7aa167.jpg |

Actual formats were checked: the first three are WebP; the closing plate is JPEG despite its CDN path. The closing thank-you plate is retained as a source asset but is not displayed because the existing site already provides its own closing navigation and contact footer.

The supplied HTML contains exactly one iframe: https://player.vimeo.com/video/142719094

Public video: https://vimeo.com/142719094

Vimeo oEmbed confirmed ID 142719094, author Javier Garcia Martin, duration 17 seconds and player aspect ratio 640 × 360. The case study uses a lazy iframe, no autoplay, player controls, a descriptive title and a direct Vimeo link. Playback inside a real browser has not been verified.

Verified content from the supplied source:

- Project description: concept and development of an interactive, generative CeBIT 2016 key visual using web technologies with mobile support.
- Tool tags: JavaScript, HTML5, CSS3. No specific rendering or animation libraries are claimed.
- Feature plate: web technologies, interaction/motion detection, responsive/adaptive layout, client CMS integration and generative creation tool.
- Structure plate: dynamic CMS text and background; pointer/motion-responsive glow; randomly generated tweened particles; a second particle layer following mouse/device tilt; two dynamic pixelation layers.
- Creation-tool plate: controls for copy, background, colour, hotspot positions, particles, pixelation and glow.

The owner has confirmed sole responsibility for the entire concept, design and implementation, including the creation tool, and the use of Processing. No specific Processing library is inferred. CMS integration remains documented, but its implementation details are not remembered. All required display media is now available; a separate MP4 or poster is unnecessary for the current Vimeo integration.

## Validation

TypeScript, ESLint and the production build passed during implementation. The build generated `/work/cebit` alongside the existing published routes. The editorial refinement was reviewed in Chrome at 1440 × 1000, 390 × 844 and 320 × 740. No horizontal overflow or overflowing headings were detected. The two story images loaded once each, in context, and exactly one lazy Vimeo iframe appeared before the story. The homepage card uses the derived cover and display title. Existing Morae, Core One and NTI routes returned 200 without page script errors. Original media and Vimeo integration are complete.

## Changed files

Created:

- `src/components/home/CreativeTechnologySection.tsx`
- `src/components/home/ProjectCard.tsx`
- `docs/portfolio-evolution.md`

Modified:

- `src/app/page.tsx` and `src/app/layout.tsx`: homepage composition, structured data and SEO keywords.
- `src/components/home/HeroSection.tsx`, `AboutSection.tsx`, `ExpertiseSection.tsx`: positioning and expertise copy.
- `src/components/home/ProjectsSection.tsx`: shared card and placement-based selection.
- `src/components/home/TechnicalChallengesSection.tsx`, `WorkingSection.tsx`: data extraction and section numbering.
- `src/data/case-studies.ts`: compatible project fields, CeBIT and homepage placement.
- `src/data/portfolio.ts`: four expertise areas and existing technical stories.
- `src/lib/seo.ts`: broader homepage metadata.
- `src/templates/ProjectCaseStudyPage.tsx`: optional narrative sections, project metadata and reference links.
- `src/components/case-studies/ProjectMedia.tsx`: optional Vimeo player.

## CeBIT editorial refinement

- Optional `displayTitle` and `subtitle` separate the visible CeBIT heading from the full `title` retained for SEO. Existing projects continue to use `title` unchanged.
- `heroMediaId` selects the interaction video immediately after introduction and metadata, without changing the default `hero` slot for existing projects.
- Optional `ProjectStorySection.mediaIds` references existing media slots and renders them using `ProjectMedia`. `label` provides the section eyebrow. Assigned hero/story media is excluded from the standalone visual sequence.
- CeBIT follows: video → concept/context → system explanation and diagram → creation-tool explanation and interface → personal contribution → references → next project. The contribution is owner-confirmed; no speculative technical-decision section is published.
- Confirmed technologies appear in project metadata even when the outcome is empty. Numbering follows the sections actually included in the story layout; legacy numbering is retained for other project templates.
- `public/images/cebit-project-cover.webp` is a 1400 × 633 crop from the upper composition of `cebit-project-hero.webp` (left 0, top 0). The original 1400 × 1279 source is preserved unchanged. The derived cover is used by the homepage and page social metadata. Vimeo retains its hosted player/poster; no unrelated imagery or autoplay was added.
- Reproduce the crop with the existing Sharp dependency: `sharp(source).extract({left:0,top:0,width:1400,height:633}).webp({quality:95}).toFile(destination)`.

Owner-confirmed final content: independent creative concept, interaction design and complete implementation of the visual and creation tool; Processing, JavaScript, HTML5 and CSS3. Section 04 presents the contribution and four responsibilities in one column; references are section 05. Optional story responsibilities and closing text reuse the existing typography and list styling. CMS technology, API architecture and editorial workflow remain unspecified. No adoption, performance or business results are asserted.

Browser playback limitation: Vimeo’s player returned a Cloudflare security check in automated Chrome, with a challenge-domain DNS failure. The iframe URL, lazy loading, title, aspect ratio and direct fallback link were verified; successful playback could not be verified in this environment. Recheck playback in a normal browser. Screenshots used for review are `/tmp/cebit-desktop.png`, `/tmp/cebit-mobile.png`, `/tmp/cebit-small-mobile.png` and `/tmp/cebit-home-mobile.png`.
