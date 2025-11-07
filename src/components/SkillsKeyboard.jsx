import React from 'react';
import {
  Code2,
  Database,
  Cloud,
  Server,
  Palette,
  Terminal,
  Cpu,
  Boxes,
  Rocket,
} from 'lucide-react';

// A single interactive key
const Key = ({ color, label, Icon }) => {
  const ref = React.useRef(null);
  const [style, setStyle] = React.useState({ transform: 'translateZ(0)' });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 8; // -8deg to 8deg
    const rotateX = -((y - midY) / midY) * 8; // -8deg to 8deg
    const elevate = 14; // px translateZ

    setStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${elevate}px)`,
      boxShadow: `0 18px 40px ${color}44, 0 8px 20px rgba(0,0,0,0.35)`
    });
  };

  const handleLeave = () => {
    setStyle({ transform: 'translateZ(0)', boxShadow: `0 10px 20px ${color}33` });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative aspect-square w-16 select-none rounded-xl border border-white/10 bg-white/5 p-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition-[transform,box-shadow,background] duration-200 ease-out hover:bg-white/10 sm:w-20 will-change-transform"
      style={{ boxShadow: `0 10px 20px ${color}33`, ...style }}
    >
      <div
        className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(60% 60% at 30% 20%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 60%), ' +
            `conic-gradient(from 180deg at 50% 50%, ${color} 0deg, transparent 120deg, ${color} 240deg, transparent 360deg)`,
          filter: 'blur(12px)',
        }}
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1">
        <Icon className="h-6 w-6 drop-shadow" style={{ color }} />
        <span className="text-[11px] font-medium text-slate-200">{label}</span>
      </div>
      {/* Glossy highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 mix-blend-screen transition-opacity duration-200 group-hover:opacity-60" style={{
        background: 'linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0) 60%)'
      }} />
    </div>
  );
};

const SkillsKeyboard = () => {
  const keys = [
    { label: 'React', Icon: Boxes, color: '#61dafb' },
    { label: 'TypeScript', Icon: Code2, color: '#3178c6' },
    { label: 'Tailwind', Icon: Palette, color: '#38bdf8' },
    { label: 'Node.js', Icon: Server, color: '#3c873a' },
    { label: 'FastAPI', Icon: Rocket, color: '#059669' },
    { label: 'Python', Icon: Terminal, color: '#ffde57' },
    { label: 'MongoDB', Icon: Database, color: '#10b981' },
    { label: 'Cloud', Icon: Cloud, color: '#60a5fa' },
    { label: 'Performance', Icon: Cpu, color: '#f472b6' },
  ];

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Skills I use daily</h2>
        <p className="mt-3 text-slate-300">A colorful keyboard of tools and technologies I enjoy working with.</p>
      </div>

      <div className="mt-10 grid grid-cols-3 justify-items-center gap-5 sm:grid-cols-4 sm:gap-6 md:grid-cols-6">
        {keys.map((k, idx) => (
          <Key key={idx} {...k} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-1/2 -translate-y-1/2 blur-3xl">
        <div className="mx-auto h-64 w-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle at 50% 50%, #22d3ee, transparent 60%)' }} />
      </div>
    </section>
  );
};

export default SkillsKeyboard;
