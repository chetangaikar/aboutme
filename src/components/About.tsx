import { Cloud, Cog, Users, Mountain } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Users, title: "Team Leadership", description: "Led teams of up to 5 DevOps engineers through platform delivery and design reviews" },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Multi-environment AWS and Azure infrastructure for government and enterprise projects" },
    { icon: Cog, title: "CI/CD & Automation", description: "Jenkins, GitLab CI, AWS CodePipeline, and Azure DevOps pipelines with Terraform" },
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
                Lead DevOps Engineer with a background in cloud infrastructure, CI/CD automation, and team leadership. I have led teams of up to 5 engineers, reduced operating costs on production platforms, and built multi-environment infrastructure for government and enterprise projects in the UAE and internationally.
              </p>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Mountain className="w-5 h-5 text-blue-700" />
                  <h3 className="text-xl font-semibold text-gray-900">Beyond the terminal</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Advanced Open Water PADI certified diver. I love thrill and adventure: trekking and paragliding. The same habits carry over to infrastructure work: check your gear, plan for the worst conditions, and never skip the pre-flight check.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
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
