import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Services = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      title: t.service1Title,
      description: t.service1Desc,
    },
    {
      title: t.service2Title,
      description: t.service2Desc,
    },
    {
      title: t.service3Title,
      description: t.service3Desc,
    },
    {
      title: t.service4Title,
      description: t.service4Desc,
    },
  ];

  const advantages = [
    t.advantage1,
    t.advantage2,
    t.advantage3,
    t.advantage4,
    t.advantage5,
  ];

  return (
    <section id="services" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.intro}
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
          <h3 className="text-3xl font-bold mb-6">{t.mandateTitle}</h3>
          <p className="text-white font-light mb-6">
            {t.mandateIntro}
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
