import Link from "next/link";
import { MoraeStory } from "@/components/case-studies/MoraeStory";
import { ExpertiseEffects } from "@/components/home/ExpertiseEffects";
import { ScrollEffects } from "@/components/home/ScrollEffects";
import { ProjectMedia } from "@/components/case-studies/ProjectMedia";
import { CaseHeader } from "@/components/layout/CaseHeader";
import { ContactFooter } from "@/components/layout/ContactFooter";
import { labelClass, smallMetaClass } from "@/components/styles";
import type { ProjectCaseStudy } from "@/data/case-studies";

type Props = {
  project: ProjectCaseStudy;
  nextProject: ProjectCaseStudy;
};

const sectionClass =
  "relative border-b border-line px-[3vw] py-25 max-[800px]:px-[5vw] max-[800px]:py-18.75";

function ProjectHero({ project }: { project: ProjectCaseStudy }) {
  const heroMedia = project.imageSlots.find((media) => media.id === "hero");
  const metadata = [
    ["Role", project.role],
    ["Duration", project.duration],
    ["Team", project.team],
    ["Areas", project.areas.join(" / ")],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <>
      <section className="grid min-h-[78svh] grid-cols-[17%_1fr] content-start border-b border-line px-[3vw] pt-19.25 pb-20 max-[800px]:block max-[800px]:min-h-0 max-[800px]:px-[5vw] max-[800px]:pt-13.75 max-[800px]:pb-15">
        <p className={labelClass}>{project.number} / Project</p>
        <p className={`${smallMetaClass} col-start-2 m-0 max-[800px]:mt-8`}>{project.eyebrow}</p>

        <ExpertiseEffects
          className="relative col-start-2 my-[10vh] max-w-300 max-[800px]:my-14"
          intensity={0.5}
        >
          <h1
            className="text-[clamp(68px,11vw,172px)] leading-[.85] font-medium tracking-[-.075em]"
            data-distort-title
          >
            {project.title}
          </h1>
        </ExpertiseEffects>

        <p className="col-start-2 m-0 max-w-200 text-[clamp(20px,2vw,30px)] leading-[1.4] tracking-[-.02em]">
          {project.intro}
        </p>

        <dl className="col-start-2 mt-12 grid grid-cols-4 gap-6 border-t border-line pt-5 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1">
          {metadata.map(([key, value]) => (
            <div key={key}>
              <dt className={smallMetaClass}>{key}</dt>
              <dd className="mt-2 ml-0 text-sm leading-[1.45]">{value}</dd>
            </div>
          ))}
        </dl>

        {project.contentNotice ? (
          <p className="col-start-2 mt-8 max-w-180 border-l-2 border-acid pl-5 text-sm leading-[1.55] text-muted">
            {project.contentNotice}
          </p>
        ) : null}
      </section>

      {heroMedia ? (
        <div className="border-b border-line px-[3vw] py-8 max-[800px]:px-[5vw] max-[800px]:py-5">
          <ProjectMedia media={heroMedia} sizes="100vw" />
        </div>
      ) : null}
    </>
  );
}

function ProjectContext({ project }: { project: ProjectCaseStudy }) {
  return (
    <section
      className={`${sectionClass} grid grid-cols-[17%_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-10`}
      id="project-context"
    >
      <p className={labelClass}>01 / Project context</p>

      <div
        className={`grid gap-[7%] max-[800px]:grid-cols-1 max-[800px]:gap-9 ${project.challenge ? "grid-cols-2" : "grid-cols-1"}`}
      >
        <div>
          <h2 className="text-[clamp(38px,5vw,72px)] leading-[1.02] font-medium tracking-[-.055em]">
            The project in context.
          </h2>
          <p className="mt-8 text-lg leading-[1.65]">{project.summary}</p>
        </div>

        {project.challenge ? (
          <article className="border-t border-ink pt-5">
            <h3 className={smallMetaClass}>The challenge</h3>
            <p className="mt-7 text-lg leading-[1.65]">{project.challenge}</p>
          </article>
        ) : null}
      </div>
    </section>
  );
}

function Contribution({ project }: { project: ProjectCaseStudy }) {
  if (!project.contribution.length && !project.approach.length) return null;

  return (
    <section
      className={`${sectionClass} grid grid-cols-[17%_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-10`}
      id="contribution"
    >
      <p className={labelClass}>02 / Contribution</p>

      <div className="grid grid-cols-2 gap-[7%] max-[800px]:grid-cols-1 max-[800px]:gap-10">
        <div>
          <h2 className="text-[clamp(36px,4.6vw,68px)] leading-[1.02] font-medium tracking-[-.05em]">
            Working inside the project, not around it.
          </h2>
          <ul className="mt-9 list-none border-t border-ink p-0">
            {project.contribution.map((item) => (
              <li className="border-b border-line py-4 text-base leading-[1.55]" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-ink pt-5">
          <h3 className={smallMetaClass}>Approach</h3>
          <ol className="mt-7 list-none p-0">
            {project.approach.map((item, index) => (
              <li className="grid grid-cols-[10%_1fr] border-b border-line py-4" key={item}>
                <span className="text-[10px] text-muted">0{index + 1}</span>
                <span className="text-base leading-[1.55]">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function VisualSequence({ project }: { project: ProjectCaseStudy }) {
  if (!project.visualSequence.length) return null;

  return (
    <section className={sectionClass} id="project-sequence">
      <p className={labelClass}>03 / Project sequence</p>

      <div className="mt-14 grid gap-24 max-[800px]:mt-10 max-[800px]:gap-15">
        {project.visualSequence.map((item) => {
          const media = project.imageSlots.find((candidate) => candidate.id === item.imageId);

          if (!media) return null;

          return (
            <article
              className="grid grid-cols-[1.45fr_.55fr] items-end gap-[6%] odd:[&>figure]:order-2 max-[800px]:grid-cols-1 max-[800px]:gap-7 max-[800px]:odd:[&>figure]:order-none"
              key={item.imageId}
            >
              <ProjectMedia media={media} />

              <div className="pb-5">
                <span className={smallMetaClass}>{item.eyebrow}</span>
                <h2 className="mt-5 text-[clamp(28px,3.5vw,50px)] leading-[1.05] font-medium tracking-[-.045em]">
                  {item.title}
                </h2>
                {item.text ? (
                  <p className="mt-6 text-base leading-[1.6] text-muted">{item.text}</p>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function TechnicalChallenges({ project }: { project: ProjectCaseStudy }) {
  if (!project.technicalChallenges.length) return null;

  return (
    <section
      className={`${sectionClass} grid grid-cols-[17%_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-10`}
      id="technical-challenges"
    >
      <p className={labelClass}>04 / Technical challenges</p>

      <div className="border-t border-ink">
        {project.technicalChallenges.map((challenge, index) => (
          <article
            className="grid grid-cols-[7%_26%_1fr] gap-[5%] border-b border-line py-7 max-[800px]:grid-cols-[10%_1fr] max-[800px]:gap-y-5"
            key={challenge.title}
          >
            <span className="text-[10px] text-muted">0{index + 1}</span>
            <h2 className="text-2xl leading-[1.1] font-medium tracking-[-.035em]">
              {challenge.title}
            </h2>
            <div className="max-[800px]:col-start-2">
              <p className="m-0 text-base leading-[1.6]">{challenge.problem}</p>
              <p className="mt-4 text-base leading-[1.6] text-muted">
                {challenge.decision} {challenge.importance}
              </p>
              {challenge.technicalCaseHref ? (
                <Link
                  className="interactive-underline mt-5 inline-block pb-1 text-xs tracking-widest uppercase"
                  href={challenge.technicalCaseHref}
                >
                  Read technical deep dive →
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Outcome({ project }: { project: ProjectCaseStudy }) {
  return (
    <section
      className={`${sectionClass} grid grid-cols-[17%_1fr] bg-ink text-paper max-[800px]:grid-cols-1 max-[800px]:gap-10`}
      id="outcome"
    >
      <p className={labelClass}>{project.contentNotice ? "05 / Verified scope" : "05 / Outcome"}</p>

      <div>
        <p
          className={`m-0 leading-[1.04] tracking-[-.055em] ${
            project.contentNotice
              ? "max-w-200 text-[clamp(24px,3.5vw,48px)]"
              : "max-w-250 text-[clamp(36px,5vw,76px)]"
          }`}
        >
          {project.outcome}
        </p>
        <p className="mt-12 text-xs tracking-[.1em] text-[#aeb0a8] uppercase">
          {project.technologies.join(" · ")}
        </p>
      </div>
    </section>
  );
}

export default function ProjectCaseStudyPage({ project, nextProject }: Props) {
  return (
    <>
      <ScrollEffects atmosphere={false} />
      <CaseHeader />

      <main className="overflow-hidden">
        <ProjectHero project={project} />
        {project.slug === "morae" ? (
          <MoraeStory project={project} />
        ) : (
          <>
            <ProjectContext project={project} />
            <Contribution project={project} />
            <VisualSequence project={project} />
            <TechnicalChallenges project={project} />
            <Outcome project={project} />
          </>
        )}

        <Link
          className="flex items-end justify-between border-b border-line px-[3vw] py-13.75 max-[800px]:block max-[800px]:px-[5vw] max-[800px]:py-10"
          href={`/work/${nextProject.slug}`}
        >
          <span className={smallMetaClass}>Next project</span>
          <ExpertiseEffects className="relative max-[800px]:mt-5.5" intensity={0.4}>
            <span
              className="block text-[clamp(30px,5vw,72px)] tracking-[-.05em]"
              data-distort-title
            >
              {nextProject.title} →
            </span>
          </ExpertiseEffects>
        </Link>
      </main>

      <ContactFooter homeLink />
    </>
  );
}
