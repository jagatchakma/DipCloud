// App.jsx
import React from "react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

function Button({ as: As = "button", variant = "primary", className, ...props }) {
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

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-900/10">
      {children}
    </span>
  );
}

function Card({ className, children }) {
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

function SectionHeader({ eyebrow, title, subtitle, align = "center" }) {
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

export function Navbarr() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white">
            <span className="text-sm font-bold">AC</span>
          </div>
          <span className="text-sm font-bold tracking-tight text-slate-900">
            AcmeCloud
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {["Features", "Pricing", "Testimonials"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" as="a" href="#pricing" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button as="a" href="#cta">
            Start free
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </header>
  );
}

export function Heroo() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-200 via-sky-200 to-emerald-200 blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:22px_22px]" />
      </div>

      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge>New: AI summaries in 1 click</Badge>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Ship a polished SaaS experience, faster.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
              AcmeCloud is a modern platform template: clean UI, reusable components,
              and responsive sections you can drop into your app today.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button as="a" href="#cta" className="w-full sm:w-auto">
                Start free trial
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button as="a" href="#features" variant="secondary" className="w-full sm:w-auto">
                View features
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600" />
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600" />
                GDPR-ready
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-0 overflow-hidden">
              <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Dashboard preview
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <MiniStat title="Active users" value="12,480" trend="+18%" />
                  <MiniStat title="MRR" value="$48.2k" trend="+9%" />
                  <MiniStat title="Churn" value="1.8%" trend="-0.4%" />
                  <MiniStat title="NPS" value="62" trend="+6" />
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">Weekly usage</p>
                    <p className="text-xs font-medium text-slate-500">Last 7 days</p>
                  </div>
                  <div className="mt-3 flex h-24 items-end gap-2">
                    {[32, 44, 28, 60, 54, 72, 66].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-lg bg-gradient-to-t from-slate-900 to-slate-700/80"
                        style={{ height: `${h}%` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <div className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-indigo-200 blur-2xl opacity-70" />
          </div>
        </div>
      </Container>
    </section>
  );
}

function MiniStat({ title, value, trend }) {
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

export function Featuress() {
  const features = [
    {
      title: "Clean component library",
      description: "Reusable building blocks with consistent spacing, states, and typography.",
      icon: SparklesIcon,
    },
    {
      title: "Responsive by default",
      description: "Layouts that scale from mobile to desktop without breaking your rhythm.",
      icon: DevicesIcon,
    },
    {
      title: "Accessible patterns",
      description: "Keyboard-friendly buttons, sensible semantics, and readable contrast.",
      icon: ShieldIcon,
    },
    {
      title: "Fast iterations",
      description: "Dummy content + data arrays let you swap real copy later in minutes.",
      icon: BoltIcon,
    },
    {
      title: "Polished pricing UI",
      description: "Tiered plans with highlighted recommendations and feature lists.",
      icon: TagIcon,
    },
    {
      title: "Trust-building social proof",
      description: "Testimonial cards designed for readability and visual balance.",
      icon: ChatIcon,
    },
  ];

  return (
    <section id="features" className="border-t border-slate-200/70 bg-white">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          eyebrow="Features"
          title="Everything you need for a modern landing page"
          subtitle="A clean layout system with reusable components, sensible defaults, and responsive sections."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="h-full">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-900 text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{f.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Pricingg() {
  const plans = [
    {
      name: "Starter",
      price: 19,
      description: "For personal projects and early validation.",
      features: ["1 workspace", "Basic analytics", "Community support", "Up to 3 seats"],
      cta: "Get Starter",
      highlighted: false,
    },
    {
      name: "Pro",
      price: 49,
      description: "For growing teams shipping weekly.",
      features: ["Unlimited workspaces", "Advanced analytics", "Email support", "Up to 15 seats"],
      cta: "Start Pro",
      highlighted: true,
    },
    {
      name: "Business",
      price: 99,
      description: "For scaling orgs with compliance needs.",
      features: ["SAML SSO", "Audit logs", "Priority support", "Custom roles"],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="border-t border-slate-200/70 bg-slate-50">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, predictable plans"
          subtitle="Choose a tier that fits today. Upgrade as you grow."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={cn(
                "relative h-full",
                p.highlighted && "ring-2 ring-slate-900 shadow-md"
              )}
            >
              {p.highlighted ? (
                <div className="absolute -top-3 left-6">
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                </div>
              ) : null}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">{p.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                </div>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <p className="text-4xl font-bold tracking-tight text-slate-900">
                  ${p.price}
                </p>
                <p className="pb-1 text-sm font-medium text-slate-600">/ month</p>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {p.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 text-emerald-600" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  as="a"
                  href="#cta"
                  variant={p.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  {p.cta}
                </Button>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Includes updates and standard security.
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Testimonialss() {
  const testimonials = [
    {
      name: "Jordan Lee",
      title: "Product Lead, Northwind",
      quote:
        "We replaced our old landing page in a day. The layout feels premium, and the components are easy to remix.",
    },
    {
      name: "Samira Patel",
      title: "Founder, Paperkite",
      quote:
        "Clean spacing and typography out of the box. The pricing section alone saved us a ton of time.",
    },
    {
      name: "Miguel Santos",
      title: "Engineer, BrightOps",
      quote:
        "Responsive behavior is spot-on. It looks great on mobile and scales smoothly to desktop.",
    },
  ];

  return (
    <section id="testimonials" className="border-t border-slate-200/70 bg-white">
      <Container className="py-16 sm:py-20">
        <SectionHeader
          eyebrow="Testimonials"
          title="Teams ship faster with a solid UI foundation"
          subtitle="Dummy quotes, real results — swap in your own customer stories when ready."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="h-full">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white">
                    <span className="text-xs font-bold">
                      {initials(t.name)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.title}</p>
                  </div>
                </div>
                <QuoteIcon className="h-5 w-5 text-slate-300" />
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700">“{t.quote}”</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CTAA() {
  return (
    <section id="cta" className="border-t border-slate-200/70 bg-slate-50">
      <Container className="py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-10">
          <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
          <div className="absolute left-[-120px] bottom-[-120px] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to launch your SaaS landing page?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                Copy this page, swap the content, and ship. Clean components, responsive
                layout, and modern styling included.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button
                as="a"
                href="#"
                variant="secondary"
                className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 focus:ring-white"
              >
                View docs
              </Button>
              <Button as="a" href="#" className="w-full sm:w-auto bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 focus:ring-white">
                Start free trial
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-200/70 pt-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white">
            <span className="text-sm font-bold">AC</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">AcmeCloud</p>
            <p className="text-xs text-slate-500">Modern SaaS landing UI (dummy content)</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {["Privacy", "Terms", "Security", "Status"].map((l) => (
            <a key={l} href="#" className="font-medium text-slate-600 hover:text-slate-900">
              {l}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-xs text-slate-500">
        © {new Date().getFullYear()} AcmeCloud. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
}

/* ---------- tiny helpers/icons (no external deps) ---------- */

function initials(name) {
  const parts = name.split(" ").filter(Boolean);
  return parts.slice(0, 2).map((p) => p[0].toUpperCase()).join("");
}

function ArrowRightIcon({ className }) {
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

function CheckIcon({ className }) {
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

function QuoteIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.2 17.6H4.4c-1.1 0-2-.9-2-2V11c0-1.1.9-2 2-2h4.2V6.8C8.6 5.3 9.9 4 11.4 4h.2v3.2h-.2c-.5 0-.8.4-.8.8V9h.6c1.1 0 2 .9 2 2v4.6c0 1.1-.9 2-2 2H7.2Zm13.4 0h-2.8c-1.1 0-2-.9-2-2V11c0-1.1.9-2 2-2h4.2V6.8C22.0 5.3 23.3 4 24.8 4h.2v3.2h-.2c-.5 0-.8.4-.8.8V9h.6c1.1 0 2 .9 2 2v4.6c0 1.1-.9 2-2 2H20.6Z" />
    </svg>
  );
}

function SparklesIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 2l1.2 3.6L15 7l-3.8 1.4L10 12l-1.2-3.6L5 7l3.8-1.4L10 2Zm6 7l.8 2.4L19 12l-2.2.6L16 15l-.8-2.4L13 12l2.2-.6L16 9ZM3.8 10l.7 2.1L6.5 13l-2 .6L3.8 16l-.7-2.4L1 13l2.1-.9.7-2.1Z" />
    </svg>
  );
}

function DevicesIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4v1H6.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5H12v-1h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm0 2h12a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V5.5A.5.5 0 0 1 4 5Z" />
    </svg>
  );
}

function ShieldIcon({ className }) {
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

function BoltIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11 1 3 11h6l-1 8 8-10h-6l1-8Z" />
    </svg>
  );
}

function TagIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2.5 9.5V4A1.5 1.5 0 0 1 4 2.5h5.5a1.5 1.5 0 0 1 1.06.44l6.5 6.5a1.5 1.5 0 0 1 0 2.12l-5.5 5.5a1.5 1.5 0 0 1-2.12 0l-6.5-6.5A1.5 1.5 0 0 1 2.5 9.5Zm3-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
    </svg>
  );
}

function ChatIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M3 4.5A2.5 2.5 0 0 1 5.5 2h9A2.5 2.5 0 0 1 17 4.5v6A2.5 2.5 0 0 1 14.5 13H8l-3.2 2.4A1 1 0 0 1 3.2 14.6L3 13.2V4.5Z" />
    </svg>
  );
}