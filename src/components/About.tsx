import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    "Excellence internationale et réactivité locale",
    "Équipe pluridisciplinaire senior",
    "Expertise approfondie du contexte africain",
    "Méthode de travail pragmatique et agile",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Le Cabinet
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Lex Africa Consulting est un cabinet de conseil et d'ingénierie d'affaires indépendant basé à Abidjan. Nous sommes spécialisés dans l'implantation et le développement de sociétés étrangères en Côte d'Ivoire que nous représentons généralement en tant que mandataire.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Nos experts, seniors, pluridisciplinaires, diplômés des meilleures écoles françaises et ivoiriennes, œuvrent dans la plus grande complémentarité. Forts d'une expérience locale et internationale, ils font preuve d'une connaissance approfondie du contexte africain, des réglementations et procédures locales.
            </p>
          </div>

          <Card className="p-8 bg-muted border-none">
            <h3 className="text-2xl font-bold text-primary mb-6">Nos Valeurs</h3>
            <p className="text-muted-foreground mb-6">
              Lex Africa Consulting fournit des services aux standards des cabinets internationaux les plus réputés, tout en restant réactif et pragmatique.
            </p>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
