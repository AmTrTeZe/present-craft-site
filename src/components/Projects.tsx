import { Card } from "@/components/ui/card";
import { Building2, Globe, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    "SOTRA restructuring project; PPP contract negotiations with the State",
    "Assistance to AFRICA RAIL for the Sitarail/OCBN project and definition of the governance and contractual framework",
    "Support for SOFRECO in the development of the Lagos Abidjan freeway project (feasibility studies, contractual scheme, tendering process, evaluation, negotiation support)",
    "Assistance to BNP Paribas, Paris: Structured Finance $750m development finance for Jubilee contractor",
    "Assisting a consortium regarding a potential electrification project in West Africa, financed by the African Development Bank",
    "Advising a consortium of international entities (SNCF – RATP Dev – Keolis) regarding the Train Express Regional (TER) Project in Dakar",
    "Assistance to French Ministry of the Economy and Finance, Paris: €3bn refinancing as guarantor for SEA high-speed train line",
    "World Bank InfraSAP evaluation project; review of infrastructure projects: motorway, rail, port, airport, agropolis and urban mobility",
  ];

  const institutions = [
    "World Bank",
    "African Development Bank",
    "European Bank for Reconstruction and Development",
    "European Commission",
    "United Nations (UNIDO, UNITAR)",
    "COMESA, UEMOA Commission, ECOWAS Commission",
    "Government of Burundi, Senegal, Togo",
  ];

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Exemples de Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos équipes ont réalisé des projets d'envergure pour des clients prestigieux
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-card border-none">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Building2 className="text-secondary" size={20} />
                </div>
                <p className="text-card-foreground">{project}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-primary text-primary-foreground border-none">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-secondary" size={32} />
            <h3 className="text-3xl font-bold">Institutions Internationales</h3>
          </div>
          <p className="text-primary-foreground/90 mb-6">
            Nous conseillons et assistons régulièrement les institutions internationales les plus prestigieuses :
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {institutions.map((institution, index) => (
              <div key={index} className="flex items-center gap-3">
                <Award className="text-secondary shrink-0" size={16} />
                <span className="text-primary-foreground/90">{institution}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
