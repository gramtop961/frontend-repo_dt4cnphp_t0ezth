import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/80 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Your Name — All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="mailto:you@example.com" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10">
              Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10">
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
