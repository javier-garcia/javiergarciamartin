import { ProjectCard } from "./ProjectCard";
import { labelClass, sectionClass } from "@/components/styles";
import { getHomepageProjects } from "@/data/case-studies";

const selectedProjects = getHomepageProjects("selected-work");

export function ProjectsSection() {
  return (
    <section
      className={`${sectionClass} bg-[linear-gradient(180deg,rgba(240,238,232,.68),rgba(240,238,232,.86)_22%)]`}
      id="work"
    >
      <div className="scroll-reveal mb-16.25 flex justify-between gap-8 max-[800px]:flex-col max-[800px]:gap-4">
        <h2 className={labelClass}>01 / Selected work</h2>

        <p className="max-w-100 text-right text-xs leading-[1.5] text-muted max-[800px]:text-left">
          A selection of recent projects from a career spanning more than 20 years in software
          development, interaction design and UX.
        </p>
      </div>

      <div className="border-t border-ink">
        {selectedProjects.map((project, index) => (
          <ProjectCard project={project} index={index} priority={index === 0} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
