import { Monitor, Clock, Video, TrendingUp, Award, Headphones } from "lucide-react";

const MethodologySection = () => {
  const features = [
    {
      icon: Monitor,
      title: "100% Online",
      description: "Accede al programa desde cualquier lugar del mundo, a tu propio ritmo."
    },
    {
      icon: Clock,
      title: "Acceso 24/7",
      description: "Disponibilidad permanente para que estudies cuando mejor te convenga."
    },
    {
      icon: Video,
      title: "Contenido Audiovisual",
      description: "Clases en video de alta calidad, materiales de lectura y recursos complementarios."
    },
    {
      icon: TrendingUp,
      title: "Progreso Guiado",
      description: "Estructura clara que te acompaña paso a paso en tu proceso formativo."
    },
    {
      icon: Headphones,
      title: "Materiales Reflexivos",
      description: "Ejercicios y prácticas diseñadas para la integración profunda del conocimiento."
    },
    {
      icon: Award,
      title: "Certificación",
      description: "Certificado digital al completar satisfactoriamente el programa."
    }
  ];

  return (
    <section id="metodologia" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-accent font-body text-sm tracking-widest uppercase">
              Cómo Funciona
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl">
              Metodología
            </h2>
            <p className="text-lg text-primary-foreground/80 font-body max-w-2xl mx-auto">
              Una experiencia de aprendizaje diseñada para la profundidad y la 
              flexibilidad que necesitas.
            </p>
            <div className="w-20 h-px bg-accent mx-auto mt-6" />
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-8 md:p-12 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl mb-4">
                  Experiencia de Aprendizaje Integral
                </h3>
                <p className="text-primary-foreground/80 font-body leading-relaxed">
                  Nuestro enfoque combina la profundidad conceptual con la aplicación 
                  práctica. Cada módulo está diseñado para que no solo comprendas, 
                  sino que integres y apliques el conocimiento en tu vida y contexto 
                  profesional.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="font-body">Plataforma educativa profesional (LMS)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="font-body">Seguimiento de progreso individual</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="font-body">Soporte durante todo el programa</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="font-body">Comunidad de participantes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
