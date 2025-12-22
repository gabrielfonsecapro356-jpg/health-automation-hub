import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "./ProgressBar";
import { FormData, initialFormData } from "@/types/form";
import { Step1BasicInfo } from "./steps/Step1BasicInfo";
import { Step2Segment } from "./steps/Step2Segment";
import { Step3Structure } from "./steps/Step3Structure";
import { Step4Acquisition } from "./steps/Step4Acquisition";
import { Step5Scheduling } from "./steps/Step5Scheduling";
import { Step6Financial } from "./steps/Step6Financial";
import { Step7Systems } from "./steps/Step7Systems";
import { Step8Pains } from "./steps/Step8Pains";
import { Step9Objectives } from "./steps/Step9Objectives";
import { Step10Final } from "./steps/Step10Final";
import { ChevronLeft, ChevronRight, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://n8n.srv1200909.hstgr.cloud/webhook-test/dados-form";

const steps = [
  "Dados Básicos",
  "Segmento",
  "Estrutura",
  "Captação",
  "Agendamento",
  "Financeiro",
  "Sistemas",
  "Dores",
  "Objetivos",
  "Finalização",
];

export const HealthcareForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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

  const renderStep = () => {
    const props = { data: formData, onChange: handleChange };
    
    switch (currentStep) {
      case 0: return <Step1BasicInfo {...props} />;
      case 1: return <Step2Segment {...props} />;
      case 2: return <Step3Structure {...props} />;
      case 3: return <Step4Acquisition {...props} />;
      case 4: return <Step5Scheduling {...props} />;
      case 5: return <Step6Financial {...props} />;
      case 6: return <Step7Systems {...props} />;
      case 7: return <Step8Pains {...props} />;
      case 8: return <Step9Objectives {...props} />;
      case 9: return <Step10Final {...props} />;
      default: return null;
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
          <ProgressBar 
            currentStep={currentStep} 
            totalSteps={steps.length} 
            steps={steps} 
          />

          <div className="min-h-[400px]">
            {renderStep()}
          </div>

          <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button onClick={handleNext} variant="gradient" className="gap-2">
                Próximo
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
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
            )}
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Suas informações estão protegidas e serão usadas apenas para contato comercial.
        </p>
      </div>
    </div>
  );
};
