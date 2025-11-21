import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
          <img src={logo} alt="Lex Africa Consulting" className="h-12 md:h-16" />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-white hover:text-secondary transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection("services")} className="text-white hover:text-secondary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="text-white hover:text-secondary transition-colors">
              Équipe
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-white hover:text-secondary transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("about")} className="text-white hover:text-secondary transition-colors text-left">
                À propos
              </button>
              <button onClick={() => scrollToSection("services")} className="text-white hover:text-secondary transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection("team")} className="text-white hover:text-secondary transition-colors text-left">
                Équipe
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-white hover:text-secondary transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
