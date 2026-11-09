import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        © 2026 Chetan Gaikar. Built with Lovable.
      </footer>
    </div>
  );
};

export default Index;
