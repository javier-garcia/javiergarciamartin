import { ExpertiseEffects } from "@/components/home/ExpertiseEffects";
import { labelClass, sectionClass } from "@/components/styles";
import { workingSteps } from "@/data/portfolio";

function WorkingStep({ step, index }: { step: (typeof workingSteps)[number]; index: number }) {
  return (
    <article
      className="scroll-reveal grid grid-cols-[8%_1fr] border-b border-line py-7 max-[800px]:grid-cols-[12%_1fr]"
      style={{ "--delay": `${index * 0.08}s` } as React.CSSProperties}
    >
      <b className="text-[10px] text-muted">{step[0]}</b>
      <div className="grid grid-cols-[32%_1fr] gap-[6%] text-base leading-[1.5] transition-transform duration-300 hover:translate-x-2 max-[800px]:grid-cols-1 max-[800px]:gap-3">
        <h3 className="text-xl font-medium">{step[1]}</h3>
        <p>{step[2]}</p>
      </div>
    </article>
  );
}

export function WorkingSection() {
  return (
    <section className={sectionClass} id="working">
      <p className={`${labelClass} scroll-reveal`}>03 / How I work</p>
      <div className="scroll-reveal my-18.75 mr-0 mb-26.25 ml-[17%] grid grid-cols-[1.25fr_.75fr] items-end gap-[8%] max-[800px]:my-15 max-[800px]:mb-18.75 max-[800px]:ml-0 max-[800px]:grid-cols-1 max-[800px]:gap-11.25">
        <ExpertiseEffects className="relative" intensity={0.5}>
          <h2
            className="text-[clamp(52px,7vw,104px)] leading-[.88] font-medium tracking-[-.065em]"
            data-distort-title
          >
            Useful from
            <br />
            <em className="font-serif font-normal">day zero.</em>
          </h2>
        </ExpertiseEffects>
        <p className="text-lg leading-[1.6]">
          Agencies rarely need another developer who can only be productive after the difficult
          decisions have already been made. They need someone who can enter the middle of the story,
          understand what is there and move it forward.
        </p>
      </div>
      <div className="ml-[17%] border-t border-ink max-[800px]:ml-0">
        {workingSteps.map((step, index) => (
          <WorkingStep step={step} index={index} key={step[0]} />
        ))}
      </div>
    </section>
  );
}
