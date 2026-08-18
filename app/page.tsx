"use client";
import {useEffect,useState} from "react";
import dynamic from "next/dynamic";
const ThreeNetwork=dynamic(()=>import("./ThreeNetwork"),{ssr:false});

function ScrollChoreography(){
 useEffect(()=>{
  const root=document.documentElement;
  const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items=[...document.querySelectorAll<HTMLElement>(".scroll-reveal")];
  if(reduced){items.forEach(item=>item.classList.add("in-view"));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){(entry.target as HTMLElement).classList.add("in-view");observer.unobserve(entry.target)}
  }),{threshold:.14,rootMargin:"0px 0px -8%"});
  items.forEach(item=>observer.observe(item));
  let raf=0;
  const update=()=>{raf=0;root.style.setProperty("--scroll-y",String(scrollY));const max=document.documentElement.scrollHeight-innerHeight,p=max>0?scrollY/max:0;root.style.setProperty("--page-progress",String(p));root.style.setProperty("--scene-fade",String(.96-p*.72))};
  const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update)};
  const onPointer=(event:PointerEvent)=>{root.style.setProperty("--pointer-x",`${event.clientX}px`);root.style.setProperty("--pointer-y",`${event.clientY}px`);root.style.setProperty("--pointer-nx",String(event.clientX/innerWidth-.5));root.style.setProperty("--pointer-ny",String(event.clientY/innerHeight-.5))};
  update();addEventListener("scroll",onScroll,{passive:true});addEventListener("pointermove",onPointer,{passive:true});
  return()=>{observer.disconnect();removeEventListener("scroll",onScroll);removeEventListener("pointermove",onPointer);if(raf)cancelAnimationFrame(raf)};
 },[]);
 return <><div className="scroll-progress" aria-hidden/><div className="scroll-orbit" aria-hidden/><div className="cursor-atmosphere" aria-hidden/></>;
}

const projects=[
 {number:"01",title:"Morae",href:"/work/morae",eyebrow:"Platform evolution · Next.js + Craft CMS",intro:"Taking over a live legal-tech platform and evolving it without losing the knowledge embedded in its past.",detail:"I had worked on Morae when its website was still a monolithic WordPress build. After another company delivered its first WordPress-headless architecture with GraphQL, Apollo and Next.js, our team took over. I could read the inherited system in context, rebuild substantial parts of the frontend and progressively move content from WordPress to Craft CMS while both systems continued to coexist.",result:"Historical knowledge became delivery speed: data modelling, Craft architecture, GraphQL, React components, redirects and revalidation could move forward without destabilising the live platform."},
 {number:"02",title:"Shared multisite",href:"/work/shared-multisite",eyebrow:"Frontend systems · Multiple websites",intro:"A shared component system that lets related sites evolve consistently without forcing them to become identical.",detail:"Working inside an established multi-site codebase means understanding where consistency is valuable and where each website needs room to differ. The work combines reusable React architecture, CMS-driven variation and careful changes that do not create regressions across the wider platform.",result:"One senior developer who can reason across the system, isolate the impact of a change and ship it safely across several sites."},
 {number:"03",title:"Revalidation flow",href:"/work/revalidation-flow",eyebrow:"Craft CMS · Next.js caching",intro:"Tracing an issue across Craft events, bulk actions, webhooks and Next.js cache behaviour.",detail:"Content publishing issues rarely live in one layer. I work through the complete path: Craft element events and action behaviour, payload construction, tags and paths, Next.js invalidation and the frontend result — including the awkward cases that only fail during bulk operations or when content is disabled.",result:"Issues are resolved at their actual cause, not hidden behind another workaround."}
];

export default function Home(){
 const[open,setOpen]=useState<number|null>(0),[menu,setMenu]=useState(false),[headerHidden,setHeaderHidden]=useState(false),[headerFloating,setHeaderFloating]=useState(false);
 useEffect(()=>{let last=scrollY,up=0,down=0,raf=0;const update=()=>{raf=0;const current=scrollY,delta=current-last;last=current;setHeaderFloating(current>=80);if(current<80){up=down=0;setHeaderHidden(false);return}if(delta>0){down+=delta;up=0;if(down>18)setHeaderHidden(true)}else if(delta<0){up-=delta;down=0;if(up>12)setHeaderHidden(false)}};const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update)};raf=requestAnimationFrame(update);addEventListener("scroll",onScroll,{passive:true});return()=>{removeEventListener("scroll",onScroll);if(raf)cancelAnimationFrame(raf)}},[]);
 return <main>
  <ScrollChoreography/>
  <header className={`${headerHidden&&!menu?"header-hidden":""} ${headerFloating?"header-floating":""}`}><a className="wordmark" href="#top">JG<span>—26</span></a><button className="menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?"Close":"Menu"}</button><nav className={menu?"open":""}>{[{label:"Work",id:"work"},{label:"Expertise",id:"expertise"},{label:"How I work",id:"working"},{label:"About",id:"about"}].map(x=><a key={x.id} href={`#${x.id}`} onClick={()=>setMenu(false)}>{x.label}</a>)}<a href="mailto:hello@javigarcia.dev">Contact ↗</a></nav></header>
  <section className="hero" id="top"><div className="hero-copy"><p className="kicker reveal">Senior React / Next.js developer · Available for agency collaborations</p><h1 className="reveal d1">Senior developer<br/>for complex Next.js<br/><em>&amp; React</em> projects.</h1><div className="hero-bottom reveal d2"><p>I help digital agencies with existing, technically demanding web platforms — across Craft CMS, WordPress and other content systems.</p><a className="round-link" href="#work"><span>Selected<br/>work</span><b>↓</b></a></div></div><ThreeNetwork/></section>
  <section className="work scroll-section" id="work">
   <div className="section-heading scroll-reveal"><p className="label">01 / Selected work</p><p>Existing platforms. Real constraints. Production work.</p></div>
   <div className="project-list">{projects.map((p,i)=>{
    const active=open===i;
    return <article className={`project ${active?"active":""}`} key={p.title}>
     <button className="project-trigger scroll-reveal" style={{"--delay":`${i*.07}s`} as React.CSSProperties} aria-expanded={active} onClick={()=>setOpen(active?null:i)}>
      <span className="num">{p.number}</span><span><small>{p.eyebrow}</small><strong>{p.title}</strong></span><span className="intro">{p.intro}</span><span className="toggle">{active?"−":"+"}</span>
     </button>
     <div className="panel" aria-hidden={!active}>
      <div className="panel-inner">
       <div className="visual"><div className="screen back">system / context / delivery</div><div className="screen front"><b>{i===0?"morae":"next"}</b><i/></div></div>
       <div className="copy"><p>{p.detail}</p><div><p className="result"><small>What this demonstrates</small>{p.result}</p><a className="case-link" href={p.href}>View full case study <span>↗</span></a></div></div>
      </div>
     </div>
    </article>
   })}</div>
  </section>
  <section className="statement scroll-section" id="expertise"><p className="label scroll-reveal">02 / What I can help with</p><p className="statement-copy scroll-reveal">Bring me into the project when the platform is <span>already live, already complex</span> and the team needs useful output — not another onboarding problem.</p><div className="service-grid">{[["01","Extra senior capacity","Join an agency team for a demanding delivery phase, backlog or deadline and start contributing inside the existing workflow."],["02","Complex issue resolution","Trace problems across React, Next.js, APIs, CMS integrations, caching, previews, redirects and content workflows until the real cause is found."],["03","Platform evolution","Refactor, migrate or extend mature systems — whether they use Craft, WordPress or another CMS — without ignoring their technical and editorial history."],["04","Frontend architecture","Build reusable React systems that remain understandable when multiple sites, content types and developers are involved."]].map((s,i)=><article className="scroll-reveal" style={{"--delay":`${i*.08}s`} as React.CSSProperties} key={s[0]}><small>{s[0]}</small><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></section>
  <section className="working scroll-section" id="working"><p className="label scroll-reveal">03 / How I work</p><div className="working-intro scroll-reveal"><h2>Useful from<br/><em>day zero.</em></h2><p>Agencies rarely need another developer who can only be productive after the difficult decisions have already been made. They need someone who can enter the middle of the story, understand what is there and move it forward.</p></div><div className="steps">{[["01","Read the system","I map the architecture, conventions and immediate risk before changing code."],["02","Join the team","I work with the existing people, tools and delivery process rather than creating a parallel universe."],["03","Resolve and ship","I take ownership of issues, communicate trade-offs and deliver production-ready work."]].map((s,i)=><p className="scroll-reveal" style={{"--delay":`${i*.08}s`} as React.CSSProperties} key={s[0]}><b>{s[0]}</b><span><strong>{s[1]}</strong>{s[2]}</span></p>)}</div></section>
  <section className="about scroll-section" id="about"><p className="label scroll-reveal">04 / Experience</p><div className="scroll-reveal"><h2>Senior judgement.<br/><em>Hands-on delivery.</em></h2><p>I am Javi Garcia, a senior frontend developer specialising in React and Next.js, with deep experience integrating content platforms including Craft CMS and WordPress. My strongest work happens where understanding the existing system matters as much as writing the next component.</p><p>I collaborate with digital agencies as experienced development capacity: joining established teams, taking responsibility for difficult issues and contributing from the first stage of the engagement through to production.</p></div></section>
  <section className="availability scroll-reveal"><p className="label">A flexible senior resource</p><p>Project rescue · Delivery support · Ongoing platform work · Technical problem solving</p></section>
  <footer><p className="label">Need senior capacity on a demanding platform?</p><a href="mailto:hello@javigarcia.dev">Let’s talk about the project. <span>↗</span></a><div><span>Javi Garcia © 2026</span><span>Next.js · React · CMS platforms</span><a href="#top">Back to top ↑</a></div></footer>
 </main>
}
