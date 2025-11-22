import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">
            Lex Africa Consulting
          </div>
          <p className="text-white/90 text-sm font-extralight mb-4">
            {t.tagline}
          </p>
          <p className="text-white/80 text-xs font-extralight">
            © {new Date().getFullYear()} Lex Africa Consulting. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
