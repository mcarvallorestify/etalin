import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProgramSection = () => {
  const modules = [
    {
      number: "01",
      title: "Fundamentos de la Conciencia",
      description: "Introducción a los principios fundamentales de la conciencia humana y su papel en la existencia personal y colectiva. Exploración del marco conceptual Osccusen."
    },
    {
      number: "02",
      title: "La Disciplina Ubicua",
      description: "Comprensión profunda de la Disciplina Ubicua como metodología integral para el desarrollo personal y organizacional. Sus principios y aplicaciones prácticas."
    },
    {
      number: "03",
      title: "Autoconocimiento Profundo",
      description: "Herramientas y prácticas para desarrollar un autoconocimiento genuino que trasciende la superficie y accede a las capas más profundas del ser."
    },
    {
      number: "04",
      title: "Productividad con Sentido",
      description: "Redefinición de la productividad desde una perspectiva integral. Cómo lograr resultados sostenibles alineados con el propósito personal y organizacional."
    },
    {
      number: "05",
      title: "Relaciones y Sistemas",
      description: "Comprensión de las dinámicas relacionales y sistémicas que gobiernan las interacciones humanas en contextos personales y profesionales."
    },
    {
      number: "06",
      title: "Liderazgo Humano",
      description: "Desarrollo de un liderazgo basado en la comprensión profunda del ser humano. Principios para influir positivamente desde la autenticidad."
    },
    {
      number: "07",
      title: "Gestión del Cambio",
      description: "Herramientas para navegar y facilitar procesos de cambio personal y organizacional con sabiduría y efectividad."
    },
    {
      number: "08",
      title: "Comunicación Consciente",
      description: "El arte de la comunicación que conecta, inspira y transforma. Principios para una expresión auténtica y una escucha profunda."
    },
    {
      number: "09",
      title: "Propósito y Dirección",
      description: "Clarificación del propósito personal y su alineación con la acción cotidiana. Cómo vivir una vida con dirección y significado."
    },
    {
      number: "10",
      title: "Organizaciones Conscientes",
      description: "Principios para desarrollar y liderar organizaciones que integran el desarrollo humano con los objetivos institucionales."
    },
    {
      number: "11",
      title: "Integración y Práctica",
      description: "Síntesis de los aprendizajes y desarrollo de un plan personal de aplicación. Herramientas para la práctica continua."
    },
    {
      number: "12",
      title: "El Camino Adelante",
      description: "Visión de largo plazo para el desarrollo continuo. Cómo mantener y profundizar la transformación iniciada en el programa."
    }
  ];

  return (
    <section id="programa" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-accent font-body text-sm tracking-widest uppercase">
              Contenido
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              Programa Formativo
            </h2>
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              12 módulos diseñados para guiarte en un proceso de comprensión 
              y transformación profunda.
            </p>
            <div className="w-20 h-px bg-accent mx-auto mt-6" />
          </div>

          {/* Modules Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem 
                key={index} 
                value={`module-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-6 gap-4">
                  <div className="flex items-center gap-6 text-left">
                    <span className="text-2xl font-heading text-accent/60 tabular-nums">
                      {module.number}
                    </span>
                    <span className="font-heading text-lg text-foreground">
                      {module.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground font-body leading-relaxed pl-16">
                    {module.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
