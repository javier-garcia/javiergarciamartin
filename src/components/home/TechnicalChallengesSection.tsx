import Link from "next/link";
import { labelClass, sectionClass, smallMetaClass } from "@/components/styles";

import { insideWorkStories } from "@/data/portfolio";

export function TechnicalChallengesSection() {
  return (
    <section className={`${sectionClass} bg-[#e8e6df]`} aria-labelledby="inside-work-title">
      <div className="grid grid-cols-[17%_1fr] gap-y-10 max-[800px]:grid-cols-1">
        <h2 className={labelClass} id="inside-work-title">
          03 / Inside the work
        </h2>

        <div className="border-t border-ink">
          {insideWorkStories.map((challenge, index) => (
            <Link
              className="group/challenge grid grid-cols-[6%_16%_32%_1fr_auto] items-start gap-[3%] border-b border-line py-6 outline-none transition-colors duration-300 hover:bg-paper/35 focus-visible:bg-paper/35 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ink max-[900px]:grid-cols-[9%_1fr_auto] max-[900px]:gap-y-3"
              href={challenge.href}
              key={challenge.title}
            >
              <span className="text-[10px] text-muted">0{index + 1}</span>
              <span className={`${smallMetaClass} max-[900px]:col-start-2`}>
                {challenge.project}
              </span>
              <h3 className="text-xl leading-[1.1] font-medium tracking-heading max-[900px]:col-start-2">
                {challenge.title}
              </h3>
              <p className="text-sm leading-[1.55] text-[#50524d] max-[900px]:col-start-2">
                {challenge.description}
              </p>
              <span className="inline-flex items-center gap-2 whitespace-nowrap text-[10px] tracking-widest uppercase max-[900px]:col-start-2">
                {challenge.action}
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
