import { AxiosResponse } from "axios";
import { IAutenticacaoForm } from "../../Types/autenticacao";
import { ApiUsuarios } from "../../Api/Usuarios";

const basePath = "/login";

type AutenticacaoResponse = {
  token: string;
};
export class Autenticacao {
  static async post(
    props: IAutenticacaoForm
  ): Promise<AxiosResponse<AutenticacaoResponse>> {
    return ApiUsuarios.post(`${basePath}`, props);
  }

  static async gerarTokenAnual(
    props: IAutenticacaoForm
  ): Promise<AxiosResponse<AutenticacaoResponse>> {
    return ApiUsuarios.post(`${basePath}/gerar-token-anual`, props);
  }
}
