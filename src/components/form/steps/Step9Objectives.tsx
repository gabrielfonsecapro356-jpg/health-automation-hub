import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { Rocket } from "lucide-react";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step9Objectives = ({ data, onChange }: StepProps) => {
  const objetivosAutomacao = [
    { label: "Reduzir custos", value: "reduzir_custos" },
    { label: "Ganhar produtividade", value: "produtividade" },
    { label: "Aumentar faturamento", value: "aumentar_faturamento" },
    { label: "Melhorar experiência do paciente", value: "experiencia_paciente" },
    { label: "Organizar processos", value: "organizar_processos" },
  ];

  const solucaoCurtoPrazo = [
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
    { label: "Apenas conhecendo", value: "conhecendo" },
  ];

  const investirAutomacao = [
    { label: "30 dias", value: "30_dias" },
    { label: "60 dias", value: "60_dias" },
    { label: "90 dias", value: "90_dias" },
    { label: "Ainda não sei", value: "nao_sei" },
  ];

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <Rocket className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Objetivos e Interesse</h2>
          <p className="text-sm text-muted-foreground">Suas expectativas com automação</p>
        </div>
      </div>

      <FormField
        label="O que você espera melhorar com automação?"
        name="objetivosAutomacao"
        type="checkbox"
        value={data.objetivosAutomacao}
        onChange={(v) => onChange("objetivosAutomacao", v)}
        options={objetivosAutomacao}
        required
      />

      <FormField
        label="Está buscando uma solução para curto prazo?"
        name="solucaoCurtoPrazo"
        type="radio"
        value={data.solucaoCurtoPrazo}
        onChange={(v) => onChange("solucaoCurtoPrazo", v)}
        options={solucaoCurtoPrazo}
        required
      />

      <FormField
        label="Pretende investir em automação nos próximos:"
        name="investirAutomacao"
        type="radio"
        value={data.investirAutomacao}
        onChange={(v) => onChange("investirAutomacao", v)}
        options={investirAutomacao}
        required
      />
    </div>
  );
};
