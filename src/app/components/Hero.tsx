
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
              src="/portfolio-website/uploads/profile pic.jpg"
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
          Full-Stack Developer exploring Human-Centered Systems
        </p>

        <p className="text-lg text-slate-500 mb-4">
          Computer Science Graduate | Pakistan
        </p>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg text-slate-700 leading-relaxed">
            I build scalable web applications and increasingly focus on how people interact with the systems behind them.
          </p>
        </div>

      </div>
    </section>
  );
}
