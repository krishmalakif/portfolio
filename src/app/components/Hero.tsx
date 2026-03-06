import { Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  isExportMode?: boolean;
}

export function Hero({ isExportMode = false }: HeroProps) {
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-6 relative overflow-hidden ${
        isExportMode ? "pt-8" : "pt-20"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-50"></div>
            <img
              src="/portfolio/profilepic.jpg"
              alt="Krishmal Akif"
              className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
            Krishmal Akif
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-4">
          Full-Stack Developer | UI/UX Enthusiast
        </p>

        <p className="text-lg text-slate-500 mb-4">
          Computer Science Graduate | Pakistan
        </p>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg text-slate-700 leading-relaxed">
            Building scalable web applications with focus on user experience and clean code.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg border-2 border-slate-300 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="/portfolio/resume.pdf"
            download
            className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-900 hover:shadow-lg transition-all duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/krishmalakif"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-900 hover:text-white transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/krishmal-akif"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:krishmalakif@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-indigo-600 hover:text-white transition-all duration-300"
            aria-label="Email Contact"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
