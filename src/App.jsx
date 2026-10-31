import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] text-slate-900 dark:text-white selection:bg-sky-500/30">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
