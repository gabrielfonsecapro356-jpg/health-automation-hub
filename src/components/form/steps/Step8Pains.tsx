import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { AlertCircle } from "lucide-react";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step8Pains = ({ data, onChange }: StepProps) => {
  const ondePerdeTempoMais = [
    { label: "Atendimento", value: "atendimento" },
    { label: "Agendamento", value: "agendamento" },
    { label: "Financeiro", value: "financeiro" },
    { label: "Comunicação com pacientes", value: "comunicacao" },
    { label: "Gestão interna", value: "gestao" },
  ];

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <AlertCircle className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Principais Dores e Gargalos</h2>
          <p className="text-sm text-muted-foreground">Identifique seus maiores desafios</p>
        </div>
      </div>

      <FormField
        label="Quais são hoje os maiores problemas da sua operação?"
        name="maioresProblemas"
        type="textarea"
        value={data.maioresProblemas}
        onChange={(v) => onChange("maioresProblemas", v)}
        placeholder="Descreva os principais desafios que você enfrenta no dia a dia..."
        required
      />

      <FormField
        label="Onde você sente que mais perde tempo?"
        name="ondePerdeTempoMais"
        type="checkbox"
        value={data.ondePerdeTempoMais}
        onChange={(v) => onChange("ondePerdeTempoMais", v)}
        options={ondePerdeTempoMais}
        required
      />

      <FormField
        label="Se pudesse automatizar apenas uma coisa hoje, o que seria?"
        name="automatizarUmaCoisa"
        type="textarea"
        value={data.automatizarUmaCoisa}
        onChange={(v) => onChange("automatizarUmaCoisa", v)}
        placeholder="Ex: Confirmação de consultas, envio de lembretes..."
        required
      />
    </div>
  );
};
