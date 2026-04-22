import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const isExportMode = new URLSearchParams(window.location.search).get("export") === "1";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ${isExportMode ? "export-mode" : ""}`}>
      {/* Navigation */}
      {!isExportMode && <Navigation scrolled={scrolled} />}

      {/* Main Content */}
      <main>
        <Hero isExportMode={isExportMode} />
        <About />
        <Skills />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      {!isExportMode && <footer className="bg-slate-900 text-white py-8 no-print border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm leading-relaxed">
            © 2026 Krishmal Akif.
          </p>
          <p className="text-slate-300 text-sm font-medium mt-1 leading-relaxed">
            Software Engineer | Distributed Systems &amp; Scalable Backends
          </p>
        </div>
      </footer>}
    </div>
  );
}