import { ExpertiseEffects } from "@/components/home/ExpertiseEffects";
import { labelClass, sectionClass } from "@/components/styles";

export function AboutSection() {
  return (
    <section
      className={`${sectionClass} grid grid-cols-[17%_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-12.5`}
      id="about"
    >
      <p className={`${labelClass} scroll-reveal`}>04 / Experience</p>
      <div className="scroll-reveal grid grid-cols-[1.5fr_1fr_1fr] gap-[5%] max-[800px]:grid-cols-1 max-[800px]:gap-7.5">
        <ExpertiseEffects className="relative" intensity={0.5}>
          <h2
            className="text-[clamp(44px,6vw,88px)] leading-[.95] font-medium tracking-[-.06em]"
            data-distort-title
          >
            Senior judgement.
            <br />
            <em className="font-serif font-normal">Hands-on delivery.</em>
          </h2>
        </ExpertiseEffects>
        <p className="mt-2 text-[17px] leading-[1.65]">
          I am Javi Garcia, a senior frontend developer specialising in React and Next.js, with deep
          experience integrating content platforms including Craft CMS and WordPress. My strongest
          work happens where understanding the existing system matters as much as writing the next
          component.
        </p>
        <p className="mt-2 text-[17px] leading-[1.65]">
          I collaborate with digital agencies as experienced development capacity: joining
          established teams, taking responsibility for difficult issues and contributing from the
          first stage of the engagement through to production.
        </p>
      </div>
    </section>
  );
}
