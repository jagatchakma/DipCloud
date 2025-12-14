import React from 'react'
import { BoltIcon, Card, ChatIcon, Container, DevicesIcon, SectionHeader, ShieldIcon, SparklesIcon, TagIcon } from './utils';

export default function Features() {
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
          {features.map(f => (
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
