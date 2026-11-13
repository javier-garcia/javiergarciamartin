import { ExpertiseEffects } from "@/components/home/ExpertiseEffects";
import { labelClass, sectionClass } from "@/components/styles";

export function AboutSection() {
  return (
    <section
      className={`${sectionClass} grid grid-cols-[17%_1fr] max-[800px]:grid-cols-1 max-[800px]:gap-12.5`}
      id="about"
    >
      <p className={`${labelClass} scroll-reveal`}>06 / Experience</p>
      <div className="scroll-reveal grid grid-cols-[1.5fr_1fr_1fr] gap-[5%] max-[800px]:grid-cols-1 max-[800px]:gap-7.5">
        <ExpertiseEffects className="relative" intensity={0.5}>
          <h2
            className="text-[clamp(44px,6vw,88px)] leading-[.95] font-medium tracking-heading"
            data-distort-title
          >
            Senior judgement.
            <br />
            <em className="font-serif font-normal">Hands-on delivery.</em>
          </h2>
        </ExpertiseEffects>
        <p className="mt-2 text-[17px] leading-[1.65]">
          I am Javi Garcia, an independent senior developer and creative technologist with more than
          20 years across graphic design, software development, interaction design and UX. That path
          includes helping migrate a healthcare product to React while training its development
          team, and creative frontend work for Casa Batlló, one of Antoni Gaudí’s iconic buildings
          in Barcelona.
        </p>
        <p className="mt-2 text-[17px] leading-[1.65]">
          More recently, my work has focused on complex Next.js and headless platforms, integrating
          systems including Craft CMS and WordPress. I collaborate with agencies, product teams and
          creative studios to understand the platform already in place, take responsibility for
          difficult issues and carry work through to production.
        </p>
      </div>
    </section>
  );
}
