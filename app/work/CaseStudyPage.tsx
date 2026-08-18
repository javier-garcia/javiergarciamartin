import Link from "next/link";

type Phase = { label: string; title: string; text: string };
type Props = { index: string; eyebrow: string; title: string; lead: string; context: string; challenge: string; phases: Phase[]; contributions: string[]; stack: string[]; outcome: string; next: { label: string; href: string } };

const label = "text-[11px] font-bold tracking-[.14em] uppercase";
const meta = "text-[9px] tracking-[.13em] text-muted uppercase";
const wordmark = "interactive-underline text-[19px] font-extrabold tracking-[-.04em]";
const footer = "relative z-[2] bg-ink px-[3vw] pt-[90px] pb-[35px] text-paper max-[800px]:px-[5vw] max-[800px]:pt-[70px] max-[800px]:pb-[30px]";

export default function CaseStudyPage(props: Props) {
  return <main className="overflow-hidden">
    <header className="relative z-10 flex h-[88px] w-full items-center justify-between border-b border-line px-[3vw] max-[800px]:h-[70px]">
      <Link className={wordmark} href="/">JG<span className="ml-[7px] align-top text-[11px] tracking-[.08em] text-muted">—26</span></Link><Link className="interactive-underline text-xs max-[800px]:hidden" href="/#work">← All work</Link><a className="interactive-underline text-xs" href="mailto:hello@javigarcia.dev">Contact ↗</a>
    </header>

    <section className="grid min-h-[82svh] grid-cols-[17%_1fr] content-start border-b border-line px-[3vw] pt-[77px] pb-[100px] max-[800px]:block max-[800px]:min-h-[78svh] max-[800px]:px-[5vw] max-[800px]:pt-[55px] max-[800px]:pb-[70px]">
      <p className={label}>{props.index} / Case study</p><p className={`${meta} m-0 max-[800px]:mt-[35px]`}>{props.eyebrow}</p>
      <h1 className="col-start-2 my-[12vh] mb-[55px] max-w-[1200px] text-[clamp(60px,9vw,144px)] leading-[.88] font-medium tracking-[-.07em] max-[800px]:text-[15vw] max-[800px]:mb-[45px]">{props.title}</h1><p className="col-start-2 m-0 max-w-[720px] text-[21px] leading-[1.45] max-[800px]:text-[17px]">{props.lead}</p>
    </section>

    <section className="grid grid-cols-[17%_1fr_1fr] gap-[5%] border-b border-line px-[3vw] py-[100px] max-[800px]:grid-cols-1 max-[800px]:gap-[45px] max-[800px]:px-[5vw] max-[800px]:py-[75px]">
      <p className={label}>Overview</p><article className="border-t border-ink pt-5"><small className={meta}>Context</small><p className="text-[17px] leading-[1.6]">{props.context}</p></article><article className="border-t border-ink pt-5"><small className={meta}>Challenge</small><p className="text-[17px] leading-[1.6]">{props.challenge}</p></article>
    </section>

    <section className="relative h-[65svh] min-h-[500px] overflow-hidden bg-[#20221e] max-[800px]:h-[50svh] max-[800px]:min-h-[390px]" aria-label="Abstract system diagram">
      <div className="absolute top-[16%] left-[12%] h-[54%] w-[38%] -rotate-5 border border-[#777a70] bg-[#dcdbd3] max-[800px]:h-[52%] max-[800px]:w-[63%]"/><div className="absolute top-[25%] left-[33%] h-[54%] w-[38%] rotate-3 border border-[#777a70] bg-[#dcdbd3] max-[800px]:h-[52%] max-[800px]:w-[63%]"/><div className="absolute top-[22%] right-[13%] size-[16vw] rounded-full bg-acid max-[800px]:size-[28vw]"/><span className="absolute bottom-[5%] left-[3%] text-[9px] tracking-[.15em] text-[#b6b8ae]">EXISTING SYSTEM</span><span className="absolute right-[3%] bottom-[5%] text-[9px] tracking-[.15em] text-[#b6b8ae]">SAFE EVOLUTION</span>
    </section>

    <section className="border-b border-line px-[3vw] py-[110px] max-[800px]:px-[5vw] max-[800px]:py-[75px]"><p className={label}>How the work evolved</p><div className="mt-[70px] ml-[17%] border-t border-ink max-[800px]:mt-[55px] max-[800px]:ml-0">{props.phases.map((phase, index) => <article className="grid grid-cols-[7%_16%_32%_1fr] items-start gap-[3%] border-b border-line py-8 max-[800px]:grid-cols-[12%_1fr] max-[800px]:gap-2.5" key={phase.title}><b className="text-[10px] text-muted">0{index + 1}</b><small className={`${meta} max-[800px]:col-start-2`}>{phase.label}</small><h2 className="text-[28px] font-medium tracking-[-.04em] max-[800px]:col-start-2">{phase.title}</h2><p className="mt-[3px] text-sm leading-[1.55] max-[800px]:col-start-2">{phase.text}</p></article>)}</div></section>

    <section className="ml-[17%] grid grid-cols-2 gap-[7%] border-b border-line px-[3vw] py-[100px] max-[800px]:ml-0 max-[800px]:grid-cols-1 max-[800px]:gap-[60px] max-[800px]:px-[5vw] max-[800px]:py-[75px]">
      <div className="border-t border-ink pt-[22px]"><p className={label}>Contribution</p><ul className="mt-[45px] list-none p-0">{props.contributions.map((item) => <li className="border-b border-line py-3.5 text-[15px]" key={item}>{item}</li>)}</ul></div><div className="border-t border-ink pt-[22px]"><p className={label}>Technologies</p><p className="mt-[45px] text-[clamp(28px,4vw,58px)] leading-[1.12] tracking-[-.05em]">{props.stack.join(" · ")}</p></div>
    </section>

    <section className="grid grid-cols-[17%_1fr] border-b border-line px-[3vw] py-[110px] max-[800px]:grid-cols-1 max-[800px]:gap-[55px] max-[800px]:px-[5vw] max-[800px]:py-[75px]"><p className={label}>What this demonstrates</p><p className="m-0 max-w-[1150px] text-[clamp(38px,5.5vw,82px)] leading-[1.04] tracking-[-.055em]">{props.outcome}</p></section>
    <Link className="flex items-end justify-between border-b border-line px-[3vw] py-[55px] max-[800px]:block max-[800px]:px-[5vw] max-[800px]:py-10" href={props.next.href}><small className={meta}>Next case study</small><span className="text-[clamp(30px,5vw,72px)] tracking-[-.05em] max-[800px]:mt-[22px] max-[800px]:block">{props.next.label} →</span></Link>

    <footer className={footer}><p className={label}>Need senior capacity on a demanding platform?</p><a className="my-[70px] mb-[140px] flex justify-between text-[clamp(42px,7.5vw,116px)] leading-none tracking-[-.06em] max-[800px]:my-[60px] max-[800px]:mb-[100px] max-[800px]:leading-[.95]" href="mailto:hello@javigarcia.dev">Let’s talk about the project. <span className="text-acid">↗</span></a><div className="flex justify-between border-t border-[#4e5049] pt-5 text-[11px] tracking-[.1em] uppercase"><span>Javi Garcia © 2026</span><span className="max-[800px]:hidden">Next.js · React · CMS platforms</span><Link className="interactive-underline" href="/">Home ↑</Link></div></footer>
  </main>;
}
