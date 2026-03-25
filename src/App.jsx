import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact"; // 1. Import it

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-sky-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact /> {/* 2. Add it here */}
      </main>
    </div>
  );
}

export default App;
