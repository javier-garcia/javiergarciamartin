import Link from "next/link";
import { ProjectMedia } from "@/components/case-studies/ProjectMedia";
import { labelClass, sectionClass, smallMetaClass } from "@/components/styles";
import { projectCaseStudies } from "@/data/case-studies";

const selectedProjectSlugs = ["morae", "core-one", "nti", "saratoga"];

const selectedProjects = selectedProjectSlugs.map((slug) => {
  const project = projectCaseStudies.find((candidate) => candidate.slug === slug);

  if (!project) {
    throw new Error(`Missing selected project: ${slug}`);
  }

  return project;
});

export function ProjectsSection() {
  return (
    <section
      className={`${sectionClass} bg-[linear-gradient(180deg,rgba(240,238,232,.68),rgba(240,238,232,.86)_22%)]`}
      id="work"
    >
      <div className="scroll-reveal mb-16.25 flex justify-between gap-8">
        <h2 className={labelClass}>01 / Selected work</h2>

        <p className="max-w-100 text-right text-xs leading-[1.5] text-muted max-[800px]:hidden">
          Products and platforms delivered inside real teams, constraints and production systems.
        </p>
      </div>

      <div className="border-t border-ink">
        {selectedProjects.map((project, index) => {
          const projectMedia =
            project.imageSlots.find((media) => media.id === "cover") ??
            project.imageSlots.find((media) => media.id === "hero");

          if (!projectMedia) return null;

          return (
            <article
              className="scroll-reveal border-b border-line py-14 max-[800px]:py-10"
              key={project.slug}
              style={{ "--delay": `${index * 0.06}s` } as React.CSSProperties}
            >
              <Link
                className="group/project grid grid-cols-[7%_52%_1fr] items-start gap-[4%] outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-8 focus-visible:ring-offset-paper max-[900px]:grid-cols-[8%_1fr] max-[900px]:gap-y-8"
                href={`/work/${project.slug}`}
              >
                <span className="pt-1 text-[10px] text-muted">{project.number}</span>

                <div className="max-[900px]:col-start-2">
                  <ProjectMedia
                    compact
                    media={projectMedia}
                    priority={index === 0}
                    sizes="(max-width: 900px) 92vw, 52vw"
                  />
                </div>

                <div className="flex h-full flex-col justify-between gap-10 max-[900px]:col-start-2">
                  <div>
                    <span className={smallMetaClass}>{project.eyebrow}</span>

                    <h3 className="mt-5 text-[clamp(44px,6vw,86px)] leading-[.88] font-medium tracking-[-.065em] transition-transform duration-500 ease-out group-hover/project:translate-x-1.5 group-focus-visible/project:translate-x-1.5 motion-reduce:transform-none">
                      {project.title}
                    </h3>

                    <p className="mt-8 max-w-140 text-[18px] leading-[1.55] text-[#50524d]">
                      {project.home.intro}
                    </p>
                  </div>

                  <div>
                    <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 border-t border-line pt-5 text-sm leading-[1.45]">
                      <dt className="text-muted">Role</dt>
                      <dd>{project.role}</dd>
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
        })}
      </div>
    </section>
  );
}
