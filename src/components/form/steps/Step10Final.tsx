import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { CheckCircle2 } from "lucide-react";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step10Final = ({ data, onChange }: StepProps) => {
  const diagnosticoGratuito = [
    { label: "Sim, quero receber!", value: "sim" },
    { label: "Não, obrigado", value: "nao" },
  ];

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Finalizando</h2>
          <p className="text-sm text-muted-foreground">Últimas informações</p>
        </div>
      </div>

      <div className="p-6 rounded-xl bg-accent/50 border-2 border-primary/20 mb-6">
        <h3 className="font-semibold text-foreground mb-2">
          🎁 Diagnóstico Gratuito
        </h3>
        <p className="text-sm text-muted-foreground">
          Oferecemos um diagnóstico completo e gratuito do seu negócio, 
          identificando oportunidades de automação e melhorias nos processos.
        </p>
      </div>

      <FormField
        label="Deseja receber um diagnóstico gratuito do seu negócio?"
        name="diagnosticoGratuito"
        type="radio"
        value={data.diagnosticoGratuito}
        onChange={(v) => onChange("diagnosticoGratuito", v)}
        options={diagnosticoGratuito}
        required
      />

      <FormField
        label="Observações finais"
        name="observacoesFinais"
        type="textarea"
        value={data.observacoesFinais}
        onChange={(v) => onChange("observacoesFinais", v)}
        placeholder="Algo mais que gostaria de compartilhar? Dúvidas, expectativas, comentários..."
      />

      <div className="p-4 rounded-lg bg-secondary/20 border border-secondary/30 mt-6">
        <p className="text-sm text-muted-foreground text-center">
          Ao enviar, você concorda com nossa política de privacidade. 
          Seus dados estão seguros e serão usados apenas para contato comercial.
        </p>
      </div>
    </div>
  );
};
