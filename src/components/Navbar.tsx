import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import logoBlanc from "@/assets/logo-blanc.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect which section is currently visible
      const sections = ["about", "services", "team", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      // Reset active section if we're at the top (on Hero)
      if (window.scrollY < window.innerHeight * 0.5) {
        setActiveSection("");
        return;
      }
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <img 
            src={isScrolled ? logo : logoBlanc} 
            alt="Lex Africa Consulting" 
            className="h-12 md:h-16 transition-opacity duration-300" 
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("about")} 
              className={`${activeSection === "about" ? "text-secondary" : isScrolled ? "text-foreground" : "text-white"} hover:text-secondary transition-colors`}
            >
              {t.firm}
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className={`${activeSection === "services" ? "text-secondary" : isScrolled ? "text-foreground" : "text-white"} hover:text-secondary transition-colors`}
            >
              {t.services}
            </button>
            <button 
              onClick={() => scrollToSection("team")} 
              className={`${activeSection === "team" ? "text-secondary" : isScrolled ? "text-foreground" : "text-white"} hover:text-secondary transition-colors`}
            >
              {t.team}
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className={`${activeSection === "contact" ? "text-secondary" : isScrolled ? "text-foreground" : "text-white"} hover:text-secondary transition-colors`}
            >
              {t.contact}
            </button>
            <button
              onClick={toggleLanguage}
              className={`text-xs ${isScrolled ? "text-secondary" : "text-white"} hover:text-secondary transition-colors`}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("about")} 
                className={`${activeSection === "about" ? "text-secondary" : isScrolled ? "text-foreground" : "text-white"} hover:text-secondary transition-colors text-left`}
              >
                {t.firm}
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className={`${activeSection === "services" ? "text-secondary" : isScrolled ? "text-foreground" : "text-white"} hover:text-secondary transition-colors text-left`}
              >
                {t.services}
              </button>
              <button 
                onClick={() => scrollToSection("team")} 
                className={`${activeSection === "team" ? "text-secondary" : isScrolled ? "text-foreground" : "text-white"} hover:text-secondary transition-colors text-left`}
              >
                {t.team}
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className={`${activeSection === "contact" ? "text-secondary" : isScrolled ? "text-foreground" : "text-white"} hover:text-secondary transition-colors text-left`}
              >
                {t.contact}
              </button>
              <button
                onClick={toggleLanguage}
                className={`text-xs ${isScrolled ? "text-secondary" : "text-white"} hover:text-secondary transition-colors text-left`}
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
