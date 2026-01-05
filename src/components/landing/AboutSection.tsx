import { BookOpen, Brain, Target, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Comprensión Sistémica",
      description: "Entiende la interconexión de todos los aspectos de la existencia personal y organizacional."
    },
    {
      icon: Target,
      title: "Productividad Integral",
      description: "Desarrolla un enfoque holístico hacia la productividad que trasciende la mera eficiencia."
    },
    {
      icon: Users,
      title: "Liderazgo Humano",
      description: "Cultiva un liderazgo basado en la comprensión profunda del ser humano y sus relaciones."
    },
    {
      icon: BookOpen,
      title: "Modelo Osccusen",
      description: "Aprende un marco conceptual único para entender y navegar la complejidad de la vida."
    }
  ];

  return (
    <section id="que-es" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-accent font-body text-sm tracking-widest uppercase">
              Sobre el Programa
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              ¿Qué es Etalin?
            </h2>
            <div className="w-20 h-px bg-accent mx-auto mt-6" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 font-body leading-relaxed">
                <span className="font-semibold text-foreground">ETALIN</span> es una sigla que 
                representa a todas y todos, y a la totalidad de las infinitas personas, 
                realidades y elementos que han sido invisibilizados, ignorados o normalizados 
                dentro de la sociedad contemporánea.
              </p>
              <p className="text-lg text-foreground/80 font-body leading-relaxed">
                El término surge como respuesta a la profunda confusión existente sobre la 
                realidad de la existencia personal, temporal, social, cultural y tecnológica 
                del ser humano actual, estableciendo un marco conceptual orientado a la 
                conciencia, la actualización y la reorganización de la experiencia humana.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border shadow-soft card-hover group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight Box */}
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-4xl font-heading text-accent">30+</span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading text-2xl text-foreground mb-2">
                  Años de Investigación
                </h3>
                <p className="text-muted-foreground font-body max-w-2xl">
                  Este programa es el resultado de una vida dedicada a la comprensión 
                  profunda de la existencia humana, sus patrones y posibilidades. 
                  No es un curso más; es una invitación a una transformación genuina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
