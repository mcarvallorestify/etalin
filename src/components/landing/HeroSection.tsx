import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-etalin-cream/10 rounded-full blur-3xl animate-float" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-body tracking-wider uppercase">
              Más de 30 años de investigación
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight animate-fade-in-up">
            Formación Integral para{" "}
            <span className="italic">Personas</span> y{" "}
            <span className="italic">Organizaciones</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/85 font-body font-light max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-1">
            Desarrolla una comprensión profunda de la existencia, la productividad 
            integral y el liderazgo humano a través del modelo Osccusen y la 
            Disciplina Ubicua.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-delay-2">
            <Button 
              variant="hero" 
              className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Inscribirse al Programa
            </Button>
            <Button 
              variant="heroOutline"
              className="w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Programas para Empresas
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-primary-foreground/70 animate-fade-in-delay-3">
            <div className="flex items-center gap-2 text-sm font-body">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Formación Online</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-body">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Certificación Digital</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-body">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Acceso 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
