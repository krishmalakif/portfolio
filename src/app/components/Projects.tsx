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
      tagline: "Interactive Streaming Platform",
      description:
        "Modern streaming platform built with Next.js and React, emphasizing responsive design and seamless user experience across devices.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "API Integration"],
      features: [
        "Component-based architecture for UI consistency",
        "Responsive layouts adapting to all screen sizes",
        "Dynamic state management for smooth interactions",
        "Optimized API integration for fast content delivery",
      ],
      hciRelevance:
        "Restructured interface using grouped sections and clearer hierarchy to reduce cognitive load. Focused on minimizing user decisions at any given moment.",
      gradient: "from-blue-600 to-indigo-600",
      link: "https://cheapstreamtv.com/",
    },
    {
      title: "NAAC-USA Website",
      tagline: "Content-Focused Web Platform",
      description:
        "Structured content platform built with core web technologies, emphasizing semantic markup and accessible navigation.",
      technologies: ["HTML5", "Responsive Design", "JavaScript", "PHP", "CSS3"],
      features: [
        "Semantic HTML structure for accessibility",
        "Custom interactive behaviors with vanilla JavaScript",
        "Mobile-first responsive design approach",
        "Intuitive navigation and content hierarchy",
      ],
      hciRelevance:
        "Focused on semantic markup to directly impact how people understand and interact with the interface. Information structure drives navigation patterns.",
      gradient: "from-purple-600 to-pink-600",
      link: "https://nacc-usa.org/",
    },
    {
      title: "EN Admin Dashboard",
      tagline: "Data Management Interface",
      description:
        "Administrative dashboard using React and Material UI, designed for efficient data workflows and reducing cognitive load for complex tasks.",
      technologies: ["React.js", "Material UI", "PostgreSQL", "Node.js", "GraphQL"],
      features: [
        "Modular component design for workflow efficiency",
        "Real-time UI updates based on data changes",
        "Advanced state management for complex interactions",
        "GraphQL integration for optimized data fetching",
      ],
      hciRelevance:
        "Designed for predictability. Similar actions behave consistently. Information grouped by task rather than data type to match how administrators think.",
      gradient: "from-green-600 to-teal-600",
      status: "Ongoing Project",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent pb-3">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Practical applications of web development with focus on user experience
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

        {/* Projects Philosophy */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
          <h4 className="text-2xl font-bold mb-4">Development Approach</h4>
          <p className="text-blue-100 leading-relaxed">
            These projects represent evolution from focusing purely on technical implementation to prioritizing user needs and accessible experiences. Each taught me that great software is not just about clean code. It is about understanding human behavior.
          </p>
        </div>
      </div>
    </section>
  );
}
