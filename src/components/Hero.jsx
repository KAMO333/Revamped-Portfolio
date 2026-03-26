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
  }, [displayText, deleting, roleIndex, roles]);

  return (
    /* Changed min-h-screen to min-h-[auto] on small screens to remove huge vertical gaps */
    <section className="relative min-h-[auto] lg:min-h-screen w-full flex items-center justify-center bg-[#030712] px-6 lg:px-16 overflow-hidden py-24 md:py-32 lg:py-0">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-12 pt-8">
        {/* Left Side: Content */}
        <div className="w-full md:w-[60%] lg:w-3/5 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="space-y-4 w-full">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-green-500/5 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.05)]">
              <span className="text-green-400 text-[9px] md:text-[10px] font-mono tracking-[0.2em] lg:tracking-[0.4em] uppercase font-bold leading-none text-center">
                Status: Available to Work
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-white tracking-tighter leading-[0.9] md:leading-[0.85] uppercase shrink-0">
              Kamogelo
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 italic">
                Mmopane
              </span>
            </h1>
          </div>

          <div className="space-y-5 w-full">
            <div className="flex items-center justify-center md:justify-start gap-3 text-lg md:text-2xl font-mono text-white min-h-[40px]">
              <span className="text-sky-500 font-bold">&gt;</span>
              <span className="font-bold uppercase tracking-tighter">
                {displayText}
              </span>
              <span className="w-2 h-6 bg-sky-500 animate-pulse" />
            </div>

            <p className="text-slate-400 text-sm md:text-lg max-w-lg leading-relaxed font-light border-l-2 border-slate-800 pl-6 text-left mx-auto md:mx-0">
              Full Stack Developer building with
              <span className="text-white font-medium italic"> React</span> and
              <span className="text-white font-medium italic"> Node.js</span>,
              writes tests, ships through CI/CD and doesn't call it done until
              it's running in production.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-8 pt-2">
            <a
              href="#projects"
              className="relative group inline-block active:scale-95 transition-transform"
            >
              <div className="absolute inset-0 bg-indigo-500/40 translate-x-1.5 translate-y-1.5 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform blur-[2px]"></div>
              <div className="relative px-6 md:px-8 py-3 md:py-3.5 bg-sky-500 text-black font-black text-[10px] md:text-[11px] tracking-[0.3em] border border-sky-400 flex items-center gap-3 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] uppercase">
                VIEW_PROJECTS <Layout size={14} className="opacity-80" />
              </div>
            </a>

            <div className="flex items-center gap-6">
              <a
                href="https://github.com/KAMO333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-all transform hover:-translate-y-1"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kamogelommopane/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-sky-400 transition-all transform hover:-translate-y-1"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Photo */}
        <div className="w-full md:w-[40%] lg:w-2/5 flex justify-center md:justify-end mt-4 md:mt-0">
          <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[340px] aspect-[1/1.2] group flex-shrink-0">
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

            {/* HUD Badges */}
            <div className="absolute top-40 -left-6 md:-left-12 z-30 bg-[#0f172a]/95 border border-white/10 p-3 shadow-2xl backdrop-blur-md hidden sm:block min-w-[130px] md:min-w-[150px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Terminal className="text-sky-400" size={16} />
                  <span className="text-[7px] md:text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                    Stack_Focus
                  </span>
                </div>
                <p className="text-white font-black text-[10px] md:text-[12px] uppercase tracking-tight">
                  MERN Stack
                </p>
              </div>
            </div>

            <div className="absolute top-40 -right-6 md:-right-12 z-30 bg-[#0f172a]/95 border border-white/10 p-3 shadow-2xl backdrop-blur-md hidden sm:block min-w-[130px] md:min-w-[150px]">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Cpu className="text-indigo-400" size={16} />
                  <span className="text-[7px] md:text-[8px] font-mono text-slate-500 uppercase tracking-widest">
                    Experience
                  </span>
                </div>
                <p className="text-white font-black text-[10px] md:text-[12px] uppercase tracking-tight">
                  2+ Years Exp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-700 animate-bounce hidden sm:block">
        <a href="#about">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};
