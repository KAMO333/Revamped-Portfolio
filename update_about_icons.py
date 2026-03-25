import os

about_jsx = """
import React from "react";
import { Terminal } from "lucide-react";
import { 
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiDocker, SiGithubactions, SiGit 
} from "react-icons/si";

export const About = () => {
  const skillGroups = [
    { 
      category: "Frontend", 
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> }
      ] 
    },
    { 
      category: "Backend", 
      skills: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> }
      ] 
    },
    { 
      category: "DevOps/Tools", 
      skills: [
        { name: "Docker", icon: <SiDocker /> },
        { name: "CI/CD", icon: <SiGithubactions /> },
        { name: "Git", icon: <SiGit /> }
      ] 
    },
  ];

  return (
    <section id="about" className="py-12 bg-[#030712] px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">01_</span>
             <h2 className="text-white font-black text-3xl uppercase tracking-tighter">About_Me</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Bio Side */}
          <div className="lg:col-span-7 space-y-6 text-slate-400 text-lg leading-relaxed font-light">
            <p>
              I am a <span className="text-white font-medium italic">Full Stack Developer</span> with over 2 years of professional experience, 
              graduating from <span className="text-white font-medium underline decoration-sky-500/30">WeThinkCode_</span> and 
              <span className="text-white font-medium underline decoration-indigo-500/30"> Zaio Institute</span>.
            </p>
            <p>
              Based in <span className="text-white">Johannesburg</span>, I specialize in the MERN stack but I'm constantly 
              exploring new territories like <span className="text-sky-400">TypeScript</span> and <span className="text-blue-400">AWS</span>.
            </p>
          </div>

          {/* Technical Icons Side */}
          <div className="lg:col-span-5 space-y-4">
            {skillGroups.map((group, index) => (
              <div key={index} className="p-5 bg-[#0f172a]/40 border border-white/5 hover:border-sky-500/20 transition-all">
                <div className="flex items-center gap-3 mb-4 text-white/50">
                   <Terminal size={16} />
                   <h3 className="text-[10px] font-mono uppercase tracking-[0.3em]">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="group flex flex-col items-center gap-2">
                      <div className="text-2xl text-slate-500 group-hover:text-sky-400 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-[8px] font-mono uppercase text-slate-600 group-hover:text-slate-300">
                        {skill.name}
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
\"\"\"

with open('src/components/About/About.jsx', 'w') as f:
    f.write(about_jsx.strip())
print("✅ About section updated with tech logos.")
