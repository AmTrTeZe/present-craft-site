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
    {
      title: t.service5Title,
      description: t.service5Desc,
    },
    {
      title: t.service6Title,
      description: t.service6Desc,
    },
  ];

  const advantages = [
    t.advantage1,
    t.advantage2,
    t.advantage3,
    t.advantage4,
    t.advantage5,
    t.advantage6,
    t.advantage7,
  ];

  return (
    <section id="services" className="py-20 bg-muted scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-anthracite mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            {t.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="mt-6">
          <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-none">
            <h3 className="text-xl font-bold text-card-foreground mb-3">{t.mandateTitle}</h3>
            <p className="text-muted-foreground whitespace-pre-line">
              {t.mandateIntro.split(/(\bAppui ponctuel\b\s*:|Mission dédiée\s*:|Accompagnement dans la durée\s*:|Intervention en marque blanche\s*:|Ad hoc assistance\s*:|Dedicated engagement\s*:|Ongoing support\s*:|White-label intervention\s*:)/).map((part, i) =>
                /^(Appui ponctuel|Mission dédiée|Accompagnement dans la durée|Intervention en marque blanche|Ad hoc assistance|Dedicated engagement|Ongoing support|White-label intervention)\s*:$/.test(part)
                  ? <span key={i} className="font-medium">{part}</span>
                  : <span key={i}>{part}</span>
              )}
            </p>
          </Card>
        </div>

        <div className="mt-6">
          <Card className="p-6 border-none" style={{ backgroundColor: 'hsl(var(--advantages-bg))' }}>
            <h3 className="text-xl font-bold text-card-foreground mb-4">{t.advantagesTitle}</h3>
            <div className="grid grid-cols-1 gap-2">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  <span className="text-muted-foreground font-light text-base">{advantage}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
