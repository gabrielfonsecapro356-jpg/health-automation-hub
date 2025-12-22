export interface FormData {
  // Dados básicos
  nomeEmpresa: string;
  cnpj: string;
  nomeResponsavel: string;
  cargoResponsavel: string;
  email: string;
  telefone: string;
  cidadeEstado: string;
  site: string;
  redesSociais: string;

  // Segmento
  tipoEmpresa: string;
  tipoEmpresaOutro: string;
  especialidades: string;
  tempoFuncionamento: string;

  // Estrutura
  quantidadeProfissionais: string;
  atendimentosMes: string;
  quantidadeUnidades: string;
  equipeAdministrativa: string;

  // Captação
  comoPacientesChegam: string[];
  processoAutomatizado: string;
  ondeContatosRegistrados: string;

  // Agendamento
  comoFuncionaAgendamento: string;
  agendamentosPerdidos: string;
  confirmacaoAutomatica: string;
  envioLembretes: string;

  // Financeiro
  controleFinanceiro: string;
  trabalhaConvenios: string;
  dificuldadesFinanceiras: string[];

  // Sistemas
  sistemasUtilizados: string[];
  sistemaEspecifico: string;
  whatsappBusiness: string;
  utilizaAutomacao: string;

  // Dores
  maioresProblemas: string;
  ondePerdeTempoMais: string[];
  automatizarUmaCoisa: string;

  // Objetivos
  objetivosAutomacao: string[];
  solucaoCurtoPrazo: string;
  investirAutomacao: string;

  // Final
  diagnosticoGratuito: string;
  observacoesFinais: string;
}

export const initialFormData: FormData = {
  nomeEmpresa: "",
  cnpj: "",
  nomeResponsavel: "",
  cargoResponsavel: "",
  email: "",
  telefone: "",
  cidadeEstado: "",
  site: "",
  redesSociais: "",
  tipoEmpresa: "",
  tipoEmpresaOutro: "",
  especialidades: "",
  tempoFuncionamento: "",
  quantidadeProfissionais: "",
  atendimentosMes: "",
  quantidadeUnidades: "",
  equipeAdministrativa: "",
  comoPacientesChegam: [],
  processoAutomatizado: "",
  ondeContatosRegistrados: "",
  comoFuncionaAgendamento: "",
  agendamentosPerdidos: "",
  confirmacaoAutomatica: "",
  envioLembretes: "",
  controleFinanceiro: "",
  trabalhaConvenios: "",
  dificuldadesFinanceiras: [],
  sistemasUtilizados: [],
  sistemaEspecifico: "",
  whatsappBusiness: "",
  utilizaAutomacao: "",
  maioresProblemas: "",
  ondePerdeTempoMais: [],
  automatizarUmaCoisa: "",
  objetivosAutomacao: [],
  solucaoCurtoPrazo: "",
  investirAutomacao: "",
  diagnosticoGratuito: "",
  observacoesFinais: "",
};
