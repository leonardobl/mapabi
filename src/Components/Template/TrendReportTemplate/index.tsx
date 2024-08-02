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
            <h3>Vistorias (%)</h3>

            <Card>
              <LineChart
                margin={{
                  bottom: 70,
                }}
                height={230}
                width={500}
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
            <h3>Produção Total de Vistorias</h3>

            <Card>
              <LineChart
                margin={{
                  bottom: 70,
                }}
                height={230}
                width={500}
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
        </S.WrapperCards>
      </S.Container>
    </Layout>
  );
};
