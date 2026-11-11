import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import photoAsset from "@/assets/chetan-gaikar-photo.jpg.asset.json";

const photoUrl = import.meta.env.MODE === "github-pages"
  ? `${import.meta.env.BASE_URL}assets/chetan-gaikar-photo.jpg`
  : photoAsset.url;

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-tint via-background to-brand-tint-cool relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-brand/10 to-brand-accent/10 backdrop-blur-3xl"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-brand-light/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-accent-light/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-8">
            <div className="w-44 h-44 md:w-56 md:h-56 shrink-0 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-brand to-brand-accent p-1 shadow-2xl animate-scale-in">
                <img src={photoUrl} alt="Chetan Gaikar" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="mb-4 animate-fade-in">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-border-cool bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-accent-dark">
                  <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
                  Open to full-time opportunities
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold pb-2 bg-gradient-to-r from-foreground via-brand-dark to-brand-accent-dark bg-clip-text text-transparent animate-fade-in">
                Chetan Gaikar
              </h1>
            </div>
          </div>

          <p className="text-xl md:text-3xl text-brand-muted mb-4 animate-fade-in delay-300">
            DevOps Lead | Cloud Infrastructure & Site Reliability Engineering
          </p>

          <p className="text-base md:text-lg text-brand-muted mb-4 animate-fade-in">
            UAE & India. Available for remote work.
          </p>

          <p className="text-lg text-brand-muted mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
            9+ years designing, building, and operating cloud infrastructure on AWS and Azure. I lead DevOps teams, build CI/CD pipelines, and run Kubernetes and infrastructure as code (Terraform) for secure, reliable delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
            <Button asChild size="lg" className="bg-gradient-to-r from-brand to-brand-accent hover:from-brand-dark hover:to-brand-accent-dark text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="mailto:chetangaikar@gmail.com">
                Let's collaborate
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-2 border-brand-border px-8 py-4 rounded-full text-lg font-semibold text-brand-dark hover:bg-brand-tint transition-all duration-300 hover:scale-105">
              <a href={`${import.meta.env.BASE_URL}cv.pdf`} download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
