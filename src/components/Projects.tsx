
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure",
      description: "Designed and implemented a hybrid cloud architecture spanning AWS and Azure with automated failover, reducing downtime by 99.9% and cutting infrastructure costs by 30%.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600",
      technologies: ["AWS", "Azure", "Terraform", "Kubernetes"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Built comprehensive CI/CD pipelines using Jenkins and GitLab CI, enabling automated testing and deployment for 50+ microservices with zero-downtime deployments.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800&h=600",
      technologies: ["Jenkins", "Docker", "GitLab CI", "Ansible"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Container Orchestration Platform",
      description: "Architected a scalable Kubernetes platform supporting 200+ containers across multiple environments with automated scaling, monitoring, and logging solutions.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800&h=600",
      technologies: ["Kubernetes", "Docker", "Prometheus", "Grafana"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Infrastructure as Code",
      description: "Developed comprehensive IaC solutions using Terraform, managing infrastructure for 15+ environments with version control, automated provisioning, and compliance checks.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600",
      technologies: ["Terraform", "AWS", "Azure", "Vault"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Monitoring & Alerting System",
      description: "Implemented enterprise-grade monitoring solution with Prometheus, Grafana, and ELK stack, providing real-time insights and proactive alerting for critical systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "AlertManager"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Security & Compliance Automation",
      description: "Developed automated security scanning and compliance checking pipelines, ensuring SOC2 and PCI compliance while maintaining rapid deployment cycles.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800&h=600",
      technologies: ["Vault", "Ansible", "Security Scanning", "Compliance"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Infrastructure solutions that have transformed organizations and accelerated development workflows
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Case Study
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
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
