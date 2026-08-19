import { ExpertiseEffects } from "@/components/home/ExpertiseEffects";
import { labelClass, sectionClass } from "@/components/styles";
import { services } from "@/data/portfolio";

function ServiceItem({ service, index }: { service: (typeof services)[number]; index: number }) {
  const reverseParallax = index === 1 || index === 2;

  return (
    <article
      className="scroll-reveal group relative isolate flex min-h-80 flex-col justify-between overflow-hidden py-8 pr-[12%] max-[800px]:min-h-67.5 max-[800px]:pr-[8%]"
      style={{ "--delay": `${index * 0.08}s` } as React.CSSProperties}
    >
      <div className="flex items-center gap-4">
        <span className="flex size-10 items-center justify-center rounded-full border border-line text-[10px] text-muted transition-[background-color,color,border-color] duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-paper">
          {service[0]}
        </span>
        <span className="h-px w-12 origin-left bg-line transition-[scale,background-color] duration-500 group-hover:scale-x-150 group-hover:bg-ink" />
      </div>

      <span
        className={`parallax-dot ${reverseParallax ? "parallax-dot-reverse" : ""} pointer-events-none absolute top-[16%] right-[8%] -z-10 size-[clamp(86px,9vw,138px)] rounded-[50%_50%_50%_50%] bg-acid opacity-75 group-hover:scale-[1.45] group-hover:rounded-[42%_58%_62%_38%] group-hover:opacity-100`}
        aria-hidden
      />

      <div>
        <h3
          className="max-w-155 text-[clamp(42px,5.2vw,76px)] leading-[.88] font-medium tracking-[-.065em] motion-reduce:group-hover:[text-shadow:-4px_0_rgba(255,58,118,.72),4px_0_rgba(0,185,255,.72)]"
          data-distort-title
        >
          {service[1]}
        </h3>

        <p className="mt-8 max-w-125 text-[17px] leading-[1.6] text-[#50524d] transition-[translate,color] duration-500 ease-out group-hover:translate-x-1 group-hover:text-ink">
          {service[2]}
        </p>
      </div>
    </article>
  );
}

export function ExpertiseSection() {
  return (
    <section className={sectionClass} id="expertise">
      <h2 className={`${labelClass} scroll-reveal`}>02 / What I can help with</h2>

      <ExpertiseEffects
        className="scroll-reveal relative my-20 mr-0 mb-27.5 ml-[17%] max-w-295 max-[800px]:my-15 max-[800px]:mb-18.75 max-[800px]:ml-0"
        intensity={0.45}
      >
        <p
          className="text-[clamp(33px,5vw,74px)] leading-[1.04] tracking-[-.05em]"
          data-distort-title
        >
          Bring me into the project when the platform is{" "}
          <span className="highlight-sweep">already live, already complex</span> and the team needs
          useful output — not another onboarding problem.
        </p>
      </ExpertiseEffects>

      <ExpertiseEffects
        className="relative ml-[17%] grid grid-cols-2 gap-x-[8%] gap-y-16 [--parallax-x:0px] [--parallax-x-reverse:0px] [--parallax-y:0px] [--parallax-y-reverse:0px] max-[800px]:ml-0 max-[800px]:grid-cols-1 max-[800px]:gap-y-8"
        intensity={0.68}
      >
        {services.map((service, index) => (
          <ServiceItem service={service} index={index} key={service[0]} />
        ))}
      </ExpertiseEffects>
    </section>
  );
}
