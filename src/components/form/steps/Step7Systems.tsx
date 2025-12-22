import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { Monitor } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step7Systems = ({ data, onChange }: StepProps) => {
  const sistemasUtilizados = [
    { label: "Sistema médico / prontuário eletrônico", value: "prontuario" },
    { label: "Sistema de agendamento", value: "agendamento" },
    { label: "Sistema financeiro", value: "financeiro" },
    { label: "CRM", value: "crm" },
    { label: "Nenhum", value: "nenhum" },
  ];

  const simNaoOptions = [
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
  ];

  const utilizaAutomacao = [
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
    { label: "Não sei", value: "nao_sei" },
  ];

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <Monitor className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Sistemas e Ferramentas</h2>
          <p className="text-sm text-muted-foreground">Tecnologias utilizadas</p>
        </div>
      </div>

      <FormField
        label="Quais sistemas utiliza hoje?"
        name="sistemasUtilizados"
        type="checkbox"
        value={data.sistemasUtilizados}
        onChange={(v) => onChange("sistemasUtilizados", v)}
        options={sistemasUtilizados}
        required
      />

      {data.sistemasUtilizados.includes("prontuario") && (
        <div className="space-y-2 animate-fade-in-up">
          <Label htmlFor="sistemaEspecifico" className="text-sm font-medium">
            Qual sistema médico / prontuário você utiliza?
          </Label>
          <Input
            id="sistemaEspecifico"
            value={data.sistemaEspecifico}
            onChange={(e) => onChange("sistemaEspecifico", e.target.value)}
            placeholder="Ex: Tasy, MV, Philips..."
            className="h-12 bg-card border-2 border-border/50 focus:border-primary transition-all duration-300"
          />
        </div>
      )}

      <FormField
        label="Utiliza WhatsApp Business?"
        name="whatsappBusiness"
        type="radio"
        value={data.whatsappBusiness}
        onChange={(v) => onChange("whatsappBusiness", v)}
        options={simNaoOptions}
        required
      />

      <FormField
        label="Já utiliza alguma automação hoje?"
        name="utilizaAutomacao"
        type="radio"
        value={data.utilizaAutomacao}
        onChange={(v) => onChange("utilizaAutomacao", v)}
        options={utilizaAutomacao}
        required
      />
    </div>
  );
};
