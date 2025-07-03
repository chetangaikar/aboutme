
import { Cloud, Cog, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Cloud Architecture",
      description: "Designing and implementing scalable cloud solutions on AWS and Azure"
    },
    {
      icon: Cog,
      title: "CI/CD & Automation",
      description: "Building robust deployment pipelines and infrastructure automation"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensuring high availability, scalability, and cost-effective operations"
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
                I'm a seasoned DevOps engineer with 9 years of hands-on experience in cloud infrastructure, 
                automation, and continuous delivery. My expertise spans across AWS and Azure platforms, with 
                deep knowledge in containerization technologies like Docker and Kubernetes.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm passionate about building resilient, scalable systems that enable teams to deploy faster 
                and more reliably. When I'm not optimizing infrastructure, you'll find me exploring new 
                cloud technologies, contributing to DevOps communities, or mentoring junior engineers.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"].map((tech) => (
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
