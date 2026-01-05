import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <Link to="/" className="inline-block">
                <span className="font-heading text-3xl tracking-tight">
                  Etalin
                </span>
              </Link>
              <p className="text-background/70 font-body leading-relaxed max-w-md">
                Programa de formación integral basado en más de 30 años de 
                investigación. Desarrolla conciencia, productividad integral y 
                liderazgo humano a través del modelo Osccusen y la Disciplina Ubicua.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg mb-4">Programa</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection("que-es")}
                    className="text-background/70 hover:text-background font-body text-sm transition-colors"
                  >
                    ¿Qué es Etalin?
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("programa")}
                    className="text-background/70 hover:text-background font-body text-sm transition-colors"
                  >
                    Contenido
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("metodologia")}
                    className="text-background/70 hover:text-background font-body text-sm transition-colors"
                  >
                    Metodología
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("certificacion")}
                    className="text-background/70 hover:text-background font-body text-sm transition-colors"
                  >
                    Certificación
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-lg mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection("cta")}
                    className="text-background/70 hover:text-background font-body text-sm transition-colors"
                  >
                    Inscripción
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("dirigido")}
                    className="text-background/70 hover:text-background font-body text-sm transition-colors"
                  >
                    Empresas
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("dirigido")}
                    className="text-background/70 hover:text-background font-body text-sm transition-colors"
                  >
                    Instituciones
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 font-body text-sm">
              © {currentYear} Etalin. Todos los derechos reservados.
            </p>
            <p className="text-background/50 font-body text-sm">
              Disciplina Ubicua · RPI N°: 2024-A-10332
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
