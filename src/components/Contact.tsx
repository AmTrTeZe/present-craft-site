import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Contactez-Nous
            </h2>
            <p className="text-xl text-muted-foreground">
              Parlons de votre projet d'implantation en Côte d'Ivoire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-card border-none">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-secondary" size={24} />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">Téléphone</h3>
              <p className="text-sm text-muted-foreground mb-1">(225) 07 58 60 60 40</p>
              <p className="text-sm text-muted-foreground">(225) 01 02 84 55 55</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-card border-none">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="text-secondary" size={24} />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">Email</h3>
              <a
                href="mailto:contact@lexafricaconsulting.ci"
                className="text-sm text-secondary hover:underline"
              >
                contact@lexafricaconsulting.ci
              </a>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-card border-none">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-secondary" size={24} />
              </div>
              <h3 className="font-bold text-card-foreground mb-2">Adresse</h3>
              <p className="text-sm text-muted-foreground">
                Abidjan-Plateau
                <br />
                Immeuble BORG
                <br />
                08 BP 406 Abidjan 08 / RCI
              </p>
            </Card>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
