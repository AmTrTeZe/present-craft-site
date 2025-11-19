const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-2xl font-bold mb-2">
            Lex Africa <span className="text-secondary">Consulting</span>
          </div>
          <p className="text-primary-foreground/80 text-sm mb-4">
            Consulting & Business Engineering
          </p>
          <p className="text-primary-foreground/60 text-xs">
            © {new Date().getFullYear()} Lex Africa Consulting. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
