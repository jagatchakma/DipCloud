import React from 'react'
import { Container } from './utils'

export default function Footer() {
    return (
        <Container>

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
        </Container>
    );
}
