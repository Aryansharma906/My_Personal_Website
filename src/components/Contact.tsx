import { Button } from "@/components/ui/button";
import socials from "@/data/socials";
import profile from "@/data/profile";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 animate-fade-in">
            Let's <span className="text-gradient-bronze">Connect</span>
          </h2>
          
          <div className="h-1 w-32 bg-gradient-bronze mx-auto mb-4 rounded-full" />
          
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Have a project in mind? Want to collaborate? I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {socials.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="bg-card border border-border rounded-lg p-6 hover-lift group h-full">
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-${contact.color === 'copper' ? 'copper' : 'bronze'} p-4 rounded-lg group-hover:scale-110 transition-smooth`}>
                        <Icon className="w-6 h-6 text-background" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                        <p className={`font-semibold text-${contact.color} truncate group-hover:text-accent transition-smooth`}>
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-card border border-primary/30 rounded-lg p-8 shadow-bronze animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h3 className="text-2xl font-heading font-semibold mb-4 text-gradient-bronze">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Whether it's a groundbreaking AI project, a data-driven solution, or a full-stack application, 
              let's collaborate to turn ideas into reality.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-bronze hover:shadow-glow transition-smooth text-lg px-8"
              onClick={() => window.location.href = `mailto:${profile.email}`}
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
