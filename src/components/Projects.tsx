import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Volume2, Gamepad2, Heart } from "lucide-react";

const projects = [
  {
    icon: Heart,
    title: "Cardiac Health Prediction System",
    description: "Advanced machine learning solution that predicts cardiac events based on comprehensive medical history. Provides personalized prevention tips and lifestyle guidance to help users maintain optimal heart health.",
    technologies: ["Python", "Machine Learning", "Healthcare AI", "Data Analysis"],
    featured: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    gradient: "from-red-500/20 to-pink-500/20"
  },
  {
    icon: Cloud,
    title: "Weather AI App",
    description: "User-friendly weather application built with React, featuring innovative design and real-time weather data integration.",
    technologies: ["React", "API Integration", "UI/UX"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Volume2,
    title: "Speech Translation Tool",
    description: "Accessibility-driven tool that breaks speech into phonetics for improved pronunciation, helping speech-impaired users communicate more effectively.",
    technologies: ["NLP", "Python", "Accessibility"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80",
    gradient: "from-purple-500/20 to-indigo-500/20"
  },
  {
    icon: Gamepad2,
    title: "T-Rex Game",
    description: "Interactive browser-based game with smooth animations and engaging gameplay mechanics.",
    technologies: ["JavaScript", "HTML5", "Game Dev"],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
    gradient: "from-green-500/20 to-emerald-500/20"
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

                      <div className="flex flex-wrap gap-2">
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
