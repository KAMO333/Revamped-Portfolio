import { Calendar, MapPin, GraduationCap, Terminal } from "lucide-react";
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
  SiGithubactions,
  SiLinux,
  SiPostgresql,
  SiJavascript,
} from "react-icons/si";

export const Experience = () => {
  const experiences = [
    {
      company: "KeelWorks Foundation",
      role: "Full Stack Developer",
      period: "March 2024 - Sept 2024",
      location: "USA (Remote)",
      description:
        "Built the authentication system for a Portfolio Generator app. Developed custom JWT middleware and integrated frontend React components with Node.js REST APIs for secure profile management. [cite: 28, 29, 32]",
      tech: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "JWT", icon: <SiJsonwebtokens color="#ffffff" /> },
        { name: "Axios", icon: <SiAxios color="#5A29E4" /> },
      ],
    },
    {
      company: "Zaio Institute of Technology",
      role: "Full Stack Developer (Internship)",
      period: "June 2022 - July 2023",
      location: "South Africa",
      description:
        "Built a note-taking engine for an E-Learning platform, contributing to a 40% increase in user session time. Optimized performance using pagination, lazy loading, and MongoDB indexing. [cite: 33, 34, 38]",
      tech: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Redux", icon: <SiRedux color="#764ABC" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      ],
    },
    {
      company: "Woolworths",
      role: "Department Coordinator",
      period: "June 2016 - May 2021",
      location: "South Africa",
      description:
        "Led department operations in a high-pressure retail environment, consistently hitting organisational benchmarks through structured workflows and cross-functional collaboration. [cite: 39, 41, 46]",
      tech: [],
    },
  ];

  const education = [
    {
      school: "WeThinkCode_",
      qualification: "Occupational Certificate: Software Engineer",
      period: "Sept 2024 - Dec 2025",
      details:
        "Advanced curriculum covering Python, Java, OOP, Relational Databases, SOA, and Message Queues. [cite: 48, 50, 52]",
      tech: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "Java", icon: <SiOpenjdk color="#007396" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "Linux", icon: <SiLinux color="#FCC624" /> },
      ],
    },
    {
      school: "Zaio Institute of Technology",
      qualification: "Full Stack Web Development",
      period: "Feb 2022 - Nov 2023",
      details:
        "Comprehensive training in modern full-stack architecture and industrial web standards. [cite: 53, 54]",
      tech: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 bg-[#030712] px-6 lg:px-24 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* 02_ WORK HISTORY */}
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
              {/* Timeline Node - Now Fills on Hover */}
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

              <div className="flex flex-wrap gap-4">
                {exp.tech.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-2 group/icon transition-transform hover:-translate-y-1"
                  >
                    <span className="text-2xl">{t.icon}</span>
                    <span className="text-[9px] font-mono text-slate-500 group-hover/icon:text-slate-300 transition-colors uppercase">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 03_ EDUCATION */}
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
                  {/* School Name in line with Terminal Symbol */}
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
                <p className="text-slate-500 text-xs font-light leading-relaxed mb-6 ml-6">
                  {edu.details}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 ml-6">
                {edu.tech.map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-2 transition-transform hover:-translate-y-1"
                  >
                    <span className="text-xl">{t.icon}</span>
                    <span className="text-[8px] font-mono text-slate-600 uppercase">
                      {t.name}
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
