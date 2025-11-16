import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import socials from "@/data/socials";
import profile from "@/data/profile";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Available for hire
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Hello, I'm <br />
                <span className="text-primary relative inline-block">
                  {profile.name}
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 5 100 2 150 2C200 2 250 5 298 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
                  </svg>
                </span>
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 text-xl sm:text-2xl text-foreground/70">
                <span className="font-semibold text-foreground">Computer Science Student</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                <span>AI/ML Enthusiast</span>
              </div>
            </div>
            
            {/* Quote */}
            <blockquote className="relative pl-6 border-l-4 border-primary/30 py-2">
              <p className="text-lg sm:text-xl text-foreground/60 italic">
                "Code in one hand, melody in the other — building tomorrow."
              </p>
            </blockquote>
            
            {/* Description */}
            <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
              A Creative Computer Science Student With More Than <span className="font-semibold text-foreground">5 Years Of Experience</span> Who Is Always Excited To Work With You To Creating Wonderful Visual Designs!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 transition-all duration-300 text-base px-8 shadow-lg hover:shadow-xl hover:scale-105 group"
                onClick={scrollToAbout}
              >
                Hire Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-foreground/15 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-base px-8 group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
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
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in px-2" style={{ animationDelay: '0.2s' }}>
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
