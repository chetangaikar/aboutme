const roles = [
  {
    title: "Independent DevOps Consultant", company: "Remote, based in Dubai, UAE", period: "March 2026 to present",
    points: [
      "Consulting on cloud infrastructure, CI/CD, and Kubernetes platforms for clients.",
      "Open to full-time opportunities.",
    ],
  },
  {
    title: "Lead DevOps Engineer", company: "Onov8 LLC FZ, Dubai", period: "March 2025 to March 2026",
    points: [
      "Led a team of 5 DevOps engineers through platform delivery and design reviews.",
      "Designed and managed AWS ECS infrastructure with Terraform and Packer, using autoscaling spot workloads to control cost.",
      "Built Jenkins CI/CD pipelines for multiple applications.",
      "Led a proof of concept to migrate containerised workloads from ECS to Amazon EKS, benchmarking provisioning and autoscaling.",
      "Introduced Grafana dashboards and PagerDuty on-call escalation.",
      "Ran security reviews across infrastructure, pipelines, and source code, with remediation plans.",
      "Built and optimised infrastructure for a UAE government project.",
    ],
  },
  {
    title: "Independent DevOps Consultant", company: "Remote", period: "2023 to 2025",
    points: [
      "Reduced operating expenses by approximately 40% for an analytics aggregation platform through infrastructure and platform optimisation.",
      "Built GitOps-driven CI/CD pipelines with GitLab CI and AWS CodePipeline.",
      "Ran EKS clusters: upgrades, node group autoscaling, and ECS to EKS migration of microservices.",
      "Provisioned Azure resource groups, storage, and networking with Terraform, with Azure DevOps multi-stage pipelines and deployment approvals.",
      "Performed SecOps audits on pipelines, runners, and cloud infrastructure.",
    ],
  },
  {
    title: "Senior DevOps Engineer", company: "JRNI, Mumbai", period: "2022 to 2023",
    points: [
      "Built Jenkins and CloudFormation CI/CD platforms, including Lambda integrations.",
      "Normalised an AWS account with 600+ resources, improving reliability and reducing operating expenses by approximately 5%.",
      "Automated audits across CloudWatch alerts, EBS, DynamoDB, EC2, and RDS backups.",
    ],
  },
  {
    title: "Lead DevOps Engineer", company: "Accrete.ai, Mumbai", period: "2021 to 2022",
    points: [
      "Introduced a GitOps-style branching and release strategy.",
      "Administered Linux production servers, monitoring, and security hardening.",
    ],
  },
  {
    title: "Senior DevOps Engineer", company: "NEC Software Solutions, Mumbai", period: "2019 to 2021",
    points: [
      "Designed Azure infrastructure with Terraform and ARM templates.",
      "Built multi-stage Azure DevOps YAML pipelines with approval gates.",
      "Mentored engineers and acted as de facto team lead on platform delivery.",
    ],
  },
  { title: "DevOps Engineer", company: "NEC Software Solutions, Mumbai", period: "2018 to 2019", points: [] },
  { title: "Software Engineer, Cloud Practitioner", company: "CloudManthan, Mumbai", period: "2016 to 2018", points: [] },
];

const Experience = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-brand-muted bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand to-brand-accent mx-auto mb-8"></div>
        </div>

        <ol className="relative border-l-2 border-brand-border ml-3 space-y-10">
          {roles.map((r, i) => (
            <li key={i} className="pl-8 relative">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-brand to-brand-accent"></span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="text-xl font-bold text-foreground">{r.title}</h3>
                <span className="text-sm font-medium text-brand-dark">{r.period}</span>
              </div>
              <p className="text-brand-muted mb-3">{r.company}</p>
              {r.points.length > 0 && (
                <ul className="list-disc pl-5 space-y-1 text-brand-muted">
                  {r.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Experience;
