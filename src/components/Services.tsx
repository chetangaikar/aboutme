import { Briefcase, PenTool, Cloud, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Briefcase, title: "IT Consulting" },
  { icon: PenTool, title: "Engineering Design" },
  { icon: Cloud, title: "Cloud Management" },
  { icon: ShieldCheck, title: "Information Security" },
];

const Services = () => (
  <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16"></div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
            </div>
          ))}
        </div>

        <p className="text-lg text-gray-600 mb-6">Starting from $50/hr. Contact for detailed rates.</p>
        <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 rounded-full font-semibold">
          <a href="mailto:chetangaikar@gmail.com">
            Discuss your project <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default Services;
