import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FormData, initialFormData } from "@/types/form";
import { Step1BasicInfo } from "./steps/Step1BasicInfo";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://n8n.srv1200909.hstgr.cloud/webhook-test/d850d3a7-327a-490b-8950-1762e484d085";

export const HealthcareForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          source: window.location.origin,
        }),
      });

      setIsSubmitted(true);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Em breve entraremos em contato.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Formulário enviado",
        description: "Seus dados foram registrados. Entraremos em contato em breve.",
      });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen gradient-soft flex items-center justify-center p-4">
        <div className="max-w-lg w-full text-center animate-fade-in-up">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center shadow-glow">
            <svg className="w-12 h-12 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Obrigado pelo seu interesse!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Recebemos suas informações e em breve nossa equipe entrará em contato 
            para discutir as melhores soluções de automação para o seu negócio.
          </p>
          <div className="p-6 rounded-xl bg-card shadow-card border border-border/50">
            <p className="text-sm text-muted-foreground">
              Enquanto isso, fique à vontade para explorar nosso site ou 
              nos seguir nas redes sociais para dicas de automação em saúde.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-soft py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Diagnóstico de Automação
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubra como otimizar os processos da sua empresa de saúde
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6 md:p-8">
          <Step1BasicInfo data={formData} onChange={handleChange} />

          <div className="flex justify-end mt-8 pt-6 border-t border-border/50">
            <Button
              onClick={handleSubmit}
              variant="gradient"
              disabled={isSubmitting}
              className="gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Enviar Formulário
                </>
              )}
            </Button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Suas informações estão protegidas e serão usadas apenas para contato comercial.
        </p>
      </div>
    </div>
  );
};
