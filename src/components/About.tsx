import { GraduationCap, Code2, Heart } from "lucide-react";
import profile from "@/data/profile";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 animate-fade-in">
            About <span className="text-gradient-bronze">Me</span>
          </h2>
          
          <div className="h-1 w-32 bg-gradient-bronze mx-auto mb-12 rounded-full" />

          {/* Bio */}
          <div className="prose prose-invert max-w-none mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm {profile.name}, a passionate Computer Science Engineering student with an unwavering 
              commitment to innovation and excellence. Inspired by visionaries like Mark Zuckerberg 
              and Elon Musk, I believe in the transformative power of technology to shape a better future.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My journey blends technical mastery with creative vision, bringing together the precision 
              of code and the harmony of music. With every project, I strive to build solutions that 
              don't just work—they inspire.
            </p>
          </div>

          {/* Education & Journey */}
          <div className="space-y-8">
            {/* Current Education */}
            <div className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-bronze p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-primary">Education</h3>
                  <p className="text-foreground/80 mb-2">
                    Currently pursuing <span className="text-accent font-semibold">12th Grade in Science Stream</span>
                  </p>
                  <p className="text-muted-foreground">
                    Preparing for Computer Science Engineering degree to deepen expertise in 
                    Data Science, AI, and Machine Learning
                  </p>
                </div>
              </div>
            </div>

            {/* Coding Journey */}
            <div className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-copper p-3 rounded-lg">
                  <Code2 className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-copper">The Journey</h3>
                  <p className="text-foreground/80 mb-4">
                    <span className="text-accent font-semibold">Five years of dedicated learning</span> that began during the pandemic
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📍 Started with <span className="text-primary">HTML & CSS</span> - building beautiful web interfaces</p>
                    <p>📍 Mastered <span className="text-primary">JavaScript</span> - bringing interactivity to life</p>
                    <p>📍 Explored <span className="text-primary">Python</span> - diving into data and automation</p>
                    <p>📍 Specialized in <span className="text-primary">Machine Learning</span> - teaching machines to think</p>
                    <p>📍 Evolved into <span className="text-primary">Full Stack Development</span> - creating complete solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ background: 'linear-gradient(135deg, hsl(45 85% 45%), hsl(30 45% 45%))' }}>
                  <Heart className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-accent">Vision & Philosophy</h3>
                  <p className="text-foreground/80 italic">
                    "Technology isn't just about solving problems—it's about creating possibilities. 
                    I'm driven by the belief that innovative, thoughtful solutions can transform lives 
                    and build a future where technology serves humanity's greatest aspirations."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
