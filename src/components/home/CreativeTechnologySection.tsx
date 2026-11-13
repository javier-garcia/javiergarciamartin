import { ProjectCard } from "./ProjectCard";
import { labelClass, sectionClass } from "@/components/styles";
import { getHomepageProjects } from "@/data/case-studies";

export function CreativeTechnologySection() {
  const projects = getHomepageProjects("creative-technology");
  if (!projects.length) return null;

  return (
    <section
      className={sectionClass}
      id="creative-technology"
      aria-labelledby="creative-technology-title"
    >
      <div className="scroll-reveal mb-16.25 flex justify-between gap-8 max-[800px]:flex-col max-[800px]:gap-4">
        <h2 className={labelClass} id="creative-technology-title">
          02 / Creative technology &amp; data
        </h2>
        <p className="max-w-100 text-right text-xs leading-[1.5] text-muted max-[800px]:text-left">
          Exploring the intersection of technology, interaction, data and the physical world.
        </p>
      </div>
      <div className="border-t border-ink">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
