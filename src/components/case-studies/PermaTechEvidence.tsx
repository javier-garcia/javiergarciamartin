"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import evidence from "@/data/permatech-evidence.json";

const labels = ["MQTT payload", "PostgreSQL result", "WebSocket event", "REST latest"];
function HighlightedJson({ text }: { text: string }) {
  const pattern = new RegExp(`${evidence.messageId}|("value"\\s*:\\s*)(-?\\d+(?:\\.\\d+)?)`, "g");
  const parts = [];
  let start = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index;
    parts.push(text.slice(start, index));
    if (match[0] === evidence.messageId) {
      parts.push(
        <mark key={index} className="bg-acid text-ink">
          {match[0]}
        </mark>,
      );
    } else {
      parts.push(match[1]);
      parts.push(
        <mark key={index} className="bg-acid/20 text-inherit">
          {match[2]}
        </mark>,
      );
    }
    start = index + match[0].length;
  }
  parts.push(text.slice(start));
  return parts;
}

export function PermaTechEvidence() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const artifact = evidence.artifacts[active];
  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % labels.length;
    else if (event.key === "ArrowLeft") next = (index + labels.length - 1) % labels.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = labels.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }
  return (
    <div className="min-w-0 border border-line" aria-label="Recorded physical observation explorer">
      <div className="border-b border-line p-6 max-[500px]:p-4">
        <p className="text-[10px] tracking-[.14em] uppercase text-muted">
          Physical observation / lark-001
        </p>
        <h3 className="mt-3 text-2xl tracking-heading">One observation. Four views.</h3>
        <p className="mt-3 text-sm leading-relaxed">
          Captured 19 November 2026, 10:26:36 UTC. The same identity and five values follow the
          observation through the backend.
        </p>
        <p className="mt-4 text-xs text-muted">Observation UUID</p>
        <code className="mt-1 block break-all text-sm">
          <mark className="bg-acid text-ink">{evidence.messageId}</mark>
        </code>
        <dl className="mt-6 grid grid-cols-5 gap-4 border-t border-line pt-4 max-[700px]:grid-cols-2">
          {evidence.readings.map((reading) => (
            <div key={reading.metric}>
              <dt className="text-xs text-muted">{reading.label}</dt>
              <dd className="mt-2 text-xl tabular-nums">
                {reading.value} <span className="text-xs text-muted">{reading.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div
        role="tablist"
        aria-label="Telemetry pipeline evidence"
        className="grid grid-cols-4 border-b border-line max-[600px]:grid-cols-2"
      >
        {labels.map((label, index) => (
          <button
            key={label}
            type="button"
            role="tab"
            id={`evidence-tab-${index}`}
            aria-controls={`evidence-panel-${index}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            ref={(node) => {
              buttons.current[index] = node;
            }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => navigate(event, index)}
            className={`cursor-pointer px-4 py-4 text-left text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-ink ${active === index ? "bg-ink text-paper" : "hover:bg-ink/5"}`}
          >
            <span className="mr-2 opacity-60">0{index + 1}</span>
            {label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`evidence-panel-${active}`}
        aria-labelledby={`evidence-tab-${active}`}
        tabIndex={0}
        className="min-w-0 p-6 focus-visible:outline-2 focus-visible:outline-ink max-[500px]:p-4"
      >
        <p className="text-sm leading-relaxed">{artifact.description}</p>
        <pre
          className="mt-4 max-h-100 overflow-auto border border-line bg-white/30 p-4 text-[12px] leading-relaxed"
          aria-label={labels[active] + " JSON"}
        >
          <code>
            <HighlightedJson text={JSON.stringify(JSON.parse(artifact.raw), null, 2)} />
          </code>
        </pre>
        <a
          href={artifact.path}
          download
          className="interactive-underline mt-4 inline-block text-xs"
        >
          Download original JSON ↓
        </a>
      </div>
    </div>
  );
}
