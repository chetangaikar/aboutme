
const Skills = () => {
  const skillCategories = [
    {
      category: "Cloud Platforms",
      skills: [
        { name: "AWS", level: 95 },
        { name: "Azure", level: 90 },
        { name: "GCP", level: 75 },
        { name: "DigitalOcean", level: 80 }
      ]
    },
    {
      category: "Containerization & Orchestration",
      skills: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 90 },
        { name: "Docker Compose", level: 92 },
        { name: "Helm", level: 85 }
      ]
    },
    {
      category: "Infrastructure & Automation",
      skills: [
        { name: "Terraform", level: 90 },
        { name: "Ansible", level: 88 },
        { name: "Jenkins", level: 85 },
        { name: "GitLab CI", level: 82 }
      ]
    },
    {
      category: "Monitoring & Security",
      skills: [
        { name: "Prometheus", level: 88 },
        { name: "Grafana", level: 85 },
        { name: "ELK Stack", level: 80 },
        { name: "Vault", level: 75 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              9 years of experience with cutting-edge DevOps tools and cloud technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-gray-900">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
