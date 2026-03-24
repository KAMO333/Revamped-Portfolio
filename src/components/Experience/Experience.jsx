import React, { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { getImageUrl } from "../../utils";
import skills from "../data/skills.json";
import history from "../data/history.json";

export const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);

  return (
    <section id="experience" className="py-24 bg-[#0a0f1e] relative">
      <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.03) 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
      <div className="relative max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-sky-400 font-mono text-sm mb-2">02. experience</p>
          <h2 className="text-4xl font-black text-white mb-4">Skills & History</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div key={skill.title} className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full hover:border-sky-400/50 hover:bg-sky-400/5 transition-all duration-200 group">
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className="w-5 h-5 object-contain" />
                <span className="text-slate-400 group-hover:text-sky-400 text-sm transition-colors">{skill.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-8">Work History</h3>
          <div className="grid md:grid-cols-3 gap-0 border border-white/10 rounded-2xl overflow-hidden">
            <div className="border-r border-white/10">
              {history.map((job, i) => (
                <button
                  key={i}
                  onClick={() => setActiveJob(i)}
                  className={"w-full text-left px-6 py-5 border-b border-white/10 last:border-b-0 transition-all duration-200 " + (activeJob === i ? "bg-sky-500/10 border-l-2 border-l-sky-400" : "hover:bg-white/[0.03]")}
                >
                  <p className={"font-semibold text-sm " + (activeJob === i ? "text-sky-400" : "text-slate-300")}>{job.organisation}</p>
                  <p className="text-slate-500 text-xs mt-1">{job.startDate} - {job.endDate}</p>
                </button>
              ))}
            </div>
            <div className="md:col-span-2 p-8">
              {history[activeJob] && (
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <img src={getImageUrl(history[activeJob].imageSrc)} alt={history[activeJob].organisation} className="w-12 h-12 object-contain rounded-xl bg-white/5 p-2" />
                    <div>
                      <h3 className="text-white font-bold text-lg">{history[activeJob].role}</h3>
                      <p className="text-sky-400 text-sm">{history[activeJob].organisation}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Calendar size={12} className="text-slate-500" />
                        <span className="text-slate-500 text-xs">{history[activeJob].startDate} - {history[activeJob].endDate}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {history[activeJob].experiences.map((exp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-300 text-sm">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};