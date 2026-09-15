import Image from "next/image";
import type { CSSProperties } from "react";
import type { ProjectImageSlot } from "@/data/case-studies";

type Props = {
  media: ProjectImageSlot;
  sizes?: string;
  compact?: boolean;
  priority?: boolean;
};

export function ProjectMedia({
  media,
  sizes = "(max-width: 800px) 100vw, 80vw",
  compact = false,
  priority,
}: Props) {
  const style = {
    aspectRatio: media.aspectRatio,
  } as CSSProperties;

  if (media.src) {
    return (
      <figure className="m-0">
        <div
          className="relative overflow-hidden bg-[#20221e] transition-transform duration-700 ease-out group-hover/project:-translate-y-1 group-focus-visible/project:-translate-y-1 motion-reduce:transform-none"
          style={style}
        >
          <Image
            className="object-cover transition-transform duration-700 ease-out group-hover/project:scale-[1.015] group-focus-visible/project:scale-[1.015] motion-reduce:transform-none"
            style={{ objectPosition: media.objectPosition ?? "center" }}
            src={media.src}
            alt={media.alt}
            fill
            sizes={sizes}
            priority={priority ?? media.priority}
          />
        </div>

        {media.caption && !compact ? (
          <figcaption className="mt-3 text-xs leading-[1.5] text-muted">{media.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className="m-0">
      <div
        className="relative flex flex-col justify-between overflow-hidden border border-dashed border-[#9b9d94] bg-[#e5e3dc] p-6 transition-[transform,border-color,background-color] duration-700 ease-out group-hover/project:-translate-y-1 group-hover/project:border-ink group-hover/project:bg-[#eceae3] group-focus-visible/project:-translate-y-1 group-focus-visible/project:border-ink group-focus-visible/project:bg-[#eceae3] motion-reduce:transform-none max-[600px]:p-5"
        style={style}
      >
        <div className="flex items-start justify-between gap-5">
          <span className="text-[9px] font-bold tracking-[.14em] uppercase">
            Provisional project media
          </span>
          <span className="text-[9px] tracking-[.12em] text-muted uppercase">
            {media.aspectRatio} · {media.recommendedDimensions}
          </span>
        </div>

        <div className={compact ? "max-w-140" : "max-w-180"}>
          <p
            className={`${compact ? "text-[clamp(15px,1.5vw,21px)]" : "text-[clamp(18px,2.2vw,30px)]"} leading-[1.25] tracking-[-.025em]`}
          >
            {media.brief}
          </p>
          {!compact ? (
            <p className="mt-5 text-xs leading-[1.5] text-muted">
              Asset needed · <code>{media.suggestedFilename}</code>
            </p>
          ) : null}
        </div>

        <span
          className="absolute right-6 bottom-6 size-3 rounded-full bg-acid transition-transform duration-500 group-hover/project:scale-150 group-focus-visible/project:scale-150 motion-reduce:transform-none"
          aria-hidden
        />
      </div>

      {!compact ? (
        <figcaption className="mt-3 flex justify-between gap-4 text-xs leading-[1.5] text-muted">
          <span>{media.alt}</span>
          <span>{media.suggestedFilename}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
