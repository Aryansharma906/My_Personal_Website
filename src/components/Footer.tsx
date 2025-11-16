import profile from "@/data/profile";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <p className="text-foreground/90 font-semibold mb-2 text-lg">
                {profile.name}
              </p>
              <p className="text-foreground/70">
                Building tomorrow's solutions today with code and creativity.
              </p>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3 font-semibold">
                Built with
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2 text-sm">
                <span className="text-primary font-medium">React</span>
                <span className="text-foreground/50">•</span>
                <span className="text-accent font-medium">TypeScript</span>
                <span className="text-foreground/50">•</span>
                <span className="text-primary font-medium">Tailwind</span>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-foreground/90 font-semibold mb-2">
                Year
              </p>
              <p className="text-foreground/70">
                © {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground italic max-w-2xl mx-auto">
              "Code in one hand, melody in the other — building tomorrow."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
