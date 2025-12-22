import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { DollarSign } from "lucide-react";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step6Financial = ({ data, onChange }: StepProps) => {
  const controleFinanceiro = [
    { label: "Sistema", value: "sistema" },
    { label: "Planilhas", value: "planilhas" },
    { label: "Manual", value: "manual" },
    { label: "Não existe controle claro", value: "sem_controle" },
  ];

  const simNaoOptions = [
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
  ];

  const dificuldadesFinanceiras = [
    { label: "Glosas", value: "glosas" },
    { label: "Faturamento de convênios", value: "faturamento_convenios" },
    { label: "Cobrança de pacientes", value: "cobranca_pacientes" },
    { label: "Controle de inadimplência", value: "inadimplencia" },
    { label: "Nenhuma", value: "nenhuma" },
  ];

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <DollarSign className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Financeiro e Faturamento</h2>
          <p className="text-sm text-muted-foreground">Gestão financeira do negócio</p>
        </div>
      </div>

      <FormField
        label="Como é feito o controle financeiro hoje?"
        name="controleFinanceiro"
        type="radio"
        value={data.controleFinanceiro}
        onChange={(v) => onChange("controleFinanceiro", v)}
        options={controleFinanceiro}
        required
      />

      <FormField
        label="Trabalha com convênios?"
        name="trabalhaConvenios"
        type="radio"
        value={data.trabalhaConvenios}
        onChange={(v) => onChange("trabalhaConvenios", v)}
        options={simNaoOptions}
        required
      />

      <FormField
        label="Possui dificuldades com:"
        name="dificuldadesFinanceiras"
        type="checkbox"
        value={data.dificuldadesFinanceiras}
        onChange={(v) => onChange("dificuldadesFinanceiras", v)}
        options={dificuldadesFinanceiras}
      />
    </div>
  );
};
