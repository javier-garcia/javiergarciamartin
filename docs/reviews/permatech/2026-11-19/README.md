# PermaTech editorial review — 19 November 2026

The case study now shows the Overview hero after the existing introduction and metadata, followed by Context, Physical computing, System architecture, Data lifecycle, Real-time experience, Living Systems, Reliability and Scope. Existing editorial typography, section spacing classes, navigation and Selected work placement are preserved.

## Verification performed

- `npm run build`: passed, including TypeScript and static generation of `/work/permatech`.
- ESLint on changed project data, template and all four PermaTech components: passed.
- Installed Google Chrome through Playwright at **1440 × 1000**, **390 × 1000** and **320 × 1000**: passed.
- Verified chapter order; early full-width hero; one physical photograph; terminal collages absent from inline editorial media; desktop/mobile design composition; no horizontal overflow, browser runtime errors or local HTTP failures.
- Verified all four evidence tabs, keyboard Home/End/arrow navigation, UUID and measurement highlighting, and the SHA-256 of each downloaded original against the source evidence artifact.
- Verified physical demonstration video metadata loads, duration is approximately 23.5 seconds, and no empty dashboard player appears.
- Confirmed PermaTech remains the first Selected work card, now using the Overview image.
- Inspected desktop architecture, mobile evidence explorer and desktop screenshot composition visually after capture.

These are portfolio implementation checks. They do not add to or replace the **116 application tests** accepted at Delivery 2.1A or the **110 tests** run for the 19 November physical evidence capture.

## Media and evidence integrity

The hero is the owner's existing Overview screenshot. Hardware photography comes from `foto-permatech.jpg`; metadata-only removal preserves its compressed image data. The video comes from `VID_20261119_114504.mp4`: video stream copied without re-encoding, container metadata and audio removed. `ffprobe` confirms one video stream, no audio stream and no location tags in the portfolio copy. Original Desktop files are untouched. Its poster is an actual frame, not generated media.

The video documents the station beside serial/telemetry terminals, not a dashboard interaction recording. The dedicated dashboard video and additional wiring/setup photographs remain optional hidden media slots.

Four original artifacts from `permatech-platform/docs/case-study/verification/2026-11-19-lark-001/` are copied byte-for-byte into the portfolio's public evidence directory. No telemetry application code, firmware, database schema or contract changed. No credentials, environment/configuration files or private keys are included. The recorded UUID remains `64267b73-6e4c-44be-95a0-75ebef87bbe0`; **direct serial correlation remains pending**. The serial screenshot for `34fad0f7-f998-4f96-b6c3-6f01d685d672` is separate supporting evidence.

## Screenshots

- `permatech-1440-full-page.png` / `permatech-390-full-page.png`: complete desktop/mobile edit.
- `permatech-1440-introduction.png` / `permatech-390-introduction.png`: existing editorial introduction.
- `permatech-1440-hero.png` / `permatech-390-hero.png`: actual Overview hero.
- `permatech-1440-system-architecture.png` / `permatech-390-system-architecture.png`: horizontal/stacked architecture.
- `permatech-1440-data-lifecycle.png` / `permatech-390-data-lifecycle.png`: interactive evidence.
- `permatech-1440-living-systems-design.png` / `permatech-390-living-systems-design.png`: desktop/mobile visual composition.
- `verification.json`: browser check record and timestamp.

Screenshots use reduced motion, loaded image assets and fonts, and disabled capture animations. The original application screenshot assets retain their own dates and observations; they are not new sensor measurements. Firefox compatibility and sensor calibration remain unverified. No production readiness or guaranteed delivery is claimed. No commit, push or deployment performed.


## Final publication copy review

The final owner-requested editorial pass removes internal acceptance notes, serial-correlation warnings, timestamp precision notes, checksum UI and supporting terminal links from the public page. Captions now explain the image or interaction in concise portfolio language. The public evidence component is explicitly scoped to MQTT, PostgreSQL, WebSocket and REST; it does not claim matching direct serial evidence. The original pending serial correlation remains an internal evidence limitation. Baseline and later test totals stay distinct. The scope section describes ongoing work without internal delivery or compatibility checklists.

Build (including TypeScript), targeted ESLint and Chrome checks at 1440, 390 and 320 pixels passed again after this copy edit. The screenshots and verification.json in this directory now reflect the final public text. Checks also confirm the removed internal notes are absent, while the four evidence tabs, keyboard behavior and original-download hashes remain correct. The video remains without audio. Nothing was committed, pushed or deployed.
