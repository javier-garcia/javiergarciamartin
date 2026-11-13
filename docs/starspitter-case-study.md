# Starspitter case study

## Branch and scope

`work/starspitter` was created from freshly fetched `origin/main` (8564463). Remote main did not yet contain CeBIT, so the completed `work/cebit` foundation (2700dc0) was incorporated through a local fast-forward. No remote branches were merged or published. Changes for Starspitter build on that foundation; the original Processing repository remains untouched.

## Content and sources

- Owner-confirmed facts in the supplied briefing establish independent authorship of the original concept, software, physical design, fabrication, assembly and real-time projection. The case distinguishes that original installation from the wider deepblue networks campaign production.
- [Original Behance project](https://www.behance.net/gallery/20482631/Starspitter-Visualizing-brain-waves): direct browsing was blocked; the owner supplied rendered page HTML. Original image URLs and embeds were extracted from that HTML, not reconstructed or guessed.
- [Original Processing repository](https://github.com/javier-garcia/starspitter): local read-only inspection supplies campaign credits, open-source context and the statement that more than 150 generative graphics were produced.
- Year: **2013**, supported by original Processing development commits in December 2013 (including `50ff72efdc3bbfa51ec67345b3f6b78ee8f229c8`, 13 December 2013) and sample measurements dated November 2013. The Behance publication date, 18 October 2015, describes documentation publication rather than project creation.
- The project type is Personal because it began as the owner’s independent initiative; adoption by the agency is explained in the introduction and campaign section.
- Technologies are limited to Processing and NeuroSky MindWave as requested. No protocol, library variant, sampling frequency or speculative processing algorithm is claimed.
- Manual capture and real-time projection are owner-confirmed capabilities. Their absence from the inspected repository’s export/projection code does not override that direct confirmation.
- The work is presented as a creative interpretation of EEG signals, not validated personality or cognitive measurement. Original visual labels remain part of the source documentation.

## Editorial implementation

Route: `/work/starspitter`. The existing shared project model, `ProjectCard`, `ProjectMedia`, story sections, media references, metadata and sitemap generation are reused. The homepage places Starspitter immediately after CeBIT via `home.order: 2`. Next project links back to CeBIT without changing other project content.

Sequence:

1. Concept and original printed visual studies.
2. Real-time visualization, participant photograph, Processing interface and original visualization video.
3. Physical fabrication, cut/folded paper elements and assembly photograph.
4. Interactive installation, projection detail, participant with projection and original installation video.
5. Campaign, individual star graphic and campaign-team credits.
6. Personal contribution and responsibilities.
7. External references, followed by next-project navigation.

Minimal reusable changes:

- Optional `ProjectStorySection.credits` renders campaign credits as a definition list using existing styles.
- The existing introduction string supports blank-line paragraph breaks. SEO uses its first paragraph, keeping a concise description without changing existing single-paragraph metadata.
- Long optional display titles receive smaller mobile typography; CeBIT and existing short titles retain their type size.
- Story image containers are capped at their recorded source width so the 500 px campaign graphic is not enlarged across a full desktop content column.

## Original assets and derivatives

All eight image assets from the supplied HTML are preserved byte-for-byte under `public/images/starspitter/originals/`. This includes two GIFs, three large editorial image plates and three small decorative/branding assets. `originals/sources.json` records exact source URLs and dimensions. Decorative assets are not displayed as project photographs.

The active page uses eight photographic/interface crops plus a static frame from the original campaign GIF. No stock images, AI images or reconstructed documentation were used.

| Derivative               | Original         | Crop: left, top, width, height |
| ------------------------ | ---------------- | ------------------------------ |
| `hero.webp`              | `behance-1.webp` | 0, 0, 1400, 612                |
| `sketches.webp`          | `behance-3.webp` | 0, 1010, 1400, 803             |
| `participant.webp`       | `behance-3.webp` | 0, 2645, 1400, 803             |
| `application.webp`       | `behance-3.webp` | 0, 3463, 1400, 910             |
| `paper-elements.webp`    | `behance-6.webp` | 0, 181, 1400, 804              |
| `assembly.webp`          | `behance-6.webp` | 0, 998, 1400, 805              |
| `projection-detail.webp` | `behance-6.webp` | 0, 1817, 1400, 803             |
| `live-projection.webp`   | `behance-6.webp` | 0, 2641, 1400, 803             |
| `campaign-star.webp`     | `behance-7.gif`  | First frame, 500 × 401         |

Photographic crops use the existing Sharp dependency with `extract(...).webp({quality:90})`; the campaign still uses quality 95. The hero excludes the original embedded branding and “How it works” heading. Its framing is inherited from the original installation photograph, including its cropped upper point. Original proportions are preserved in the rendered media.

Animated material is presented through existing controlled Vimeo embeds, not automatically playing GIFs. This preserves user control and avoids introducing new motion for reduced-motion users. Both original GIFs remain in the source archive.

Verified original videos:

- https://vimeo.com/142719471 — 26 seconds; visualization documentation.
- https://vimeo.com/142719498 — 21 seconds; installation documentation.

Both were extracted from the Behance HTML and confirmed through Vimeo oEmbed as belonging to Javier Garcia Martin. Their thumbnails show the corresponding digital visualization and physical projection. Players are lazy-loaded, have descriptive titles, no autoplay and direct Vimeo fallback links. The unavailable campaign video (81715734) is intentionally not embedded or linked. No recovery attempt was made.

## Missing material and limitations

- No separate close-up of the magnets or photograph of the plotter in operation was present. The recovered paper-element and assembly photographs support the fabrication sequence; the magnetic attachment details are supplied by the owner’s confirmation.
- No complete collection of the 150+ campaign stars was recovered. The page uses the original individual star graphic and the repository’s documented count.
- The full campaign video remains unavailable and omitted.
- Exact headset communication details are deliberately unspecified. No further investigation is required for publication.
- Vimeo oEmbed and player configuration were checked. Actual playback in automated Chrome may be restricted by Vimeo/Cloudflare, as observed during the preceding CeBIT review; successful streamed playback is not claimed by the layout checks.

## Validation

- `npx tsc --noEmit --incremental false`: passed.
- `npm run lint`: passed.
- `npm run build`: passed; `/work/starspitter` statically generated.
- Production build reviewed in Chrome at 1440 × 1000, 390 × 844 and 320 × 740: no horizontal or heading overflow; all nine image instances loaded, with no repeated source images within the case; two lazy, correctly proportioned video frames; section numbering 01–07.
- Homepage showed exactly CeBIT then Starspitter at each viewport, with original project covers and correct links.
- Metadata checked: complete SEO title, concise description, canonical URL and original installation cover as social image.
- Image alt text and video titles checked; credits use a semantic definition list. Existing reduced-motion behaviour was used for review. External reference hrefs match the original sources; the GitHub repository returned HTTP 200. Direct Behance viewing remains access-restricted.
- Existing CeBIT, Morae, Core One, NTI, revalidation-flow and sitemap routes returned 200, with no page JavaScript errors.
- Original Processing repository status remained unchanged (`.DS_Store` files were already untracked).
- Review screenshots: `/tmp/starspitter-{desktop,mobile,small-mobile}-{intro,fabrication,campaign,home}.png`.

## Files

Created: this document, `public/images/starspitter/*.webp`, `public/images/starspitter/originals/*` and its source manifest.

Modified: `src/data/case-studies.ts`, `src/templates/ProjectCaseStudyPage.tsx`, `src/app/work/[slug]/page.tsx`.

No dependencies were added. No original Processing files or existing project content were edited. Ready for final editorial review; nothing has been deployed.

## Final editorial and visual refinement

### Hero decision

Retained the existing 1400 × 612 hero and homepage cover after comparing the recovered sources. The alternative showing the complete projected star in the room is only 460 × 806 (left image in the final triptych of `behance-6.webp`). It communicates space more explicitly but would require substantial enlargement and lose quality on desktop. The existing hero retains the physical folded-paper detail at higher resolution. No source asset or crop was overwritten.

### Sequence and emphasis

- The real-time section now uses the original application screenshot followed by the software video. The participant photograph remains preserved but is no longer repeated here; participant context is already visible in the installation section.
- Physical fabrication imagery and its section placement are unchanged.
- The installation video is now first in its section and spans the existing section grid, like hero media. At 1440 px viewport it measures 1353.6 px wide versus the 1123.5 px narrative column; mobile width is 351 px at 390 and 288 px at 320. Participant and projection-detail photographs follow.
- Optional `ProjectImageSlot.fullWidth` controls that existing grid span. It introduces no new component or content system. Default media retain the existing narrative-column placement.
- Campaign imagery precedes the smaller campaign credits, keeping the visual story primary and preserving the distinction between sole installation authorship and the wider campaign team.

### Campaign material

All eight original image assets were reviewed again. No Christmas card designs, complete collection or additional independently captured participant stars were found. The recovered `behance-7.gif` contains 23 changing states of a single original star animation. These must not be represented as 23 separate employee graphics.

The GIF is now presented as a controlled native video using the existing `ProjectMedia` implementation: `public/video/starspitter-original-star-animation.mp4`. The original GIF and static poster are preserved. Its 23 frames and original 4.6-second timing are retained, with one black pixel row added for H.264 dimensions of 500 × 402. Display width is capped at 500 px; there is no artificial upscaling, autoplay or loop. It is distinct from the unavailable Christmas campaign film.

Conversion used the already-installed FFmpeg tool, not a new application dependency:

```sh
ffmpeg -i public/images/starspitter/originals/behance-7.gif \
  -vf 'pad=ceil(iw/2)*2:ceil(ih/2)*2' \
  -c:v libx264 -crf 18 -pix_fmt yuv420p -movflags +faststart \
  public/video/starspitter-original-star-animation.mp4
```

### Video source and playback verification

| Original source             | What it contains                                                                 | Availability and playback evidence                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://vimeo.com/142719471 | Processing interface and continuously changing generative star geometry          | Public player HTML returned HTTP 200 and declares public embed permission. Its original 720p MP4 was downloaded temporarily for verification: 1280 × 720, H.264, 787 frames, 26.233 seconds. FFmpeg decoded the complete file without errors; Chrome played that original file beyond two seconds. The hosted Vimeo player loaded its controls but did not start its stream within the bounded automated test.          |
| https://vimeo.com/142719498 | The complete blue star projected in the physical installation, with room context | Vimeo oEmbed still returns the author, video ID, 21-second duration and original installation thumbnail. The player URL returns a connection-security/Cloudflare challenge (HTTP 401) in this environment. Successful playback and access to the underlying media stream could not be verified here; no evidence establishes that the video has been removed. It is retained prominently with the direct fallback link. |

Exact embed URLs remain `https://player.vimeo.com/video/142719471?dnt=1` and `https://player.vimeo.com/video/142719498?dnt=1`. Both retain lazy loading, descriptive titles, no autoplay and original Vimeo links. No expiring MP4 URLs were committed. Temporary downloaded verification material is outside the repository.

**Remaining publication check:** manually play both hosted Vimeo embeds, particularly the installation video, from a normal browser/network. The layout review and successful local-file playback do not establish successful hosted playback for both embeds.

### Final validation

- TypeScript, ESLint and production build passed after the layout/media changes.
- Production build checked in Chrome at 1440 × 1000, 390 × 844 and 320 × 740: no horizontal or heading overflow; seven distinct images loaded; both original Vimeo players retained; numbering remains 01–07.
- The native campaign animation actually played beyond one second at all three sizes; duration was 4.6 seconds, decoded dimensions 500 × 402. It remains at or below 500 px wide and precedes the campaign credits.
- Hero and fabrication crops remain intact. The two homepage cards retain their order, images and links. Canonical URL, complete SEO title, concise description and social image remain correct.
- Existing CeBIT, Morae, Core One, NTI, technical case-study and sitemap routes returned HTTP 200 without page JavaScript errors.
- Reference URLs remain the original Behance and GitHub URLs. GitHub returned HTTP 200 in the prior check; Behance direct access remains restricted, with its owner-provided HTML retained as source evidence.
- No new dependencies, generated stars or changes to the original Processing repository.

Additional files for this refinement: the native animation above. Modified data and shared template changes are confined to media presentation; section titles, narrative and authorship credits remain intact. New screenshots include `/tmp/starspitter-{desktop,mobile,small-mobile}-installation-final.png` and refreshed campaign/home/fabrication captures.
