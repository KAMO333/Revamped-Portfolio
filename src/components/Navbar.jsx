import React, { useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Experience", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#030712]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-5 flex justify-between items-center">
        <a
          href="/"
          className="text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase group"
        >
          portfolio
          <span className="text-sky-500 group-hover:text-green-400 transition-colors">
            .dev
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-sky-400 transition-colors uppercase tracking-[0.2em]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <a
            href="/assets/resume/Kamogelo_Mmopane_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 bg-sky-500 text-black font-black text-[10px] uppercase tracking-[0.2em] border border-sky-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] active:scale-95"
          >
            <FileText size={12} />
            Resume_Access
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-slate-900 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu: normal document flow, no absolute positioning needed
          since the nav itself is fixed — this keeps the dropdown simple
          and immune to overflow/clipping issues at any width. */}
      {menuOpen && (
        <div className="w-full bg-white dark:bg-[#030712] border-t border-black/5 dark:border-white/5 p-8 flex flex-col gap-8 md:hidden shadow-2xl">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-black uppercase tracking-widest text-slate-700 dark:text-slate-300"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

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
