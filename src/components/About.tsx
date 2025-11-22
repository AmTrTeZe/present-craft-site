import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const distinctions = [
    {
      title: t.distinction1Title,
      description: t.distinction1Desc
    },
    {
      title: t.distinction2Title,
      description: t.distinction2Desc
    },
    {
      title: t.distinction3Title,
      description: t.distinction3Desc
    }
  ];

  const values = [
    {
      title: t.value1Title,
      description: t.value1Desc
    },
    {
      title: t.value2Title,
      description: t.value2Desc
    },
    {
      title: t.value3Title,
      description: t.value3Desc
    },
    {
      title: t.value4Title,
      description: t.value4Desc
    }
  ];

  return (
    <section id="about" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t.paragraph1}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {t.paragraph2}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {t.paragraph3}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {t.paragraph4}
            </p>
          </div>

          <Card className="p-8 bg-muted border-none">
            <h3 className="text-2xl font-bold text-primary mb-6">{t.distinctionsTitle}</h3>
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
            <h3 className="text-2xl font-bold text-primary mb-6">{t.valuesTitle}</h3>
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
