import { Mail } from "lucide-react";
// Switching to Font Awesome set for stability
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="py-20 bg-[#030712] px-6 lg:px-24 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        {/* TEXT CONTENT */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">
              05_
            </span>
            <h2 className="text-white font-black text-4xl uppercase tracking-tighter">
              Contact_Terminal
            </h2>
          </div>
          <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
            System ready for new connections. Feel free to reach out for
            collaborations or opportunities.
          </p>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Email Card */}
          <a
            href="mailto:kamosworkemail@gmail.com"
            className="group p-6 bg-[#0f172a]/40 border border-white/5 hover:border-sky-500/30 transition-all flex flex-col items-center gap-4 w-32"
          >
            <Mail
              className="text-slate-500 group-hover:text-white transition-colors"
              size={24}
            />
            <span className="text-[10px] font-mono text-slate-500 group-hover:text-sky-400 uppercase tracking-widest text-center">
              Email
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/kamogelommopane/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-[#0f172a]/40 border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col items-center gap-4 w-32"
          >
            <FaLinkedin
              className="text-slate-500 group-hover:text-[#0077B5] transition-colors"
              size={24}
            />
            <span className="text-[10px] font-mono text-slate-500 group-hover:text-indigo-400 uppercase tracking-widest text-center">
              LinkedIn
            </span>
          </a>

          {/* Github Card */}
          <a
            href="https://github.com/KAMO333"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-[#0f172a]/40 border border-white/5 hover:border-white/20 transition-all flex flex-col items-center gap-4 w-32"
          >
            <FaGithub
              className="text-slate-500 group-hover:text-white transition-colors"
              size={24}
            />
            <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300 uppercase tracking-widest text-center">
              Github
            </span>
          </a>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 font-mono text-[10px] uppercase tracking-widest">
          © 2026 Kamogelo Mmopane // Built with React & Tailwind
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.2em]">
            System_Online
          </span>
        </div>
      </div>
    </footer>
  );
};
