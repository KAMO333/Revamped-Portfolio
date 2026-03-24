import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getImageUrl } from "../../utils";
import projects from "../data/projects.json";

export const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="py-24 bg-[#080c14] relative">
      <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.03) 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sky-400 font-mono text-sm mb-2">03. projects</p>
          <h2 className="text-4xl font-black text-white mb-4">Things I Have Built</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-sky-400/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={getImageUrl(project.imageSrc)} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full">{skill}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors">
                    <FaGithub size={14} />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};