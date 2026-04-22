export function TechStack() {
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Framework" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI / Backend" },
    { name: "TensorFlow", category: "ML Framework" },
    { name: "Flask", category: "API Layer" },
    { name: "PostgreSQL", category: "Database" },
    { name: "GraphQL", category: "API" },
    { name: "React Native", category: "Mobile" },
    { name: "REST APIs", category: "Architecture" },
    { name: "Git", category: "Version Control" },
  ];

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Core Technology Stack</h3>
          <p className="text-slate-600">Technologies applied across distributed systems, AI pipelines, and scalable backend architectures</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-slate-200"
            >
              <p className="font-bold text-slate-900 mb-1">{tech.name}</p>
              <p className="text-xs text-slate-500 uppercase tracking-wide">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
