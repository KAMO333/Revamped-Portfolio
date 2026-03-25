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
} from "react-icons/si";

const iconMap = {
  React: <SiReact color="#61DAFB" />,
  Node: <SiNodedotjs color="#339933" />,
  "Node.js": <SiNodedotjs color="#339933" />,
  Express: <SiExpress color="#ffffff" />,
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
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-12 md:py-20 bg-[#030712] px-6 lg:px-24 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">
              04_
            </span>
            {/* Fluid Heading Fix: scale down for 294px screens */}
            <h2 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter">
              Project_Archive
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-16">
          {projectsData.map((project, id) => (
            <div
              key={id}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-6 bg-[#0f172a]/30 border border-white/5 hover:border-sky-500/20 transition-all duration-500"
            >
              <div className="lg:col-span-5 aspect-video overflow-hidden border border-white/10 bg-[#030712]">
                <img
                  src={`/assets/${project.imageSrc}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-sky-400 transition-colors mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Skills Grid Fix: 4 columns on tiny mobile ensures no overflow */}
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
                        <span className="text-[8px] md:text-[10px] font-mono text-slate-500 group-hover/skill:text-white transition-colors uppercase tracking-tighter text-center">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons Fix: Stack vertically on very small mobile for easier tapping */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={project.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all"
                  >
                    <SiGithub size={14} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:border-sky-500 transition-all"
                  >
                    <ExternalLink size={14} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
