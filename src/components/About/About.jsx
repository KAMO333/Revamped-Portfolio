import React from "react";
import { Terminal } from "lucide-react";
import { 
  SiReact, SiTypescript, SiJavascript, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiDocker, SiGithubactions, SiGit 
} from "react-icons/si";

export const About = () => {
  const skills = [
    { 
      category: "Frontend", 
      items: [
        { name: "React", icon: <SiReact color="#61DAFB" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> }
      ] 
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express", icon: <SiExpress color="#ffffff" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> }
      ] 
    },
    { 
      category: "DevOps/Tools", 
      items: [
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "CI/CD", icon: <SiGithubactions color="#2088FF" /> },
        { name: "Git", icon: <SiGit color="#F05032" /> }
      ] 
    },
  ];

  return (
    <section id="about" className="py-12 bg-[#030712] px-6 lg:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">01_</span>
             <h2 className="text-white font-black text-3xl uppercase tracking-tighter">About_Me</h2>
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-sky-500/50 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-slate-400 text-lg leading-relaxed font-light">
            <p>
              I am a <span className="text-white font-medium italic">Full Stack Developer</span> with over 2 years of professional experience, 
              graduating from <span className="text-white font-medium underline decoration-sky-500/30">WeThinkCode_</span> and 
              <span className="text-white font-medium underline decoration-indigo-500/30"> Zaio Institute</span>. 
              My focus is on building scalable, secure, and well-tested web applications.
            </p>
            <p>
              Based in <span className="text-white">Johannesburg</span>, I specialize in the MERN stack but I'm constantly 
              exploring new territories like <span className="text-sky-400">TypeScript</span>, <span className="text-indigo-400">Docker</span>, 
              and <span className="text-blue-400">AWS</span> to streamline the development-to-deployment pipeline.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4"> {/* Tightened gap between boxes */}
            {skills.map((skill, index) => (
              <div key={index} className="group p-5 bg-[#0f172a]/50 border border-white/5 hover:border-sky-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4"> {/* Reduced margin bottom */}
                   <Terminal size={18} className="text-sky-500" />
                   <h3 className="text-white font-bold text-xs uppercase tracking-widest">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {skill.items.map((item) => (
                    <div key={item.name} className="flex flex-col items-center gap-2 group/icon transition-all hover:-translate-y-1">
                      <span className="text-4xl transition-transform duration-300 group-hover/icon:scale-110">{item.icon}</span>
                      <span className="text-[9px] font-mono text-slate-500 group-hover/icon:text-slate-300 transition-colors uppercase tracking-tighter text-center">
                        {item.name}
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