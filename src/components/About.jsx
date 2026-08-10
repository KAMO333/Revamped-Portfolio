import React from "react";
import { Code2, Database, Wrench } from "lucide-react";
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
  SiNextdotjs,
  SiPrisma,
  SiSupabase,
  SiVitest,
} from "react-icons/si";

export const About = () => {
  const sections = [
    {
      id: "frontend",
      text: (
        <>
          I'm a{" "}
          <span className="text-slate-900 dark:text-white font-medium italic">
            Full Stack Engineer
          </span>{" "}
          with 2 years of professional experience specializing in React,
          TypeScript, Node.js, Express.js, PostgreSQL, and Prisma ORM. I build
          component-driven UIs with Tailwind CSS and containerize event-driven
          RESTful APIs via Docker, backing my code with rigorous Jest/Vitest
          testing and GitHub Actions CI/CD pipelines.
        </>
      ),
      category: "Frontend Development",
      categoryIcon: <Code2 size={16} className="text-sky-500 shrink-0" />,
      items: [
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        {
          name: "Next.js",
          icon: (
            <span className="text-slate-900 dark:text-white">
              <SiNextdotjs />
            </span>
          ),
        },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      ],
    },
    {
      id: "backend",
      text: (
        <>
          My passion began when I watched a blank screen come to life with just
          HTML, CSS, and JavaScript—a drive that earned me a spot at{" "}
          <span className="text-slate-900 dark:text-white font-medium underline decoration-sky-500/30">
            WeThinkCode_ (NQF 6)
          </span>
          . At this elite institution, I mastered peer-to-peer software
          engineering, object-oriented programming, and brownfield codebase
          navigation, specializing in Service-Oriented Architecture — service
          decomposition, asynchronous communication, and message queues.
        </>
      ),
      category: "Backend & Databases",
      categoryIcon: <Database size={16} className="text-sky-500 shrink-0" />,
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
        { name: "Prisma", icon: <SiPrisma color="#0C344B" /> },
        { name: "Supabase", icon: <SiSupabase color="#31C48D" /> },
        { name: "Redis", icon: <SiRedis color="#DC382D" /> },
      ],
    },
    {
      id: "devops",
      text: (
        <>
          Today, I optimize my daily workflow using AI tools to write better
          code faster, and find fulfillment in showcasing functional work to
          family and friends — while upskilling in cloud infrastructure
          deployment with{" "}
          <span className="text-slate-900 dark:text-white font-medium italic">
            Azure
          </span>
          .
        </>
      ),
      category: "DevOps & Tools",
      categoryIcon: <Wrench size={16} className="text-sky-500 shrink-0" />,
      items: [
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Jest", icon: <SiJest color="#C21325" /> },
        { name: "Vitest", icon: <SiVitest color="#FCC72B" /> },
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
      <div className="max-w-4xl mx-auto">
        {}
        <div className="flex flex-col mb-12 md:mb-16">
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

        {}
        <div className="flex flex-col gap-16 md:gap-20">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col gap-6 md:gap-8 w-full"
            >
              {}
              <div className="border-l-2 border-sky-500/20 pl-4 md:pl-6 py-2">
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-light">
                  {section.text}
                </p>
              </div>

              {}
              <div className="flex flex-col w-full pl-4 md:pl-6">
                {}
                <div className="flex items-center gap-3 mb-6">
                  {section.categoryIcon}
                  <h3 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap">
                    {section.category}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-black/10 dark:from-white/10 to-transparent" />
                </div>

                {}
                <div className="flex flex-wrap justify-between items-center gap-y-6 gap-x-2">
                  {section.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-2.5 group/icon w-[56px] sm:w-[64px]"
                    >
                      <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-[#0f172a]/40 border border-black/5 dark:border-white/5 group-hover/icon:border-sky-500/50 group-hover/icon:bg-sky-500/5 transition-all duration-300 shadow-sm group-hover/icon:shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                        <span className="text-2xl transition-transform duration-300 group-hover/icon:scale-110 group-hover/icon:-translate-y-0.5 opacity-80 group-hover/icon:opacity-100">
                          {item.icon}
                        </span>
                      </div>
                      {}
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 group-hover/icon:text-slate-900 dark:group-hover/icon:text-sky-400 transition-colors uppercase tracking-tight text-center leading-tight">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
