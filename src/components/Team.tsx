import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const Team = () => {
  const { language } = useLanguage();
  const t = translations[language].team;

  const expertise = [
    { title: t.expertise1Title, description: t.expertise1Desc },
    { title: t.expertise2Title, description: t.expertise2Desc },
    { title: t.expertise3Title, description: t.expertise3Desc },
    { title: t.expertise4Title, description: t.expertise4Desc },
    { title: t.expertise5Title, description: t.expertise5Desc },
    { title: t.expertise6Title, description: t.expertise6Desc },
    { title: t.expertise7Title, description: t.expertise7Desc },
  ];

  return (
    <section id="team" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto whitespace-pre-line">
            {t.subtitle}
            {"\n\n"}
            {t.recognitionDesc}
          </p>
        </div>

        {/* Row 1: Expertise juridique + Finance de projet */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {expertise.slice(0, 2).map((item, index) => (
            <Card key={index} className="p-6 text-center bg-card border border-border">
              <h3 className="text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Row 2: Finances publiques + Fiscalité */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {expertise.slice(2, 4).map((item, index) => (
            <Card key={index} className="p-6 text-center bg-card border border-border">
              <h3 className="text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Row 3: Affaires publiques */}
        <div className="max-w-4xl mx-auto mt-6">
          <Card className="p-6 text-center bg-card border border-border">
            <h3 className="text-lg font-bold text-card-foreground mb-2">{expertise[4].title}</h3>
            <p className="text-sm text-muted-foreground">{expertise[4].description}</p>
          </Card>
        </div>

        {/* Row 4: Droit social + Ingénierie */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {expertise.slice(5).map((item, index) => (
            <Card key={index} className="p-6 text-center bg-card border border-border">
              <h3 className="text-lg font-bold text-card-foreground mb-2">{item.title}</h3>
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
  const { language } = useLanguage();
  const t = translations[language].team;

  const sectors = [
    { title: t.sector1Title, description: t.sector1Desc },
    { title: t.sector2Title, description: t.sector2Desc },
    { title: t.sector3Title, description: t.sector3Desc },
    { title: t.sector4Title, description: t.sector4Desc },
    { title: t.sector5Title, description: t.sector5Desc },
    { title: t.sector6Title, description: t.sector6Desc },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              {t.provenTitle}
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {t.provenDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-background border-none shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t.projectsTitle}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t.projectsDesc}
              </p>
              <div className="space-y-3">
                {[t.project1, t.project2, t.project3, t.project4].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-background border-none shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t.financialTitle}
              </h3>
              <p className="text-muted-foreground mb-4">{t.financialDesc}</p>
              <div className="space-y-3">
                {[t.financial1, t.financial2, t.financial3, t.financial4].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-background border-none shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t.companiesTitle}
              </h3>
              <p className="text-muted-foreground mb-4">{t.companiesDesc}</p>
              <div className="space-y-3">
                {[t.company1, t.company2, t.company3, t.company4].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-background border-none shadow-sm">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t.institutionalTitle}
              </h3>
              <p className="text-muted-foreground">{t.institutionalDesc}</p>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
              {t.sectorsTitle}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
              {t.standardsTitle}
            </h3>
            <p className="text-muted-foreground whitespace-pre-line">
              {t.standardsDesc}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
