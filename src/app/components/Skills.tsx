import { Code2, Palette, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Systems & Backend Engineering",
      color: "from-blue-500 to-indigo-600",
      skills: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      icon: Palette,
      title: "Machine Learning & Data",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Python", level: 80 },
        { name: "TensorFlow / Keras", level: 75 },
        { name: "Flask (API Layer)", level: 75 },
        { name: "ML Pipeline Design", level: 70 },
        { name: "React Native", level: 75 },
        { name: "Data Preprocessing", level: 70 },
      ],
    },
    {
      icon: Wrench,
      title: "Architecture & Tooling",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "RESTful API Design", level: 85 },
        { name: "GraphQL", level: 70 },
        { name: "Git & GitHub", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 80 },
        { name: "Vite / Webpack", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent pb-3">
            Skills & Competencies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Structured technical expertise across systems engineering, machine learning integration, and scalable backend development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Context */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h4 className="text-xl font-bold text-slate-900 mb-4">Engineering Philosophy</h4>
          <p className="text-slate-700 leading-relaxed">
            My technical competencies have been developed through end-to-end system engineering, from designing relational database schemas and scalable REST APIs to implementing model inference pipelines and distributed mobile backends. I approach software not as isolated features, but as interconnected systems where <strong>architectural decisions</strong>, <strong>performance constraints</strong>, and <strong>data flow design</strong> determine long-term reliability and scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
