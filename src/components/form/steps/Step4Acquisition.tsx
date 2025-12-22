import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { Target } from "lucide-react";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step4Acquisition = ({ data, onChange }: StepProps) => {
  const comoPacientesChegam = [
    { label: "WhatsApp", value: "whatsapp" },
    { label: "Telefone", value: "telefone" },
    { label: "Instagram", value: "instagram" },
    { label: "Google", value: "google" },
    { label: "Indicação", value: "indicacao" },
    { label: "Convênios", value: "convenios" },
    { label: "Outro", value: "outro" },
  ];

  const processoAutomatizado = [
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
    { label: "Parcial", value: "parcial" },
  ];

  const ondeContatosRegistrados = [
    { label: "WhatsApp", value: "whatsapp" },
    { label: "Planilha", value: "planilha" },
    { label: "Sistema / CRM", value: "sistema_crm" },
    { label: "Não são registrados", value: "nao_registrados" },
    { label: "Outro", value: "outro" },
  ];

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <Target className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Captação de Pacientes</h2>
          <p className="text-sm text-muted-foreground">Como os leads chegam até você</p>
        </div>
      </div>

      <FormField
        label="Como os pacientes chegam hoje?"
        name="comoPacientesChegam"
        type="checkbox"
        value={data.comoPacientesChegam}
        onChange={(v) => onChange("comoPacientesChegam", v)}
        options={comoPacientesChegam}
        required
      />

      <FormField
        label="Possui algum processo automatizado de captação de leads?"
        name="processoAutomatizado"
        type="radio"
        value={data.processoAutomatizado}
        onChange={(v) => onChange("processoAutomatizado", v)}
        options={processoAutomatizado}
        required
      />

      <FormField
        label="Onde os contatos são registrados hoje?"
        name="ondeContatosRegistrados"
        type="radio"
        value={data.ondeContatosRegistrados}
        onChange={(v) => onChange("ondeContatosRegistrados", v)}
        options={ondeContatosRegistrados}
        required
      />
    </div>
  );
};
