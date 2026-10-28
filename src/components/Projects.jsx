import projectsData from "./data/projects.json";
import { ExternalLink } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiGithubactions,
  SiJest,
  SiStripe,
  SiRedis,
  SiTypescript,
  SiGithub,
  SiExpress,
  SiPostgresql,
  SiPython,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiGraphql,
  SiFirebase,
  SiSimpleicons,
  SiSupabase,
  SiPrisma,
  SiNextdotjs,
} from "react-icons/si";

const iconMap = {
  React: <SiReact color="#61DAFB" />,
  "Next.js": (
    <span className="text-slate-900 dark:text-white">
      <SiNextdotjs />
    </span>
  ),
  Node: <SiNodedotjs color="#339933" />,
  "Node.js": <SiNodedotjs color="#339933" />,
  "Express.js": (
    <span className="text-slate-900 dark:text-white">
      <SiExpress />
    </span>
  ),
  MongoDB: <SiMongodb color="#47A248" />,
  TypeScript: <SiTypescript color="#3178C6" />,
  Docker: <SiDocker color="#2496ED" />,
  Jest: <SiJest color="#C21325" />,
  Stripe: <SiStripe color="#008CDD" />,
  Redis: <SiRedis color="#DC382D" />,
  PostgreSQL: <SiPostgresql color="#4169E1" />,
  Python: <SiPython color="#3776AB" />,
  Tailwind: <SiTailwindcss color="#06B6D4" />,
  "Tailwind CSS": <SiTailwindcss color="#06B6D4" />,
  JavaScript: <SiJavascript color="#F7DF1E" />,
  HTML5: <SiHtml5 color="#E34F26" />,
  HTML: <SiHtml5 color="#E34F26" />,
  CSS3: <SiSimpleicons color="#1572B6" />,
  CSS: <SiSimpleicons color="#1572B6" />,
  GraphQL: <SiGraphql color="#E10098" />,
  Firebase: <SiFirebase color="#FFCA28" />,
  "CI/CD": <SiGithubactions color="#2088FF" />,
  "GitHub Actions": <SiGithubactions color="#2088FF" />,
  Supabase: <SiSupabase color="#31C48D" />,
  Prisma: <SiPrisma color="#0C344B" />,
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 md:py-20 bg-white dark:bg-[#030712] px-6 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-slate-900 dark:text-white font-black text-2xl md:text-3xl uppercase tracking-tighter">
              Selected work
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 gap-12 md:gap-16">
          {projectsData.map((project, id) => (
            <div
              key={id}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-6 bg-slate-50 dark:bg-[#0f172a]/30 border border-black/5 dark:border-white/5 hover:border-sky-500/20 transition-all duration-500"
            >
              <div className="lg:col-span-5 aspect-video overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-[#030712]">
                <img
                  src={`/assets/${project.imageSrc}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-x-4 gap-y-6 md:gap-x-10 md:gap-y-6 mb-8">
                    {project.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-3 group/skill min-w-[50px] md:min-w-[65px]"
                      >
                        <span className="text-3xl md:text-4xl transition-all group-hover/skill:-translate-y-1 group-hover/skill:drop-shadow-[0_0_12px_rgba(56,189,248,0.4)] duration-300">
                          {iconMap[skill] || (
                            <span className="w-2 h-2 bg-sky-500/50 rounded-full" />
                          )}
                        </span>
                        <span className="text-[8px] md:text-[10px] font-mono text-slate-500 dark:text-slate-400 group-hover/skill:text-slate-900 dark:group-hover/skill:text-sky-400 transition-colors uppercase tracking-tighter text-center">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest hover:border-sky-500 transition-all"
                  >
                    <SiGithub size={14} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 bg-sky-500 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    <ExternalLink size={14} /> Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More on GitHub Callout */}
        <div className="mt-16 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 bg-slate-50/70 dark:bg-[#0f172a]/30 border border-black/10 dark:border-white/10">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-slate-700 dark:text-slate-300 text-sm font-light">
              Looking for earlier experiments, scripts, or open-source
              repositories?
            </p>
          </div>

          <a
            href="https://github.com/KAMO333"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more projects on GitHub (opens in a new tab)"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-sky-500 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95 shadow-sm whitespace-nowrap"
          >
            <SiGithub size={15} />
            More_On_GitHub
            <ExternalLink size={13} className="opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
};
