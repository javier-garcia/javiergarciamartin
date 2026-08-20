import { labelClass, smallMetaClass } from "@/components/styles";
import type { ReactNode } from "react";

const sectionClass =
  "grid grid-cols-[17%_1fr] border-b border-line px-[3vw] py-20 max-[800px]:grid-cols-1 max-[800px]:gap-9 max-[800px]:px-[5vw] max-[800px]:py-15";

const mutationTypes = [
  ["Entry", "section tag · entry tag · path"],
  ["Global Set", "global_<handle>"],
  ["Category", "category-group handle"],
  ["SEOMatic", "seomatic"],
] as const;

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-200 text-[clamp(34px,4.5vw,64px)] leading-[1.03] font-medium tracking-[-.05em]">
      {children}
    </h2>
  );
}

function RevalidationModel() {
  const flow = [
    "Editor changes content",
    "Craft lifecycle event",
    "Next.js endpoint",
    "Invalidate tags / paths",
    "Next affected request",
    "Fresh GraphQL data",
  ];

  return (
    <section className={sectionClass}>
      <p className={labelClass}>01 / The model</p>

      <div>
        <SectionTitle>Content freshness starts in the CMS.</SectionTitle>
        <p className="mt-7 max-w-180 text-lg leading-[1.6]">
          This production platform combines SSR, on-demand static generation and the persistent
          Next.js Data Cache. CMS content has no time-based ISR, so meaningful Craft events drive
          explicit invalidation.
        </p>

        <ol className="mt-10 grid list-none grid-cols-6 border-y border-ink p-0 max-[900px]:grid-cols-3 max-[560px]:grid-cols-1">
          {flow.map((step, index) => (
            <li
              className="scroll-reveal relative border-line py-5 pr-8 text-sm leading-[1.4] not-last:border-r max-[900px]:border-b max-[560px]:border-r-0"
              key={step}
            >
              <span className={`${smallMetaClass} mb-3`}>0{index + 1}</span>
              {step}
              {index < flow.length - 1 ? (
                <span className="absolute top-1/2 right-2 -translate-y-1/2 text-muted max-[560px]:rotate-90" aria-hidden>→</span>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mt-5 text-sm leading-[1.55] text-muted">
          Invalidation does not immediately rebuild every page. The next affected request fetches
          fresh data and produces an updated response according to that route’s rendering strategy.
        </p>
      </div>
    </section>
  );
}

function DependencyProblem() {
  return (
    <section className={sectionClass}>
      <p className={labelClass}>02 / Dependencies</p>

      <div>
        <SectionTitle>The hard part is deciding what became stale.</SectionTitle>
        <p className="mt-7 max-w-180 text-lg leading-[1.6]">
          A relational CMS mutation can affect more than one route. Craft emits semantic
          information so Next.js can invalidate fetches and pages associated with meaningful tags
          and paths.
        </p>

        <div className="mt-10 grid grid-cols-4 gap-px bg-line max-[760px]:grid-cols-2 max-[460px]:grid-cols-1">
          {mutationTypes.map(([type, result]) => (
            <article className="scroll-reveal bg-paper p-5" key={type}>
              <h3 className="text-xl font-medium">{type}</h3>
              <p className="mt-8 text-sm leading-[1.45] text-muted">{result}</p>
            </article>
          ))}
        </div>

        <figure className="mt-8 border-l-2 border-acid bg-[#e7e5de] p-6" aria-label="Special reverse relationship lookup used for asset invalidation">
          <span className={smallMetaClass}>Special case / reverse lookup</span>
          <div className="mt-6 grid grid-cols-[auto_1fr_auto_1.4fr_auto_1fr] items-center gap-4 max-[760px]:grid-cols-1">
            <strong className="text-xl font-medium">Asset changed</strong>
            <span className="h-px bg-muted max-[760px]:h-6 max-[760px]:w-px" aria-hidden />
            <span className="text-sm">Who references it?</span>
            <span className="text-sm leading-[1.5] text-muted">
              Entries · root Entries from nested content · Global Sets
            </span>
            <span className="text-xl text-muted max-[760px]:rotate-90" aria-hidden>→</span>
            <strong className="text-base font-medium">Semantic invalidation</strong>
          </div>
          <figcaption className="mt-6 max-w-180 text-sm leading-[1.55] text-muted">
            Assets require targeted reverse-relationship handling. The system does not calculate a
            complete dependency graph for every mutation type.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function BugAndInvestigation() {
  return (
    <section className={sectionClass}>
      <p className={labelClass}>03 / The bug</p>

      <div className="grid grid-cols-[1fr_.8fr] gap-[8%] max-[800px]:grid-cols-1 max-[800px]:gap-10">
        <div>
          <SectionTitle>Enabled → disabled was still a content change.</SectionTitle>
          <p className="mt-7 text-lg leading-[1.6]">
            When an Entry was disabled from Craft’s element index, it could remain represented by
            stale cached data even though it was no longer enabled in the CMS.
          </p>
        </div>

        <div className="border-t border-ink pt-5">
          <span className={smallMetaClass}>Initial hypothesis</span>
          <p className="mt-5 text-base leading-[1.6]">
            Perhaps element-index actions followed a different lifecycle from an individual save.
          </p>
          <div className="mt-6 border-l border-line pl-5">
            <code className="text-sm">Elements::EVENT_AFTER_PERFORM_ACTION</code>
            <p className="mt-3 text-sm leading-[1.55] text-muted">
              I added temporary instrumentation, queried the action criteria and logged affected
              sections. It did not execute invalidations and was removed after testing the idea.
            </p>
          </div>
          <strong className="mt-6 block border-b border-ink pb-3 text-lg font-medium">
            Useful investigation. Wrong root cause.
          </strong>
        </div>
      </div>
    </section>
  );
}

function RootCauseAndFix() {
  return (
    <section className={`${sectionClass} bg-ink text-paper`}>
      <p className={labelClass}>04 / Root cause + fix</p>

      <div>
        <SectionTitle>The save event fired. Application logic discarded it.</SectionTitle>
        <p className="mt-7 max-w-180 text-lg leading-[1.6] text-[#c7c8c1]">
          The existing save handler checked the Entry’s new enabled state. Once the Entry became
          disabled, that guard returned before triggering the invalidation needed to remove its
          previous cached representation.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-[7%] max-[700px]:grid-cols-1 max-[700px]:gap-9">
          <figure className="border-t border-[#5d5f58] pt-5" aria-label="Old Entry save handler logic">
            <span className={smallMetaClass}>Old logic / flow stops</span>
            <div className="mt-7 grid gap-3 text-base">
              <code>Entry::EVENT_AFTER_SAVE</code>
              <span className="text-muted">↓</span>
              <code>check entry-&gt;enabled</code>
              <span className="text-muted">↓</span>
              <span className="border border-[#5d5f58] p-4 text-[#aeb0a8] line-through">
                disabled → return
              </span>
            </div>
          </figure>

          <figure className="border-t border-acid pt-5" aria-label="Corrected Entry lifecycle invalidation logic">
            <span className={`${smallMetaClass} text-acid`}>Corrected lifecycle</span>
            <div className="mt-7 grid gap-3 text-base">
              <code>Entry::EVENT_AFTER_SAVE</code>
              <span className="text-acid">↓</span>
              <strong className="bg-acid p-4 font-medium text-ink">
                Invalidate relevant dependencies
              </strong>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-[#c7c8c1]">
                <code>AFTER_DELETE</code>
                <code>AFTER_RESTORE</code>
              </div>
            </div>
          </figure>
        </div>

        <p className="mt-7 max-w-180 text-base leading-[1.6] text-[#c7c8c1]">
          The smallest correct fix was to remove the enabled-state guard, retaining the Entry
          lifecycle approach. Delete and restore remain explicit lifecycle paths.
        </p>
      </div>
    </section>
  );
}

function BeyondEntries() {
  return (
    <section className={sectionClass}>
      <p className={labelClass}>05 / Beyond Entries</p>

      <div>
        <SectionTitle>Semantic invalidation follows content relationships.</SectionTitle>

        <div className="mt-9 grid grid-cols-2 gap-[7%] max-[700px]:grid-cols-1 max-[700px]:gap-8">
          <figure className="border-y border-ink py-5" aria-label="Asset referenced through nested content">
            <span className={smallMetaClass}>Nested content</span>
            <p className="mt-6 text-lg leading-[1.7]">
              Asset → nested block → root Entry → cached page
            </p>
          </figure>

          <figure className="border-y border-ink py-5" aria-label="Asset referenced by a Global Set">
            <span className={smallMetaClass}>Shared content</span>
            <p className="mt-6 text-lg leading-[1.7]">
              Asset → Global Set → multiple pages
            </p>
          </figure>
        </div>

        <p className="mt-7 max-w-180 text-base leading-[1.6] text-muted">
          I extended asset-related invalidation behaviour so changes could reach referencing
          Entries, root Entries and Global Sets. This is targeted relationship handling alongside
          the broader semantic tag strategy—not a universal dependency resolver.
        </p>
      </div>
    </section>
  );
}

function Takeaway() {
  const lessons = [
    ["State transitions are data changes", "Disabled, deleted and restored content all need cache consideration."],
    ["Events encode assumptions", "The lifecycle was correct; the enabled-state filter encoded the wrong rule."],
    ["Invalidation follows dependencies", "The useful unit is often a semantic content dependency, not one current page."],
  ] as const;

  return (
    <section className={sectionClass}>
      <p className={labelClass}>06 / Takeaway</p>

      <div>
        <blockquote className="m-0 max-w-250 text-[clamp(36px,5vw,72px)] leading-[1.04] tracking-[-.055em]">
          Cache invalidation must react to content that has just stopped existing from the
          frontend’s perspective.
        </blockquote>

        <div className="mt-12 grid grid-cols-3 gap-[5%] border-t border-ink max-[700px]:grid-cols-1">
          {lessons.map(([title, text], index) => (
            <article className="py-5 max-[700px]:border-b max-[700px]:border-line" key={title}>
              <span className="text-[9px] text-muted">0{index + 1}</span>
              <h2 className="mt-5 text-xl font-medium">{title}</h2>
              <p className="mt-3 text-sm leading-[1.55] text-muted">{text}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-180 border-l-2 border-acid pl-5 text-sm leading-[1.6] text-muted">
          My contribution was to extend the existing revalidation system, extend asset-related
          invalidation behaviour, investigate and reject the Element Action hypothesis, trace the
          disabled-entry issue to the enabled-state guard and implement the smallest correct fix.
        </p>
      </div>
    </section>
  );
}

export function RevalidationStory() {
  return (
    <>
      <RevalidationModel />
      <DependencyProblem />
      <BugAndInvestigation />
      <RootCauseAndFix />
      <BeyondEntries />
      <Takeaway />
    </>
  );
}
