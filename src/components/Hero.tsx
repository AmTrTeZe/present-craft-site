import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image-new.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abidjan Skyline"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 animate-fade-in">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/90 mb-8 animate-fade-in-delay">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
            >
              {t.contactBtn}
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8"
            >
              {t.servicesBtn}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
