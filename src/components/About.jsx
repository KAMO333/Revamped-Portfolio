import React from "react";
import { Terminal } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiJest,
  SiAnthropic,
  SiRedux,
  SiRedis,
  SiLinux,
} from "react-icons/si";

export const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        {
          name: "Express.js",
          icon: (
            <span className="text-slate-900 dark:text-white">
              <SiExpress />
            </span>
          ),
        },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Redis", icon: <SiRedis color="#DC382D" /> },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Jest", icon: <SiJest color="#C21325" /> },
        { name: "Linux", icon: <SiLinux color="#FCC624" /> },
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "Claude AI", icon: <SiAnthropic color="#D97757" /> },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-white dark:bg-[#030712] px-6 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-12 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">
              01_
            </span>
            <h2 className="text-slate-900 dark:text-white font-black text-2xl md:text-3xl uppercase tracking-tight">
              About_Me
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-stretch">
          {/* LEFT SIDE: BIO TEXT */}
          <div className="md:col-span-7 flex flex-col justify-between gap-6 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-light">
            <p>
              I'm a{" "}
              <span className="text-slate-900 dark:text-white font-medium italic">
                Full Stack Engineer
              </span>{" "}
              with 2 years of professional experience specializing in React,
              TypeScript, Node.js, Express.js, and MongoDB. I build
              component-driven UIs with Tailwind CSS and containerize
              event-driven RESTful APIs via Docker, backing my code with
              rigorous Jest/Vitest testing and GitHub Actions CI/CD pipelines.
            </p>

            <p>
              My passion began when I watched a blank screen come to life with
              just HTML, CSS, and JavaScript—a drive that earned me a spot at{" "}
              <span className="text-slate-900 dark:text-white font-medium underline decoration-sky-500/30">
                WeThinkCode_ (NQF 6)
              </span>
              . At this elite institution, I mastered peer-to-peer software
              engineering, object-oriented programming, and brownfield codebase
              navigation, specializing in Service-Oriented Architecture —
              service decomposition, asynchronous communication, and message
              queues.
            </p>

            <p>
              Today, I optimize my daily workflow using AI tools to write better
              code faster, and find fulfillment in showcasing functional work to
              family and friends — while upskilling in relational data modeling
              with{" "}
              <span className="text-slate-900 dark:text-white font-medium italic">
                PostgreSQL
              </span>{" "}
              and cloud infrastructure deployment with{" "}
              <span className="text-slate-900 dark:text-white font-medium italic">
                Azure
              </span>
              .
            </p>
          </div>

          {/* RIGHT SIDE: SKILLS GRID */}
          <div className="md:col-span-5 flex flex-col justify-between gap-6 w-full">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-5 bg-slate-50 dark:bg-[#0f172a]/50 border border-black/5 dark:border-white/5 hover:border-sky-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Terminal size={18} className="text-sky-500 shrink-0" />
                  <h3 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-[0.2em]">
                    {skill.category}
                  </h3>
                </div>

                {/* Fix: grid-cols-5 base ensures all 5 icons stay in one row on mobile */}
                <div className="grid grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-2 sm:gap-x-4">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-2 group/icon transition-all"
                    >
                      <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl transition-transform duration-300 group-hover/icon:scale-110 drop-shadow-[0_0_10px_rgba(0,0,0,0.06)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                          {item.icon}
                        </span>
                      </div>

                      <span className="text-[7px] sm:text-[8px] md:text-[10px] font-mono text-slate-500 dark:text-slate-400 group-hover/icon:text-slate-900 dark:group-hover/icon:text-sky-400 transition-colors uppercase tracking-tighter text-center leading-tight min-h-[18px] flex items-center">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
