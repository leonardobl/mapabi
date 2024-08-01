import { AxiosResponse } from "axios";
import {
  IGerenciamentoDTO,
  IGetGerenciamentoProps,
} from "../../Types/gerenciamento";
import { MapaApi } from "../../Api/Mapa";
import { removeEmpty } from "../../Util/removeEmpty";

const basePath = "/gerenciamento";
const empresa = import.meta.env.VITE_APP_PROJECT;

export class Gerenciamento {
  static async get(
    props: IGetGerenciamentoProps
  ): Promise<AxiosResponse<IGerenciamentoDTO>> {
    const values = removeEmpty(props);
    const params = new URLSearchParams({ ...values, empresa }).toString();
    return MapaApi.get(`${basePath}/geral?${params}`);
  }
}
