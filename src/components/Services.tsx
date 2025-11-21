import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Représentation Institutionnelle",
      description: "Nous sommes votre interface avec les ministères, les agences gouvernementales et les autorités sectorielles.",
    },
    {
      title: "Conduite des Négociations",
      description: "Nous menons pour votre compte les négociations avec les partenaires publics et privés, en maîtrisant les codes culturels locaux.",
    },
    {
      title: "Gestion Administrative",
      description: "Nous pilotons l'ensemble du parcours administratif, assurons le suivi des dossiers et respectons les calendriers.",
    },
    {
      title: "Développement Stratégique",
      description: "Accompagnement complet dans votre stratégie d'implantation et de développement en Côte d'Ivoire.",
    },
  ];

  const advantages = [
    "Éviter les erreurs coûteuses liées à la méconnaissance du contexte local",
    "Bénéficier de délais raccourcis grâce à notre connaissance des circuits",
    "Réduire les risques de non-conformité réglementaire",
    "Disposer d'une présence crédible sans investissement en structure locale",
    "Concentrer vos ressources sur votre développement commercial",
  ];

  return (
    <section id="services" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Vous Développer en Côte d'Ivoire
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lex Africa Consulting accompagne les entreprises étrangères dans leur implantation et leur développement en Côte d'Ivoire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow bg-card border-none"
            >
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-secondary text-secondary-foreground border-none">
          <h3 className="text-3xl font-bold mb-6">Les Avantages de Notre Mandat</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white shrink-0 mt-2" />
                <span className="text-secondary-foreground/90">{advantage}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;
