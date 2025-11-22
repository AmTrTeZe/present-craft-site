import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const distinctions = [
    {
      title: "Expertise Technique de Niveau International",
      description: "Nos équipes maîtrisent l'intégralité des dimensions juridiques, réglementaires, financières et opérationnelles de l'implantation en Côte d'Ivoire. En tant que votre mandataire, nous conduisons en votre nom les négociations, formalités et interactions avec les autorités ivoiriennes."
    },
    {
      title: "Maîtrise des Processus Décisionnels",
      description: "Notre connaissance intime des circuits de validation institutionnels et des protocoles administratifs nous permet d'anticiper les obstacles, d'optimiser les délais et de sécuriser vos procédures dès la première soumission."
    },
    {
      title: "Accès aux Cercles Décisionnaires",
      description: "Nos relations établies avec les cabinets ministériels, les conseillers techniques et la haute direction des agences publiques nous permettent de positionner favorablement vos projets et de comprendre les priorités gouvernementales en temps réel."
    }
  ];

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
            <p className="text-lg text-muted-foreground mb-6">
              Nous nous positionnons comme le chaînon manquant entre les entreprises internationales et le marché ivoirien : ni un cabinet d'avocats classique, ni un simple consultant, mais votre représentant local capable d'agir pour votre compte dans toutes vos démarches stratégiques et opérationnelles.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Nous accompagnons des promoteurs de projets, des investisseurs institutionnels, des opérateurs internationaux, des entrepreneurs, des entités gouvernementales, des entreprises locales, des PME et des startups dans leurs projets de développement en Côte d'Ivoire et en Afrique de l'Ouest.
            </p>
          </div>

          <Card className="p-8 bg-muted border-none">
            <h3 className="text-2xl font-bold text-primary mb-6">Ce Qui Nous Distingue</h3>
            <div className="space-y-6">
              {distinctions.map((distinction, index) => (
                <div key={index}>
                  <h4 className="text-lg font-bold text-foreground mb-2">{distinction.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{distinction.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="p-8 bg-muted border-none">
            <h3 className="text-2xl font-bold text-primary mb-6">Nos Valeurs</h3>
            <div className="grid md:grid-cols-2 gap-6">
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
