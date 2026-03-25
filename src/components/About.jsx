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
      category: "Frontend",
      items: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express", icon: <SiExpress color="#ffffff" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "Redis", icon: <SiRedis color="#DC382D" /> },
      ],
    },
    {
      category: "DevOps_&_Tools",
      items: [
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Jest", icon: <SiJest color="#C21325" /> },
        { name: "Claude AI", icon: <SiAnthropic color="#D97757" /> },
        { name: "Linux", icon: <SiLinux color="#FCC624" /> },
        { name: "Git", icon: <SiGit color="#F05032" /> },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-12 bg-[#030712] px-6 lg:px-24 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">
              01_
            </span>
            <h2 className="text-white font-black text-3xl uppercase tracking-tighter">
              About_Me
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT SIDE: BIO TEXT - Adjusted leading and spacing */}
          <div className="lg:col-span-7 space-y-8 text-slate-400 text-lg leading-[1.8] font-light">
            <p>
              I'm a{" "}
              <span className="text-white font-medium italic">
                Full Stack Developer
              </span>{" "}
              trained at{" "}
              <span className="text-white font-medium underline decoration-sky-500/30">
                WeThinkCode_
              </span>{" "}
              and
              <span className="text-white font-medium underline decoration-indigo-500/30">
                {" "}
                Zaio Institute of Technology
              </span>
              , with hands-on experience building production-ready web
              applications. My background spans both sides of the stack: from
              designing REST APIs and auth systems on the backend to building
              responsive, component-driven UIs on the frontend.
            </p>
            <p>
              What sets my work apart is the emphasis on reliability. I write
              tests, containerize with{" "}
              <span className="text-indigo-400">Docker</span>, and ship through{" "}
              <span className="text-sky-400">CI/CD pipelines</span>. Currently
              based in <span className="text-white">Johannesburg</span> and
              actively levelling up in cloud deployments, I bring a structured,
              detail-oriented approach to every project I touch.
            </p>
            <p>
              Outside of work, I stay sharp through{" "}
              <span className="text-sky-400">HackerRank</span> and{" "}
              <span className="text-sky-400">Codewars</span>. I genuinely enjoy
              the puzzle of algorithmic thinking. I keep up with the dev world
              through tech news, podcasts and books, and I'm always picking up
              something new. Right now that's{" "}
              <span className="text-white font-medium italic">TypeScript</span>{" "}
              and{" "}
              <span className="text-white font-medium italic">PostgreSQL</span>.
            </p>
          </div>

          {/* RIGHT SIDE: SKILLS GRID - Scaled down for balance */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-5 bg-[#0f172a]/50 border border-white/5 hover:border-sky-500/30 transition-all duration-300 flex-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Terminal size={18} className="text-sky-500" />
                  <h3 className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                    {skill.category}
                  </h3>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 gap-y-8 gap-x-2">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-3 group/icon transition-all hover:-translate-y-1"
                    >
                      <div className="h-10 w-10 flex items-center justify-center">
                        <span className="text-3xl transition-transform duration-300 group-hover/icon:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]">
                          {item.icon}
                        </span>
                      </div>

                      <span className="text-[9px] font-mono text-slate-500 group-hover/icon:text-white transition-colors uppercase tracking-tighter text-center leading-tight min-h-[18px] flex items-center">
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
