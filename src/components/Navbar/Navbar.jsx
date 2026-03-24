import React, { useState } from "react";
import { Menu, X, FileText } from "lucide-react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Experience", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 px-6 lg:px-20 py-5 flex justify-between items-center">
      <a href="/" className="text-xl font-black tracking-tighter text-white uppercase group">
        portfolio<span className="text-sky-500 group-hover:text-green-400 transition-colors">.dev</span>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-xs font-bold text-slate-400 hover:text-sky-400 transition-colors uppercase tracking-[0.2em]">
                {link}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Resume Button */}
        <a 
          href="/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 border border-sky-500/50 text-sky-400 text-xs font-bold uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all rounded-sm"
        >
          <FileText size={14} />
          Resume
        </a>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030712] border-b border-white/10 p-8 flex flex-col gap-8 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-5">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-black uppercase tracking-widest text-slate-300" onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
          <a href="/resume.pdf" className="text-sm font-black uppercase tracking-widest text-sky-400">Resume</a>
        </div>
      )}
    </nav>
  );
};