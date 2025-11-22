import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/translations";

const ContactForm = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    project: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t.successTitle,
        description: t.successDesc,
      });
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        project: "",
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="p-8 bg-muted border-none">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-primary mb-4">
          {t.formTitle}
        </h3>
        <p className="text-muted-foreground">
          {t.formSubtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">{t.firstName}</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder={t.firstNamePlaceholder}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">{t.lastName}</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder={t.lastNamePlaceholder}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t.emailPlaceholder}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">{t.company}</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            placeholder={t.companyPlaceholder}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="project">{t.project}</Label>
          <Textarea
            id="project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            required
            placeholder={t.projectPlaceholder}
            className="min-h-[120px]"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full bg-secondary text-white hover:bg-secondary/90 font-semibold"
        >
          {isSubmitting ? t.submittingBtn : t.submitBtn}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
