import { Card } from "@/components/ui/card";

const Team = () => {
  const expertise = [
    {
      title: "Expertise Juridique",
      description: "Avocats diplômés des meilleures universités, maîtrisant le droit OHADA et les standards internationaux.",
    },
    {
      title: "Finance de Projets",
      description: "Experts ayant travaillé dans de grandes institutions financières internationales (BNP Paribas, Société Générale, BOAD).",
    },
    {
      title: "Finances Publiques",
      description: "Magistrats de la Cour des Comptes avec une compréhension unique des processus budgétaires de l'État.",
    },
    {
      title: "Ingénierie",
      description: "Ingénieurs formés à l'École Polytechnique et à l'École Nationale des Ponts et Chaussées.",
    },
  ];

  const sectors = [
    { title: "Infrastructure & Transport", description: "Routes, autoroutes, rail, mobilité urbaine, ports, aéroports" },
    { title: "Énergie", description: "Production électrique, transport & distribution, électrification rurale" },
    { title: "Services Publics", description: "Eau & assainissement, gestion des déchets, services urbains" },
    { title: "Industries Extractives", description: "Pétrole, gaz, mines" },
  ];

  const institutions = [
    { name: "CEDEAO", logo: "/images/cedeao-logo.png" },
    { name: "UEMOA", logo: "/images/uemoa-logo.png" },
    { name: "COMESA", logo: "/images/comesa-logo.png" },
    { name: "BAD", logo: "/images/bad-logo.png" },
    { name: "Banque Mondiale", logo: "/images/world-bank-logo.png" },
    { name: "Nations Unies", logo: "/images/un-logo.png" },
    { name: "Commission Européenne", logo: "/images/eu-logo.png" },
  ];

  return (
    <section id="team" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe pluridisciplinaire de consultants seniors combinant formations d'excellence, expérience internationale et connaissance approfondie des réalités africaines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertise.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-card border-none">
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Une expertise éprouvée à l'international
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nos consultants seniors ont collectivement accompagné des projets d'infrastructure et de développement représentant plus de 5 milliards d'euros en Afrique et en Europe.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Ce que nous savons faire
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Structuration et négociation de grands projets
                </h4>
                <p className="text-muted-foreground mb-3">
                  Nos équipes maîtrisent l'intégralité du cycle de vie des projets complexes :
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Montages financiers et juridiques de PPP pluriannuels</li>
                  <li>Structuration de financements de 100M€ à 1Md€+</li>
                  <li>Négociation de contrats d'État avec des opérateurs internationaux</li>
                  <li>Coordination de consortiums multi-partenaires</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Conseil aux institutions financières
                </h4>
                <p className="text-muted-foreground mb-3">Expertise démontrée en :</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Financements structurés pour des projets pétroliers, miniers et énergétiques majeurs</li>
                  <li>Due diligence et évaluation de risques pays</li>
                  <li>Structuration de project finance avec banques commerciales et DFI</li>
                  <li>Conseil aux bailleurs multilatéraux (Banque Mondiale, BAD)</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Accompagnement d'entreprises internationales
                </h4>
                <p className="text-muted-foreground mb-3">Nos consultants ont représenté :</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Des groupes industriels européens dans leur implantation africaine</li>
                  <li>Des opérateurs de mobilité urbaine sur des projets de transport régionaux</li>
                  <li>Des énergéticiens dans des projets d'électrification transnationaux</li>
                  <li>Des investisseurs dans des négociations avec les États d'Afrique de l'Ouest</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Expertise institutionnelle reconnue
                </h4>
                <p className="text-muted-foreground mb-3">Nos experts interviennent auprès de :</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Nations Unies (membre de groupes de travail PPP)</li>
                  <li>Banque Mondiale et BAD (missions d'évaluation InfraSAP)</li>
                  <li>Commission Européenne (expertise développement)</li>
                  <li>Institutions régionales (CEDEAO, UEMOA, COMESA)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Secteurs d'intervention
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {sectors.map((sector, index) => (
                <Card key={index} className="p-6 bg-card border-none">
                  <h4 className="text-lg font-bold text-card-foreground mb-2">
                    {sector.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Standards et méthodologie
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Nos équipes appliquent les standards internationaux de :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-8">
              <li>Banque Mondiale & SFI (IFC)</li>
              <li>Banque Africaine de Développement</li>
              <li>Commission Économique des Nations Unies pour l'Europe</li>
              <li>Union Européenne</li>
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center mt-12">
              {institutions.map((institution, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img 
                    src={institution.logo} 
                    alt={institution.name}
                    className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
