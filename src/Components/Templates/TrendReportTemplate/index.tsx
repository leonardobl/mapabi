import { LineChart } from "@mui/x-charts";
import { Layout } from "../Layout";
import * as S from "./styles";
import { Card } from "../../Atoms/Card";
import { useTrendReport } from "./useTrendReport";

export const TrendReportTemplate = () => {
  const { dadosQuantidades, axisLinear } = useTrendReport();

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
                xAxis={[{ scaleType: "band", data: axisLinear || [] }]}
                series={dadosQuantidades || []}
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
                xAxis={[{ scaleType: "band", data: axisLinear || [] }]}
                series={dadosQuantidades || []}
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
                  <td>0000</td>
                  <td>0000</td>
                  <td>0000</td>
                  <td>0000</td>
                  <td>0000</td>
                </tr>

                <tr>
                  <td>0000</td>
                  <td>0000</td>
                  <td>0000</td>
                  <td>0000</td>
                  <td>0000</td>
                </tr>
              </S.TableBody>
            </S.Table>
          </S.WrapperCard>
        </S.WrapperCards>
      </S.Container>
    </Layout>
  );
};
