import React from 'react'
import { ArrowRightIcon, Badge, Button, Card, CheckIcon, Container, MiniStat } from './utils';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -top-60 h-130 w-130 -translate-x-1/2 rounded-full bg-linear-to-tr from-indigo-200 via-sky-200 to-emerald-200 blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] bg-size-[22px_22px]" />
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
                        className="flex-1 rounded-lg bg-linear-to-t from-purple-900 to-purple-500/50"
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
