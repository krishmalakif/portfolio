import { GraduationCap, Target, Lightbulb, Users, Code2, Palette, Zap } from "lucide-react";

export function About() {
  const motivations = [
    {
      icon: Target,
      title: "Distributed Systems",
      description: "Designing fault-tolerant, scalable architectures that maintain consistency and performance under real-world load"
    },
    {
      icon: Lightbulb,
      title: "Machine Learning Integration",
      description: "Implementing end-to-end model pipelines, from data preprocessing and training to optimized inference and deployment"
    },
    {
      icon: Users,
      title: "Scalable Backend Design",
      description: "Engineering modular, maintainable server-side systems with a focus on reliability, performance, and clean API contracts"
    }
  ];

  const currentWork = [
    {
      icon: Code2,
      title: "Engineering",
      items: ["Scalable Next.js + Node.js systems", "RESTful and GraphQL API design", "Modular full-stack architectures"]
    },
    {
      icon: Palette,
      title: "Implementing",
      items: ["Model inference pipelines with TensorFlow", "React Native cross-platform applications", "Admin systems with role-based access control"]
    },
    {
      icon: Zap,
      title: "Researching",
      items: ["Distributed systems theory", "Scalable backend deployment strategies", "Backend performance optimization"]
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent pb-3">
            Background
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From systems engineering to scalable backends, building with architectural intent
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Academic Background</h3>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-slate-800">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-slate-600">Virtual University, Pakistan</p>
              <p className="text-slate-500 mt-4 leading-relaxed">
                Developed rigorous foundations in algorithms, data structures, software engineering principles, and systems design, with applied experience across full-stack and data-integrated architectures.
              </p>
            </div>
          </div>

          {/* Focus Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-white">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Current Focus</h3>
            <p className="text-blue-50 leading-relaxed">
              Engineering production systems revealed that the hardest problems are architectural. How components communicate, how data flows reliably at scale, and how trained models integrate into real-world pipelines. This shifted my focus from feature implementation to systems-level thinking and distributed design.
            </p>
          </div>
        </div>

        {/* Currently Working On */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Currently Working On</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {currentWork.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <ul className="space-y-2">
                  {item.items.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Story */}
        <div className="bg-white rounded-2xl p-10 shadow-lg mb-16 border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">From Implementation to Systems Thinking</h3>
          <div className="max-w-4xl text-slate-700 leading-relaxed space-y-5 text-lg" style={{lineHeight: '1.8'}}>
            <p>
              Engineering production systems with <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong> demonstrated that scalability and reliability are architectural decisions, not afterthoughts. Each project reinforced the importance of designing for modularity, fault tolerance, and maintainability from the ground up.
            </p>
            <p>
              Developing an end-to-end classification system, from dataset preprocessing and model training with <strong>TensorFlow/Keras</strong> to mobile deployment via a <strong>Flask</strong> inference API, deepened my understanding of how machine learning integrates into distributed, real-world software architectures.
            </p>
          </div>
        </div>

        {/* Research Interests */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-10 text-center">Research &amp; Engineering Interests</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {motivations.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed" style={{lineHeight: '1.7'}}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
