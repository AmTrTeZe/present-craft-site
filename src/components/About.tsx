import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const values = [
    {
      title: "Intégrité et conformité",
      description: "Nous opérons dans le strict respect des réglementations locales et des standards éthiques internationaux. Notre réputation repose sur la transparence de nos pratiques."
    },
    {
      title: "Efficacité opérationnelle",
      description: "Structure légère, circuits de décision courts, réactivité maximale. Nous privilégions l'action et les résultats mesurables sur les processus bureaucratiques."
    },
    {
      title: "Confidentialité absolue",
      description: "Discrétion totale sur vos projets, vos stratégies et vos négociations. Nous protégeons vos intérêts comme les nôtres."
    },
    {
      title: "Partenariat de long terme",
      description: "Au-delà des missions ponctuelles, nous construisons des relations durables fondées sur la confiance mutuelle et la compréhension de vos enjeux stratégiques."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
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
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index}>
                  <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
