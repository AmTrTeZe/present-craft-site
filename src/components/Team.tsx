import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, Scale, TrendingUp } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Moussa SANOGO",
      role: "Managing Director",
      education: "PhD in Public Law",
      university: "Brest University, France",
    },
    {
      name: "Youssouf MEITE",
      role: "Lawyer, Partner",
      education: "PhD in Public Law",
      university: "Jean Moulin University, Lyon, France",
    },
    {
      name: "François SERRES",
      role: "Lawyer",
      education: "Master's degree in Law",
      university: "Institut d'Etudes Politiques, Paris, France",
    },
    {
      name: "Joel SANGARE",
      role: "Lawyer",
      education: "Master's degree in Law",
      university: "Paris-Est Créteil University, France",
    },
    {
      name: "Losseni DAGNOGO",
      role: "Magistrate, Advisor to State Court of Auditors",
      education: "Master in Finance & Public Administration",
      university: "École Nationale d'Administration, Abidjan",
    },
    {
      name: "Akambi BELLOW",
      role: "Structured Finance Expert",
      education: "Public Finance Consultant",
      university: "ESCP, Paris & Rennes University, France",
    },
  ];

  const expertise = [
    {
      icon: Scale,
      title: "Expertise Juridique",
      description: "Avocats diplômés des meilleures universités, maîtrisant le droit OHADA et les standards internationaux.",
    },
    {
      icon: TrendingUp,
      title: "Finance de Projets",
      description: "Experts ayant travaillé dans de grandes institutions financières internationales (BNP Paribas, Société Générale, BOAD).",
    },
    {
      icon: Briefcase,
      title: "Finances Publiques",
      description: "Magistrats de la Cour des Comptes avec une compréhension unique des processus budgétaires de l'État.",
    },
    {
      icon: GraduationCap,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-card border-none">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-secondary" size={28} />
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border-none">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-3">{member.role}</p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{member.education}</p>
                  <p className="italic">{member.university}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
