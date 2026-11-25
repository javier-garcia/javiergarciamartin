const nodeClass = "border border-[#86A68A]/65 bg-[#1B3034] p-4";
export function PermaTechArchitecture() {
  return (
    <figure
      aria-labelledby="permatech-diagram-title"
      aria-describedby="permatech-diagram-description"
      className="min-w-0 bg-[#111F24] p-8 text-[#E9E3D0] max-[500px]:p-5"
    >
      <figcaption id="permatech-diagram-title" className="text-2xl tracking-heading">
        Telemetry architecture
      </figcaption>
      <div className="mt-8 grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-4 max-[1100px]:grid-cols-1">
        <div>
          <p className="mb-4 text-xs font-medium tracking-[.1em] uppercase text-[#86A68A]">
            01 / Acquisition
          </p>
          <div className={nodeClass}>
            <h4 className="text-lg">Physical environment</h4>
            <p className="mt-2 text-sm leading-relaxed">
              DFRobot Lark → I²C → ESP8266
              <br />
              NTP capture time · UUID
            </p>
          </div>
          <p className="py-3 text-center text-sm text-[#86A68A]" aria-hidden="true">
            ↓ Wi-Fi / MQTT
          </p>
          <div className={nodeClass}>
            <h4 className="text-lg">Aedes broker</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Physical QoS 0<br />
              Four labelled simulators · QoS 1
            </p>
          </div>
        </div>
        <p aria-hidden="true" className="self-center font-mono text-2xl text-[#A8C6AC]">
          <span className="max-[1100px]:hidden">→</span>
          <span className="hidden text-center max-[1100px]:block">↓</span>
        </p>
        <div>
          <p className="mb-4 text-xs font-medium tracking-[.1em] uppercase text-[#86A68A]">
            02 / Persistence
          </p>
          <div className={nodeClass}>
            <h4 className="text-lg">Validate & ingest</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Node.js · TypeScript · Zod
              <br />
              Shared telemetry contracts
            </p>
          </div>
          <p className="py-3 text-center text-sm text-[#86A68A]" aria-hidden="true">
            ↓ Atomic transaction
          </p>
          <div className={nodeClass}>
            <h4 className="text-lg">PostgreSQL</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Message + available readings
              <br />
              Unique identity · commit
            </p>
          </div>
        </div>
        <p aria-hidden="true" className="self-center font-mono text-2xl text-[#A8C6AC]">
          <span className="max-[1100px]:hidden">→</span>
          <span className="hidden text-center max-[1100px]:block">↓</span>
        </p>
        <div>
          <p className="mb-4 text-xs font-medium tracking-[.1em] uppercase text-[#86A68A]">
            03 / Read & notify
          </p>
          <div className={nodeClass}>
            <h4 className="text-lg">REST API</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Reads from PostgreSQL
              <br />
              Latest · History · Recovery
            </p>
          </div>
          <div className={`${nodeClass} mt-4 border-[#D4AC77]/70`}>
            <p className="text-xs font-medium tracking-[.08em] uppercase text-[#D4AC77]">
              Only after commit
            </p>
            <h4 className="mt-2 text-lg">WebSocket</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Node.js ingestion callback
              <br />
              Committed event · Best-effort
            </p>
          </div>
        </div>
        <p aria-hidden="true" className="self-center font-mono text-2xl text-[#A8C6AC]">
          <span className="max-[1100px]:hidden">→</span>
          <span className="hidden text-center max-[1100px]:block">↓</span>
        </p>
        <div>
          <p className="mb-4 text-xs font-medium tracking-[.1em] uppercase text-[#86A68A]">
            04 / Presentation
          </p>
          <div className={`${nodeClass} bg-[#29443D]`}>
            <h4 className="text-lg">Living Systems</h4>
            <p className="mt-2 text-sm leading-relaxed">
              Next.js · React
              <br />
              Current readings · History
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#86A68A]">
            Independent clients can consume the same read-only API and event stream.
          </p>
        </div>
      </div>
      <p
        id="permatech-diagram-description"
        className="mt-8 max-w-225 border-t border-white/15 pt-5 text-sm leading-relaxed"
      >
        Acquisition, persistence and presentation remain separate. REST queries the stored
        observations. The ingestion service emits a WebSocket notification only after its PostgreSQL
        transaction commits.
      </p>
    </figure>
  );
}
