import Image from "next/image";
export function PermaTechDesign() {
  return (
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(180px,280px)] items-start gap-8 max-[800px]:grid-cols-1">
      <figure className="min-w-0">
        <Image
          src="/images/permatech/living-systems-device-detail-desktop.png"
          alt="Desktop device detail with physical Lark readings, observation history and source navigation"
          width={1512}
          height={1254}
          className="block h-auto w-full"
          sizes="(max-width: 800px) 90vw, 65vw"
        />
        <figcaption className="mt-3 text-xs leading-relaxed text-muted">
          Desktop / A focused view of each source, its current readings and observation history.
        </figcaption>
      </figure>
      <figure className="min-w-0 max-[800px]:mx-auto max-[800px]:max-w-80">
        <div
          tabIndex={0}
          role="region"
          aria-label="Scrollable mobile dashboard screenshot"
          className="max-h-155 overflow-y-auto border border-line focus-visible:outline-2 focus-visible:outline-ink"
        >
          <Image
            src="/images/permatech/living-systems-overview-mobile.png"
            alt="Mobile overview with stacked metric readings, observation history and physical source labels"
            width={390}
            height={2157}
            className="block h-auto w-full"
            sizes="(max-width: 800px) 320px, 280px"
          />
        </div>
        <figcaption className="mt-3 text-xs leading-relaxed text-muted">
          Mobile / The same visual language adapts to a smaller screen. Scroll to explore the
          layout.
        </figcaption>
      </figure>
    </div>
  );
}
