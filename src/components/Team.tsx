import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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
      title: "Fiscalité",
      description: "Experts en fiscalité ivoirienne, OHADA, Code des investissements, conventions fiscales et optimisation fiscale internationale pour investisseurs étrangers.",
    },
    {
      title: "Droit Social",
      description: "Spécialistes du droit du travail ivoirien, gestion RH locale et des procédures d'emploi d'expatriés.",
    },
    {
      title: "Ingénierie",
      description: "Ingénieurs formés à l'École Polytechnique et à l'École Nationale des Ponts et Chaussées.",
    },
  ];

  const sectors = [
    { title: "Infrastructure & Transport", description: "Routes, autoroutes, ponts, rail, mobilité urbaine, ports, aéroports" },
    { title: "Énergie", description: "Production électrique, transport & distribution, électrification rurale" },
    { title: "Services Publics", description: "Eau & assainissement, gestion des déchets, services urbains" },
    { title: "Industries Extractives", description: "Pétrole, gaz, mines" },
    { title: "Télécommunications", description: "Infrastructures numériques, réseaux mobiles & fixes, data centers, fibre optique, licences d'opérateur, régulation sectorielle" },
    { title: "Startups & Innovation", description: "Accompagnement juridique et fiscal, levées de fonds, structuration corporate, due diligence investisseurs, propriété intellectuelle, exit strategy" },
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Une équipe pluridisciplinaire de 12 consultants seniors combinant formations d'excellence, expérience internationale et connaissance approfondie des réalités africaines
          </p>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Une expertise reconnue internationalement
            </h3>
            <p className="text-lg text-muted-foreground">
              Nos consultants sont régulièrement sollicités comme experts par les organisations internationales majeures et contribuent à l'élaboration de standards et lignes directrices en matière de PPP et d'investissements en Afrique.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-card border-none">
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
export { TeamExpertise };

const TeamExpertise = () => {
  const sectors = [
    { title: "Infrastructure & Transport", description: "Routes, autoroutes, ponts, rail, mobilité urbaine, ports, aéroports" },
    { title: "Énergie", description: "Production électrique, transport & distribution, électrification rurale" },
    { title: "Services Publics", description: "Eau & assainissement, gestion des déchets, services urbains" },
    { title: "Industries Extractives", description: "Pétrole, gaz, mines" },
    { title: "Télécommunications", description: "Infrastructures numériques, réseaux mobiles & fixes, data centers, fibre optique, licences d'opérateur, régulation sectorielle" },
    { title: "Startups & Innovation", description: "Accompagnement juridique et fiscal, levées de fonds, structuration corporate, due diligence investisseurs, propriété intellectuelle, exit strategy" },
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
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Une expertise éprouvée
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Nos consultants seniors ont collectivement accompagné des projets d'infrastructure et de développement représentant plus de 5 milliards d'euros en Afrique et en Europe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-background border-none shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Structuration et négociation de grands projets
              </h3>
              <p className="text-muted-foreground mb-4">
                Nos équipes maîtrisent l'intégralité du cycle de vie des projets complexes :
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Montages financiers et juridiques de PPP pluriannuels</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Structuration de financements de 100M€ à 1Md€+</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Négociation de contrats d'État avec des opérateurs internationaux</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Coordination de consortiums multi-partenaires</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-background border-none shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Conseil aux institutions financières
              </h3>
              <p className="text-muted-foreground mb-4">Expertise démontrée en :</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Financements structurés pour des projets pétroliers, miniers et énergétiques majeurs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Due diligence et évaluation de risques pays</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Structuration de project finance avec banques commerciales et DFI</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Conseil aux bailleurs multilatéraux (Banque Mondiale, BAD)</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-background border-none shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Accompagnement d'entreprises internationales
              </h3>
              <p className="text-muted-foreground mb-4">Nos consultants ont représenté :</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Des groupes industriels européens dans leur implantation africaine</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Des opérateurs de mobilité urbaine sur des projets de transport régionaux</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Des énergéticiens dans des projets d'électrification transnationaux</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Des investisseurs dans des négociations avec les États d'Afrique de l'Ouest</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-background border-none shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Expertise institutionnelle reconnue
              </h3>
              <p className="text-muted-foreground mb-4">Nos experts interviennent auprès de :</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Nations Unies (membre de groupes de travail PPP)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Banque Mondiale et BAD (missions d'évaluation InfraSAP)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Commission Européenne (expertise développement)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">Institutions régionales (CEDEAO, UEMOA, COMESA)</span>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              Secteurs d'intervention
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {sectors.map((sector, index) => (
                <Card key={index} className="p-6 bg-background border-none shadow-sm">
                  <h4 className="text-lg font-bold text-card-foreground mb-2">
                    {sector.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-background border-none shadow-sm">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Standards et méthodologie
            </h3>
            <p className="text-muted-foreground mb-6">
              Nos équipes appliquent les standards internationaux de :
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span className="text-foreground">Banque Mondiale & SFI (IFC)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span className="text-foreground">Banque Africaine de Développement</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span className="text-foreground">Commission Économique des Nations Unies pour l'Europe</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span className="text-foreground">Union Européenne</span>
              </div>
            </div>

          </Card>
        </div>
      </div>
    </section>
  );
};
