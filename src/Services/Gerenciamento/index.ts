import { AxiosResponse } from "axios";
import {
  IGerenciamentoDTO,
  IGetGerenciamentoProps,
} from "../../Types/relatorioGeral";
import { MapaApi } from "../../Api/Mapa";
import { removeEmpty } from "../../Util/removeEmpty";
import {
  ITendenciaDTO,
  ITendenciaGetProps,
} from "../../Types/relatorioTendencia";

const basePath = "/gerenciamento";
const empresa = import.meta.env.VITE_APP_PROJECT;

export class Gerenciamento {
  static async geral(
    props: IGetGerenciamentoProps
  ): Promise<AxiosResponse<IGerenciamentoDTO>> {
    const values = removeEmpty(props);
    const params = new URLSearchParams({ empresa, ...values }).toString();
    return MapaApi.get(`${basePath}/geral?${params}`);
  }

  static async tendencia(
    props?: ITendenciaGetProps
  ): Promise<AxiosResponse<ITendenciaDTO[]>> {
    if (props) {
      const values = removeEmpty(props);
      const params = new URLSearchParams({ empresa, ...values }).toString();
      return MapaApi.get(`${basePath}/tendencia?${params}`);
    }

    return MapaApi.get(`${basePath}/tendencia?empresa=${empresa}`);
  }

  static async listarLojas(): Promise<AxiosResponse<string[]>> {
    const empresa = import.meta.env.VITE_APP_PROJECT;
    return MapaApi.get(`${basePath}/listar-lojas?empresa=${empresa}`);
  }
}
