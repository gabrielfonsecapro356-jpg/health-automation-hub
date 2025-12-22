import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { Stethoscope } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step2Segment = ({ data, onChange }: StepProps) => {
  const tiposEmpresa = [
    { label: "Clínica médica", value: "clinica_medica" },
    { label: "Clínica odontológica", value: "clinica_odontologica" },
    { label: "Clínica de exames / imagem", value: "clinica_exames" },
    { label: "Laboratório", value: "laboratorio" },
    { label: "Clínica estética", value: "clinica_estetica" },
    { label: "Hospital", value: "hospital" },
    { label: "Home care", value: "home_care" },
    { label: "Outro", value: "outro" },
  ];

  const tempoFuncionamento = [
    { label: "Menos de 1 ano", value: "menos_1_ano" },
    { label: "1 a 3 anos", value: "1_3_anos" },
    { label: "3 a 5 anos", value: "3_5_anos" },
    { label: "Mais de 5 anos", value: "mais_5_anos" },
  ];

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <Stethoscope className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Segmento e Tipo de Negócio</h2>
          <p className="text-sm text-muted-foreground">Classificação da sua empresa</p>
        </div>
      </div>

      <FormField
        label="Qual é o tipo de empresa?"
        name="tipoEmpresa"
        type="radio"
        value={data.tipoEmpresa}
        onChange={(v) => onChange("tipoEmpresa", v)}
        options={tiposEmpresa}
        required
      />

      {data.tipoEmpresa === "outro" && (
        <div className="space-y-2 animate-fade-in-up">
          <Label htmlFor="tipoEmpresaOutro" className="text-sm font-medium">
            Especifique o tipo de empresa
          </Label>
          <Input
            id="tipoEmpresaOutro"
            value={data.tipoEmpresaOutro}
            onChange={(e) => onChange("tipoEmpresaOutro", e.target.value)}
            placeholder="Descreva o tipo da sua empresa"
            className="h-12 bg-card border-2 border-border/50 focus:border-primary transition-all duration-300"
          />
        </div>
      )}

      <FormField
        label="Especialidades atendidas"
        name="especialidades"
        type="textarea"
        value={data.especialidades}
        onChange={(v) => onChange("especialidades", v)}
        placeholder="Ex: Cardiologia, Dermatologia, Pediatria..."
      />

      <FormField
        label="Tempo de funcionamento da empresa"
        name="tempoFuncionamento"
        type="radio"
        value={data.tempoFuncionamento}
        onChange={(v) => onChange("tempoFuncionamento", v)}
        options={tempoFuncionamento}
        required
      />
    </div>
  );
};
