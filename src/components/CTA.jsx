import React from 'react'
import { ArrowRightIcon, Button, Container } from './utils';
import Footer from './Footer';

export default function CTA() {
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
      </Container>
    </section>
  );
}
