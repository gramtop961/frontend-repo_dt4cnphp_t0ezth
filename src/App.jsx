import React from 'react';
import Hero from './components/Hero';
import SkillsKeyboard from './components/SkillsKeyboard';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <SkillsKeyboard />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
