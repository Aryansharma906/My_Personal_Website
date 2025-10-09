import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Volume2, Gamepad2, UtensilsCrossed, Heart } from "lucide-react";

const projects = [
  {
    icon: Heart,
    title: "Cardiac Health Prediction System",
    description: "Advanced machine learning solution that predicts cardiac events based on comprehensive medical history. Provides personalized prevention tips and lifestyle guidance to help users maintain optimal heart health.",
    technologies: ["Python", "Machine Learning", "Healthcare AI", "Data Analysis"],
    featured: true
  },
  {
    icon: Cloud,
    title: "Weather AI App",
    description: "User-friendly weather application built with React, featuring innovative design and real-time weather data integration.",
    technologies: ["React", "API Integration", "UI/UX"]
  },
  {
    icon: Volume2,
    title: "Speech Translation Tool",
    description: "Accessibility-driven tool that breaks speech into phonetics for improved pronunciation, helping speech-impaired users communicate more effectively.",
    technologies: ["NLP", "Python", "Accessibility"]
  },
  {
    icon: Gamepad2,
    title: "T-Rex Game",
    description: "Interactive browser-based game with smooth animations and engaging gameplay mechanics.",
    technologies: ["JavaScript", "HTML5", "Game Dev"]
  },
  {
    icon: UtensilsCrossed,
    title: "Go-DineIn App",
    description: "Full-stack dining experience application with smart features for restaurant discovery and reservation management.",
    technologies: ["Full Stack", "Database", "React"]
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

          <div className="space-y-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={project.title}
                  className={`p-8 border-2 hover-lift animate-fade-in ${
                    project.featured 
                      ? 'border-primary bg-gradient-to-br from-card to-primary/5 shadow-glow' 
                      : 'border-border bg-card'
                  }`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`${project.featured ? 'bg-gradient-bronze' : 'bg-secondary'} p-6 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-12 h-12 ${project.featured ? 'text-background' : 'text-primary'}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className={`text-2xl font-heading font-semibold ${
                          project.featured ? 'text-gradient-bronze' : 'text-foreground'
                        }`}>
                          {project.title}
                        </h3>
                        {project.featured && (
                          <Badge className="bg-accent text-accent-foreground">
                            ⭐ Featured
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
                                : 'border-muted-foreground/30 text-muted-foreground'
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
