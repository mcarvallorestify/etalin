import { User, Building2, Church } from "lucide-react";
import { Button } from "@/components/ui/button";

const AudienceSection = () => {
  const audiences = [
    {
      icon: User,
      title: "Personas",
      subtitle: "Desarrollo Personal Profundo",
      description: "Para individuos que buscan una comprensión más profunda de sí mismos, su propósito y su potencial. Ideal para quienes desean trascender el autoayuda superficial y acceder a un conocimiento transformador.",
      benefits: [
        "Claridad sobre tu propósito y dirección vital",
        "Mayor conciencia y autoconocimiento",
        "Herramientas para una productividad con sentido",
        "Desarrollo de un liderazgo personal auténtico"
      ],
      cta: "Inscribirse como Persona"
    },
    {
      icon: Building2,
      title: "Empresas",
      subtitle: "Transformación Organizacional",
      description: "Para organizaciones que comprenden que el verdadero rendimiento sostenible proviene del desarrollo integral de su capital humano. Programas adaptados a las necesidades corporativas.",
      benefits: [
        "Equipos más cohesionados y conscientes",
        "Liderazgo basado en principios profundos",
        "Cultura organizacional con propósito",
        "Productividad integral y sostenible"
      ],
      cta: "Solicitar Programa Empresarial"
    },
    {
      icon: Church,
      title: "Instituciones",
      subtitle: "Iglesias y Organizaciones Sociales",
      description: "Para instituciones que desean fortalecer su misión a través del desarrollo integral de sus miembros y líderes. Un enfoque que complementa y profundiza los valores institucionales.",
      benefits: [
        "Formación de líderes con visión integral",
        "Fortalecimiento del sentido de comunidad",
        "Herramientas para el acompañamiento humano",
        "Mayor impacto en la misión institucional"
      ],
      cta: "Consultar para Instituciones"
    }
  ];

  return (
    <section id="dirigido" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-accent font-body text-sm tracking-widest uppercase">
              Público Objetivo
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              ¿A quién está dirigido?
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Etalin está diseñado para quienes buscan una transformación genuina, 
              ya sea a nivel personal o institucional.
            </p>
            <div className="w-20 h-px bg-accent mx-auto mt-6" />
          </div>

          {/* Audience Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border shadow-soft card-hover flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                    <audience.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-foreground">
                      {audience.title}
                    </h3>
                    <p className="text-sm text-accent font-body">
                      {audience.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {audience.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground/80 font-body">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="elegant" className="w-full mt-auto">
                  {audience.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
