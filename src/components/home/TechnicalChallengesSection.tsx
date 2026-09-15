import Link from "next/link";
import { labelClass, sectionClass, smallMetaClass } from "@/components/styles";

const challenges = [
  {
    project: "Morae",
    title: "Progressive platform evolution",
    description:
      "Moving from WordPress-origin structures towards Craft while preserving publishing, preview and redirect behaviour that still mattered.",
    href: "/work/morae#technical-challenges",
  },
  {
    project: "Morae",
    title: "Publishing state and cache invalidation",
    description:
      "Resolving which cached pages and dependencies should change when related CMS content is published, disabled or updated.",
    href: "/work/revalidation-flow",
  },
  {
    project: "NTI",
    title: "Shared components across multiple sites",
    description:
      "Keeping genuinely common behaviour reusable while allowing controlled variation for individual sites.",
    href: "/work/nti#technical-challenges",
  },
  {
    project: "Core One",
    title: "Motion and 3D inside a content platform",
    description:
      "Integrating expressive visual behaviour into a responsive, CMS-driven Next.js application rather than an isolated demo.",
    href: "/work/core-one#technical-challenges",
  },
] as const;

export function TechnicalChallengesSection() {
  return (
    <section className={`${sectionClass} bg-[#e8e6df]`} aria-labelledby="inside-work-title">
      <div className="grid grid-cols-[17%_1fr] gap-y-10 max-[800px]:grid-cols-1">
        <h2 className={labelClass} id="inside-work-title">
          02 / Inside the work
        </h2>

        <div className="border-t border-ink">
          {challenges.map((challenge, index) => (
            <Link
              className="group/challenge grid grid-cols-[6%_16%_32%_1fr_auto] items-start gap-[3%] border-b border-line py-6 outline-none transition-colors duration-300 hover:bg-paper/35 focus-visible:bg-paper/35 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink max-[900px]:grid-cols-[9%_1fr_auto] max-[900px]:gap-y-3"
              href={challenge.href}
              key={challenge.title}
            >
              <span className="text-[10px] text-muted">0{index + 1}</span>
              <span className={`${smallMetaClass} max-[900px]:col-start-2`}>
                {challenge.project}
              </span>
              <h3 className="text-xl leading-[1.1] font-medium tracking-[-.025em] max-[900px]:col-start-2">
                {challenge.title}
              </h3>
              <p className="text-sm leading-[1.55] text-[#50524d] max-[900px]:col-start-2">
                {challenge.description}
              </p>
              <span className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] tracking-widest uppercase max-[900px]:col-start-2">
                Read case
                <span className="text-xl transition-transform duration-300 group-hover/challenge:translate-x-1 group-hover/challenge:-translate-y-1 group-focus-visible/challenge:translate-x-1 group-focus-visible/challenge:-translate-y-1 motion-reduce:transform-none">
                  ↗
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
