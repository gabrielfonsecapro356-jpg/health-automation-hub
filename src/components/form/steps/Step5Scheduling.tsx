import { FormField } from "../FormField";
import { FormData } from "@/types/form";
import { Calendar } from "lucide-react";

interface StepProps {
  data: FormData;
  onChange: (field: keyof FormData, value: string | string[]) => void;
}

export const Step5Scheduling = ({ data, onChange }: StepProps) => {
  const comoFuncionaAgendamento = [
    { label: "Manual (WhatsApp / telefone)", value: "manual" },
    { label: "Sistema de agenda", value: "sistema" },
    { label: "Agenda integrada ao site", value: "agenda_site" },
    { label: "Outro", value: "outro" },
  ];

  const agendamentosPerdidos = [
    { label: "Poucos", value: "poucos" },
    { label: "Médios", value: "medios" },
    { label: "Muitos", value: "muitos" },
    { label: "Não sei", value: "nao_sei" },
  ];

  const simNaoOptions = [
    { label: "Sim", value: "sim" },
    { label: "Não", value: "nao" },
  ];

  return (
    <div className="space-y-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
          <Calendar className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Agendamento e Atendimento</h2>
          <p className="text-sm text-muted-foreground">Processos de agenda</p>
        </div>
      </div>

      <FormField
        label="Como funciona o agendamento hoje?"
        name="comoFuncionaAgendamento"
        type="radio"
        value={data.comoFuncionaAgendamento}
        onChange={(v) => onChange("comoFuncionaAgendamento", v)}
        options={comoFuncionaAgendamento}
        required
      />

      <FormField
        label="Quantos agendamentos são perdidos por falta de resposta ou atraso?"
        name="agendamentosPerdidos"
        type="radio"
        value={data.agendamentosPerdidos}
        onChange={(v) => onChange("agendamentosPerdidos", v)}
        options={agendamentosPerdidos}
        required
      />

      <FormField
        label="Existe confirmação automática de consultas?"
        name="confirmacaoAutomatica"
        type="radio"
        value={data.confirmacaoAutomatica}
        onChange={(v) => onChange("confirmacaoAutomatica", v)}
        options={simNaoOptions}
        required
      />

      <FormField
        label="Existe envio de lembretes antes da consulta?"
        name="envioLembretes"
        type="radio"
        value={data.envioLembretes}
        onChange={(v) => onChange("envioLembretes", v)}
        options={simNaoOptions}
        required
      />
    </div>
  );
};
