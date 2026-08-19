import { labelClass } from "@/components/styles";
import { ExpertiseEffects } from "./ExpertiseEffects";
import ThreeNetwork from "./ThreeNetwork";

export function HeroSection() {
  return (
    <section
      className="relative min-h-svh overflow-visible border-b border-line px-[3vw] pt-36.25 pb-10.5 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(90deg,rgba(240,238,232,.92)_0%,rgba(240,238,232,.74)_27%,rgba(240,238,232,.28)_55%,rgba(240,238,232,.04)_78%)] max-[800px]:px-[5vw] max-[800px]:pt-26.25 max-[800px]:pb-8.75 max-[800px]:after:bg-[linear-gradient(180deg,rgba(240,238,232,.62),rgba(240,238,232,.78)_58%,rgba(240,238,232,.94))]"
      id="top"
    >
      <div className="relative z-[2] flex min-h-[calc(100svh-187px)] w-full flex-col justify-between max-[800px]:min-h-[calc(100svh-140px)]">
        <p className={`${labelClass} intro-reveal`}>
          Senior React / Next.js developer · Available for agency collaborations
        </p>
        <ExpertiseEffects className="intro-reveal relative my-[7vh] max-w-262.5 [animation-delay:.1s] max-[800px]:my-[9vh]">
          <h1
            className="text-[clamp(52px,6.75vw,112px)] leading-[.91] font-medium tracking-[-.07em] max-[800px]:text-[13.8vw]"
            data-distort-title
          >
            Senior developer
            <br />
            for complex Next.js
            <br />
            <em className="inline-block font-serif font-normal">
              &amp; React
            </em>{" "}
            projects.
          </h1>
        </ExpertiseEffects>
        <div className="intro-reveal relative z-[2] flex items-end justify-between [animation-delay:.25s]">
          <p className="ml-[17%] max-w-150 text-[19px] leading-[1.5] max-[800px]:ml-0 max-[800px]:max-w-[68%] max-[800px]:text-base">
            I help digital agencies with existing, technically demanding web platforms — across
            Craft CMS, WordPress and other content systems.
          </p>
          <a
            className="flex size-31 items-end justify-between rounded-[50%_50%_50%_50%] bg-acid p-5.25 text-xs leading-[1.1] transition-all duration-300 hover:rotate-6 hover:scale-106 hover:rounded-[42%_58%_48%_52%] max-[800px]:size-23.5 max-[800px]:p-4"
            href="#work"
          >
            <span>
              Selected
              <br />
              work
            </span>
            <b className="text-[26px] font-normal">↓</b>
          </a>
        </div>
      </div>
      <ThreeNetwork />
    </section>
  );
}
