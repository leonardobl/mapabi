import { LineChart } from "@mui/x-charts";
import { Layout } from "../Layout";
import * as S from "./styles";
import { Card } from "../../Atoms/Card";
import { useTrendReport } from "./useTrendReport";

export const TrendReportTemplate = () => {
  const { qtdChart, valorChart, data } = useTrendReport();

  return (
    <Layout headerTitle="Tendência">
      <S.Container>
        <S.WrapperCards>
          <S.WrapperCard>
            <h3>Quantidade Total de Vistorias</h3>

            <Card>
              <LineChart
                margin={{
                  bottom: 70,
                }}
                height={230}
                width={530}
                xAxis={[{ scaleType: "band", data: qtdChart?.xAxis || [] }]}
                series={qtdChart.series || []}
                slotProps={{
                  legend: {
                    hidden: true,
                  },
                }}
              />
            </Card>
          </S.WrapperCard>

          <S.WrapperCard>
            <h3>Valor Total de Vistorias</h3>

            <Card>
              <LineChart
                margin={{
                  bottom: 70,
                }}
                height={230}
                width={530}
                xAxis={[
                  {
                    scaleType: "band",
                    data: valorChart?.xAxis || [],
                  },
                ]}
                series={valorChart?.series || []}
                slotProps={{
                  legend: {
                    hidden: true,
                  },
                }}
              />
            </Card>
          </S.WrapperCard>

          <S.WrapperCard>
            <h3>Desempenho em Relação a Meta</h3>

            <S.Table>
              <S.TableHeader>
                <tr>
                  <th>Meta</th>
                  <th>Realizado</th>
                  <th>Média/dia</th>
                  <th>Necessidade /dia</th>
                  <th>Projeção</th>
                </tr>
              </S.TableHeader>

              <S.TableBody>
                <tr>
                  <td>{data?.meta}</td>
                  <td>{data?.qtdTotal}</td>
                  <td>{data?.qtdMedia}</td>
                  <td>{data?.qtdMediaProjecao}</td>
                  <td>{data?.valorMedioProjecao}</td>
                </tr>
              </S.TableBody>
            </S.Table>
          </S.WrapperCard>
        </S.WrapperCards>
      </S.Container>
    </Layout>
  );
};
