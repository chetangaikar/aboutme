
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring fast, efficient, and responsive applications"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate developer with over 5 years of experience in creating digital solutions 
                that make a difference. My journey started with a curiosity for how things work, and it has 
                evolved into a career dedicated to building exceptional user experiences.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in the power of 
                clean code, thoughtful design, and continuous learning.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
