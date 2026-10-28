import { Code2, Database, Wrench } from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiJest,
  SiVitest,
  SiLinux,
  SiGit,
  SiAnthropic,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const Skills = () => {
  const skillCategories = [
    {
      id: "frontend",
      category: "Frontend Architecture",
      icon: <Code2 size={16} className="text-sky-500 shrink-0" />,
      items: [
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss color="#1572B6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
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
      category: "Backend & Databases",
      icon: <Database size={16} className="text-sky-500 shrink-0" />,
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
        { name: "Prisma", icon: <SiPrisma color="#0C344B" /> },
        { name: "Supabase", icon: <SiSupabase color="#31C48D" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Redis", icon: <SiRedis color="#DC382D" /> },
      ],
    },
    {
      id: "devops",
      category: "DevOps & Cloud",
      icon: <Wrench size={16} className="text-sky-500 shrink-0" />,
      items: [
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Azure", icon: <VscAzure color="#0078D4" /> },
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
      id="skills"
      className="py-12 md:py-20 bg-white dark:bg-[#030712] px-6 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-slate-900 dark:text-white font-black text-2xl md:text-3xl uppercase tracking-tighter">
              Skills
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        {/* 3-Column Card Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 sm:p-6 bg-slate-50/70 dark:bg-[#0f172a]/30 border border-black/10 dark:border-white/10 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Card Top Title Bar */}
                <div className="flex items-center justify-between pb-3.5 mb-6 border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-2.5">
                    {cat.icon}
                    <h3 className="text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                {/* Symmetrical Icon Grid Inside Card */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-y-6 gap-x-2 justify-items-center">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center gap-2 group/icon min-w-[56px]"
                    >
                      <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-white dark:bg-[#030712] border border-black/5 dark:border-white/5 group-hover/icon:border-sky-500/50 group-hover/icon:bg-sky-500/5 transition-all duration-300 shadow-sm group-hover/icon:shadow-[0_0_12px_rgba(56,189,248,0.15)]">
                        <span className="text-2xl transition-transform duration-300 group-hover/icon:scale-110 opacity-80 group-hover/icon:opacity-100">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400 group-hover/icon:text-slate-900 dark:group-hover/icon:text-sky-400 transition-colors uppercase tracking-tight text-center leading-tight">
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
