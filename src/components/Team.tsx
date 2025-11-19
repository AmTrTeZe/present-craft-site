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

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Notre Équipe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe pluridisciplinaire de consultants seniors combinant formations d'excellence, expérience internationale et connaissance approfondie des réalités africaines
          </p>
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
