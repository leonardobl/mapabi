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
import {
  IProducaoTipoServicoDTO,
  ITipoServicoListProps,
} from "../../Types/tipoServico";

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

  static async TipoServico(
    props?: ITipoServicoListProps
  ): Promise<AxiosResponse<IProducaoTipoServicoDTO[]>> {
    if (props) {
      const values = removeEmpty(props);
      const params = new URLSearchParams(values);
      return MapaApi.get(`${basePath}/producao-tipo-servico?${params}`);
    }

    return MapaApi.get(`${basePath}/producao-tipo-servico`);
  }
}
