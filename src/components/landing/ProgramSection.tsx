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
      title: "Referencia",
      description: "Establece el origen de la confusión existencial contemporánea y presenta al Osccusen como modelo cerebral para comprender y reorganizar la experiencia personal, social y cultural."
    },
    {
      number: "02",
      title: "Paradigma",
      description: "Introduce el concepto de totalidad mediante el Osccusen, enseñando a transformar la visión fragmentada de la realidad en una comprensión integral.Orienta a alinear pensamiento, emoción y acción para una existencia coherente y consciente."
    },
    {
      number: "03",
      title: "Inicio",
      description: "Desarrolla la comprensión de la voluntad y la autoconciencia.Entrega herramientas para recuperar, reorganizar y utilizar correctamente los recursos mentales, fortaleciendo el propósito, la confianza y la coordinación de procesos y equipos.."
    },
    {
      number: "04",
      title: "Naturaleza",
      description: "Aborda la identidad y la naturaleza humana como construcciones dinámicas.Promueve el desarrollo de habilidades personales que integran lo innato con lo adquirido para una identidad consciente, adaptable y coherente.."
    },
    {
      number: "05",
      title: "Imaginación, Intuición e Instintos",
      description: "Explora estas dimensiones como herramientas para crear proyectos existenciales significativos.Enseña a estructurar sistemas integrales (“totalidades”) en lugar de pensamientos aislados, fortaleciendo la creatividad consciente.."
    },
    {
      number: "06",
      title: "Situación",
      description: "Permite comprender la relación del ser humano con la realidad, sus decisiones y su contexto. Desarrolla la capacidad de analizar experiencias, generar sistemas y transformar vivencias en conocimiento útil."
    },
    {
      number: "07",
      title: "Cambios",
      description: "Facilita procesos de transformación personal profunda.Enseña a comprender y aplicar el cambio como proceso consciente, observando la unidad, la variación y la evolución existencial."
    },
    {
      number: "08",
      title: "Interacción",
      description: "Desarrolla habilidades de comunicación auténtica, empatía y relación humana. Fortalece la capacidad de interactuar de forma consciente, efectiva y saludable."
    },
    {
      number: "09",
      title: "Representación y Actuación",
      description: "Enseña a actuar con conciencia del impacto personal y social. Integra el concepto de representación, el tecnoself y la audiencia como parte activa del proceso de acción."
    },
    {
      number: "10",
      title: "Productividad",
      description: "Redefine la productividad desde una visión ética e integral. Permite reconocer, recuperar y reutilizar potencialidades invisibilizadas, promoviendo colaboración, crecimiento y desarrollo sostenible."
    },
    {
      number: "11",
      title: "Gestión",
      description: "Introduce la visión sistémica de procesos. Optimiza el uso del tiempo, la organización de recursos y la capacidad de gestión consciente, logrando eficiencia con sentido humano."
    },
    {
      number: "12",
      title: "Retroalimentación",
      description: "Instala la retroalimentación como motor de mejora continua. Promueve el cuestionamiento crítico, la revisión permanente y la evolución del conocimiento y la práctica."
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
