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

// Interactive keyboard key
const Key = ({ color, label, Icon, className = '' }) => {
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
      transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${elevate}px)`,
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
      className={`group relative select-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur transition-[transform,box-shadow,background] duration-200 ease-out hover:bg-white/10 will-change-transform ${className}`}
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
      <div className="relative z-10 flex h-full w-full items-center justify-center gap-2">
        <Icon className="h-5 w-5 drop-shadow" style={{ color }} />
        <span className="text-xs font-medium text-slate-200">{label}</span>
      </div>
      {/* Glossy highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 mix-blend-screen transition-opacity duration-200 group-hover:opacity-60"
        style={{
          background:
            'linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0) 60%)',
        }}
      />
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

  // Arrange in keyboard-like rows with subtle stagger
  const row1 = [keys[0], keys[1], keys[2]]; // QWER-like
  const row2 = [keys[3], keys[4], keys[5], keys[6]]; // ASDF-like
  const row3 = [keys[7], keys[8]]; // ZX-like

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Skills I use daily</h2>
        <p className="mt-3 text-slate-300">Each skill is presented as a key inside a realistic keyboard frame.</p>
      </div>

      {/* Keyboard Frame */}
      <div className="mt-10">
        <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          {/* Top bar */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400/80"></span>
              <span className="h-3 w-3 rounded-full bg-amber-300/80"></span>
              <span className="h-3 w-3 rounded-full bg-emerald-400/80"></span>
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-400">Keyboard Layout</div>
            <div className="h-2 w-8 rounded bg-slate-700/60" />
          </div>

          {/* Plate */}
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            {/* Row 1 */}
            <div className="flex items-center gap-3 px-2">
              {row1.map((k, idx) => (
                <Key key={`r1-${idx}`} {...k} className="h-14 min-w-[4.2rem] flex-1 sm:flex-none sm:w-24" />
              ))}
            </div>
            {/* Row 2 (stagger) */}
            <div className="mt-3 flex items-center gap-3 px-2 sm:translate-x-6">
              {row2.map((k, idx) => (
                <Key key={`r2-${idx}`} {...k} className="h-14 min-w-[4.2rem] flex-1 sm:flex-none sm:w-24" />
              ))}
            </div>
            {/* Row 3 (stagger) */}
            <div className="mt-3 flex items-center gap-3 px-2 sm:translate-x-12">
              {row3.map((k, idx) => (
                <Key key={`r3-${idx}`} {...k} className="h-14 min-w-[4.2rem] flex-1 sm:flex-none sm:w-24" />
              ))}
              {/* Spacebar-like key shows core stack summary */}
              <Key
                color="#22d3ee"
                label="React · FastAPI · MongoDB"
                Icon={Boxes}
                className="h-14 flex-1 sm:w-64"
              />
            </div>
          </div>

          {/* Bottom chamfer / stand shadow */}
          <div className="pointer-events-none absolute inset-x-8 -bottom-6 h-10 rounded-full bg-gradient-to-b from-transparent to-black/40 blur-2xl" />
        </div>
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 blur-3xl">
        <div className="mx-auto h-64 w-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle at 50% 50%, #22d3ee, transparent 60%)' }} />
      </div>
    </section>
  );
};

export default SkillsKeyboard;
