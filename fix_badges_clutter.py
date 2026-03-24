import os

hero_jsx = """
import React, { useState, useEffect } from "react";
import { ArrowDown, MapPin, Terminal, Cpu } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length)
            setTimeout(() => setDeleting(true), 1500);
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 50 : 100,
    );
    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#080c14] overflow-hidden">
      {/* Background Decorative lights - Keep your custom ones */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        {/* Left: Text Content - Takes 2/3 space */}
        <div className="lg:col-span-2 space-y-8 text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping"></span>
            <span className="text-green-400 text-xs font-mono tracking-widest uppercase">Available for work</span>
          </div>

          <div className="space-y-4">
            <p className="text-sky-400 font-mono text-xl tracking-tight">Hi, I am</p>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Kamogelo<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">Mmopane</span>
            </h1>
          </div>

          <div className="flex items-center gap-3 h-10">
            <span className="text-slate-400 text-2xl font-light">A</span>
            <span className="text-sky-400 text-2xl font-semibold font-mono border-r-4 border-sky-400 pr-2">{displayText}</span>
          </div>

          <p className="text-slate-400 text-xl max-w-xl leading-relaxed font-light">
            Engineering high-performance web experiences with 
            <span className="text-white font-medium italic"> React, Node.js</span> and 
            <span className="text-white font-medium italic"> MongoDB.</span> I focus on writing clean, efficient code that solves real problems.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4">
            <a href="#projects" className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-lg transition-all shadow-xl shadow-sky-500/20">
              View My Work
            </a>
            <div className="flex items-center gap-6 pl-2 border-l border-slate-800">
              <a href="https://github.com/KAMO333" target="_blank" className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1"><FaGithub size={28} /></a>
              <a href="https://www.linkedin.com/in/kamogelommopane/" target="_blank" className="text-slate-500 hover:text-sky-400 transition-all transform hover:-translate-y-1"><FaLinkedin size={28} /></a>
            </div>
          </div>
        </div>

        {/* Right: The Clean Profile + Side Data Panel */}
        <div className="lg:col-span-1 flex flex-col items-center lg:items-end gap-6 relative group">
          
          {/* Your Profile Photo - now clean and un-obscured */}
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-sky-400/30 shadow-2xl relative z-20">
            <img 
                src="/assets/hero/heroImage.png" 
                alt="Kamogelo" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>

          {/* New: Dedicated Data Panel on the side */}
          <div className="absolute top-1/2 left-[-20%] transform -translate-y-1/2 z-10 w-[240px] p-6 bg-[#1e293b]/60 border border-white/5 backdrop-blur-md rounded-xl space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl">
              <div className="flex items-center gap-3">
                  <Cpu className="text-indigo-400" size={24} />
                  <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Experience</p>
                      <p className="text-white font-bold text-sm">SENIOR ENGINEER (15+ Years)</p>
                  </div>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-800 pt-4">
                  <Terminal className="text-sky-400" size={24} />
                  <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Core Stack Focus</p>
                      <p className="text-white font-bold text-sm uppercase">MERN (React / Node / Mongo)</p>
                  </div>
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-[11px] pt-2">
                  <MapPin size={16} className="text-sky-400" />
                  <span>JOHANNESBURG, SOUTH AFRICA</span>
              </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-700 animate-bounce">
        <ArrowDown size={28} />
      </a>
    </section>
  );
};
\"\"\"

with open('src/components/Hero/Hero.jsx', 'w') as f:
    f.write(hero_jsx.strip())
print("✅ Clutter fixed. Hero photo is now clear.")
