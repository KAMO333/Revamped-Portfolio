import React, { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Experience", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 px-6 lg:px-20 py-5 flex justify-between items-center">
      <a
        href="/"
        className="text-xl font-black tracking-tighter text-white uppercase group"
      >
        portfolio
        <span className="text-sky-500 group-hover:text-green-400 transition-colors">
          .dev
        </span>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-xs font-bold text-slate-400 hover:text-sky-400 transition-colors uppercase tracking-[0.2em]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* MAIN DESKTOP RESUME BUTTON - UPDATED TO BLUE -> WHITE */}
        <a
          href="/assets/resume/Kamogelo_Mmopane_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-sky-500 text-black font-black text-[10px] uppercase tracking-[0.2em] border border-sky-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] active:scale-95"
        >
          <FileText size={12} />
          Resume_Access
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030712] border-b border-white/10 p-8 flex flex-col gap-8 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-black uppercase tracking-widest text-slate-300"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

          {/* Mobile Menu RESUME Link */}
          <a
            href="/assets/resume/Kamogelo_Mmopane_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-black uppercase tracking-widest text-sky-400 border-l-2 border-sky-500 pl-4 py-2 bg-sky-500/5"
            onClick={() => setMenuOpen(false)}
          >
            Resume_Access
          </a>
        </div>
      )}
    </nav>
  );
};
