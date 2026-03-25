import React, { useState, useEffect } from "react";
import { ArrowDown, Terminal, Cpu, Layout } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = [
    "Full Stack Developer",
    "WeThinkCode_ Alumnus",
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
    <section className="relative h-screen min-h-[650px] w-full flex items-center justify-center bg-[#030712] px-6 lg:px-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        {/* Left Side: Content */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-[10px] font-mono tracking-[0.4em] uppercase font-bold">
                Status: Available to Work
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white tracking-tighter leading-[0.85] uppercase">
              Kamogelo
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 italic">
                Mmopane
              </span>
            </h1>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3 text-lg md:text-2xl font-mono text-white">
              <span className="text-sky-500 font-bold">&gt;</span>
              <span className="font-bold uppercase tracking-tighter">
                {displayText}
              </span>
              <span className="w-2 h-6 bg-sky-500 animate-pulse" />
            </div>

            <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed font-light border-l-2 border-slate-800 pl-6">
              Full Stack Developer building with
              <span className="text-white font-medium italic"> React</span> and
              <span className="text-white font-medium italic"> Node.js</span>,
              writes tests, ships through CI/CD and doesn't call it done until
              it's running in production.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-2">
            <a
              href="#projects"
              className="relative group inline-block active:scale-95 transition-transform"
            >
              {/* THE GLOWING OFFSET BOX - Now Indigo/Blue Shadow */}
              <div className="absolute inset-0 bg-indigo-500/40 translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform blur-[2px]"></div>

              {/* THE MAIN BUTTON - SOLID SKY BLUE TO WHITE */}
              <div className="relative px-8 py-3.5 bg-sky-500 text-black font-black text-[11px] tracking-[0.3em] border border-sky-400 flex items-center gap-3 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] uppercase">
                VIEW_PROJECTS <Layout size={14} className="opacity-80" />
              </div>
            </a>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/KAMO333"
                target="_blank"
                className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                <FaGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/kamogelommopane/"
                target="_blank"
                className="text-slate-500 hover:text-sky-400 transition-all transform hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]"
              >
                <FaLinkedin size={26} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Photo */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[300px] aspect-[1/1.2] group">
            <div
              className="absolute inset-0 z-0 bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 opacity-20 animate-pulse"
              style={{
                clipPath:
                  "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)",
              }}
            />
            <div
              className="absolute inset-[2px] z-10 bg-[#030712] overflow-hidden"
              style={{
                clipPath:
                  "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)",
              }}
            >
              <img
                src="/assets/hero/heroImage.png"
                alt="Kamogelo"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            <div className="absolute bottom-6 -left-6 z-30 bg-[#0f172a]/95 border border-white/10 p-3 shadow-2xl backdrop-blur-md hidden md:block min-w-[120px]">
              <Terminal className="text-sky-400 mb-1" size={18} />
              <p className="text-[7px] font-mono text-slate-500 uppercase tracking-widest leading-none">
                Stack Focus
              </p>
              <p className="text-white font-bold text-[10px] uppercase">
                MERN Stack
              </p>
            </div>

            <div className="absolute top-10 -right-6 z-30 bg-[#0f172a]/90 border border-white/10 p-3 shadow-2xl backdrop-blur-md hidden md:block min-w-[120px]">
              <Cpu className="text-indigo-400 mb-1" size={18} />
              <p className="text-[7px] font-mono text-slate-500 uppercase tracking-widest leading-none">
                Experience
              </p>
              <p className="text-white font-bold text-[10px] uppercase">
                2+ Years Exp
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-700 animate-bounce">
        <a href="#about">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};
