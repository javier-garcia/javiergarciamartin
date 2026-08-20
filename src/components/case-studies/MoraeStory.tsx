import { labelClass, smallMetaClass } from "@/components/styles";
import type { ReactNode } from "react";
import Link from "next/link";

const primarySection =
  "grid grid-cols-[17%_1fr] border-b border-line px-[3vw] py-27.5 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[800px]:px-[5vw] max-[800px]:py-18.75";

const supportingSection =
  "grid grid-cols-[17%_1fr] border-b border-line px-[3vw] py-20 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[800px]:px-[5vw] max-[800px]:py-15";

const architectureStages = [
  {
    number: "01",
    label: "Original",
    title: "WordPress",
    detail: "CMS + frontend",
    transition: "External headless migration",
  },
  {
    number: "02",
    label: "Headless v1",
    title: "WordPress → Next.js",
    detail: "GraphQL / Apollo",
    transition: "Project taken over",
  },
  {
    number: "03",
    label: "Rebuild + migration",
    title: "Craft + WordPress → Next.js",
    detail: "WordPress remains as fallback",
    transition: "Progressive evolution",
  },
  {
    number: "04",
    label: "Direction",
    title: "Craft → GraphQL → Next.js",
    detail: "Content moves area by area",
    transition: null,
  },
] as const;

const ownershipSteps = [
  "Requirements / investigation",
  "Craft content modelling",
  "Sections, Entry Types, fields and relationships",
  "GraphQL queries and fragments",
  "Generated TypeScript types",
  "Next.js routing and pages",
  "React components",
  "Filtering and behaviour",
  "Preview and production integration",
] as const;

const craftInsightTypes = [
  "Articles",
  "Webinars",
  "Podcasts",
  "White Papers",
  "Checklists",
] as const;

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-225 text-[clamp(40px,5.7vw,84px)] leading-[1.02] font-medium tracking-[-.055em]">
      {children}
    </h2>
  );
}

function ArchitectureEvolution() {
  return (
    <section className={primarySection}>
      <p className={labelClass}>01 / Architecture evolution</p>

      <div>
        <SectionHeading>A platform with history.</SectionHeading>

        <p className="mt-8 max-w-180 text-lg leading-[1.65]">
          I had worked on Morae when it was still a monolithic WordPress site. Another company
          later made it headless. When our team took over, we substantially rebuilt the frontend
          and then began introducing Craft without forcing the whole platform through one release.
        </p>

        <ol className="mt-14 grid list-none grid-cols-4 border-y border-ink p-0 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {architectureStages.map((stage) => (
            <li
              className="scroll-reveal relative min-h-60 border-line p-5 not-last:border-r max-[900px]:odd:border-b max-[560px]:min-h-0 max-[560px]:border-r-0 max-[560px]:not-last:border-b"
              key={stage.number}
            >
              <div className="flex justify-between gap-4">
                <span className={smallMetaClass}>{stage.number} / {stage.label}</span>
                {stage.transition ? (
                  <span className="text-[9px] leading-[1.25] text-muted uppercase">
                    {stage.transition} ↓
                  </span>
                ) : null}
              </div>

              <div className="mt-16 max-[560px]:mt-9">
                <strong className="block text-[clamp(22px,2.2vw,34px)] leading-[1.05] font-medium tracking-[-.04em]">
                  {stage.title}
                </strong>
                <span className="mt-3 block text-sm leading-[1.4] text-muted">
                  {stage.detail}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-180 text-base leading-[1.6] text-muted">
          My earlier involvement did not make our team responsible for the original headless
          migration. It gave me context for deciding which legacy structures expressed real
          editorial requirements and which could be reconsidered.
        </p>
      </div>
    </section>
  );
}

function VerticalOwnership() {
  return (
    <section className={primarySection}>
      <p className={labelClass}>02 / Ownership</p>

      <div className="grid grid-cols-[1fr_.8fr] gap-[8%] max-[800px]:grid-cols-1 max-[800px]:gap-12">
        <div>
          <SectionHeading>Working across the CMS/frontend boundary.</SectionHeading>
          <p className="mt-8 max-w-150 text-lg leading-[1.65]">
            My work was not divided neatly into CMS and frontend tickets. Owning an area such as
            Insights could mean investigating a broad requirement, proposing and testing an
            approach, discussing it with the team and carrying the implementation through the
            complete platform.
          </p>
          <p className="mt-6 max-w-150 text-base leading-[1.6] text-muted">
            A Lead Developer retained primary responsibility for major technical decisions.
            Architecture and implementation choices were frequently collaborative, while I made
            decisions independently within the areas I owned.
          </p>
        </div>

        <ol className="relative list-none border-t border-ink p-0">
          {ownershipSteps.map((step, index) => (
            <li
              className="scroll-reveal grid grid-cols-[12%_1fr] border-b border-line py-4 text-base leading-[1.35]"
              key={step}
            >
              <span className="text-[10px] text-muted">{String(index + 1).padStart(2, "0")}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function InsightsModel() {
  return (
    <section className={primarySection}>
      <p className={labelClass}>03 / Content architecture</p>

      <div>
        <SectionHeading>Rethinking Insights.</SectionHeading>

        <p className="mt-8 max-w-180 text-lg leading-[1.65]">
          The migration was an opportunity to model the editorial domain, not reproduce the old
          database structure one-to-one.
        </p>

        <div className="mt-14 grid grid-cols-[1fr_auto_1.35fr] items-stretch gap-8 max-[800px]:grid-cols-1">
          <div className="border-y border-ink py-6">
            <span className={smallMetaClass}>Previous WordPress model</span>
            <strong className="mt-10 block text-3xl font-medium tracking-[-.04em]">
              Insights CPT
            </strong>
            <span className="mt-3 block text-base text-muted">Insight Type taxonomy</span>
            <p className="mt-10 text-sm leading-[1.55]">
              Articles · Webinars · Podcasts · White Papers · Checklists
            </p>
          </div>

          <span className="self-center text-3xl text-muted max-[800px]:rotate-90" aria-hidden>→</span>

          <div className="border-y border-ink py-6">
            <span className={smallMetaClass}>Craft content model</span>
            <div className="mt-7 grid grid-cols-2 gap-px bg-line max-[520px]:grid-cols-1">
              {craftInsightTypes.map((type) => (
                <span className="bg-paper p-4 text-lg" key={type}>{type}</span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4 border-l-2 border-acid pl-4">
              <span className="text-sm text-muted">Aggregated by Next.js</span>
              <strong className="text-lg font-medium">/insights</strong>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-180 text-base leading-[1.6] text-muted">
          Each type can have fields and editorial structure suited to its content, while Next.js
          brings them back together as one public Insights experience.
        </p>
      </div>
    </section>
  );
}

function ProgressiveMigration() {
  return (
    <section className={primarySection}>
      <p className={labelClass}>04 / Migration</p>

      <div>
        <SectionHeading>Evolving without a big-bang rewrite.</SectionHeading>

        <p className="mt-8 max-w-180 text-lg leading-[1.65]">
          Craft became the preferred source for migrated areas while WordPress remained available
          for content that had not yet moved. This allowed individual areas to evolve without
          requiring every content type and record to migrate together.
        </p>

        <figure className="mt-14 border-y border-ink py-9" aria-label="Craft-first and WordPress-fallback request architecture">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 max-w-150">
            <div className="p-4">
              <span className={smallMetaClass}>Incoming</span>
              <strong className="mt-2 block text-2xl font-medium">Request</strong>
            </div>
            <span className="text-2xl text-muted" aria-hidden>→</span>
            <div className="bg-acid p-4">
              <span className={`${smallMetaClass} text-ink`}>Preferred source</span>
              <strong className="mt-2 block text-2xl font-medium">Craft CMS</strong>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-[7%] max-[700px]:grid-cols-1 max-[700px]:gap-8">
            <div className="border-l border-line pl-5">
              <span className={smallMetaClass}>Found</span>
              <strong className="mt-5 block text-2xl font-medium">Render with Next.js</strong>
            </div>

            <div className="border-l border-ink pl-5">
              <span className={smallMetaClass}>Not found</span>
              <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <strong className="text-xl font-medium">WordPress</strong>
                <span className="text-xl text-muted" aria-hidden>→</span>
                <div className="grid gap-2 text-sm">
                  <span>Found → Render</span>
                  <span className="text-muted">Not found → 404</span>
                </div>
              </div>
            </div>
          </div>
        </figure>

        <p className="mt-6 text-sm text-muted">WordPress has not yet been removed from every area.</p>
      </div>
    </section>
  );
}

function SupportingArchitecture() {
  return (
    <>
      <section className={supportingSection}>
        <p className={labelClass}>05 / Editorial system</p>

        <div>
          <h2 className="text-[clamp(32px,4vw,58px)] leading-[1.05] font-medium tracking-[-.05em]">
            Controlled flexibility for editors.
          </h2>

          <div className="mt-9 grid grid-cols-2 gap-[7%] max-[800px]:grid-cols-1 max-[800px]:gap-9">
            <div>
              <p className="m-0 text-lg leading-[1.6]">
                Editors can choose from approximately 20–30 configurable components, configure
                them and reorder them freely. Each Entry Type limits which components are valid,
                keeping composition flexible without creating an unrestricted page builder.
              </p>
              <p className="mt-5 text-base leading-[1.6] text-muted">
                Component previews inside Craft help editors understand what they are adding.
              </p>
            </div>

            <div>
              <span className={smallMetaClass}>Craft → React architecture</span>
              <ol className="mt-5 grid list-none gap-0 border-t border-ink p-0">
                {["Craft component", "GraphQL", "typeHandle", "Component Renderer", "React component"].map((step) => (
                  <li className="border-b border-line py-3 text-sm" key={step}>{step}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm leading-[1.55] text-muted">
                Two renderers cover general and editorial content. Reusable lower-level components
                and variants prevent the CMS model from forcing one-to-one UI duplication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={supportingSection}>
        <p className={labelClass}>06 / Redirects</p>

        <div>
          <h2 className="text-[clamp(32px,4vw,58px)] leading-[1.05] font-medium tracking-[-.05em]">
            Keeping redirects editorial.
          </h2>

          <p className="mt-7 max-w-180 text-lg leading-[1.6]">
            I restored CMS-managed redirects without querying the CMS on every request, then
            migrated the source from WordPress/Yoast to Craft/Retour while preserving the runtime
            architecture and adding regex support.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-[7%] max-[800px]:grid-cols-1 max-[800px]:gap-9">
            <div className="border-t border-ink pt-5">
              <span className={smallMetaClass}>Write / update</span>
              <p className="mt-5 text-base leading-[1.6]">
                Craft / Retour → Webhook → Vercel storage
              </p>
            </div>
            <div className="border-t border-ink pt-5">
              <span className={smallMetaClass}>Runtime</span>
              <p className="mt-5 text-base leading-[1.6]">
                Request → Next.js middleware → Storage → Redirect or continue
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={supportingSection}>
        <p className={labelClass}>07 / Platform details</p>

        <div className="grid grid-cols-3 gap-[5%] max-[800px]:grid-cols-1 max-[800px]:gap-9">
          <article className="border-t border-ink pt-5">
            <h2 className="text-2xl font-medium">GraphQL and types</h2>
            <p className="mt-5 text-base leading-[1.6] text-muted">
              Fragments, query-specific files and Codegen connect the Craft schema to generated
              TypeScript types and expose incompatibilities during development and builds.
            </p>
          </article>

          <article className="border-t border-ink pt-5">
            <h2 className="text-2xl font-medium">Preview and drafts</h2>
            <p className="mt-5 text-base leading-[1.6] text-muted">
              I adapted an existing preview approach across additional channels. Draft mode uses
              authenticated GraphQL, and components tolerate temporarily incomplete editor data.
            </p>
          </article>

          <article className="border-t border-ink pt-5">
            <h2 className="text-2xl font-medium">Cache revalidation</h2>
            <p className="mt-5 text-base leading-[1.6] text-muted">
              Craft events trigger semantic tag and path invalidation so the next request uses
              fresh GraphQL data. Disabled and deleted content must invalidate its previous state,
              not only content that remains enabled.
            </p>
            <Link
              className="interactive-underline mt-5 inline-block pb-1 text-xs tracking-widest uppercase"
              href="/work/revalidation-flow"
            >
              Read technical case →
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

function Outcome() {
  const lessons = [
    ["Understand before replacing", "Legacy structure can contain editorial knowledge that is not visible from the schema alone."],
    ["Redesign the model", "A CMS migration can reconsider whether old structures still represent the content domain."],
    ["Evolve incrementally", "Old and new systems can coexist while a production platform changes area by area."],
    ["State transitions matter", "Caching must react when content becomes disabled, deleted or otherwise stops being visible."],
  ] as const;

  return (
    <section className={`${supportingSection} bg-ink text-paper`}>
      <p className={labelClass}>08 / Outcome</p>

      <div>
        <h2 className="max-w-250 text-[clamp(40px,5.7vw,84px)] leading-[1.02] font-medium tracking-[-.055em]">
          Evolution rather than replacement.
        </h2>

        <p className="mt-8 max-w-200 text-lg leading-[1.65] text-[#c7c8c1]">
          The frontend was substantially rebuilt, Craft could be introduced area by area, and
          editors retained control over workflows including redirects and previews—all while the
          live platform continued to operate with WordPress where it was still needed.
        </p>

        <div className="mt-12 grid grid-cols-4 gap-6 border-t border-[#4e5049] max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
          {lessons.map(([title, text], index) => (
            <article className="pt-5" key={title}>
              <span className="text-[9px] text-muted">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-[1.55] text-[#aeb0a8]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MoraeStory() {
  return (
    <>
      <ArchitectureEvolution />
      <VerticalOwnership />
      <InsightsModel />
      <ProgressiveMigration />
      <SupportingArchitecture />
      <Outcome />
    </>
  );
}
