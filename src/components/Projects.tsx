import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Volume2, Gamepad2, Heart } from "lucide-react";

const projects = [
  {
    icon: Heart,
    title: "Cardiac Health Prediction System",
    description: "Advanced machine learning solution leveraging pattern recognition to predict cardiac events with remarkable accuracy. Features personalized prevention algorithms and lifestyle recommendations powered by data-driven insights.",
    technologies: ["Python", "Machine Learning", "Healthcare AI", "Data Analysis"],
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    gradient: "from-red-500/20 to-pink-500/20",
    psychometricInsight: "Demonstrates pattern recognition (95) through predictive modeling and systems thinking in healthcare applications"
  },
  {
    icon: Cloud,
    title: "AR/WebXR Interactive Experience",
    description: "Innovative augmented reality web experience showcasing spatial computing capabilities. Merges TypeScript precision with immersive UI design, enabling users to interact with 3D content in browser-native environments.",
    technologies: ["WebXR", "TypeScript", "React Three Fiber", "Interactive Design"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    gradient: "from-blue-500/20 to-cyan-500/20",
    psychometricInsight: "Exemplifies creative synthesis (94) by bridging web development, spatial design, and cognitive UX architecture"
  },
  {
    icon: Volume2,
    title: "Speech Accessibility & NLP Tool",
    description: "Human-centered accessibility solution powered by natural language processing. Transforms speech into phonetic precision, enabling improved communication for speech-impaired users through intelligent analysis and adaptive feedback.",
    technologies: ["NLP", "Python", "Accessibility", "Audio Processing"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
    gradient: "from-purple-500/20 to-indigo-500/20",
    psychometricInsight: "Reflects emotional resilience (88) and strategic foresight (90) in designing inclusive technology solutions"
  },
  {
    icon: Gamepad2,
    title: "Interactive Game Framework",
    description: "Sophisticated browser-based gaming system featuring micro-interactions, state management, and smooth animations. Demonstrates mastery of responsive design and performance optimization for engaging user experiences.",
    technologies: ["JavaScript", "HTML5/Canvas", "Game Design", "Animation"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    gradient: "from-green-500/20 to-emerald-500/20",
    psychometricInsight: "Shows creative synthesis through balancing technical constraints with engaging user interaction design"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 animate-fade-in">
            Featured <span className="text-gradient-bronze">Projects</span>
          </h2>

          <div className="h-1 w-32 bg-gradient-bronze mx-auto mb-4 rounded-full" />

          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Innovative solutions combining creativity, technical expertise, and real-world impact
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={project.title}
                  className={`overflow-hidden border-2 hover-lift animate-fade-in group ${
                    project.featured
                      ? 'border-primary shadow-glow col-span-1 md:col-span-2'
                      : 'border-border'
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className={project.featured ? 'md:flex flex-col md:flex-row' : ''}>
                    <div className={`relative ${project.featured ? 'md:w-1/2' : 'w-full'} h-48 sm:h-64 overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover mix-blend-overlay opacity-80 transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className={`${project.featured ? 'bg-gradient-bronze' : 'bg-card/80 backdrop-blur-sm'} p-3 rounded-lg`}>
                          <Icon className={`w-8 h-8 ${project.featured ? 'text-background' : 'text-primary'}`} />
                        </div>
                      </div>
                    </div>

                    <div className={`p-6 ${project.featured ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className={`text-2xl font-heading font-semibold ${
                          project.featured ? 'text-gradient-bronze' : 'text-foreground'
                        }`}>
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Badge className="bg-accent text-accent-foreground">
                            Featured
                          </Badge>
                        )}
                      </div>

                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className={`${
                              project.featured
                                ? 'border-primary text-primary hover:bg-primary/10'
                                : 'border-muted-foreground/30 text-muted-foreground hover:bg-muted-foreground/10'
                            }`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {project.psychometricInsight && (
                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 text-sm text-foreground/75 italic group-hover:bg-primary/10 transition-colors">
                          <span className="text-primary/80 font-semibold">Cognitive insight:</span> {project.psychometricInsight}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
