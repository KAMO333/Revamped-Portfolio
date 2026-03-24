import React from "react";
import { Code2, Terminal, Cpu, Globe } from "lucide-react";

export const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "GraphQL"] },
    { category: "DevOps/Tools", items: ["Docker", "AWS", "CI/CD", "Git"] },
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
              My focus is on building scalable, secure, and well-tested web applications.
            </p>
            <p>
              Based in <span className="text-white">Johannesburg</span>, I specialize in the MERN stack but I'm constantly 
              exploring new territories like <span className="text-sky-400">TypeScript</span>, <span className="text-indigo-400">Docker</span>, 
              and <span className="text-blue-400">AWS</span> to streamline the development-to-deployment pipeline.
            </p>
            <p>
              When I'm not coding business solutions, I'm experimenting with <span className="italic">Amapiano beats</span> using 
              code or solving algorithmic challenges to keep my problem-solving skills sharp.
            </p>
          </div>

          {/* Technical Specs Side */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="group p-6 bg-[#0f172a]/50 border border-white/5 hover:border-sky-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                   <Terminal size={18} className="text-sky-500" />
                   <h3 className="text-white font-bold text-xs uppercase tracking-widest">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="text-[10px] font-mono px-2 py-1 bg-white/5 text-slate-400 border border-white/5 group-hover:border-sky-500/20 group-hover:text-sky-400 transition-colors">
                      {item}
                    </span>
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