# PermaTech media manifest

The case study reflects the accepted Delivery 2.1A baseline (`910c0e7`, `6747bb8`, `fa87e32`). The existing Overview screenshot supplies the hero, Selected work card and social preview. Three owner-supplied screenshots are configured; remaining slots can be absent.

Place images in `public/images/permatech/` and videos in `public/video/`. Ratios are recommendations. Essential assets support the intended publication edit. All slots can be absent during local review.

| ID                      | Section                                       | Recommended filename                                    | Type                       | Ratio | Suggested alternative text                                                               | Priority  |
| ----------------------- | --------------------------------------------- | ------------------------------------------------------- | -------------------------- | ----- | ---------------------------------------------------------------------------------------- | --------- |
| `hero`                  | Hero, homepage card and social preview        | `hero-dashboard.webp` or `permatech-hero-dashboard.mp4` | Image or video with poster | 16:9  | Living Systems dashboard showing current environmental readings and telemetry freshness  | Essential |
| `weather-station`       | Physical computing                            | `lark-weather-station.webp`                             | Photo                      | 3:2   | DFRobot Lark weather station used to capture environmental measurements                  | Essential |
| `esp8266-wiring`        | Physical computing gallery                    | `esp8266-wiring.webp`                                   | Photo                      | 4:3   | ESP8266 board and wiring connecting it to the Lark station                               | Essential |
| `hardware-setup`        | Physical computing gallery                    | `complete-hardware-setup.webp`                          | Photo                      | 3:2   | Complete PermaTech hardware setup with the Lark station and ESP8266                      | Essential |
| `firmware-evidence`     | Physical computing                            | `firmware-serial.webp`                                  | Screenshot                 | 8:5   | Firmware and serial output showing the capture and publication of an observation         | Optional  |
| `rest-history`          | Data lifecycle gallery                        | `rest-history.webp`                                     | Screenshot                 | 8:5   | Versioned REST API response containing historical observations                           | Optional  |
| `committed-telemetry`   | Data lifecycle gallery                        | `websocket-postgresql.webp`                             | Screenshot                 | 8:5   | PostgreSQL observation and its corresponding post-commit WebSocket event                 | Essential |
| `dashboard-overview`    | Living Systems                                | `dashboard-overview.webp`                               | Screenshot                 | 16:9  | Overview of devices and current conditions in the Living Systems dashboard               | Essential |
| `device-detail`         | Living Systems gallery                        | `device-detail.webp`                                    | Screenshot                 | 8:5   | Device detail showing per-metric readings and historical exploration                     | Essential |
| `mobile-dashboard`      | Living Systems gallery                        | `mobile-dashboard.webp`                                 | Screenshot                 | 5:9   | Living Systems dashboard on a narrow mobile screen                                       | Optional  |
| `dashboard-recording`   | Real-time digital experience                  | `permatech-dashboard-live.mp4`                          | Video                      | 16:9  | Recording of the Living Systems dashboard as incoming observations update live readings  | Optional  |
| `station-demonstration` | Verification → Tracing a physical observation | `permatech-station-data-flow.mp4`                       | Video                      | 16:9  | Demonstration tracing an observation from the physical weather station to the dashboard  | Optional  |
| `automated-tests`       | Engineering reliability                       | `automated-tests.webp`                                  | Screenshot                 | 8:5   | Delivery 2.1A automated test results for the backend, frontend and Chrome browser checks | Optional  |

## Adding the assets

- In [the project configuration](../src/data/permatech.ts), add `src` for the image or poster and `videoSrc` for an MP4. Paths start with `/images/permatech/` or `/video/` and omit `public`. Set `sourceWidth` and `sourceHeight` to the actual image dimensions or, for a video without a poster, the video dimensions. Export video posters at the video’s aspect ratio.
- For a video hero, use the still as `src` and the recording as `videoSrc`. The same still supplies the homepage card and Open Graph image. With only `videoSrc`, the case study can play the hero while the card stays text-only and social metadata uses the portfolio fallback.
- Put additional wiring angles in their own slots and add their IDs to the physical computing gallery. Update alternative text and captions to match the actual frames. Include captions or a transcript for meaningful audio and describe important visual evidence in text.
- Check screenshots and recordings for credentials, local addresses, and other private configuration before copying them into `public`. Use actual captures from the accepted delivery for verification evidence.

## Owner-supplied screenshots — 19 November 2026

The original PNG files were copied with descriptive filenames into `public/images/permatech/`, without altering their pixels or telemetry. Existing source files in the asset folder are preserved. Full-width placement and actual dimensions preserve their complete compositions.

| Original capture                                    | Portfolio filename                                           | Section                        |
| --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| `Captura de pantalla 2026-11-19 a las 11.44.52.png` | `permatech-lark-serial-mqtt-websocket-2026-11-19.png`        | Physical computing             |
| `Captura de pantalla 2026-11-19 a las 11.55.01.png` | `permatech-physical-telemetry-correlation-2026-11-19.png`    | Engineering the data lifecycle |
| `Captura de pantalla 2026-11-19 a las 11.57.18.png` | `permatech-living-systems-physical-dashboard-2026-11-19.png` | Living Systems                 |

The terminal evidence is a display of previously saved artifacts for physical UUID `64267b73-6e4c-44be-95a0-75ebef87bbe0` at `2026-11-19T10:26:36Z`. The serial screenshot instead shows physical UUID `34fad0f7-f998-4f96-b6c3-6f01d685d672` at `2026-11-19T10:44:47Z`, also visible in the WebSocket pane; the MQTT pane shows matching timestamp and measurements. Its REST history pane displays earlier records, while other WebSocket devices are simulated. The dashboard shows a later `10:57:17 UTC` reading. Captions explicitly distinguish these moments and do not claim the three screenshots trace a single UUID through every layer.

Visual review: no passwords, Wi-Fi credentials, private keys or contents of environment/secret files are visible. Original desktop chrome includes the owner's username/computer name and a private LAN broker address; these originals are not described as anonymized. A `secrets.h` tab is visible, but its contents are not shown. No images were generated or reconstructed.

## Editorial hierarchy update — 19 November 2026

The existing Overview screenshot now supplies the full-width hero immediately after the introduction and metadata, and the Selected work card/social preview. The chapter sequence is Context → Physical computing → Architecture → Data lifecycle → Real-time experience → Living Systems → Reliability → Scope. Typography, chapter styles, navigation and spacing tokens are preserved.

- Physical computing: `permatech-lark-esp8266-physical-setup.jpg` comes from the owner's Desktop `foto-permatech.jpg` (4000 × 3000). EXIF/XMP/IPTC/comment segments are removed from the portfolio copy without decoding or changing its compressed image data. Dedicated wiring/setup photographs remain optional slots in a two-column gallery and render nothing until supplied; no duplicate crops masquerade as additional photographs.
- Architecture: a full-width, four-stage desktop diagram stacks vertically below 1000px. Acquisition, persistence, read/notification transport and presentation remain separate. The WebSocket box explicitly describes the Node.js post-commit ingestion callback, rather than a database broadcast.
- Data lifecycle: an accessible keyboard-operated four-tab evidence explorer replaces the terminal collage. It uses the original MQTT, PostgreSQL query result, WebSocket and REST latest files from the physical evidence bundle dated 2026-11-19. All four original files are downloadable under `public/evidence/permatech/2026-11-19/`, byte-identical to their source SHA-256 hashes. A presentation JSON file stores those original strings and hashes. Display formatting changes whitespace only; direct serial correlation for UUID `64267b73-6e4c-44be-95a0-75ebef87bbe0` remains pending. The terminal collages are optional links inside a collapsed supporting-evidence disclosure, not inline editorial images.
- Real-time experience: `VID_20261119_114504.mp4` is a physical demonstration of the station beside serial/telemetry terminals. It is labelled accurately and occupies a full-width controlled video slot. The video frames are copied without re-encoding; audio and container location metadata are omitted from the portfolio copy. A frame from this actual video supplies its poster. The separate dashboard demonstration slot remains unconfigured and hidden, with no empty player.
- Living Systems: the verified Delivery 2.1A Device Detail desktop and mobile Overview screenshots supply a responsive desktop/mobile composition. The tall mobile capture scrolls inside its own labelled, keyboard-focusable viewport. The hero is not repeated. These are archived 17 November observations, not a synchronized capture of the 19 November UUID.
- Reliability: 116 accepted baseline tests = 41 contracts + 48 integration + 21 frontend data + 6 Chrome. The 19 November evidence capture reran 110 = 41 + 48 + 21, without browser checks. Five metrics, a configured ten-second cycle and UUID identity are described without guarantees of delivery, production readiness, calibration or Firefox compatibility.

No deployment, commit or push is part of this update. Source hardware media remain unchanged on the owner's Desktop. No runtime configuration or credentials are copied from the telemetry repository.

Final build, lint and browser checks passed at 1440, 390 and 320 pixels. Updated screenshots and the verification report are in [the dated editorial review](reviews/permatech/2026-11-19/README.md).

## Publication copy edit — 19 November 2026

Owner requested publication-facing captions and removal of internal review notes. Public captions now describe the visual or interaction. The evidence explorer retains the four actual backend artifacts, UUID, values and original downloads; serial-pending notes, checksum UI and supporting terminal links are removed from the public page. Baseline and later test totals remain separate. Internal evidence limitations, timestamp precision, source dates, pending direct serial correlation and optional source screenshot provenance remain documented here and in the dated review. No claim of serial correlation, production readiness, calibration, guaranteed delivery or Firefox verification was added. Hardware video remains silent. This prepares publication; it does not authorize deployment.
