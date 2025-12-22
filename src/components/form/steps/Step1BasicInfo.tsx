import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { Building2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

const ESTADOS_BRASIL = [
  { sigla: "AC", nome: "Acre" },
  { sigla: "AL", nome: "Alagoas" },
  { sigla: "AP", nome: "Amapá" },
  { sigla: "AM", nome: "Amazonas" },
  { sigla: "BA", nome: "Bahia" },
  { sigla: "CE", nome: "Ceará" },
  { sigla: "DF", nome: "Distrito Federal" },
  { sigla: "ES", nome: "Espírito Santo" },
  { sigla: "GO", nome: "Goiás" },
  { sigla: "MA", nome: "Maranhão" },
  { sigla: "MT", nome: "Mato Grosso" },
  { sigla: "MS", nome: "Mato Grosso do Sul" },
  { sigla: "MG", nome: "Minas Gerais" },
  { sigla: "PA", nome: "Pará" },
  { sigla: "PB", nome: "Paraíba" },
  { sigla: "PR", nome: "Paraná" },
  { sigla: "PE", nome: "Pernambuco" },
  { sigla: "PI", nome: "Piauí" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "RN", nome: "Rio Grande do Norte" },
  { sigla: "RS", nome: "Rio Grande do Sul" },
  { sigla: "RO", nome: "Rondônia" },
  { sigla: "RR", nome: "Roraima" },
  { sigla: "SC", nome: "Santa Catarina" },
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "SE", nome: "Sergipe" },
  { sigla: "TO", nome: "Tocantins" },
];

const formatCNPJ = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  const limited = numbers.slice(0, 14);
  
  if (limited.length <= 2) return limited;
  if (limited.length <= 5) return `${limited.slice(0, 2)}.${limited.slice(2)}`;
  if (limited.length <= 8) return `${limited.slice(0, 2)}.${limited.slice(2, 5)}.${limited.slice(5)}`;
  if (limited.length <= 12) return `${limited.slice(0, 2)}.${limited.slice(2, 5)}.${limited.slice(5, 8)}/${limited.slice(8)}`;
  return `${limited.slice(0, 2)}.${limited.slice(2, 5)}.${limited.slice(5, 8)}/${limited.slice(8, 12)}-${limited.slice(12)}`;
};

const formatPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  const limited = numbers.slice(0, 11);
  
  if (limited.length <= 2) return limited.length ? `(${limited}` : "";
  if (limited.length <= 7) return `(${limited.slice(0, 2)})${limited.slice(2)}`;
  return `(${limited.slice(0, 2)})${limited.slice(2, 7)}-${limited.slice(7)}`;
};

export const Step1BasicInfo = ({ data, onChange }: StepProps) => {
  const handleCNPJChange = (value: string) => {
    onChange("cnpj", formatCNPJ(value));
  };

  const handlePhoneChange = (value: string) => {
    onChange("telefone", formatPhone(value));
  };

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
        
        <div className="space-y-2 animate-fade-in-up">
          <Label htmlFor="cnpj" className="text-sm font-medium text-foreground">
            CNPJ
          </Label>
          <Input
            id="cnpj"
            name="cnpj"
            value={data.cnpj}
            onChange={(e) => handleCNPJChange(e.target.value)}
            placeholder="00.000.000/0000-00"
            className="h-12 bg-card border-2 border-border/50 focus:border-primary transition-all duration-300"
          />
        </div>

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

        <div className="space-y-2 animate-fade-in-up">
          <Label htmlFor="telefone" className="text-sm font-medium text-foreground flex items-center gap-1">
            Telefone / WhatsApp
            <span className="text-destructive">*</span>
          </Label>
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            value={data.telefone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            placeholder="(99)99999-9999"
            required
            className="h-12 bg-card border-2 border-border/50 focus:border-primary transition-all duration-300"
          />
        </div>

        <div className="space-y-2 animate-fade-in-up">
          <Label htmlFor="cidadeEstado" className="text-sm font-medium text-foreground flex items-center gap-1">
            Estado
            <span className="text-destructive">*</span>
          </Label>
          <Select
            value={data.cidadeEstado}
            onValueChange={(value) => onChange("cidadeEstado", value)}
          >
            <SelectTrigger className="h-12 bg-card border-2 border-border/50 focus:border-primary transition-all duration-300">
              <SelectValue placeholder="Selecione o estado" />
            </SelectTrigger>
            <SelectContent className="bg-card border-2 border-border">
              {ESTADOS_BRASIL.map((estado) => (
                <SelectItem key={estado.sigla} value={estado.sigla}>
                  {estado.nome} - {estado.sigla}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

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
