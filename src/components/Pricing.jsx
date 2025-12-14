import React from 'react'
import { Button, Card, CheckIcon, cn, Container, SectionHeader } from './utils';

export default function Pricing() {
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
