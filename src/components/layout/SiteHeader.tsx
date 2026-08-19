"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useScrollHeader } from "@/hooks/use-scroll-header";

const links = [
  { label: "Work", id: "work" },
  { label: "Expertise", id: "expertise" },
  { label: "How I work", id: "working" },
  { label: "About", id: "about" },
];

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const { hidden, floating, show } = useScrollHeader();

  useEffect(() => {
    if (!menu) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menu]);

  const navigationLinks = links.map((item) => (
    <a
      className="interactive-underline font-semibold"
      key={item.id}
      href={`#${item.id}`}
      onClick={() => setMenu(false)}
    >
      {item.label}
    </a>
  ));

  return (
    <>
      <header
        className={`fixed top-0 left-0 flex h-22 w-full items-center justify-between border-b border-line px-[3vw] transition-[translate,background-color,box-shadow,backdrop-filter] duration-300 ease-out max-[800px]:h-17.5 ${menu ? "z-40" : "z-10"} ${hidden && !menu ? "-translate-y-[105%]" : "translate-y-0"} ${floating && !menu ? "bg-[#f6f5f1]/95 shadow-[0_1px_0_rgba(24,25,22,.12),0_12px_34px_rgba(24,25,22,.07)] backdrop-blur-[11px]" : "bg-transparent"}`}
      >
        <Link
          className="interactive-underline text-[19px] font-extrabold tracking-[-.04em]"
          href="#top"
        >
          JG
          <span className="ml-1.75 align-top text-[11px] tracking-[.08em] text-muted">—26</span>
        </Link>

        <button
          className="hidden border-0 bg-transparent text-base font-semibold max-[800px]:block"
          aria-expanded={menu}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMenu(!menu);
            show();
          }}
        >
          {menu ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className="hidden gap-10 text-[17px] font-semibold tracking-[-.01em] min-[801px]:flex"
        >
          {navigationLinks}
          <a className="interactive-underline" href="mailto:javi@javiergarciamartin.com">
            Contact ↗
          </a>
        </nav>
      </header>

      {menu && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-30 hidden min-h-svh flex-col items-start justify-center gap-6 bg-acid p-[10vw] text-[clamp(42px,12vw,58px)] leading-[1.05] font-semibold tracking-[-.04em] max-[800px]:flex"
        >
          {navigationLinks}
          <a className="interactive-underline" href="mailto:javi@javiergarciamartin.com">
            Contact ↗
          </a>
        </nav>
      )}
    </>
  );
}
