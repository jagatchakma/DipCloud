import React from 'react'
import { ArrowRightIcon, Button, Container } from './utils';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="sitelogos.jpg" lt="Description" className='rounded'
            width={55} alt="" />
          {/* <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white">
            <span className="text-sm font-bold">AC</span>
          </div>
          <span className="text-sm font-bold tracking-tight text-slate-900">
            DipCloud
          </span> */}
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

