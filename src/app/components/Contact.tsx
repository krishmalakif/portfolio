import { Mail, Phone, Linkedin, MapPin, Send, Github } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishmalakif@gmail.com",
      href: "mailto:krishmalakif@gmail.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/krishmal-akif",
      href: "https://linkedin.com/in/krishmal-akif",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/krishmalakif",
      href: "https://github.com/krishmalakif",
      color: "from-slate-700 to-slate-900",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 349 1122432",
      href: "tel:+923491122432",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: null,
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Open to discussing projects, collaboration, or opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div key={index}>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        {contact.label}
                      </p>
                      <p className="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg border border-slate-100">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center`}
                    >
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        {contact.label}
                      </p>
                      <p className="text-lg font-medium text-slate-900">{contact.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Message Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-xl text-white flex flex-col justify-center">
            <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-6">
              <Send className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              I am focused on building scalable, well-architected software systems and am open to discussing projects, technical collaboration, or professional opportunities.
            </p>
          </div>
        </div>

        {/* Closing Statement - REMOVED */}
      </div>
    </section>
  );
}
