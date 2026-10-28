import { useState } from "react";
import { ArrowDown, Terminal, Cpu, Layout, Check, Copy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kamosworkemail@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:kamosworkemail@gmail.com";
    }
  };

  return (
    <section className="relative w-full flex items-center justify-center bg-white dark:bg-[#030712] px-6 lg:px-24 overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.05)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 z-[1] bg-gradient-to-b from-transparent to-white dark:to-[#030712] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: Bio & Actions */}
        <div className="order-2 md:order-1 w-full md:flex-1 min-w-0 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[0.95] uppercase">
            Kamogelo
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 italic">
              Mmopane
            </span>
          </h1>

          <p className="mt-6 mb-8 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed font-light max-w-lg text-left text-pretty">
            <strong className="font-semibold text-slate-900 dark:text-white">
              Full-stack developer{" "}
            </strong>
            currently building web systems for government and business. I
            specialize in{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">
              React, TypeScript
            </strong>
            , and{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">
              Node.js
            </strong>{" "}
            with{" "}
            <strong className="font-semibold text-slate-900 dark:text-white">
              PostgreSQL
            </strong>{" "}
            relational databases, robust unit testing, and Docker
            containerization.
          </p>

          {/* Clean Responsive Actions Container */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            {/* Action Buttons: Stacked and matched on mobile, inline on desktop */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-sky-500 text-black font-black text-xs uppercase tracking-widest border border-sky-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.2)] active:scale-95"
              >
                View projects
                <Layout size={13} className="opacity-80" />
              </a>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 font-mono text-xs uppercase tracking-wider border border-black/10 dark:border-white/10 hover:border-sky-500/50 hover:text-sky-500 transition-all duration-300 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-green-500" />
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      Copied
                    </span>
                  </>
                ) : (
                  <>
                    <Copy size={13} className="opacity-60" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Icons: Centered on mobile, aligned on desktop */}
            <div className="flex items-center justify-center gap-3 pt-1 sm:pt-0 sm:pl-2">
              <a
                href="https://github.com/KAMO333"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <FaGithub size={19} />
              </a>
              <a
                href="https://www.linkedin.com/in/kamogelommopane/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                <FaLinkedin size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image & Stats */}
        <div className="order-1 md:order-2 w-full max-w-[220px] sm:max-w-[250px] lg:max-w-[280px] shrink-0 flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] border border-black/10 dark:border-white/10 bg-slate-100 dark:bg-white/5 overflow-hidden">
            <img
              src="/assets/hero/heroImage.png"
              alt="Kamogelo Mmopane"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full grid grid-cols-2 divide-x divide-black/10 dark:divide-white/10 border-x border-b border-black/10 dark:border-white/10 py-2.5 bg-slate-50/50 dark:bg-white/[0.02]">
            <div className="flex flex-col items-center text-center px-2">
              <div className="flex items-center gap-1.5 text-sky-500 dark:text-sky-400"></div>
              <p className="text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-tight mt-0.5">
                Open to work
              </p>
            </div>

            <div className="flex flex-col items-center text-center px-2">
              <div className="flex items-center gap-1.5 text-indigo-500 dark:text-indigo-400"></div>
              <p className="text-slate-900 dark:text-white font-bold text-[10px] uppercase tracking-tight mt-0.5">
                Johannesburg, SA
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors hidden lg:block">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="p-1 inline-block animate-bounce"
        >
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
};
