export interface ITendenciaGetProps {
  empresa?: string;
  loja?: string;
}

export interface ITendenciaDTO {
  empresa: string;
  meta: number;
  qtdMedia: number;
  qtdMediaNecessaria: number;
  qtdMediaProjecao: number;
  qtdTotal: number;
  tendencias: ITendenciaDiaDTO[];
  valorMedio: number;
  valorMedioNecessario: number;
  valorMedioProjecao: number;
  valorTotal: number;
}

export interface ITendenciaDiaDTO {
  data: string;
  qtdTotal: number;
  valorTotal: number;
}
