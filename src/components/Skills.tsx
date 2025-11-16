import { BarChart3, Code, Brain, FileSpreadsheet } from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Transforming raw data into actionable insights with advanced analytical techniques",
    gradient: "bg-gradient-bronze"
  },
  {
    icon: Code,
    title: "Python Programming",
    description: "Crafting elegant solutions with Python for web development, automation, and AI",
    gradient: "bg-gradient-accent"
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Building intelligent systems that understand and process human language",
    gradient: "bg-gradient-copper"
  },
  {
    icon: FileSpreadsheet,
    title: "Excel Mastery",
    description: "Expert-level data handling, visualization, and complex formula optimization",
    gradient: "bg-gradient-bronze"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 animate-fade-in">
            Core <span className="text-gradient-bronze">Skills</span>
          </h2>
          
          <div className="h-1 w-32 bg-gradient-bronze mx-auto mb-4 rounded-full" />
          
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            A powerful toolkit combining data science, programming, and analytical expertise
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.title}
                  className="bg-card border border-border rounded-lg p-8 hover-lift animate-fade-in group"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${skill.gradient} p-4 rounded-lg group-hover:scale-110 transition-smooth flex-shrink-0`}>
                      <Icon className="w-8 h-8 text-background" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-semibold mb-3 text-foreground">
                        {skill.title}
                      </h3>
                      <p className="text-foreground/75 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-heading font-semibold mb-6 text-muted-foreground">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'JavaScript', 'HTML/CSS', 'Machine Learning', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Git'].map((tech) => (
                <span 
                  key={tech}
                  className="px-6 py-3 bg-secondary border border-primary/30 rounded-full text-foreground/90 hover:bg-primary/10 hover:border-primary transition-smooth cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
