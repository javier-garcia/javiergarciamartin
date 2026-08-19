import { labelClass } from "@/components/styles";

export function AvailabilitySection() {
  return (
    <aside className="scroll-reveal relative z-[1] flex justify-between gap-[30px] border-b border-line bg-paper/80 px-[3vw] py-[30px] backdrop-blur-[2px] max-[800px]:flex-col max-[800px]:px-[5vw] max-[800px]:py-[26px]">
      <p className={labelClass}>A flexible senior resource</p>
      <p className="text-xs text-muted max-[800px]:leading-[1.6]">
        Project rescue · Delivery support · Ongoing platform work · Technical problem solving
      </p>
    </aside>
  );
}
