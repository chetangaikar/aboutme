import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { icon: Mail, label: "Email", value: "chetangaikar@gmail.com", href: "mailto:chetangaikar@gmail.com" },
  { icon: Phone, label: "Phone (WhatsApp)", value: "+971 508447993", href: "https://wa.me/971508447993" },
  { icon: MapPin, label: "Location", value: "Dubai, UAE" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/chetangaikar", href: "https://linkedin.com/in/chetangaikar" },
  { icon: Github, label: "GitHub", value: "github.com/chetangaikar", href: "https://github.com/chetangaikar" },
];

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 grid sm:grid-cols-2 gap-6">
            {items.map((it) => {
              const content = (
                <>
                  <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <it.icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium">{it.label}</p>
                    <p className="text-gray-300 break-words">{it.value}</p>
                  </div>
                </>
              );
              return it.href ? (
                <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                  {content}
                </a>
              ) : (
                <div key={it.label} className="flex items-center space-x-4">{content}</div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold">
              <a href="mailto:chetangaikar@gmail.com">Send an email</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
