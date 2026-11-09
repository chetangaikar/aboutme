import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
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
      <Stats />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 bg-foreground text-brand-on-dark text-center text-sm">
        © 2026 Chetan Gaikar. Built with Lovable.
      </footer>
    </div>
  );
};

export default Index;
