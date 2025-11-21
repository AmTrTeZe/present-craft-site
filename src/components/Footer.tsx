const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">
            Lex Africa <span className="font-extralight">Consulting</span>
          </div>
          <p className="text-white/90 text-sm font-extralight mb-4">
            Consulting & Business Engineering
          </p>
          <p className="text-white/80 text-xs font-extralight">
            © {new Date().getFullYear()} Lex Africa Consulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
