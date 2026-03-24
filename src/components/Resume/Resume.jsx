import React from "react";
import { Download, Eye, FileText, Briefcase, GraduationCap, Code } from "lucide-react";

export const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-[#080c14] relative">
      <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.03) 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
      <div className="relative max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-sky-400 font-mono text-sm mb-2">04. resume</p>
          <h2 className="text-4xl font-black text-white mb-4">My Resume</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Full Stack Developer with experience building and shipping production web applications. Trained at WeThinkCode_ with a background in React, Node.js, MongoDB, Docker and CI/CD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/assets/resume/Kamogelo_Mmopane_CV.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download CV
              </a>
              <a
                href="/assets/resume/Kamogelo_Mmopane_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 hover:border-sky-400 text-slate-300 hover:text-sky-400 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Eye size={18} />
                View CV
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-sky-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center">
                  <Code size={18} className="text-sky-400" />
                </div>
                <h3 className="text-white font-semibold">Tech Skills</h3>
              </div>
              <p className="text-slate-400 text-sm">React, Node.js, Express, MongoDB, PostgreSQL, TypeScript, Docker, Jest, GitHub Actions</p>
            </div>
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-violet-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-violet-500/10 rounded-xl flex items-center justify-center">
                  <Briefcase size={18} className="text-violet-400" />
                </div>
                <h3 className="text-white font-semibold">Experience</h3>
              </div>
              <p className="text-slate-400 text-sm">Full Stack Developer at KeelWorks Foundation. Web Developer at Zaio. Department Coordinator at Woolworths.</p>
            </div>
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl hover:border-emerald-400/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                  <GraduationCap size={18} className="text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold">Education</h3>
              </div>
              <p className="text-slate-400 text-sm">WeThinkCode_ — Software Development, SOA elective. Zaio Institute of Technology — Full Stack Web Development.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};