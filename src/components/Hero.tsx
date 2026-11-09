import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-scale-in">
                CG
              </div>
              <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-br from-blue-500/30 to-purple-600/30"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent animate-fade-in">
            Chetan Gaikar
          </h1>

          <p className="text-xl md:text-3xl text-gray-600 mb-4 animate-fade-in delay-300">
            DevOps Lead | Cloud Infrastructure & Site Reliability Engineering
          </p>

          <p className="text-base md:text-lg text-gray-500 mb-4 animate-fade-in">
            Dubai, UAE. Available for remote work.
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
            9+ years designing, building, and operating cloud infrastructure on AWS and Azure. I lead DevOps teams, build CI/CD pipelines, and run Kubernetes and infrastructure as code (Terraform) for secure, reliable delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href="mailto:chetangaikar@gmail.com">
                Let's collaborate
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-2 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              <a href="/cv.pdf" download>
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
