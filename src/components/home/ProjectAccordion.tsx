"use client";

import {
  useId,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type ProjectAccordionProps = {
  children: ReactNode;
  defaultOpen?: boolean;
  index: number;
  summary: ReactNode;
};

export function ProjectAccordion({
  children,
  defaultOpen = false,
  index,
  summary,
}: ProjectAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="group border-t border-ink" data-open={open ? "true" : "false"}>
      <button
        className="group/trigger scroll-reveal grid w-full cursor-pointer grid-cols-[7%_30%_1fr_40px] items-center border-0 bg-transparent py-8.75 text-left transition-[padding,background-color] duration-300 hover:pl-3 hover:bg-white/20 max-[800px]:grid-cols-[10%_1fr_30px]"
        style={{ "--delay": `${index * 0.07}s` } as CSSProperties}
        type="button"
        aria-controls={panelId}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {summary}

        <span className="relative inline-flex size-10 items-center justify-center justify-self-end text-3xl leading-none transition-transform duration-300 group-data-[open=true]:rotate-180 group-hover/trigger:rotate-90">
          <span className="group-data-[open=true]:hidden">+</span>
          <span className="hidden group-data-[open=true]:inline">−</span>
        </span>
      </button>

      <div
        className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 ease-out group-data-[open=true]:grid-rows-[1fr] group-data-[open=true]:opacity-100"
        id={panelId}
        aria-hidden={!open}
        inert={!open}
      >
        {children}
      </div>
    </div>
  );
}
