import { SingleValue } from "react-select";
import { ISelectOptions } from "../../../Types/inputs";
import { Button } from "../../Atoms/Button";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Layout } from "../Layout";
import * as S from "./styles";
import { useInspectorProductivity } from "./useInspectorProductivity";

export const InspectorProductivityTemplates = () => {
  const { Controller, control, stores } = useInspectorProductivity();
  return (
    <Layout headerTitle="Produtividade por Vistoriador">
      <S.Container>
        <S.FormFilter>
          <div>
            <Controller
              control={control}
              name="loja"
              render={({ field: { onChange } }) => (
                <SimpleSelect
                  options={stores}
                  label="Loja"
                  onChange={(e: SingleValue<ISelectOptions<unknown>>) =>
                    onChange(e?.value)
                  }
                />
              )}
            />
          </div>
          <div>
            <Button>Filtrar</Button>
          </div>
        </S.FormFilter>

        <S.Table>
          <S.TableHead>
            <tr className="th_black">
              <td rowSpan={3}>Nome do Vistoriador</td>
              <td rowSpan={3}>Loja</td>
              <td colSpan={4}>Atendimento Loja</td>
              <td colSpan={4}>Delivery</td>
            </tr>

            <tr className="th_black">
              <td colSpan={2}>Vistoria de Transferência</td>
              <td colSpan={2}>Primeiro Emplacamento</td>
              <td colSpan={2}>Vistoria de Transferência</td>
              <td colSpan={2}>Primeiro Emplacamento</td>
            </tr>

            <tr className="th_green">
              <td>Qtd. de Vistorias</td>
              <td>Tempo médio de Vistorias</td>
              <td>Qtd. de Vistorias</td>
              <td>Tempo médio de Vistorias</td>

              <td>Qtd. de Vistorias</td>
              <td>Tempo médio de Vistorias</td>
              <td>Qtd. de Vistorias</td>
              <td>Tempo médio de Vistorias</td>
            </tr>
          </S.TableHead>
          <S.TableBody>
            <tr>
              <td>Leonardo</td>
              <td>São Luís</td>
              <td>400</td>
              <td>00:00:44</td>
              <td>800</td>
              <td>00:00:44</td>
              <td>952</td>
              <td>00:00:80</td>
              <td>760</td>
              <td>00:00:60</td>
            </tr>
            <tr>
              <td>Leonardo</td>
              <td>São Luís</td>
              <td>400</td>
              <td>00:00:44</td>
              <td>800</td>
              <td>00:00:44</td>
              <td>952</td>
              <td>00:00:80</td>
              <td>760</td>
              <td>00:00:60</td>
            </tr>
            <tr>
              <td>Leonardo</td>
              <td>São Luís</td>
              <td>400</td>
              <td>00:00:44</td>
              <td>800</td>
              <td>00:00:44</td>
              <td>952</td>
              <td>00:00:80</td>
              <td>760</td>
              <td>00:00:60</td>
            </tr>
            <tr>
              <td>Leonardo</td>
              <td>São Luís</td>
              <td>400</td>
              <td>00:00:44</td>
              <td>800</td>
              <td>00:00:44</td>
              <td>952</td>
              <td>00:00:80</td>
              <td>760</td>
              <td>00:00:60</td>
            </tr>
            <tr>
              <td>Leonardo</td>
              <td>São Luís</td>
              <td>400</td>
              <td>00:00:44</td>
              <td>800</td>
              <td>00:00:44</td>
              <td>952</td>
              <td>00:00:80</td>
              <td>760</td>
              <td>00:00:60</td>
            </tr>
          </S.TableBody>
        </S.Table>
      </S.Container>
    </Layout>
  );
};
