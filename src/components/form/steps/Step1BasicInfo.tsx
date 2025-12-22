import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { Building2 } from "lucide-react";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step1BasicInfo = ({ data, onChange }: StepProps) => {
  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <Building2 className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Dados Básicos da Empresa</h2>
          <p className="text-sm text-muted-foreground">Informações de identificação</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Nome da empresa"
          name="nomeEmpresa"
          value={data.nomeEmpresa}
          onChange={(v) => onChange("nomeEmpresa", v)}
          placeholder="Ex: Clínica Saúde Total"
          required
        />
        
        <FormField
          label="CNPJ"
          name="cnpj"
          value={data.cnpj}
          onChange={(v) => onChange("cnpj", v)}
          placeholder="00.000.000/0000-00"
        />

        <FormField
          label="Nome do responsável"
          name="nomeResponsavel"
          value={data.nomeResponsavel}
          onChange={(v) => onChange("nomeResponsavel", v)}
          placeholder="Nome completo"
          required
        />

        <FormField
          label="Cargo do responsável"
          name="cargoResponsavel"
          value={data.cargoResponsavel}
          onChange={(v) => onChange("cargoResponsavel", v)}
          placeholder="Ex: Diretor, Gerente"
        />

        <FormField
          label="E-mail"
          name="email"
          type="email"
          value={data.email}
          onChange={(v) => onChange("email", v)}
          placeholder="email@empresa.com"
          required
        />

        <FormField
          label="Telefone / WhatsApp"
          name="telefone"
          type="tel"
          value={data.telefone}
          onChange={(v) => onChange("telefone", v)}
          placeholder="(00) 00000-0000"
          required
        />

        <FormField
          label="Cidade / Estado"
          name="cidadeEstado"
          value={data.cidadeEstado}
          onChange={(v) => onChange("cidadeEstado", v)}
          placeholder="Ex: São Paulo - SP"
          required
        />

        <FormField
          label="Site"
          name="site"
          value={data.site}
          onChange={(v) => onChange("site", v)}
          placeholder="www.suaempresa.com.br"
        />

        <FormField
          label="Instagram / Redes sociais"
          name="redesSociais"
          value={data.redesSociais}
          onChange={(v) => onChange("redesSociais", v)}
          placeholder="@suaempresa"
          className="md:col-span-2"
        />
      </div>
    </div>
  );
};
