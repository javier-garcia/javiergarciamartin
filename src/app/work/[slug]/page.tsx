import { notFound } from "next/navigation";
import ProjectCaseStudyPage from "@/templates/ProjectCaseStudyPage";
import { getProjectCaseStudy, publishedProjectCaseStudies } from "@/data/case-studies";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return publishedProjectCaseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project || project.published === false) return {};

  const heroImage = project.imageSlots.find((media) => media.id === "hero")?.src;
  const heroMedia = project.imageSlots.find((media) => media.id === "hero");

  return createPageMetadata({
    title: `${project.title} project case study`,
    description: project.intro,
    path: `/work/${project.slug}`,
    image: heroImage,
    imageWidth: heroImage ? heroMedia?.sourceWidth : undefined,
    imageHeight: heroImage ? heroMedia?.sourceHeight : undefined,
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProjectCaseStudy(slug);

  if (!project || project.published === false) notFound();

  const nextProject = getProjectCaseStudy(project.nextProject);

  if (!nextProject) notFound();

  return <ProjectCaseStudyPage project={project} nextProject={nextProject} />;
}
