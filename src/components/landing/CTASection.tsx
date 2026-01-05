import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-etalin-navy-light to-accent text-primary-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="inline-block text-accent font-body text-sm tracking-widest uppercase">
            Comienza tu Transformación
          </span>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight">
            El conocimiento que puede cambiar tu perspectiva te espera
          </h2>

          <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto leading-relaxed">
            Únete a quienes han decidido ir más allá de lo superficial y acceder 
            a una comprensión profunda de la existencia, la productividad y el 
            liderazgo humano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="hero" 
              className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
            >
              Inscribirse al Programa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline"
              className="w-full sm:w-auto border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Mail className="w-5 h-5" />
              Contacto Institucional
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/60 font-body pt-4">
            ¿Tienes preguntas? Escríbenos y te orientaremos sobre la mejor 
            opción para ti o tu organización.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
