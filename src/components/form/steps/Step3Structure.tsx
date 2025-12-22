import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { Users } from "lucide-react";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step3Structure = ({ data, onChange }: StepProps) => {
  const quantidadeUnidades = [
    { label: "1 unidade", value: "1" },
    { label: "2 a 5 unidades", value: "2_5" },
    { label: "Mais de 5 unidades", value: "mais_5" },
  ];

  const equipeAdministrativa = [
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
    { label: "Parcial", value: "parcial" },
  ];

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <Users className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Estrutura e Volume</h2>
          <p className="text-sm text-muted-foreground">Dimensionamento do seu negócio</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Quantos profissionais atendem hoje?"
          name="quantidadeProfissionais"
          value={data.quantidadeProfissionais}
          onChange={(v) => onChange("quantidadeProfissionais", v)}
          placeholder="Ex: 5 profissionais"
          required
        />

        <FormField
          label="Quantos atendimentos são realizados por mês (média)?"
          name="atendimentosMes"
          value={data.atendimentosMes}
          onChange={(v) => onChange("atendimentosMes", v)}
          placeholder="Ex: 500 atendimentos"
          required
        />
      </div>

      <FormField
        label="Quantas unidades a empresa possui?"
        name="quantidadeUnidades"
        type="radio"
        value={data.quantidadeUnidades}
        onChange={(v) => onChange("quantidadeUnidades", v)}
        options={quantidadeUnidades}
        required
      />

      <FormField
        label="Possui equipe administrativa dedicada?"
        name="equipeAdministrativa"
        type="radio"
        value={data.equipeAdministrativa}
        onChange={(v) => onChange("equipeAdministrativa", v)}
        options={equipeAdministrativa}
        required
      />
    </div>
  );
};
