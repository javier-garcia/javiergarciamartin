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
  const heroMedia = project.imageSlots.find(
    (media) => media.id === (project.heroMediaId ?? "hero"),
  );
  const metadata = [
    ["My role", project.role],
    ["Year", project.year?.toString()],
    ["Project type", project.projectType],
    ["Categories", project.categories?.join(" / ")],
    ["Duration", project.duration],
    ["Collaboration", project.collaboration],
    ["Areas", project.areas.join(" / ")],
    ["Technologies", project.technologies.join(" · ")],
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
            className={`text-[clamp(68px,11vw,172px)] leading-[.85] font-medium tracking-heading ${project.displayTitle && project.displayTitle.length > 8 ? "max-[800px]:text-[12vw]" : ""}`}
            data-distort-title
          >
            {project.displayTitle ?? project.title}
          </h1>
          {project.subtitle ? (
            <p className="mt-5 max-w-full text-[clamp(24px,4vw,56px)] leading-[1.1] tracking-heading [overflow-wrap:anywhere]">
              {project.subtitle}
            </p>
          ) : null}
        </ExpertiseEffects>

        <div className="col-start-2 m-0 max-w-200 space-y-5 text-[clamp(20px,2vw,30px)] leading-[1.4] tracking-[-.02em]">
          {project.intro.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

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

      {heroMedia &&
      (!project.omitMissingMedia || heroMedia.src || heroMedia.videoSrc || heroMedia.vimeoId) ? (
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
          <h2 className="text-[clamp(38px,5vw,72px)] leading-[1.02] font-medium tracking-heading">
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

function Contribution({ project, number = 2 }: { project: ProjectCaseStudy; number?: number }) {
  if (!project.contribution.length && !project.approach.length) return null;

  return (
    <section
      className={`${sectionClass} grid grid-cols-[17%_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-10`}
      id="contribution"
    >
      <p className={labelClass}>{String(number).padStart(2, "0")} / Contribution</p>

      <div className="grid grid-cols-2 gap-[7%] max-[800px]:grid-cols-1 max-[800px]:gap-10">
        <div>
          <h2 className="text-[clamp(36px,4.6vw,68px)] leading-[1.02] font-medium tracking-heading">
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

function VisualSequence({ project, number = 3 }: { project: ProjectCaseStudy; number?: number }) {
  const assignedMedia = new Set([
    project.heroMediaId ?? "hero",
    ...(project.storySections?.flatMap((section) => section.mediaIds ?? []) ?? []),
  ]);
  const sequence = project.visualSequence.filter((item) => !assignedMedia.has(item.imageId));
  if (!sequence.length) return null;

  const fullWidthMedia =
    project.slug === "core-one" || project.slug === "nti" || Boolean(project.storySections);

  return (
    <section className={sectionClass} id="project-sequence">
      <p className={labelClass}>{String(number).padStart(2, "0")} / Project sequence</p>

      <div className="mt-14 grid gap-24 max-[800px]:mt-10 max-[800px]:gap-15">
        {sequence.map((item) => {
          const media = project.imageSlots.find((candidate) => candidate.id === item.imageId);

          if (
            !media ||
            (project.omitMissingMedia && !media.src && !media.videoSrc && !media.vimeoId)
          )
            return null;

          return (
            <article
              className={
                fullWidthMedia
                  ? "flex flex-col gap-8 max-[800px]:gap-7"
                  : "grid grid-cols-[1.45fr_.55fr] items-end gap-[6%] odd:[&>figure]:order-2 max-[800px]:grid-cols-1 max-[800px]:gap-7 max-[800px]:odd:[&>figure]:order-none"
              }
              key={item.imageId}
            >
              <ProjectMedia
                media={media}
                sizes={fullWidthMedia ? "(max-width: 800px) 90vw, 94vw" : undefined}
              />

              <div className={fullWidthMedia ? "order-first max-w-225" : "pb-5"}>
                <span className={smallMetaClass}>{item.eyebrow}</span>
                <h2 className="mt-5 text-[clamp(28px,3.5vw,50px)] leading-[1.05] font-medium tracking-heading">
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

function TechnicalChallenges({
  project,
  number = 4,
}: {
  project: ProjectCaseStudy;
  number?: number;
}) {
  if (!project.technicalChallenges.length) return null;

  return (
    <section
      className={`${sectionClass} grid grid-cols-[17%_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-10`}
      id="technical-challenges"
    >
      <p className={labelClass}>{String(number).padStart(2, "0")} / Technical challenges</p>

      <div className="border-t border-ink">
        {project.technicalChallenges.map((challenge, index) => (
          <article
            className="grid grid-cols-[7%_26%_1fr] gap-[5%] border-b border-line py-7 max-[800px]:grid-cols-[10%_1fr] max-[800px]:gap-y-5"
            key={challenge.title}
          >
            <span className="text-[10px] text-muted">0{index + 1}</span>
            <h2 className="text-2xl leading-[1.1] font-medium tracking-heading">
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

function Outcome({ project, number = 5 }: { project: ProjectCaseStudy; number?: number }) {
  if (!project.outcome) return null;
  return (
    <section
      className={`${sectionClass} grid grid-cols-[17%_1fr] bg-ink text-paper max-[800px]:grid-cols-1 max-[800px]:gap-10`}
      id="outcome"
    >
      <p className={labelClass}>
        {String(number).padStart(2, "0")} / {project.contentNotice ? "Verified scope" : "Outcome"}
      </p>

      <div>
        <p
          className={`m-0 leading-[1.04] tracking-heading ${
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
  const storyCount = project.storySections?.length;
  const hasContribution = Boolean(project.contribution.length || project.approach.length);
  const assignedMedia = new Set([
    project.heroMediaId ?? "hero",
    ...(project.storySections?.flatMap((section) => section.mediaIds ?? []) ?? []),
  ]);
  const hasSequence = project.visualSequence.some((item) => !assignedMedia.has(item.imageId));
  const contributionNumber = storyCount === undefined ? undefined : storyCount + 1;
  const sequenceNumber =
    storyCount === undefined ? undefined : storyCount + Number(hasContribution) + 1;
  const technicalNumber =
    storyCount === undefined
      ? undefined
      : storyCount + Number(hasContribution) + Number(hasSequence) + 1;
  const outcomeNumber =
    technicalNumber === undefined
      ? undefined
      : technicalNumber + Number(Boolean(project.technicalChallenges.length));
  const referencesNumber =
    outcomeNumber === undefined ? undefined : outcomeNumber + Number(Boolean(project.outcome));
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
            {project.storySections ? (
              project.storySections.map((section, index) => (
                <section
                  className={`${sectionClass} grid grid-cols-[17%_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-10`}
                  id={section.id}
                  key={section.id}
                >
                  <p className={labelClass}>
                    {String(index + 1).padStart(2, "0")} / {section.label ?? "Project story"}
                  </p>
                  <div className="min-w-0">
                    <div className="max-w-225">
                      <h2 className="text-[clamp(38px,5vw,72px)] leading-[1.02] font-medium tracking-heading">
                        {section.title}
                      </h2>
                      {section.text.split("\n\n").map((paragraph) => (
                        <p className="mt-8 text-lg leading-[1.65]" key={paragraph}>
                          {paragraph}
                        </p>
                      ))}
                      {section.responsibilities?.length ? (
                        <ul
                          className="mt-9 list-none border-t border-ink p-0"
                          aria-label="Responsibilities"
                        >
                          {section.responsibilities.map((responsibility) => (
                            <li
                              className="border-b border-line py-4 text-base leading-[1.55]"
                              key={responsibility}
                            >
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {section.closingText && !section.credits?.length ? (
                        <p className="mt-8 text-lg leading-[1.65]">{section.closingText}</p>
                      ) : null}
                    </div>
                  </div>
                  {section.mediaIds?.map((id) => {
                    const media = project.imageSlots.find((slot) => slot.id === id);
                    if (
                      !media ||
                      id === (project.heroMediaId ?? "hero") ||
                      (project.omitMissingMedia && !media.src && !media.videoSrc && !media.vimeoId)
                    )
                      return null;
                    return (
                      <div
                        className={`mt-12 min-w-0 max-[800px]:mt-0 ${media.fullWidth ? "col-span-full" : "col-start-2 max-[800px]:col-start-1"}`}
                        key={id}
                        style={
                          !media.fullWidth && !media.vimeoId
                            ? { maxWidth: media.sourceWidth }
                            : undefined
                        }
                      >
                        <ProjectMedia
                          media={media}
                          sizes={
                            media.fullWidth
                              ? "(max-width: 800px) 90vw, 94vw"
                              : "(max-width: 800px) 90vw, 78vw"
                          }
                        />
                      </div>
                    );
                  })}
                  {section.credits?.length ? (
                    <div className="col-start-2 mt-10 max-w-225 border-t border-line pt-5 max-[800px]:col-start-1 max-[800px]:mt-0">
                      <h3 className={smallMetaClass}>Campaign credits</h3>
                      {section.closingText ? (
                        <p className="mt-4 text-sm leading-[1.55] text-muted">
                          {section.closingText}
                        </p>
                      ) : null}
                      <dl className="mt-5 grid grid-cols-[1fr_2fr] gap-x-6 gap-y-4 text-sm leading-[1.55] max-[500px]:grid-cols-1 max-[500px]:gap-y-2">
                        {section.credits.map((credit) => (
                          <div className="contents" key={credit.role}>
                            <dt className="text-muted max-[500px]:mt-3">{credit.role}</dt>
                            <dd>{credit.names}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  ) : null}
                </section>
              ))
            ) : (
              <ProjectContext project={project} />
            )}
            <Contribution project={project} number={contributionNumber} />
            <VisualSequence project={project} number={sequenceNumber} />
            <TechnicalChallenges project={project} number={technicalNumber} />
            <Outcome project={project} number={outcomeNumber} />
          </>
        )}

        {project.externalLinks?.length ? (
          <section
            className={`${sectionClass} flex flex-wrap gap-x-10 gap-y-4`}
            aria-label="Project references"
          >
            {referencesNumber !== undefined ? (
              <h2 className={`${labelClass} w-full`}>
                {String(referencesNumber).padStart(2, "0")} / References
              </h2>
            ) : null}
            {project.externalLinks.map((link) => (
              <a
                className="interactive-underline inline-block py-2 text-sm"
                href={link.href}
                key={link.href}
              >
                {link.label} ↗
              </a>
            ))}
          </section>
        ) : null}

        <Link
          className="flex items-end justify-between border-b border-line px-[3vw] py-13.75 max-[800px]:block max-[800px]:px-[5vw] max-[800px]:py-10"
          href={`/work/${nextProject.slug}`}
        >
          <span className={smallMetaClass}>Next project</span>
          <ExpertiseEffects className="relative max-[800px]:mt-5.5" intensity={0.4}>
            <span className="block text-[clamp(30px,5vw,72px)] tracking-heading" data-distort-title>
              {nextProject.title} →
            </span>
          </ExpertiseEffects>
        </Link>
      </main>

      <ContactFooter homeLink />
    </>
  );
}
