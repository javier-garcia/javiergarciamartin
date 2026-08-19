import Image from "next/image";
import Link from "next/link";
import { ExpertiseEffects } from "@/components/home/ExpertiseEffects";
import { ProjectAccordion } from "@/components/home/ProjectAccordion";
import { labelClass, sectionClass, smallMetaClass } from "@/components/styles";
import { projects, type Project } from "@/data/portfolio";

function ProjectVisual({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return (
      <div className="relative mb-[60px] min-h-[390px] overflow-hidden bg-[#20221e] max-[800px]:mb-[35px] max-[800px]:min-h-[260px]">
        <Image
          className="object-cover object-top"
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 800px) 100vw, 55vw"
          data-distort-image
        />
      </div>
    );
  }

  return (
    <div className="relative mb-[60px] min-h-[390px] overflow-hidden bg-[#20221e] max-[800px]:mb-[35px] max-[800px]:min-h-[260px]">
      <div className="absolute top-[10%] left-[16%] h-[63%] w-[72%] -rotate-5 border border-[#85887b] bg-[#d9d8d0] p-[22px] text-[10px] tracking-[.12em] uppercase shadow-[0_20px_60px_#0006]">
        system / context / delivery
      </div>
      <div className="absolute top-[22%] left-[19%] flex h-[64%] w-[72%] rotate-4 justify-between border border-[#85887b] bg-[#d9d8d0] p-[22px] shadow-[0_20px_60px_#0006]">
        <b className="text-[34px] tracking-[-.06em] lowercase">{index === 0 ? "morae" : "next"}</b>
        <i className="h-[70%] w-[42%] rounded-[50%_50%_40%_60%] bg-acid" />
      </div>
    </div>
  );
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  return (
    <ProjectAccordion
      defaultOpen={index === 0}
      index={index}
      summary={
        <>
          <span className="text-[11px] text-muted">{project.number}</span>
          <span>
            <small className={`${smallMetaClass} mb-2`}>{project.eyebrow}</small>
            <strong
              className="text-[clamp(34px,5vw,70px)] font-medium tracking-[-.05em]"
              data-distort-title
            >
              {project.title}
            </strong>
          </span>
          <span className="max-w-[470px] text-[17px] leading-[1.5] text-[#50524d] max-[800px]:hidden">
            {project.intro}
          </span>
        </>
      }
    >
      <div className="relative grid min-h-0 cursor-pointer grid-cols-[55%_minmax(0,1fr)] gap-[6%] overflow-hidden max-[800px]:grid-cols-1">
        <ProjectVisual project={project} index={index} />
        <div className="mb-[60px] flex flex-col justify-between text-[19px] leading-[1.6] max-[800px]:mb-[35px] max-[800px]:gap-[35px] max-[800px]:text-[17px]">
          <p>{project.detail}</p>
          <div>
            <p className="border-t border-line pt-5 text-[16px] leading-[1.55]">
              <small className={`${smallMetaClass} mb-2.5`}>What this demonstrates</small>
              {project.result}
            </p>
            <Link
              className="interactive-underline group/case-link mt-[22px] inline-flex w-fit items-center gap-2 pb-1 text-xs tracking-[.1em] uppercase before:absolute before:inset-0 before:z-10"
              href={project.href}
            >
              <span className="relative z-20">View full case study</span>
              <span className="relative z-20 text-lg transition-transform duration-300 group-hover/case-link:translate-x-1 group-hover/case-link:-translate-y-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </ProjectAccordion>
  );
}

export function ProjectsSection() {
  return (
    <section
      className={`${sectionClass} bg-[linear-gradient(180deg,rgba(240,238,232,.68),rgba(240,238,232,.86)_22%)]`}
      id="work"
    >
      <div className="scroll-reveal mb-[65px] flex justify-between">
        <h2 className={labelClass}>01 / Selected work</h2>
        <p className="text-xs text-muted max-[800px]:hidden">
          Existing platforms. Real constraints. Production work.
        </p>
      </div>
      <ExpertiseEffects className="relative" intensity={0.5}>
        {projects.map((project, index) => (
          <ProjectItem key={project.title} project={project} index={index} />
        ))}
      </ExpertiseEffects>
    </section>
  );
}
