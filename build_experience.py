import os

experience_jsx = """
import React from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Freelance / Web Agency",
      role: "Full Stack Developer",
      period: "2024 - Present",
      location: "Johannesburg, SA",
      description: "Building custom web solutions for township businesses and network cabling firms. Focus on high-performance React frontends and secure Node.js backends.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"]
    },
    {
      company: "Zaio Institute",
      role: "Full-Stack Web Development Graduate",
      period: "2025",
      location: "Remote",
      description: "Completed intensive full-stack bootcamp focusing on modern web standards, API integration, and agile collaboration.",
      tech: ["MERN Stack", "Git", "Agile"]
    },
    {
      company: "WeThinkCode_",
      role: "Software Engineering Student",
      period: "2023 - 2024",
      location: "Johannesburg, SA",
      description: "Rigorous NQF Level 6 software engineering program. Focused on algorithmic problem solving, peer-to-peer learning, and industrial-grade coding standards.",
      tech: ["Python", "Java", "SQL", "Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-12 bg-[#030712] px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">02_</span>
             <h2 className="text-white font-black text-3xl uppercase tracking-tighter">Work_History</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-8 relative group">
              {/* Timeline Node */}
              <div className="absolute -left-[33px] top-1 w-2 h-2 rounded-full bg-[#030712] border-2 border-sky-500 group-hover:scale-150 group-hover:bg-sky-500 transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-sky-400 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sky-500/80 font-mono text-sm font-bold tracking-wider">
                    {exp.company}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4 text-slate-500 font-mono text-[10px] uppercase tracking-widest">
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1 border border-white/5">
                    <Calendar size={12} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-2 bg-white/5 px-3 py-1 border border-white/5">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-slate-400 text-base font-light leading-relaxed max-w-3xl mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[9px] font-mono text-slate-500 border border-white/10 px-2 py-0.5 rounded-sm uppercase group-hover:border-sky-500/30 group-hover:text-slate-300 transition-all">
                    {t}
                  </span>
                ))}
              </div>
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
print("✅ Experience component created.")
