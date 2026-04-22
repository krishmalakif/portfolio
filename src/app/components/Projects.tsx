import { ExternalLink, Lightbulb, Github, ChevronDown } from "lucide-react";
import React from "react";

interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  hciRelevance: string;
  gradient: string;
  link?: string;
  github?: string;
  status?: string;
  image?: string;
}

export function Projects() {
  const [expandedTech, setExpandedTech] = React.useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "CheapStreamTV",
      tagline: "Scalable Streaming Platform",
      description:
        "Engineered a high-performance streaming platform using Next.js and React, with a component-driven architecture optimized for responsiveness, fast content delivery, and consistent state management across dynamic data sources.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "API Integration"],
      features: [
        "Component-based architecture for UI consistency",
        "Responsive layouts adapting to all screen sizes",
        "Dynamic state management for smooth interactions",
        "Optimized API integration for fast content delivery",
      ],
      hciRelevance:
        "Designed the content delivery layer around minimizing latency and reducing interface complexity, grouping related content hierarchically to lower cognitive overhead and improve navigational efficiency.",
      gradient: "from-blue-600 to-indigo-600",
      link: "https://cheapstreamtv.com/",
    },
    {
      title: "NAAC-USA Website",
      tagline: "Structured Content & Information Architecture",
      description:
        "Designed and implemented a semantically structured web platform using core web technologies, with emphasis on accessible markup, mobile-first responsive layout, and modular JavaScript-driven interaction patterns.",
      technologies: ["HTML5", "Responsive Design", "JavaScript", "PHP", "CSS3"],
      features: [
        "Semantic HTML structure for accessibility",
        "Custom interactive behaviors with vanilla JavaScript",
        "Mobile-first responsive design approach",
        "Intuitive navigation and content hierarchy",
      ],
      hciRelevance:
        "Applied information architecture principles to structure content hierarchies that directly govern navigation flow. Semantic markup as a system-level decision affecting both accessibility and discoverability.",
      gradient: "from-purple-600 to-pink-600",
      link: "https://nacc-usa.org/",
    },
    {
      title: "DataAnchor",
      tagline: "Full-Stack Web & Admin Platform",
      description:
        "Architected a production-grade Next.js web platform integrated with a fully functional React-admin panel, implementing role-based access control, relational data management, and a modular REST API backend for scalable business operations.",
      technologies: ["Next.js", "React-Admin", "Node.js", "TypeScript", "REST API"],
      features: [
        "Next.js frontend with optimized performance",
        "React-admin panel for full data management",
        "Role-based access and secure authentication",
        "Responsive design across all device sizes",
      ],
      hciRelevance:
        "Admin system architecture designed around operator task flows rather than raw data structure, reducing interaction complexity and improving throughput for high-frequency data management operations.",
      gradient: "from-green-600 to-teal-600",
      link: "https://dataanchor.ae/",
    },
  ];

  const fyp: Project = {
    title: "Leaf Disease Detection App",
    tagline: "Final Year Project: Full-Stack Mobile Application",
    description:
      "Designed and implemented a full-stack mobile system for automated leaf disease classification. The architecture spans a React Native client, a dual-backend layer (Node.js for application logic, Flask for model inference), and a TensorFlow/Keras convolutional model trained on a curated agricultural dataset, covering the complete pipeline from data preprocessing and model optimization to mobile deployment.",
    technologies: ["React Native", "Node.js", "Flask", "TensorFlow", "Keras", "Python"],
    features: [
      "ML-powered disease prediction from leaf images",
      "React Native cross-platform mobile app",
      "Node.js + Flask dual-backend architecture",
      "User auth, image upload & prediction history",
    ],
    hciRelevance:
      "Engineered the inference pipeline for low-latency mobile response. Model quantization and a decoupled Flask API layer ensure prediction throughput remains viable on resource-constrained devices, bridging the gap between research and production deployment.",
    gradient: "from-emerald-500 to-lime-500",
    github: "https://github.com/krishmalakif/Leaf-Disease-Detection-Mobile-App-",
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent pb-3">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Engineering systems across distributed web platforms, scalable backends, and applied model integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/90">{project.tagline}</p>
              </div>

              {/* Project Body */}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-700 leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(expandedTech === index ? project.technologies : project.technologies.slice(0, 3)).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <button
                        onClick={() => setExpandedTech(expandedTech === index ? null : index)}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium border border-blue-200 hover:bg-blue-100 transition-colors flex items-center gap-1"
                      >
                        {expandedTech === index ? 'Show Less' : 'More'}
                        <ChevronDown className={`w-3 h-3 transition-transform ${expandedTech === index ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Design Insight */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-600 mb-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-slate-700 text-sm leading-relaxed">{project.hciRelevance}</p>
                  </div>
                </div>

                {/* Links */}
                <div className="mt-auto">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Site
                    </a>
                  ) : (
                    <div className="w-full flex items-center justify-center px-4 py-2 bg-slate-100 text-slate-600 font-medium rounded-lg text-sm border border-slate-200">
                      {project.status}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final Year Project */}
        <div className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest rounded-full border border-emerald-300">
              Final Year Project
            </span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <div
            className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-emerald-300 hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row"
          >
            <div className={`bg-gradient-to-r ${fyp.gradient} p-6 text-white md:w-64 flex-shrink-0 flex flex-col justify-center`}>
              <h3 className="text-2xl font-bold mb-2">{fyp.title}</h3>
              <p className="text-white/90 text-sm">{fyp.tagline}</p>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-slate-700 leading-relaxed mb-4">{fyp.description}</p>
              <div className="mb-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {fyp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border-l-4 border-blue-600 mb-4">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 text-sm leading-relaxed">{fyp.hciRelevance}</p>
                </div>
              </div>
              <div className="mt-auto">
                <a
                  href={fyp.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-700 transition-all duration-300 text-sm"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Philosophy */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
          <h4 className="text-2xl font-bold mb-4">Engineering Approach</h4>
          <p className="text-blue-100 leading-relaxed">
            These projects represent a progression from feature-level implementation to systems-level engineering. Each one demanded deliberate decisions around architecture, data flow, scalability, and reliability. The final year project reflects an end-to-end engineering mindset, from dataset curation and model training to distributed backend design and mobile deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
