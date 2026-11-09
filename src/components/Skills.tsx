const skillCategories = [
  { category: "Cloud", skills: ["AWS", "Microsoft Azure", "DigitalOcean"] },
  { category: "Infrastructure as code", skills: ["Terraform", "Terraform Cloud", "Packer", "Ansible", "CloudFormation", "ARM templates"] },
  { category: "CI/CD", skills: ["Jenkins", "GitLab CI", "AWS CodePipeline", "Azure DevOps", "GitHub Actions"] },
  { category: "Containers", skills: ["Kubernetes", "Amazon EKS", "Amazon ECS", "Docker", "Amazon ECR"] },
  { category: "Observability", skills: ["Grafana", "CloudWatch", "Azure Monitor", "Datadog", "PagerDuty"] },
  { category: "Security and identity", skills: ["IAM", "HashiCorp Vault", "Azure Key Vault", "Security reviews"] },
  { category: "Scripting", skills: ["Python", "Bash"] },
];

const Skills = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((c) => (
              <div key={c.category} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{c.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <span key={s} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                      {s}
                    </span>
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
