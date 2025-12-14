
export const cn = (...classes) => classes.filter(Boolean).join(" ");

export function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
      {children}
    </span>
  );
}

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={cn("mx-auto max-w-2xl", alignClass)}>
      {eyebrow ? <div className="mb-3"><Badge>{eyebrow}</Badge></div> : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-base leading-7 text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function MiniStat({ title, value, trend }) {
  const positive = String(trend).trim().startsWith("+");
  const negative = String(trend).trim().startsWith("-");
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-medium text-slate-500">{title}</p>
      <div className="mt-2 flex items-baseline justify-between gap-3">
        <p className="text-lg font-bold text-slate-900">{value}</p>
        <span
          className={cn(
            "text-xs font-semibold",
            positive && "text-emerald-600",
            negative && "text-rose-600",
            !positive && !negative && "text-slate-600"
          )}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}

export function Button({ as: As = "button", variant = "primary", className, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white";
  const styles = {
    primary:
      "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
    secondary:
      "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus:ring-slate-900",
    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-900",
  };

  return <As className={cn(base, styles[variant], className)} {...props} />;
}


export function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M11.22 4.22a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H3.5a.75.75 0 0 1 0-1.5h11.38l-3.72-3.72a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.07 7.09a1 1 0 0 1-1.42.004L3.29 8.88A1 1 0 1 1 4.7 7.46l3.205 3.2 6.365-6.38a1 1 0 0 1 1.434.01Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function QuoteIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.2 17.6H4.4c-1.1 0-2-.9-2-2V11c0-1.1.9-2 2-2h4.2V6.8C8.6 5.3 9.9 4 11.4 4h.2v3.2h-.2c-.5 0-.8.4-.8.8V9h.6c1.1 0 2 .9 2 2v4.6c0 1.1-.9 2-2 2H7.2Zm13.4 0h-2.8c-1.1 0-2-.9-2-2V11c0-1.1.9-2 2-2h4.2V6.8C22.0 5.3 23.3 4 24.8 4h.2v3.2h-.2c-.5 0-.8.4-.8.8V9h.6c1.1 0 2 .9 2 2v4.6c0 1.1-.9 2-2 2H20.6Z" />
    </svg>
  );
}

export function SparklesIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 2l1.2 3.6L15 7l-3.8 1.4L10 12l-1.2-3.6L5 7l3.8-1.4L10 2Zm6 7l.8 2.4L19 12l-2.2.6L16 15l-.8-2.4L13 12l2.2-.6L16 9ZM3.8 10l.7 2.1L6.5 13l-2 .6L3.8 16l-.7-2.4L1 13l2.1-.9.7-2.1Z" />
    </svg>
  );
}

export function DevicesIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4v1H6.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5H12v-1h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 2h12a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V5.5A.5.5 0 0 1 4 5Z" />
    </svg>
  );
}

export function ShieldIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 2.5a.75.75 0 0 1 .35.086l6 3.1a.75.75 0 0 1 .4.664V10c0 4.16-2.58 6.53-6.4 7.46a.75.75 0 0 1-.35 0C6.18 16.53 3.6 14.16 3.6 10V6.35a.75.75 0 0 1 .4-.664l6-3.1A.75.75 0 0 1 10 2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function BoltIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11 1 3 11h6l-1 8 8-10h-6l1-8Z" />
    </svg>
  );
}

export function TagIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2.5 9.5V4A1.5 1.5 0 0 1 4 2.5h5.5a1.5 1.5 0 0 1 1.06.44l6.5 6.5a1.5 1.5 0 0 1 0 2.12l-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-6.5-6.5A1.5 1.5 0 0 1 2.5 9.5Zm3-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
    </svg>
  );
}

export function ChatIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 4.5A2.5 2.5 0 0 1 5.5 2h9A2.5 2.5 0 0 1 17 4.5v6A2.5 2.5 0 0 1 14.5 13H8l-3.2 2.4A1 1 0 0 1 3.2 14.6L3 13.2V4.5Z" />
    </svg>
  );
}