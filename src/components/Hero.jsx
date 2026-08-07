import React, { useState, useEffect } from "react";
import { ArrowDown, Terminal, Cpu, Layout } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = [
    "TypeScript",
    "JavaScript",
    "React",
    "Redux",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Jest",
    "Linux",
    "Git",
    "Claude AI",
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
    <section className="relative w-full flex items-center justify-center bg-white dark:bg-[#030712] px-6 sm:px-10 lg:px-16 overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.03)_0%,transparent_50%)]" />
      </div>
      {/* Bottom fade: guarantees a clean, seamless handoff into the next section's flat background */}
      <div className="absolute inset-x-0 bottom-0 h-20 z-[1] bg-gradient-to-b from-transparent to-white dark:to-[#030712] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
          <div className="inline-flex items-center justify-center px-3 py-1 bg-green-500/5 border border-green-500/20">
            <span className="text-green-600 dark:text-green-400 text-[9px] font-mono tracking-[0.25em] uppercase font-bold leading-none">
              Status: Available to Work
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[0.95] uppercase">
            Kamogelo
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 italic">
              Mmopane
            </span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2.5 text-base md:text-lg font-mono text-slate-900 dark:text-white min-h-[1.75rem]">
            <span className="text-sky-500 font-bold">&gt;</span>
            <span className="font-bold uppercase tracking-tight">
              {displayText}
            </span>
            <span className="w-1.5 h-5 bg-sky-500 animate-pulse" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-md leading-relaxed font-light border-l-2 border-slate-300 dark:border-slate-800 pl-5 text-left mx-auto lg:mx-0">
            Full Stack Engineer with 2 years of professional experience
            specializing in
            <span className="text-slate-900 dark:text-white font-medium italic">
              {" "}
              TypeScript
            </span>
            , building modular component-driven UIs with
            <span className="text-slate-900 dark:text-white font-medium italic">
              {" "}
              React
            </span>
            , and containerized event-driven RESTful APIs with
            <span className="text-slate-900 dark:text-white font-medium italic">
              {" "}
              Node.js
            </span>
            .
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-sky-500 text-black font-black text-[10px] tracking-[0.25em] border border-sky-400 hover:bg-white hover:text-black hover:border-white transition-colors duration-300 uppercase active:scale-95"
            >
              VIEW_PROJECTS <Layout size={13} className="opacity-80" />
            </a>

            <div className="flex items-center gap-5">
              <a
                href="https://github.com/KAMO333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/kamogelommopane/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Photo + stat row */}
        <div className="w-full max-w-[220px] sm:max-w-[260px] lg:w-1/2 lg:max-w-[280px] flex flex-col items-center gap-4">
          <div className="relative w-full aspect-[4/5] border border-black/10 dark:border-white/10 overflow-hidden">
            <img
              src="/assets/hero/heroImage.png"
              alt="Kamogelo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Stat row: quiet, no boxes/shadows/dividing lines — just two labels */}
          <div className="w-full grid grid-cols-2 divide-x divide-black/10 dark:divide-white/10 pt-1">
            <div className="flex flex-col items-center gap-1 px-2">
              <div className="flex items-center gap-1.5">
                <Terminal
                  size={12}
                  className="text-sky-500 dark:text-sky-400"
                />
                <span className="text-[7px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Stack_Focus
                </span>
              </div>
              <p className="text-slate-900 dark:text-white font-black text-[10px] uppercase tracking-tight">
                MERN Stack
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 px-2">
              <div className="flex items-center gap-1.5">
                <Cpu
                  size={12}
                  className="text-indigo-500 dark:text-indigo-400"
                />
                <span className="text-[7px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Experience
                </span>
              </div>
              <p className="text-slate-900 dark:text-white font-black text-[10px] uppercase tracking-tight">
                2 Years Exp
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sky-500 dark:text-sky-400 animate-bounce hidden lg:block">
        <a href="#about">
          <ArrowDown size={22} />
        </a>
      </div>
    </section>
  );
};
