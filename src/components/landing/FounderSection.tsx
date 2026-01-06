import founderImage from "@/assets/founder-portrait.jpg";

const FounderSection = () => {
  return (
    <section id="creador" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-accent font-body text-sm tracking-widest uppercase">
              El Autor
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              Sobre el Creador
            </h2>
            <div className="w-20 h-px bg-accent mx-auto mt-6" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                  <img 
                    src={founderImage} 
                    alt="Milton Enrique Ramírez Pavez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  Milton Enrique Ramírez Pavez
                </h3>
                <p className="text-accent font-body text-lg">
                  Innovador de la Disciplina Ubicua
                </p>
              </div>

              <div className="space-y-4 text-foreground/80 font-body leading-relaxed text-justify">
                <p>
                  Con más de tres décadas dedicadas a la investigación profunda sobre 
                  la conciencia humana, la productividad y el sentido de la existencia, 
                  Milton Enrique Ramírez Pavez ha desarrollado un cuerpo de conocimiento 
                  único que integra filosofía, psicología y desarrollo organizacional.
                </p>
                <p>
                  Su trabajo, cristalizado en el modelo Osccusen y la Disciplina Ubicua, 
                  ofrece un marco conceptual innovador para comprender la interconexión 
                  entre el desarrollo personal, el liderazgo y la evolución de las 
                  organizaciones humanas.
                </p>
                <p>
                  Etalin representa la culminación de esta investigación, puesta al 
                  servicio de quienes buscan una transformación genuina y profunda.
                </p>
              </div>

              {/* Fundamento del Pensamiento */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  Fundamento del Pensamiento
                </h3>
                <div className="space-y-4 text-foreground/80 font-body leading-relaxed text-justify">
                  <p>
                    Milton Enrique Ramírez Pavez sostiene que la solución al problema de la 
                    existencia humana se encuentra en la comprensión del todo natural y verdadero 
                    que cada persona posee a su entera disposición, siempre inseparable de los otros, 
                    del entorno y del contexto.
                  </p>
                  <p>
                    Desde esta visión, la transformación no depende de la acción fragmentada ni de 
                    la automatización técnica, sino del Osccusen, entendido como un sistema basado 
                    en la finitud: el tiempo, la energía y el movimiento concebidos como un "hacerse".
                    Este enfoque propone un tránsito desde la acción objetivadora hacia una acción 
                    serena y consciente, caracterizada por la valentía, el temple, el valor y la entereza.
                  </p>
                  <p>
                    Frente a las crisis contemporáneas, su planteamiento afirma la necesidad ineludible 
                    de pasar de una visión fragmentada de la realidad a la comprensión de la totalidad, 
                    es decir, a la capacidad de gobernar conscientemente la energía, el tiempo y el 
                    movimiento de la existencia.
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="pt-4 border-t border-border">
                <div className="flex flex-wrap gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground font-body">
                      Registro de Propiedad Intelectual
                    </p>
                    <p className="font-heading text-foreground">
                      RPI N°: 2024-A-10332
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">
                      Metodología
                    </p>
                    <p className="font-heading text-foreground">
                      Disciplina Ubicua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
