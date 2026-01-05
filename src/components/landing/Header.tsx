import { Link } from "react-router-dom";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl text-foreground tracking-tight">
              Etalin
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("que-es")}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              Programa
            </button>
            <button 
              onClick={() => scrollToSection("dirigido")}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              Dirigido a
            </button>
            <button 
              onClick={() => scrollToSection("metodologia")}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              Metodología
            </button>
            <button 
              onClick={() => scrollToSection("creador")}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre el Creador
            </button>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection("cta")}
              className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-body rounded-lg hover:bg-etalin-navy-light transition-colors shadow-soft"
            >
              Inscribirse
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
