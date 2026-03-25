import os

experience_jsx = """
import React from "react";
import { Calendar, MapPin, GraduationCap, Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "KeelWorks Foundation",
      role: "Full Stack Developer",
      period: "March 2024 - September 2024",
      location: "USA (Remote)",
      description: "Built a secure authentication system for a Portfolio Generator app. Developed custom JWT middleware and integrated frontend React components with Node.js REST APIs for persistent data management.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Axios"]
    },
    {
      company: "Zaio Institute of Technology",
      role: "Full Stack Developer (Internship)",
      period: "June 2022 - July 2023",
      location: "South Africa",
      description: "Developed a note-taking engine for an E-Learning platform, resulting in a 40% increase in user session time. Managed complex state for thousands of records using Redux and Mongoose.",
      tech: ["React", "Redux", "Node.js", "MongoDB", "Express.js"]
    },
    {
      company: "Woolworths",
      role: "Department Coordinator",
      period: "June 2016 - May 2021",
      location: "South Africa",
      description: "Led department operations and logistics in a high-pressure environment. Utilized data-driven resource planning to consistently meet organizational performance benchmarks.",
      tech: ["Leadership", "Operations", "Logistics", "Workflow Design"]
    }
  ];

  const education = [
    {
      school: "WeThinkCode_",
      qualification: "Occupational Certificate: Software Engineer",
      period: "Sept 2024 - Dec 2025",
      details: "Advanced software engineering focusing on Python, Java, OOP, Relational Databases (SQL), Service-Oriented Architecture, and Message Queues. Proficient in Docker, CI/CD, and automated testing."
    },
    {
      school: "Zaio Institute of Technology",
      qualification: "Full Stack Web Development",
      period: "Feb 2022 - Nov 2023",
      details: "Intensive training in modern web technologies and full-stack architecture."
    }
  ];

  return (
    <section id="experience" className="py-12 bg-[#030712] px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* WORK EXPERIENCE */}
        <div className="flex flex-col mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">02_</span>
             <h2 className="text-white font-black text-3xl uppercase tracking-tighter">Work_History</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-8 relative group">
              <div className="absolute -left-[33px] top-1 w-2 h-2 rounded-full bg-[#030712] border-2 border-sky-500 group-hover:scale-150 group-hover:bg-sky-500 transition-all duration-300" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-sky-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sky-500/80 font-mono text-sm font-bold tracking-wider">{exp.company}</p>
                </div>
                <div className="flex flex-wrap gap-4 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1 border border-white/5"><Calendar size={12} /> {exp.period}</span>
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1 border border-white/5"><MapPin size={12} /> {exp.location}</span>
                </div>
              </div>
              <p className="text-slate-400 text-base font-light leading-relaxed max-w-3xl mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-3">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[9px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 uppercase group-hover:border-sky-500/30 group-hover:text-slate-300 transition-all">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* EDUCATION */}
        <div className="flex flex-col mb-12 pt-10">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="text-indigo-500 font-mono text-xs tracking-[0.4em] uppercase">03_</span>
             <h2 className="text-white font-black text-3xl uppercase tracking-tighter">Education</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="p-6 bg-[#0f172a]/40 border border-white/5 hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-indigo-400" size={24} />
                <span className="text-indigo-400 font-mono text-[10px] uppercase tracking-widest">{edu.period}</span>
              </div>
              <h3 className="text-white font-black text-lg uppercase tracking-tight mb-1">{edu.school}</h3>
              <p className="text-sky-400 font-mono text-xs mb-4 uppercase tracking-tighter">{edu.qualification}</p>
              <p className="text-slate-500 text-sm font-light leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
\"\"\"

with open('src/components/Experience/Experience.jsx', 'w') as f:
    f.write(experience_jsx.strip())
print("✅ Experience and Education sections updated from CV.")
