import profile from "@/data/profile";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground/80">
              © {new Date().getFullYear()} {profile.name}. Crafted with{" "}
              <span className="text-primary">passion</span> and{" "}
              <span className="text-accent">code</span>.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="text-primary">React</span>
            <span>•</span>
            <span className="text-accent">TypeScript</span>
            <span>•</span>
            <span className="text-copper">Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Code in one hand, melody in the other — building tomorrow."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
