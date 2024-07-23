import { AxiosResponse } from "axios";

import { MapaApi } from "../../Api/mapa";
import { removeEmpty } from "../../Util/removeEmpty";
import {
  IClienteDTO,
  IClienteForm,
  IClienteListPros,
  IPageClienteDTO,
} from "../../Util/cliente";

const basePath = "/cliente";

export class Cliente {
  static post(props: IClienteForm): Promise<AxiosResponse<IClienteDTO>> {
    return MapaApi.post(`${basePath}/cadastrar`, props);
  }

  static list(
    props?: IClienteListPros
  ): Promise<AxiosResponse<IPageClienteDTO>> {
    let params = "";

    if (props) {
      const values = removeEmpty(props);
      params = new URLSearchParams(values).toString();
    }

    return MapaApi.get(
      params ? `${basePath}/listar?${params}` : `${basePath}/listar`
    );
  }

  static byId({ uuid }: { uuid: string }): Promise<AxiosResponse<IClienteDTO>> {
    return MapaApi.get(`${basePath}/${uuid}`);
  }

  static usuarioAtual(): Promise<AxiosResponse<string>> {
    return MapaApi.get(`${basePath}/usuario/atual`);
  }

  static clienteLogado({
    uuidUsuario,
  }: {
    uuidUsuario: string;
  }): Promise<AxiosResponse<IClienteDTO>> {
    return MapaApi.get(`${basePath}/usuario/${uuidUsuario}`);
  }
}
