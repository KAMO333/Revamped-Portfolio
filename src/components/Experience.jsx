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
  SiPostman,
  SiHtml5,
  SiGit,
  SiFirebase,
  SiTestinglibrary,
} from "react-icons/si";

export const Experience = () => {
  const experiences = [
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
        { name: "REST API", icon: <SiPostman color="#FF6C37" /> },
        { name: "JWT", icon: <SiJsonwebtokens color="#D63AFF" /> },
        { name: "Axios", icon: <SiAxios color="#5A29E4" /> },
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
        { name: "REST API", icon: <SiPostman color="#FF6C37" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      ],
    },
    {
      company: "Woolworths",
      role: "Department Coordinator",
      period: "June 2016 - May 2021",
      location: "South Africa",
      description:
        "Led department operations in a high-pressure retail environment, consistently hitting organisational benchmarks through structured workflows and cross-functional collaboration.",
      tech: [],
    },
  ];

  const education = [
    {
      school: "WeThinkCode_",
      qualification: "Occupational Certificate: Software Engineer",
      period: "Sept 2024 - Dec 2025",
      details: (
        <p className="text-slate-400 text-sm font-light leading-relaxed ml-6 max-w-md">
          Learned <span className="text-sky-400 font-medium">Python</span>,{" "}
          <span className="text-sky-400 font-medium">Java</span>, and{" "}
          <span className="text-white font-medium italic">OOP</span> principles
          alongside <span className="text-indigo-400 font-medium">SQL</span>{" "}
          databases and{" "}
          <span className="text-indigo-400 font-medium">ORMs</span>. I
          engineered full-stack solutions using{" "}
          <span className="text-white font-medium">Docker</span> and{" "}
          <span className="text-sky-400 font-medium">CI/CD</span> pipelines,
          ensuring system reliability through rigorous{" "}
          <span className="text-green-400 font-medium">TDD</span> and automated
          testing.
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
      qualification: "Full Stack Web Development",
      period: "Feb 2022 - Nov 2023",
      details: (
        <p className="text-slate-400 text-sm font-light leading-relaxed ml-6 max-w-md">
          Developed responsive frontends with{" "}
          <span className="text-sky-400 font-medium">React</span>,{" "}
          <span className="text-indigo-400 font-medium">Redux</span>, and{" "}
          <span className="text-white font-medium italic">OOP</span> patterns. I
          architected scalable backends using{" "}
          <span className="text-green-400 font-medium">Node.js</span> and{" "}
          <span className="text-white font-medium">Express</span>, leveraging{" "}
          <span className="text-orange-400 font-medium">Firebase</span> and{" "}
          <span className="text-green-500 font-medium">MongoDB</span> for
          real-time data and cloud storage.
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
      className="py-12 bg-[#030712] px-6 lg:px-24 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">
              02_
            </span>
            <h2 className="text-white font-black text-3xl uppercase tracking-tighter">
              Work_History
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-8 relative group">
              <div className="absolute -left-[33px] top-1.5 w-2.5 h-2.5 rounded-full bg-transparent border-2 border-sky-500 group-hover:bg-sky-500 group-hover:scale-125 transition-all duration-300" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sky-500 font-mono text-xs font-bold tracking-wider">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-green-400 font-mono text-[9px] uppercase tracking-widest">
                  <span className="flex items-center gap-2 bg-green-500/5 px-2 py-1 border border-green-500/10">
                    <Calendar size={10} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2 bg-green-500/5 px-2 py-1 border border-green-500/10">
                    <MapPin size={10} /> {exp.location}
                  </span>
                </div>
              </div>
              <p className="text-slate-400 text-base font-light leading-relaxed mb-6 max-w-4xl">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-6 mt-6">
                {exp.tech.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 group/icon min-w-[55px]"
                  >
                    <div className="transition-transform duration-300 group-hover/icon:-translate-y-1">
                      <span className="text-4xl drop-shadow-[0_0_5px_rgba(255,255,255,0.05)]">
                        {tool.icon}
                      </span>
                    </div>
                    <span className="text-[8px] font-mono text-slate-500 group-hover/icon:text-white transition-colors duration-300 uppercase tracking-tighter text-center">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mb-10 pt-10 border-t border-white/5">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-indigo-500 font-mono text-xs tracking-[0.4em] uppercase">
              03_
            </span>
            <h2 className="text-white font-black text-3xl uppercase tracking-tighter">
              Education
            </h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-5 bg-[#0f172a]/50 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-500 font-mono text-sm">
                      {">_"}
                    </span>
                    <h3 className="text-white font-bold text-sm uppercase tracking-tight">
                      {edu.school}
                    </h3>
                  </div>
                  <span className="text-green-400 font-mono text-[9px] uppercase tracking-widest bg-green-500/5 px-2 py-1 border border-green-500/10">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sky-400 font-mono text-[10px] mb-3 uppercase tracking-tighter ml-6">
                  {edu.qualification}
                </p>
                <div className="mb-6">{edu.details}</div>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-y-6 gap-x-2 mt-6 pt-4 border-t border-white/5 ml-6">
                {edu.tech.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 group/icon min-w-[45px]"
                  >
                    <div className="h-8 w-8 flex items-center justify-center transition-transform duration-300 group-hover/icon:-translate-y-1">
                      <span className="text-3xl opacity-80 group-hover/icon:opacity-100 transition-opacity duration-300">
                        {tool.icon}
                      </span>
                    </div>
                    <span className="text-[7px] font-mono text-slate-600 group-hover/icon:text-white transition-colors duration-300 uppercase tracking-tighter text-center leading-tight">
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
