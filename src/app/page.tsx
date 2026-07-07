import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Research from "@/components/sections/Research";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Skills />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
