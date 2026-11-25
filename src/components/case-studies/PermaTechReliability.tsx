export function PermaTechReliability() {
  return (
    <div className="min-w-0 border-y border-line py-6">
      <dl className="grid grid-cols-4 gap-6 max-[700px]:grid-cols-2">
        {[
          ["116", "Accepted baseline tests"],
          ["5", "Environmental metrics"],
          ["10 s", "Configured sampling cycle"],
          ["UUID", "Identity across layers"],
        ].map(([value, label]) => (
          <div key={label} className="flex flex-col">
            <dt className="order-last mt-3 text-xs text-muted">{label}</dt>
            <dd className="text-[clamp(30px,4vw,56px)] leading-none tracking-heading">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 grid grid-cols-2 gap-8 border-t border-line pt-5 text-sm leading-relaxed max-[600px]:grid-cols-1">
        <div>
          <h3 className="font-medium">Application baseline / 116 tests</h3>
          <p className="mt-2 text-muted">
            41 contracts + 48 backend integration + 21 frontend data + 6 Chrome browser checks.
          </p>
        </div>
        <div>
          <h3 className="font-medium">Physical evidence session / 110 tests</h3>
          <p className="mt-2 text-muted">
            41 contracts + 48 backend integration + 21 frontend data, rerun on 19 November 2026. The
            six Chrome checks belong to the accepted baseline.
          </p>
        </div>
      </div>
    </div>
  );
}
