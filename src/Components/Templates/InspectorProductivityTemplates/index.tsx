import { SingleValue } from "react-select";
import { ISelectOptions } from "../../../Types/inputs";
import { Button } from "../../Atoms/Button";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { Layout } from "../Layout";
import * as S from "./styles";
import { useInspectorProductivity } from "./useInspectorProductivity";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import dayjs from "dayjs";

export const InspectorProductivityTemplates = () => {
  const {
    Controller,
    control,
    stores,
    handleSubmit,
    onSubmite,
    produtividades,
  } = useInspectorProductivity();
  return (
    <Layout headerTitle="Produtividade por Vistoriador">
      <S.Container>
        <S.FormFilter onSubmit={handleSubmit(onSubmite)}>
          <div>
            <Controller
              control={control}
              name="dataInicio"
              render={({ field: { onChange, value } }) => (
                <InputDate
                  label="Data Inicial"
                  selected={dayjs(value).toDate()}
                  placeholderText="___/___/___"
                  onChange={(e) =>
                    e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange("")
                  }
                />
              )}
            />
          </div>
          <div>
            <Controller
              control={control}
              name="dataFim"
              render={({ field: { onChange, value } }) => (
                <InputDate
                  label="Data Final"
                  placeholderText="___/___/___"
                  selected={dayjs(value).toDate()}
                  onChange={(e) =>
                    e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange("")
                  }
                />
              )}
            />
          </div>
          <div>
            <Controller
              control={control}
              name="loja"
              render={({ field: { onChange, value } }) => (
                <SimpleSelect
                  isClearable
                  options={stores}
                  label="Loja"
                  value={stores.find((i) => i.value === value) || null}
                  onChange={(e: SingleValue<ISelectOptions<string>>) =>
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
            {produtividades?.length > 0 &&
              produtividades?.map((i) => (
                <tr key={Math.random()}>
                  <td>{i?.nome}</td>
                  <td>{i?.loja}</td>
                  <td>{i?.qtdAgendamentoTransferencia}</td>
                  <td>{i?.tempoAgendamentoTransferencia}</td>
                  <td>{i?.qtdAgendamentoEmplacamento}</td>
                  <td>{i?.tempoAgendamentoEmplacamento}</td>
                  <td>{i?.qtdAgendamentoTransferenciaDelivery}</td>
                  <td>{i?.tempoAgendamentoTransferenciaDelivery}</td>
                  <td>{i?.qtdAgendamentoEmplacamentoDelivery}</td>
                  <td>{i?.tempoAgendamentoEmplacamentoDelivery}</td>
                </tr>
              ))}
          </S.TableBody>
        </S.Table>
      </S.Container>
    </Layout>
  );
};
