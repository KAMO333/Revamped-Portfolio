import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-sky-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default App;