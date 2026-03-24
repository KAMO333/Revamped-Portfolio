import React from "react";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <footer id="contact" className="py-24 bg-[#0a0f1e] relative">
      <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.03) 1px, transparent 0)", backgroundSize: "40px 40px"}}></div>
      <div className="relative max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="text-sky-400 font-mono text-sm mb-2">05. contact</p>
          <h2 className="text-4xl font-black text-white mb-4">Get In Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              I am currently open to new opportunities. Whether you have a role, a project, or just want to connect — my inbox is always open.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center">
                  <Mail size={18} className="text-sky-400" />
                </div>
                <a href="mailto:kamosworkemail@gmail.com" className="text-slate-300 hover:text-sky-400 transition-colors">kamosworkemail@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center">
                  <MapPin size={18} className="text-sky-400" />
                </div>
                <span className="text-slate-300">Johannesburg, South Africa</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/KAMO333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-slate-400 hover:text-white hover:border-white/30 transition-all duration-200">
                <FaGithub size={18} />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/kamogelommopane/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-slate-400 hover:text-sky-400 hover:border-sky-400/30 transition-all duration-200">
                <FaLinkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-2">Available for Work</h3>
            <p className="text-slate-400 text-sm mb-6">Full Stack Developer. Immediate availability. Remote or Johannesburg based.</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-slate-300 text-sm">Open to full-time roles</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-slate-300 text-sm">Open to contract and freelance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-slate-300 text-sm">R140/hour rate</span>
              </div>
            </div>
            <a href="mailto:kamosworkemail@gmail.com" className="block w-full text-center px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25">
              Send Me an Email
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">Built by <span className="text-sky-400">Kamogelo Mmopane</span> with React and Tailwind CSS</p>
          <p className="text-slate-600 text-sm font-mono">kamo.dev</p>
        </div>

      </div>
    </footer>
  );
};