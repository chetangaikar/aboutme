import { Briefcase, PenTool, Cloud, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services: { icon: typeof Briefcase; title: string; description?: string }[] = [
  { icon: Briefcase, title: "IT Consulting" },
  { icon: PenTool, title: "Engineering Design" },
  { icon: Cloud, title: "Cloud Management", description: "Cloud security and compliance readiness: SOC 2 and ISO 27001 controls for cloud infrastructure." },
  { icon: ShieldCheck, title: "Information Security" },
];

const Services = () => (
  <section className="py-24 bg-gradient-to-br from-brand-tint to-brand-tint-cool">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-brand-muted bg-clip-text text-transparent">
          Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-brand to-brand-accent mx-auto mb-16"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-border flex flex-col items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-brand to-brand-accent rounded-xl flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              {s.description && (
                <p className="mt-3 text-sm text-brand-muted leading-relaxed">{s.description}</p>
              )}
            </div>
          ))}
        </div>

        <p className="text-lg text-brand-muted mb-6">Starting from $50/hr. Contact for detailed rates.</p>
        <Button asChild size="lg" className="bg-gradient-to-r from-brand to-brand-accent hover:from-brand-dark hover:to-brand-accent-dark text-white px-8 rounded-full font-semibold">
          <a href="mailto:chetangaikar@gmail.com">
            Discuss your project <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Services;
