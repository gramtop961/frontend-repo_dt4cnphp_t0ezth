import React from 'react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description: 'A playful, performant personal site powered by React, Spline, and FastAPI.',
    link: '#',
    tags: ['React', 'Spline', 'Tailwind'],
  },
  {
    title: 'API-First SaaS Starter',
    description: 'Batteries-included starter with authentication, billing, and dashboard UI.',
    link: '#',
    tags: ['FastAPI', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Realtime Dashboards',
    description: 'Streaming metrics and charts with a11y-first components.',
    link: '#',
    tags: ['TypeScript', 'WebSockets', 'Charts'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected projects</h2>
        <p className="mt-3 text-slate-300">A snapshot of things I\'ve designed and built recently.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                {i + 1}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-slate-800/80 px-2 py-1 text-[10px] text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
