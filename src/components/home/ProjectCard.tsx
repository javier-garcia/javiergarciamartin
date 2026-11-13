import Link from "next/link";
import { ProjectMedia } from "@/components/case-studies/ProjectMedia";
import { smallMetaClass } from "@/components/styles";
import type { ProjectCaseStudy } from "@/data/case-studies";

export function ProjectCard({
  project,
  index = 0,
  priority = false,
}: {
  project: ProjectCaseStudy;
  index?: number;
  priority?: boolean;
}) {
  const projectMedia =
    project.imageSlots.find((media) => media.id === "cover") ??
    project.imageSlots.find((media) => media.id === "hero");
  const hasMedia = Boolean(
    projectMedia && (!project.omitMissingMedia || projectMedia.src || projectMedia.videoSrc),
  );
  return (
    <article
      className="scroll-reveal border-b border-line py-14 max-[800px]:py-10"
      key={project.slug}
      style={{ "--delay": `${index * 0.06}s` } as React.CSSProperties}
    >
      <Link
        className={`group/project grid ${hasMedia ? "grid-cols-[7%_52%_1fr]" : "grid-cols-[7%_1fr]"} items-start gap-[4%] outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-8 focus-visible:ring-offset-paper max-[900px]:grid-cols-[8%_1fr] max-[900px]:gap-y-8`}
        href={`/work/${project.slug}`}
      >
        <span className="pt-1 text-[10px] text-muted">{project.number}</span>

        {hasMedia && projectMedia ? (
          <div className="max-[900px]:col-start-2">
            <ProjectMedia
              compact
              media={projectMedia}
              priority={priority}
              sizes="(max-width: 900px) 92vw, 52vw"
            />
          </div>
        ) : null}

        <div className="flex h-full flex-col justify-between gap-10 max-[900px]:col-start-2">
          <div>
            <span className={smallMetaClass}>{project.eyebrow}</span>

            <h3 className="mt-5 text-[clamp(44px,6vw,86px)] leading-[.88] font-medium tracking-heading transition-transform duration-500 ease-out group-hover/project:translate-x-1.5 group-focus-visible/project:translate-x-1.5 motion-reduce:transform-none">
              {project.displayTitle ?? project.title}
            </h3>
            {project.subtitle ? (
              <p className="mt-3 text-[clamp(20px,2.5vw,32px)] leading-[1.15] tracking-heading">
                {project.subtitle}
              </p>
            ) : null}

            <p className="mt-8 max-w-140 text-[18px] leading-[1.55] text-[#50524d]">
              {project.home.intro}
            </p>
          </div>

          <div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-line pt-5 text-sm leading-[1.45]">
              {project.role ? (
                <>
                  <dt className="text-muted">My role</dt>
                  <dd>{project.role}</dd>
                </>
              ) : null}
              <dt className="text-muted">Areas</dt>
              <dd>{project.areas.slice(0, 3).join(" · ")}</dd>
            </dl>

            <span className="interactive-underline mt-8 inline-flex items-center gap-2 pb-1 text-xs tracking-widest uppercase">
              View case study
              <span className="text-lg transition-transform duration-300 group-hover/project:translate-x-1 group-hover/project:-translate-y-1 group-focus-visible/project:translate-x-1 group-focus-visible/project:-translate-y-1 motion-reduce:transform-none">
                ↗
              </span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
