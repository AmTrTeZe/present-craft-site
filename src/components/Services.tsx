import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Représentation Institutionnelle",
      description: "Nous sommes votre interface avec les ministères, les agences gouvernementales et les autorités sectorielles. Nous présentons vos projets, défendons vos intérêts et facilitons vos relations avec l'administration ivoirienne.",
    },
    {
      title: "Conduite des Négociations",
      description: "Nous menons pour votre compte les négociations avec les partenaires publics et privés, en parfaite connaissance des codes culturels locaux et des dynamiques décisionnelles.",
    },
    {
      title: "Gestion des Procédures Administratives",
      description: "Nous prenons en charge l'ensemble du processus administratif, suivons les dossiers avec attention et maintenons la pression nécessaire pour garantir le respect des délais.",
    },
    {
      title: "Développement Stratégique",
      description: "Accompagnement complet dans votre stratégie d'implantation et de développement en Côte d'Ivoire.",
    },
  ];

  const advantages = [
    "Éviter les erreurs coûteuses liées à la méconnaissance du contexte local",
    "Réduire les délais grâce à notre maîtrise des processus institutionnels et notre connaissance des circuits",
    "Sécuriser votre conformité réglementaire",
    "Établir une présence locale crédible sans investissement en infrastructure",
    "Concentrer vos ressources sur votre cœur de métier",
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

        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Notre expertise est reconnue par les plus grandes institutions internationales. Nos consultants interviennent régulièrement comme experts auprès de la Banque Mondiale, de la Banque Africaine de Développement et des agences des Nations Unies. Cette reconnaissance institutionnelle garantit que nos méthodes et nos standards répondent aux exigences les plus élevées du secteur.
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

        <Card className="p-8 md:p-12 bg-secondary text-white border-none">
          <h3 className="text-3xl font-bold mb-6">Les Avantages de Notre Mandat</h3>
          <p className="text-white font-light mb-6">
            Notre mandat est flexible et s'adapte au stade de votre projet : représentation officielle exclusive, accompagnement ponctuel sur des dossiers spécifiques, ou partenariat continu pour vos opérations en Côte d'Ivoire.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-white shrink-0 mt-2" />
                <span className="text-white font-light">{advantage}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;
