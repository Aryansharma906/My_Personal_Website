import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import AIChat from "@/components/AIChat";
import Hero from "@/components/Hero";
import ResumeHighlight from "@/components/ResumeHighlight";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Blog from "@/components/blog";
import Research from "@/components/research";
import Certificates from "@/components/Certificates";


const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <ResumeHighlight />
        <About />
        <Stats />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <FAQ />
        <Insights />
        <Blog />
        <Research />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <AIChat />
    </div>
  );
};

export default Index;
