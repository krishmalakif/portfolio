import { ExternalLink, Lightbulb } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  features: string[];
  hciRelevance: string;
  gradient: string;
  link?: string;
  status?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "CheapStreamTV",
      tagline: "Interactive Streaming Platform",
      description:
        "A modern streaming platform built with Next.js, React, and Tailwind CSS, emphasizing responsive design and seamless user experience across devices.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "JavaScript", "API Integration"],
      features: [
        "Component-based architecture for UI consistency",
        "Responsive layouts adapting to all screen sizes",
        "Dynamic state management for smooth interactions",
        "Optimized API integration for fast content delivery",
      ],
      hciRelevance:
        "While designing this dashboard, I noticed that presenting too much data at once made navigation difficult. I restructured the interface using grouped sections and clearer hierarchy to make workflows more intuitive. The focus was on reducing the number of decisions users had to make at any given moment.",
      gradient: "from-blue-600 to-indigo-600",
      link: "https://cheapstreamtv.com/",
    },
    {
      title: "NAAC-USA Website",
      tagline: "Content-Focused Web Platform",
      description:
        "A structured content platform built with core web technologies (HTML, CSS, JavaScript, PHP), emphasizing semantic markup and accessible navigation.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Responsive Design"],
      features: [
        "Semantic HTML structure for accessibility",
        "Custom interactive behaviors with vanilla JavaScript",
        "Mobile-first responsive design approach",
        "Intuitive navigation and content hierarchy",
      ],
      hciRelevance:
        "Building without framework dependencies required careful attention to how information was structured and how users would navigate through content. I focused on semantic markup not just for technical reasons, but because it directly impacts how people understand and interact with the interface.",
      gradient: "from-purple-600 to-pink-600",
      link: "https://nacc-usa.org/",
    },
    {
      title: "EN Admin Dashboard",
      tagline: "Data Management Interface",
      description:
        "An administrative dashboard using React and Material UI, designed for efficient data workflows and reducing cognitive load for complex administrative tasks.",
      technologies: ["React.js", "Material UI", "GraphQL", "State Management"],
      features: [
        "Modular component design for workflow efficiency",
        "Real-time UI updates based on data changes",
        "Advanced state management for complex interactions",
        "GraphQL integration for optimized data fetching",
      ],
      hciRelevance:
        "This dashboard taught me that efficient workflows are not just about speed. They are about predictability. I designed the interface so that similar actions always behaved the same way, and information was grouped by task rather than by data type. The goal was to match the system's structure to how administrators actually think about their work.",
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

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-8 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-lg">{project.tagline}</p>
                    {project.status && (
                      <span className="inline-block mt-3 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-8">
                <p className="text-slate-700 text-lg leading-relaxed mb-6" style={{lineHeight: '1.8'}}>{project.description}</p>

                {/* Live Website Button */}
                {project.link && (
                  <div className="mb-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                      aria-label={`Visit ${project.title} live website`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Website
                    </a>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                    Key Features
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Design Insight */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-600 rounded-lg flex-shrink-0">
                      <Lightbulb className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Design Insight</h4>
                      <p className="text-slate-700 leading-relaxed" style={{lineHeight: '1.8'}}>{project.hciRelevance}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Philosophy */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-10 text-white">
          <h4 className="text-2xl font-bold mb-5">Development Approach</h4>
          <p className="text-blue-100 leading-relaxed text-lg" style={{lineHeight: '1.8', maxWidth: '85ch'}}>
            These projects represent my evolution as a developer. From focusing purely on technical
            implementation to prioritizing user needs, interaction design,
            and accessible experiences. Each project taught me that great software is not
            just about clean code. It is about understanding human behavior and designing systems that feel
            intuitive and natural.
          </p>
        </div>
      </div>
    </section>
  );
}
