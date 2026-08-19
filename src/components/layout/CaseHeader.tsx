import Link from "next/link";

export function CaseHeader() {
  return (
    <header className="relative z-10 flex h-22 w-full items-center justify-between border-b border-line px-[3vw] max-[800px]:h-17.5">
      <Link className="interactive-underline text-[19px] font-extrabold tracking-[-.04em]" href="/">
        JG
        <span className="ml-1.75 align-top text-[11px] tracking-[.08em] text-muted">—26</span>
      </Link>
      <Link
        className="interactive-underline text-sm font-medium tracking-[.01em] max-[800px]:hidden"
        href="/#work"
      >
        ← All work
      </Link>
      <a
        className="interactive-underline text-sm font-medium tracking-[.01em]"
        href="mailto:hello@javigarcia.dev"
      >
        Contact ↗
      </a>
    </header>
  );
}
