import { BarChart } from "@mui/x-charts";
import { Card } from "../../Atoms/Card";
import { FormFilterServiceTypeReport } from "../../Molecules/Forms/FormFilterServiceTypeReport";
import { Layout } from "../Layout";
import * as S from "./styles";
import { useServiceTypeReport } from "./useServiceTypeReport";
import { GraphColors } from "../../../Util/graphCorlors";

export const ServiceTypeReportTemplate = () => {
  const { formattedData, handleSubmite, tipoServicos } = useServiceTypeReport();

  return (
    <Layout headerTitle="Produtividade por Tipo de Serviço">
      <S.Container>
        <S.WrapperFilter>
          <FormFilterServiceTypeReport onSubmite={handleSubmite} />
        </S.WrapperFilter>
        <S.Table>
          <S.TableHead>
            <tr className="row_black">
              <td rowSpan={2}>Loja</td>
              <td colSpan={3}>Vistoria de Transferência</td>
              <td colSpan={3}>Primeiro Emplacamento</td>
            </tr>

            <tr className="row_green">
              <td>Qtd. Loja</td>
              <td>Qtd. Móvel</td>
              <td>Total</td>
              <td>Qtd. Loja</td>
              <td>Qtd. Móvel</td>
              <td>Total</td>
            </tr>
          </S.TableHead>
          <S.TableBody>
            {tipoServicos.map((i) => (
              <tr key={Math.random()}>
                <td>{i?.loja}</td>
                <td>{i?.qtdTransferenciaLoja}</td>
                <td>{i?.qtdTransferenciaMovel}</td>
                <td>{i?.qtdTransferenciaTotal}</td>
                <td>{i?.qtdPrimeiroEmplacamentoLoja}</td>
                <td>{i.qtdPrimeiroEmplacamentoMovel}</td>
                <td>{i?.qtdPrimeiroEmplacamentoTotal}</td>
              </tr>
            ))}
          </S.TableBody>
        </S.Table>

        <h3>Vistorias de Transferência x Primeiro Emplacamento </h3>

        <S.WrapperCards>
          <Card>
            <BarChart
              margin={{
                bottom: 70,
              }}
              height={230}
              width={600}
              slotProps={{
                legend: {
                  position: {
                    vertical: "bottom",
                    horizontal: "right",
                  },

                  labelStyle: { fontSize: 12 },
                  itemMarkWidth: 10,
                  itemMarkHeight: 10,
                  markGap: 5,
                  itemGap: 10,
                },
              }}
              xAxis={[
                {
                  scaleType: "band",
                  data: formattedData?.lojas || [],
                  colorMap: {
                    type: "ordinal",
                    values: ["Lojas"],
                    colors: [
                      "#2d2d2d",
                      GraphColors[import.meta.env.VITE_APP_PROJECT],
                    ],
                  },
                },
              ]}
              series={formattedData.series || []}
              skipAnimation={true}
            />
          </Card>
        </S.WrapperCards>
      </S.Container>
    </Layout>
  );
};
