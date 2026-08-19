import Link from "next/link";
import Image from "next/image";
import { ExpertiseEffects } from "@/components/home/ExpertiseEffects";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { CaseHeader } from "@/components/layout/CaseHeader";

type Phase = { label: string; title: string; text: string };
type Chapter = {
  label: string;
  title: string;
  paragraphs: string[];
  future?: boolean;
  comparison?: {
    before: { label: string; items: string[] };
    after: { label: string; items: string[] };
  };
  flow?: string[];
  migrationFlow?: boolean;
};

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  context: string;
  challenge: string;
  phases: Phase[];
  chapters?: Chapter[];
  contributions: string[];
  stack: string[];
  outcome: string;
  next: { label: string; href: string };
  image?: { src: string; alt: string };
};

const label = "text-[11px] font-bold tracking-[.14em] uppercase";
const meta = "text-[9px] tracking-[.13em] text-muted uppercase";

function ArchitectureFlow({ items }: { items: string[] }) {
  return (
    <ol className="mt-10 grid list-none grid-cols-[repeat(auto-fit,minmax(140px,1fr))] border-t border-ink p-0">
      {items.map((item, index) => (
        <li
          className="relative border-b border-line py-5 pr-9 text-base leading-[1.35] not-last:after:absolute not-last:top-1/2 not-last:right-4 not-last:-translate-y-1/2 not-last:text-muted not-last:content-['→']"
          key={item}
        >
          <span className={`${meta} mb-2 block`}>0{index + 1}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

function MigrationFlow() {
  return (
    <figure className="relative mt-12 border-y border-ink py-10" aria-label="Craft-first and WordPress-fallback request flow">
      <div className="grid max-w-150 grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="border border-line bg-paper p-5">
          <span className={`${meta} mb-3 block`}>Incoming</span>
          <strong className="text-2xl font-medium">Request</strong>
        </div>

        <span className="text-2xl text-muted" aria-hidden>→</span>

        <div className="border border-ink bg-acid p-5">
          <span className={`${meta} mb-3 block text-ink`}>01 / Preferred source</span>
          <strong className="text-2xl font-medium">Craft CMS</strong>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-[7%] max-[800px]:grid-cols-1 max-[800px]:gap-8">
        <div className="border-l border-line pl-5">
          <span className={`${meta} mb-4 block`}>Content found</span>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <span className="text-lg">Craft response</span>
            <span className="text-xl text-muted" aria-hidden>→</span>
            <strong className="border border-ink p-4 text-lg font-medium">Next.js</strong>
          </div>
        </div>

        <div className="border-l border-ink pl-5">
          <span className={`${meta} mb-4 block`}>Content not found</span>
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <strong className="border border-line p-4 text-lg font-medium">WordPress</strong>
            <span className="text-xl text-muted" aria-hidden>→</span>
            <div className="grid gap-2">
              <span className="border border-line p-3 text-sm">Found → Next.js</span>
              <span className="border border-ink bg-ink p-3 text-sm text-paper">Not found → 404</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function ContentComparison({ comparison }: { comparison: NonNullable<Chapter["comparison"]> }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-[7%] max-[800px]:grid-cols-1 max-[800px]:gap-10">
      {[comparison.before, comparison.after].map((column, index) => (
        <div className="border-t border-ink pt-5" key={column.label}>
          <p className={meta}>{column.label}</p>
          <ul className="mt-6 list-none p-0">
            {column.items.map((item) => (
              <li className="border-b border-line py-3 text-base" key={item}>
                {index === 1 ? <span className="mr-3 text-acid">●</span> : null}
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudyPage(props: Props) {
  return (
    <>
      <CaseHeader />
      <main className="overflow-hidden">
        <section className="grid min-h-[82svh] grid-cols-[17%_1fr] content-start border-b border-line px-[3vw] pt-19.25 pb-25 max-[800px]:block max-[800px]:min-h-[78svh] max-[800px]:px-[5vw] max-[800px]:pt-13.75 max-[800px]:pb-17.5">
          <p className={label}>{props.index} / Case study</p>
          <p className={`${meta} m-0 max-[800px]:mt-8.75`}>{props.eyebrow}</p>
          <ExpertiseEffects
            className="relative col-start-2 my-[12vh] mb-13.75 max-w-300 max-[800px]:mb-11.25"
            intensity={0.58}
          >
            <h1
              className="text-[clamp(60px,9vw,144px)] leading-[.88] font-medium tracking-[-.07em] max-[800px]:text-[15vw]"
              data-distort-title
            >
              {props.title}
            </h1>
          </ExpertiseEffects>
          <p className="col-start-2 m-0 max-w-180 text-[21px] leading-[1.45] max-[800px]:text-[17px]">
            {props.lead}
          </p>
        </section>

        <section className="grid grid-cols-[17%_1fr_1fr] gap-[5%] border-b border-line px-[3vw] py-25 max-[800px]:grid-cols-1 max-[800px]:gap-11.25 max-[800px]:px-[5vw] max-[800px]:py-18.75">
          <h2 className={label}>Overview</h2>
          <article className="border-t border-ink pt-5">
            <h3 className={meta}>Context</h3>
            <p className="text-lg leading-[1.6]">{props.context}</p>
          </article>
          <article className="border-t border-ink pt-5">
            <h3 className={meta}>Challenge</h3>
            <p className="text-lg leading-[1.6]">{props.challenge}</p>
          </article>
        </section>

        {props.image ? (
          <ExpertiseEffects
            className="relative aspect-[3558/1920] min-h-97.5"
            intensity={0.55}
          >
            <figure className="relative m-0 size-full overflow-hidden bg-[#20221e]">
              <Image
                className="object-cover object-top"
                src={props.image.src}
                alt={props.image.alt}
                fill
                sizes="100vw"
                priority
                data-distort-image
              />
            </figure>
          </ExpertiseEffects>
        ) : (
          <figure
            className="relative h-[65svh] min-h-125 overflow-hidden bg-[#20221e] max-[800px]:h-[50svh] max-[800px]:min-h-97.5"
            aria-label="Abstract system diagram"
          >
            <div className="absolute top-[16%] left-[12%] h-[54%] w-[38%] -rotate-5 border border-[#777a70] bg-[#dcdbd3] max-[800px]:h-[52%] max-[800px]:w-[63%]" />
            <div className="absolute top-[25%] left-[33%] h-[54%] w-[38%] rotate-3 border border-[#777a70] bg-[#dcdbd3] max-[800px]:h-[52%] max-[800px]:w-[63%]" />
            <div className="absolute top-[22%] right-[13%] size-[16vw] rounded-full bg-acid max-[800px]:size-[28vw]" />
            <span className="absolute bottom-[5%] left-[3%] text-[9px] tracking-[.15em] text-[#b6b8ae]">
              EXISTING SYSTEM
            </span>
            <span className="absolute right-[3%] bottom-[5%] text-[9px] tracking-[.15em] text-[#b6b8ae]">
              SAFE EVOLUTION
            </span>
          </figure>
        )}

        <section className="border-b border-line px-[3vw] py-27.5 max-[800px]:px-[5vw] max-[800px]:py-18.75">
          <h2 className={label}>How the work evolved</h2>
          <div className="mt-17.5 ml-[17%] border-t border-ink max-[800px]:mt-13.75 max-[800px]:ml-0">
            {props.phases.map((phase, index) => (
              <article
                className="grid grid-cols-[7%_16%_32%_1fr] items-start gap-[3%] border-b border-line py-8 max-[800px]:grid-cols-[12%_1fr] max-[800px]:gap-2.5"
                key={phase.title}
              >
                <b className="text-[10px] text-muted">0{index + 1}</b>
                <small className={`${meta} max-[800px]:col-start-2`}>{phase.label}</small>
                <h3 className="text-[28px] font-medium tracking-[-.04em] max-[800px]:col-start-2">
                  {phase.title}
                </h3>
                <p className="mt-0.75 text-base leading-[1.6] max-[800px]:col-start-2">
                  {phase.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {props.chapters?.map((chapter, index) => (
          <section
            className={`grid grid-cols-[17%_1fr] border-b border-line px-[3vw] py-27.5 max-[800px]:grid-cols-1 max-[800px]:gap-10 max-[800px]:px-[5vw] max-[800px]:py-18.75 ${chapter.future ? "bg-ink text-paper" : ""}`}
            key={chapter.title}
          >
            <p className={label}>0{index + 1} / {chapter.label}</p>
            <article className="max-w-287.5">
              <h2 className="max-w-225 text-[clamp(38px,5.5vw,82px)] leading-[1.02] font-medium tracking-[-.055em]">
                {chapter.title}
              </h2>

              <div className="mt-12 grid grid-cols-2 gap-[7%] max-[800px]:grid-cols-1 max-[800px]:gap-6">
                {chapter.paragraphs.map((paragraph) => (
                  <p className={`m-0 text-lg leading-[1.65] ${chapter.future ? "text-[#c7c8c1]" : ""}`} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {chapter.comparison ? (
                <ContentComparison comparison={chapter.comparison} />
              ) : null}

              {chapter.flow ? <ArchitectureFlow items={chapter.flow} /> : null}

              {chapter.migrationFlow ? <MigrationFlow /> : null}
            </article>
          </section>
        ))}

        <section className="ml-[17%] grid grid-cols-2 gap-[7%] border-b border-line px-[3vw] py-25 max-[800px]:ml-0 max-[800px]:grid-cols-1 max-[800px]:gap-15 max-[800px]:px-[5vw] max-[800px]:py-18.75">
          <div className="border-t border-ink pt-5.5">
            <h2 className={label}>Contribution</h2>
            <ul className="mt-11.25 list-none p-0">
              {props.contributions.map((item) => (
                <li className="border-b border-line py-3.5 text-base" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-ink pt-5.5">
            <h2 className={label}>Technologies</h2>
            <ExpertiseEffects className="relative mt-11.25" intensity={0.45}>
              <p
                className="text-[clamp(28px,4vw,58px)] leading-[1.12] tracking-[-.05em]"
                data-distort-title
              >
                {props.stack.join(" · ")}
              </p>
            </ExpertiseEffects>
          </div>
        </section>

        <section className="grid grid-cols-[17%_1fr] border-b border-line px-[3vw] py-27.5 max-[800px]:grid-cols-1 max-[800px]:gap-13.75 max-[800px]:px-[5vw] max-[800px]:py-18.75">
          <h2 className={label}>What this demonstrates</h2>
          <ExpertiseEffects className="relative max-w-287.5" intensity={0.45}>
            <p
              className="m-0 text-[clamp(38px,5.5vw,82px)] leading-[1.04] tracking-[-.055em]"
              data-distort-title
            >
              {props.outcome}
            </p>
          </ExpertiseEffects>
        </section>
        <Link
          className="flex items-end justify-between border-b border-line px-[3vw] py-13.75 max-[800px]:block max-[800px]:px-[5vw] max-[800px]:py-10"
          href={props.next.href}
        >
          <span className={meta}>Next case study</span>
          <ExpertiseEffects
            className="relative max-[800px]:mt-5.5"
            intensity={0.45}
          >
            <span
              className="block text-[clamp(30px,5vw,72px)] tracking-[-.05em]"
              data-distort-title
            >
              {props.next.label} →
            </span>
          </ExpertiseEffects>
        </Link>
      </main>
      <ContactFooter homeLink />
    </>
  );
}
