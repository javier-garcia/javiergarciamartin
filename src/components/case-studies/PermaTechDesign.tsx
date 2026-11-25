import Image from "next/image";
export function PermaTechDesign() {
  return (
    <div className="grid min-w-0 mx-auto max-w-300 grid-cols-[minmax(0,3fr)_minmax(0,1fr)] items-start gap-6 max-[800px]:grid-cols-1">
      <figure className="min-w-0">
        <Image
          src="/images/permatech/living-systems-device-detail-desktop.png"
          alt="Desktop device detail with physical Lark readings, observation history and source navigation"
          width={1512}
          height={1254}
          className="block h-auto w-full"
          sizes="(max-width: 800px) 90vw, (max-width: 1280px) 70vw, 900px"
        />
        <figcaption className="mt-3 text-xs leading-relaxed text-muted">
          Desktop / A focused view of each source, its current readings and observation history.
        </figcaption>
      </figure>
      <figure className="min-w-0 max-[800px]:mx-auto max-[800px]:max-w-80">
        <div
          tabIndex={0}
          role="region"
          aria-label="Scrollable mobile Device Detail screenshot"
          className="aspect-[2/5] overflow-y-auto border border-line max-[800px]:max-h-[75svh] focus-visible:outline-2 focus-visible:outline-ink"
        >
          <Image
            src="/images/permatech/living-systems-device-detail-mobile.png"
            alt="Mobile Device Detail for the physical Lark, with stacked readings and a history chart showing an archived observation"
            width={390}
            height={1691}
            className="block h-auto w-full"
            sizes="(max-width: 800px) 320px, 300px"
          />
        </div>
        <figcaption className="mt-3 text-xs leading-relaxed text-muted">
          Mobile / Device Detail with archived physical readings. Scroll within the screenshot to
          see the observation history.
        </figcaption>
      </figure>
    </div>
  );
}
