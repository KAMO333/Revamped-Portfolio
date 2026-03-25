import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className="py-16 md:py-24 bg-[#030712] px-6 lg:px-24 border-t border-white/5 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-sky-500/5 blur-[100px] md:blur-[120px] rounded-full -mr-32 -mt-32 md:-mr-64 md:-mt-64 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        {/* TEXT CONTENT */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase">
              05_
            </span>
            <h2 className="text-white font-black text-xl sm:text-2xl md:text-4xl uppercase tracking-tighter whitespace-nowrap md:whitespace-normal">
              Contact_Terminal
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0">
            System ready for new connections. Feel free to reach out for
            collaborations or opportunities.
          </p>
        </div>

        {/* SOCIAL LINKS - Fixed Width symmetry on Desktop */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-6 w-full md:w-auto">
          {/* Email Card */}
          <a
            href="mailto:kamosworkemail@gmail.com"
            className="group p-5 md:p-6 bg-[#0f172a]/40 border border-white/5 hover:border-sky-500/30 transition-all flex flex-col items-center gap-4 w-full md:min-w-[140px] md:w-32"
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
            className="group p-5 md:p-6 bg-[#0f172a]/40 border border-white/5 hover:border-indigo-500/30 transition-all flex flex-col items-center gap-4 w-full md:min-w-[140px] md:w-32"
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
            className="group p-5 md:p-6 bg-[#0f172a]/40 border border-white/5 hover:border-white/20 transition-all flex flex-col items-center gap-4 w-full md:min-w-[140px] md:w-32"
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
      <div className="max-w-6xl mx-auto mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-600 font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-center md:text-left">
          © 2026 Kamogelo Mmopane <br className="md:hidden" /> // Built with
          React & Tailwind
        </p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-slate-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
            System_Online
          </span>
        </div>
      </div>
    </footer>
  );
};
