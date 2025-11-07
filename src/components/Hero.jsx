import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for freelance
        </span>
        <h1 className="text-left text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Building delightful, performant web experiences
        </h1>
        <p className="mt-4 max-w-2xl text-left text-slate-300">
          I craft modern interfaces, robust APIs, and playful interactions. Explore my work
          and the tools I use every day.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
