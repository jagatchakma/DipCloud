import React from 'react'
import { Card, Container, QuoteIcon, SectionHeader } from './utils';

export default function Testimonials() {
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


function initials(name) {
  const parts = name.split(" ").filter(Boolean);
  return parts.slice(0, 2).map((p) => p[0].toUpperCase()).join("");
}