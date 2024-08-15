export interface ITipoServicoListProps {
  dataInicio?: string;
  dataFim?: string;
  empresa?: string;
  loja?: string;
}

export interface IProducaoTipoServicoDTO {
  empresa: string;
  loja: string;
  qtdPrimeiroEmplacamentoLoja: number;
  qtdPrimeiroEmplacamentoMovel: number;
  qtdPrimeiroEmplacamentoTotal: number;
  qtdTransferenciaLoja: number;
  qtdTransferenciaMovel: number;
  qtdTransferenciaTotal: number;
}
