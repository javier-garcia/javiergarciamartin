"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = [...document.querySelectorAll<HTMLElement>(".scroll-reveal")];
    if (reduced) {
      items.forEach((item) => item.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.14, rootMargin: "0px 0px -8%" },
    );
    items.forEach((item) => observer.observe(item));
    let raf = 0;
    const update = () => {
      raf = 0;
      root.style.setProperty("--scroll-y", String(scrollY));
      const max = document.documentElement.scrollHeight - innerHeight;
      const progress = max > 0 ? scrollY / max : 0;
      root.style.setProperty("--page-progress", String(progress));
      root.style.setProperty("--scene-fade", String(0.96 - progress * 0.72));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.style.setProperty("--pointer-nx", String(event.clientX / innerWidth - 0.5));
      root.style.setProperty("--pointer-ny", String(event.clientY / innerHeight - 0.5));
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      observer.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("pointermove", onPointer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <>
      <div
        className="scroll-progress motion-atmosphere pointer-events-none fixed top-0 right-0 z-19 h-svh w-[3px] origin-top bg-acid max-[800px]:w-0.5"
        aria-hidden
      />
      <div
        className="scroll-orbit motion-atmosphere pointer-events-none fixed top-[32vh] -right-[18vw] -z-1 size-[36vw] rounded-full bg-[radial-gradient(circle,rgba(201,255,72,.14),rgba(201,255,72,0)_67%)] max-[800px]:-right-[38vw] max-[800px]:size-[70vw]"
        aria-hidden
      />
      <div
        className="cursor-atmosphere motion-atmosphere pointer-events-none fixed top-0 left-0 z-18 size-[170px] rounded-full bg-[radial-gradient(circle,rgba(201,255,72,.22),rgba(201,255,72,0)_68%)] opacity-35 mix-blend-multiply transition-[width,height,opacity] duration-300"
        aria-hidden
      />
    </>
  );
}
