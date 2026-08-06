import {
  Calendar,
  MapPin,
  GraduationCap,
  Terminal,
  Database,
  Boxes,
  Workflow,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJsonwebtokens,
  SiAxios,
  SiRedux,
  SiExpress,
  SiPython,
  SiOpenjdk,
  SiDocker,
  SiLinux,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiHtml5,
  SiGit,
  SiFirebase,
  SiTestinglibrary,
} from "react-icons/si";

export const Experience = () => {
  const experiences = [
    {
      company: "Powerverse",
      role: "Junior Front-End Developer",
      period: "May 2026 - Present",
      location: "South Africa (Hybrid)",
      description:
        "Utilised React, TypeScript, Tailwind CSS, and Docker to build the client-side interface of a critical government management system for the Department of Transport, collaborating with a cross-functional Agile team to deliver a production-ready system.",
      tech: [
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
      ],
    },
    {
      company: "KeelWorks Foundation",
      role: "Full Stack Developer",
      period: "March 2024 - Sept 2024",
      location: "USA (Remote)",
      description:
        "Built the authentication system for a Portfolio Generator app. Developed custom JWT middleware and integrated frontend React components with Node.js REST APIs for secure profile management.",
      tech: [
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      ],
    },
    {
      company: "Zaio Institute of Technology",
      role: "Full Stack Developer (Internship)",
      period: "June 2022 - July 2023",
      location: "South Africa",
      description:
        "Built a note-taking engine for an E-Learning platform, contributing to a 40% increase in user session time. Optimized performance using pagination, lazy loading, and MongoDB indexing.",
      tech: [
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      ],
    },
  ];

  const education = [
    {
      school: "WeThinkCode_",
      qualification: "Occupational Certificate: Software Engineer (NQF 6)",
      period: "Sept 2024 - Dec 2025",
      details: (
        <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed ml-2 md:ml-6 max-w-md">
          Mastered industrial-grade software engineering via an intensive
          peer-to-peer curriculum. Programmed low-level{" "}
          <span className="text-sky-500 dark:text-sky-400 font-medium">
            client-server architectures
          </span>{" "}
          using network sockets, refactored raw procedural logic into strict{" "}
          <span className="text-slate-900 dark:text-white font-medium italic">
            OOP design patterns
          </span>
          , and implemented multi-user systems with thread-based concurrency.
          Specialized in the{" "}
          <span className="text-indigo-500 dark:text-indigo-400 font-medium">
            Service-Oriented Architecture
          </span>{" "}
          elective, delivering distributed service decomposition and managing
          asynchronous cross-service communication using message queues.
        </p>
      ),
      tech: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Java", icon: <SiOpenjdk color="#007396" /> },
        { name: "OOP", icon: <Boxes size={22} color="#6366f1" /> },
        { name: "SQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "ORM", icon: <Database size={22} color="#10b981" /> },
        { name: "TDD", icon: <SiTestinglibrary color="#E33332" /> },
        { name: "Git", icon: <SiGit color="#F05032" /> },
        { name: "HTML5/CSS3", icon: <SiHtml5 color="#E34F26" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Linux", icon: <SiLinux color="#FCC624" /> },
      ],
    },
    {
      school: "Zaio Institute of Technology",
      qualification: "Full Stack Web Development (Accredited)",
      period: "Feb 2022 - Nov 2023",
      details: (
        <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed ml-2 md:ml-6 max-w-md">
          Completed a comprehensive full-stack program focused on project-driven
          engineering. Designed responsive client interfaces with{" "}
          <span className="text-sky-500 dark:text-sky-400 font-medium">
            React
          </span>{" "}
          and managed strict immutable state data streams via{" "}
          <span className="text-indigo-500 dark:text-indigo-400 font-medium">
            Redux
          </span>
          . Architected secure decoupled backends using{" "}
          <span className="text-green-600 dark:text-green-400 font-medium">
            Node.js
          </span>{" "}
          and Express, implementing data normalization within NoSQL{" "}
          <span className="text-slate-900 dark:text-white font-medium">
            MongoDB
          </span>{" "}
          layers and deploying live production builds to cloud-hosted
          environments.
        </p>
      ),
      tech: [
        { name: "HTML/CSS", icon: <SiHtml5 color="#E34F26" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express", icon: <SiExpress color="#ffffff" /> },
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Git", icon: <SiGit color="#F05032" /> },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 bg-white dark:bg-[#030712] px-6 lg:px-24 border-t border-black/5 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">
              02_
            </span>
            <h2 className="text-slate-900 dark:text-white font-black text-2xl md:text-3xl uppercase tracking-tighter">
              Work_History
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        {/* Timeline margin fix for mobile: ml-2 on mobile, ml-0 on desktop */}
        <div className="relative border-l border-black/10 dark:border-white/10 ml-2 md:ml-0 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-6 md:ml-8 relative group">
              {/* Dot alignment fix: -left-[25px] on mobile */}
              <div className="absolute -left-[25px] md:-left-[33px] top-1.5 w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-transparent border-2 border-sky-500 group-hover:bg-sky-500 transition-all duration-300" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sky-500 font-mono text-xs font-bold tracking-wider">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-green-600 dark:text-green-400 font-mono text-[8px] md:text-[9px] uppercase tracking-widest">
                  <span className="flex items-center gap-2 bg-green-500/5 px-2 py-1 border border-green-500/10 whitespace-nowrap">
                    <Calendar size={10} /> {exp.period}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-2 bg-green-500/5 px-2 py-1 border border-green-500/10 whitespace-nowrap">
                      <MapPin size={10} /> {exp.location}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base font-light leading-relaxed mb-6">
                {exp.description}
              </p>
              <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-4 mt-6">
                {exp.tech.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 group/icon min-w-[45px] md:min-w-[55px]"
                  >
                    <div className="transition-transform duration-300 group-hover/icon:-translate-y-1">
                      <span className="text-2xl md:text-4xl">{tool.icon}</span>
                    </div>
                    <span className="text-[7px] md:text-[8px] font-mono text-slate-500 group-hover/icon:text-slate-900 dark:group-hover/icon:text-white uppercase text-center">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mb-10 pt-10 border-t border-black/5 dark:border-white/5">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-indigo-500 font-mono text-xs tracking-[0.4em] uppercase">
              03_
            </span>
            <h2 className="text-slate-900 dark:text-white font-black text-2xl md:text-3xl uppercase tracking-tighter">
              Education
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-4 md:p-5 bg-slate-50 dark:bg-[#0f172a]/50 border border-black/5 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-500 font-mono text-sm">
                      {">_"}
                    </span>
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase">
                      {edu.school}
                    </h3>
                  </div>
                  <span className="text-green-600 dark:text-green-400 font-mono text-[8px] uppercase bg-green-500/5 px-2 py-1 border border-green-500/10">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sky-500 dark:text-sky-400 font-mono text-[9px] mb-3 uppercase tracking-tighter ml-2 md:ml-6">
                  {edu.qualification}
                </p>
                <div className="mb-6">{edu.details}</div>
              </div>

              {/* Education grid fix: 4 columns on mobile, 6 on tablet+ */}
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-y-6 gap-x-2 mt-6 pt-4 border-t border-black/5 dark:border-white/5 ml-0 md:ml-6">
                {edu.tech.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 group/icon min-w-[40px]"
                  >
                    <div className="h-8 w-8 flex items-center justify-center transition-transform duration-300 group-hover/icon:-translate-y-1">
                      <span className="text-2xl md:text-3xl opacity-80 group-hover/icon:opacity-100 transition-opacity">
                        {tool.icon}
                      </span>
                    </div>
                    <span className="text-[7px] font-mono text-slate-500 dark:text-slate-600 group-hover/icon:text-slate-900 dark:group-hover/icon:text-white uppercase tracking-tighter text-center">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
