export interface IProdutividadeListProps {
  dataInicio: string;
  empresa?: string;
  loja?: string;
  dataFim: string;
}

export interface IProdutividadeDTO {
  empresa: string;
  vistoriadores: IProdutividadeVistoriadorDTO[];
}

export interface IProdutividadeVistoriadorDTO {
  loja: string;
  nome: string;
  qtdAgendamentoEmplacamento: number;
  qtdAgendamentoEmplacamentoDelivery: number;
  qtdAgendamentoTransferencia: number;
  qtdAgendamentoTransferenciaDelivery: number;
  tempoAgendamentoEmplacamento: string;
  tempoAgendamentoEmplacamentoDelivery: string;
  tempoAgendamentoTransferencia: string;
  tempoAgendamentoTransferenciaDelivery: string;
}
