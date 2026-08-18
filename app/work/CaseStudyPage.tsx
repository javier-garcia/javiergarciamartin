type Phase={label:string;title:string;text:string};
type Props={index:string;eyebrow:string;title:string;lead:string;context:string;challenge:string;phases:Phase[];contributions:string[];stack:string[];outcome:string;next:{label:string;href:string}};

export default function CaseStudyPage(props:Props){
 return <main className="case-page">
  <header className="case-header"><Link className="wordmark" href="/">JG<span>—26</span></Link><Link href="/#work">← All work</Link><a href="mailto:hello@javigarcia.dev">Contact ↗</a></header>
  <section className="case-hero">
   <p className="label">{props.index} / Case study</p><p className="case-eyebrow">{props.eyebrow}</p>
   <h1>{props.title}</h1><p className="case-lead">{props.lead}</p>
  </section>
  <section className="case-overview">
   <p className="label">Overview</p>
   <article><small>Context</small><p>{props.context}</p></article>
   <article><small>Challenge</small><p>{props.challenge}</p></article>
  </section>
  <section className="case-visual-block" aria-label="Abstract system diagram"><div/><div/><div/><span>EXISTING SYSTEM</span><span>SAFE EVOLUTION</span></section>
  <section className="case-timeline">
   <p className="label">How the work evolved</p>
   <div>{props.phases.map((phase,i)=><article key={phase.title}><b>0{i+1}</b><small>{phase.label}</small><h2>{phase.title}</h2><p>{phase.text}</p></article>)}</div>
  </section>
  <section className="case-details">
   <div><p className="label">Contribution</p><ul>{props.contributions.map(x=><li key={x}>{x}</li>)}</ul></div>
   <div><p className="label">Technologies</p><p className="stack-list">{props.stack.join(" · ")}</p></div>
  </section>
  <section className="case-outcome"><p className="label">What this demonstrates</p><p>{props.outcome}</p></section>
  <Link className="next-case" href={props.next.href}><small>Next case study</small><span>{props.next.label} →</span></Link>
  <footer><p className="label">Need senior capacity on a demanding platform?</p><a href="mailto:hello@javigarcia.dev">Let’s talk about the project. <span>↗</span></a><div><span>Javi Garcia © 2026</span><span>Next.js · React · CMS platforms</span><Link href="/">Home ↑</Link></div></footer>
 </main>
}
import Link from "next/link";
