import Link from "next/link";
import { footerClass, labelClass } from "@/components/styles";

export function ContactFooter({ homeLink = false }: { homeLink?: boolean }) {
  return (
    <footer className={footerClass}>
      <p className={labelClass}>Need senior capacity on a demanding platform?</p>
      <a
        className="group relative my-17.5 mb-35 flex justify-between overflow-hidden pb-4 text-[clamp(42px,7.5vw,116px)] leading-none tracking-[-.06em] max-[800px]:my-15 max-[800px]:mb-25 max-[800px]:leading-[.95]"
        href="mailto:hello@javigarcia.dev"
      >
        <span className="transition-transform duration-500 ease-out group-hover:translate-x-2">
          Let’s talk about the project.
        </span>
        <span className="inline-block text-acid transition-[transform,text-shadow] duration-500 ease-out group-hover:translate-x-2.25 group-hover:-translate-y-2.25 group-hover:-rotate-5 group-hover:[text-shadow:-3px_0_rgba(255,58,118,.56),3px_0_rgba(0,185,255,.56)]">
          ↗
        </span>
        <span
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-acid transition-transform duration-700 ease-out group-hover:scale-x-100"
          aria-hidden
        />
      </a>
      <div className="flex justify-between border-t border-[#4e5049] pt-5 text-[11px] tracking-[.1em] uppercase">
        <span>Javi Garcia © 2026</span>
        <span className="max-[800px]:hidden">Next.js · React · CMS platforms</span>
        {homeLink ? (
          <Link className="interactive-underline" href="/">
            Home ↑
          </Link>
        ) : (
          <a className="interactive-underline" href="#top">
            Back to top ↑
          </a>
        )}
      </div>
    </footer>
  );
}
