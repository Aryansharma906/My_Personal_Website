import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles, FileText, Mail, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import socials from "@/data/socials";
import profile from "@/data/profile";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "./cv.pdf";
    link.download = "Aryan_Sharma_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-full text-sm font-medium text-primary animate-fade-in hover:border-primary/60 transition-colors">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              Available for projects
            </div>

            {/* Main heading with enhanced styling */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Hey, I'm <br />
                <span className="text-primary relative inline-block hover:scale-105 transition-transform duration-300">
                  {profile.name}
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 5 100 2 150 2C200 2 250 5 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
                  </svg>
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl text-foreground/70">
                <span className="font-semibold text-foreground">Full-Stack Developer</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>AR/WebXR Pioneer</span>
              </div>
            </div>

            {/* Enhanced Quote */}
            <blockquote className="relative pl-6 border-l-4 border-primary/50 py-3 hover:border-primary transition-colors">
              <p className="text-lg sm:text-xl text-foreground/70 italic font-light">
                "Patterns emerge at the intersection of code, creativity, and cognition. I build experiences that resonate."
              </p>
            </blockquote>

            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              A polymath full-stack developer with <span className="font-semibold text-foreground">5+ years of experience</span> building AI-powered web experiences, AR/WebXR innovations, and intelligent automation pipelines. Combining TypeScript precision with strategic thinking and creative vision.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-base px-8 shadow-lg hover:shadow-xl hover:scale-105 group font-semibold"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span>Get In Touch</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300 text-base px-8 group font-semibold"
                onClick={downloadCV}
              >
                <FileText className="mr-2 w-4 h-4" />
                Download CV
                <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8">
              {socials.slice(0, 4).map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative bg-card border border-border rounded-xl p-4 hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{s.label}</p>
                        <p className="text-xs text-muted-foreground">{s.subtitle}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Profile image with modern design */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in hero-image-delay px-2">
            <div className="relative w-full max-w-sm lg:max-w-none">
              {/* Decorative elements - hidden on mobile */}
              <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 border-4 border-primary/20 rounded-3xl rotate-12" />
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-3xl -rotate-6" />

              {/* Main image container */}
              <div className="relative group">
                {/* Background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-[3rem] rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Colored background blob */}
                <div className="absolute -inset-4 bg-primary/20 rounded-[3.5rem] -rotate-6 blur-xl opacity-50" />

                {/* Image wrapper */}
                <div className="relative bg-gradient-to-br from-primary via-accent to-primary p-1 rounded-[2rem] sm:rounded-[3rem] shadow-2xl">
                  <div className="bg-background rounded-[1.85rem] sm:rounded-[2.85rem] p-1">
                    <img
                      src={profileImg}
                      alt="Aryan Sharma - Computer Science Student"
                      className="w-56 h-64 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-[1.7rem] sm:rounded-[2.7rem] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-primary text-primary-foreground px-4 py-2 sm:px-6 sm:py-3 rounded-2xl shadow-lg animate-float text-xs sm:text-sm">
                  <p className="font-bold">5+ Years</p>
                  <p className="opacity-90">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
