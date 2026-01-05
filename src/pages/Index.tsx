import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import AudienceSection from "@/components/landing/AudienceSection";
import ProgramSection from "@/components/landing/ProgramSection";
import MethodologySection from "@/components/landing/MethodologySection";
import CertificationSection from "@/components/landing/CertificationSection";
import FounderSection from "@/components/landing/FounderSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Etalin - Formación Integral para Personas y Organizaciones</title>
        <meta 
          name="description" 
          content="Programa de formación basado en 30+ años de investigación. Desarrolla conciencia, productividad integral y liderazgo humano con el modelo Osccusen y la Disciplina Ubicua." 
        />
        <meta name="keywords" content="formación, desarrollo personal, liderazgo, productividad, conciencia, organizaciones, Disciplina Ubicua, Osccusen" />
        <link rel="canonical" href="https://etalin.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <AudienceSection />
          <ProgramSection />
          <MethodologySection />
          <CertificationSection />
          <FounderSection />
          <div id="cta">
            <CTASection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
