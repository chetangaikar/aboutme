import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgGovCloud from "@/assets/project-gov-cloud.jpg";
import imgCostOpt from "@/assets/project-cost-optimisation.jpg";
import imgEcsEks from "@/assets/project-ecs-eks.jpg";
import imgCicd from "@/assets/project-cicd.jpg";
import imgAwsNorm from "@/assets/project-aws-normalisation.jpg";
import imgOpenSource from "@/assets/project-open-source.jpg";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Government cloud infrastructure (UAE)",
    description: "Built, secured, and optimised AWS infrastructure for a UAE government project, reducing turnaround time and operating expenses.",
    image: imgGovCloud,
    technologies: ["AWS", "Terraform", "Packer"],
  },
  {
    title: "Cost optimisation for an analytics platform",
    description: "Reduced operating expenses by approximately 40% through infrastructure and platform optimisation.",
    image: imgCostOpt,
    technologies: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    title: "ECS to EKS modernisation",
    description: "Proof of concept migrating containerised workloads from Amazon ECS to Amazon EKS, benchmarking provisioning, autoscaling, and deployments.",
    image: imgEcsEks,
    technologies: ["EKS", "ECS", "Kubernetes"],
  },
  {
    title: "CI/CD pipeline automation",
    description: "Jenkins, GitLab CI, AWS CodePipeline, and Azure DevOps pipelines with approval gates and environment-based release controls.",
    image: imgCicd,
    technologies: ["Jenkins", "GitLab CI", "Azure DevOps"],
  },
  {
    title: "AWS account normalisation",
    description: "Standardised an AWS account with 600+ resources, improving reliability and reducing operating expenses.",
    image: imgAwsNorm,
    technologies: ["AWS", "CloudWatch", "Lambda"],
  },
  {
    title: "Open-source work",
    description: "TerraformSBB (reusable Terraform building blocks), awsRemedies (Python and Lambda utilities), and awsArchDiagram.",
    image: imgOpenSource,
    technologies: ["Terraform", "Python", "AWS"],
    links: [
      { label: "TerraformSBB", href: "https://github.com/chetangaikar/awsTerraformSBB" },
      { label: "awsRemedies", href: "https://github.com/chetangaikar/awsRemedies" },
      { label: "awsArchDiagram", href: "https://github.com/chetangaikar/awsArchDiagram" },
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-brand-muted bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand to-brand-accent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-brand-border hover:scale-105 flex flex-col">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} loading="lazy" className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-brand-muted mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-brand-tint to-brand-tint-cool text-brand-dark rounded-full text-xs font-medium border border-brand-border">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.links.map((l) => (
                        <Button key={l.href} asChild size="sm" variant="outline">
                          <a href={l.href} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View code: {l.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
