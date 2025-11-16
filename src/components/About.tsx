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
              I'm {profile.name}, a full-stack developer and AR/WebXR innovator with an exceptional talent for pattern recognition and strategic foresight. My approach combines metacognitive precision with creative synthesis—I don't just solve problems, I architect possibilities through intelligent design and technological innovation.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Over 5+ years, I've evolved from web fundamentals through AI/ML, no-code automation, and now into AR/WebXR experiences. This journey reflects my core philosophy: technology is a mirror of cognition. The most powerful systems emerge when code, creativity, and cognitive science intersect.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              My psychometric profile reveals exceptional pattern recognition (95), creative synthesis (94), and strategic foresight (90). These strengths enable me to identify hidden connections, anticipate future needs, and craft solutions that resonate on multiple levels—from technical elegance to user delight.
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
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-primary">Education & Specialization</h3>
                  <p className="text-foreground/80 mb-2">
                    <span className="text-accent font-semibold">Full-Stack Development</span>, <span className="text-accent font-semibold">AR/WebXR</span>, and <span className="text-accent font-semibold">AI/ML Integration</span>
                  </p>
                  <p className="text-muted-foreground">
                    Self-directed deep learning across TypeScript, React, Node.js, Python, prompt engineering,
                    no-code automation, and emerging spatial computing technologies
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
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-copper">Evolution & Mastery</h3>
                  <p className="text-foreground/80 mb-4">
                    <span className="text-accent font-semibold">5+ years of strategic learning</span> reflecting cognitive expansion and deliberate skill integration
                  </p>
                  <div className="space-y-2 text-muted-foreground">
                    <p>🎯 Foundation: <span className="text-primary">HTML/CSS/JavaScript</span> - visual-interactive fundamentals</p>
                    <p>🎯 Depth: <span className="text-primary">Python & Data Science</span> - analytical thinking and pattern recognition</p>
                    <p>🎯 Scale: <span className="text-primary">Full-Stack & TypeScript</span> - architectural precision and type safety</p>
                    <p>🎯 Innovation: <span className="text-primary">AI/ML & No-Code Workflows</span> - augmented intelligence pipelines</p>
                    <p>🎯 Frontier: <span className="text-primary">AR/WebXR & Spatial Computing</span> - next-generation interactive experiences</p>
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
                  <h3 className="text-2xl font-heading font-semibold mb-2 text-accent">Philosophy & Mission</h3>
                  <p className="text-foreground/80 italic mb-3">
                    "The most elegant solutions emerge from the intersection of pattern recognition, strategic foresight, and human-centered design. I build technology that doesn't just function—it resonates."
                  </p>
                  <p className="text-foreground/75 text-sm">
                    My mission: Architect AI-powered, AR/WebXR-enhanced experiences that amplify human cognition, creativity, and connection. Each project is a meditation on how code, design, and consciousness converge to shape tomorrow.
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
