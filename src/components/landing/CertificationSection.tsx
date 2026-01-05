import { Award, CheckCircle, Building2 } from "lucide-react";

const CertificationSection = () => {
  return (
    <section id="certificacion" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <span className="inline-block text-accent font-body text-sm tracking-widest uppercase">
              Reconocimiento
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground">
              Certificación
            </h2>
            <div className="w-20 h-px bg-accent mx-auto mt-6" />
          </div>

          {/* Certification Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Certification */}
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground">
                    Certificado Personal
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Para participantes individuales
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Al completar satisfactoriamente todos los módulos del programa, 
                recibirás un certificado digital que acredita tu formación en 
                Etalin y la Disciplina Ubicua.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-body text-sm">
                    Certificado digital verificable
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-body text-sm">
                    Código único de validación
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-body text-sm">
                    Descarga inmediata al completar
                  </span>
                </li>
              </ul>
            </div>

            {/* Corporate Certification */}
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground">
                    Certificación Empresarial
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    Para organizaciones e instituciones
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Las organizaciones que inscriben a sus equipos reciben un seguimiento 
                detallado del progreso de cada participante, junto con reportes 
                de acreditación institucional.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-body text-sm">
                    Seguimiento grupal e individual
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-body text-sm">
                    Reportes de progreso para RRHH
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 font-body text-sm">
                    Certificación por participante
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
