import { BarChart } from "@mui/x-charts";
import { Card } from "../../Atoms/Card";
import { FormFilterServiceTypeReport } from "../../Molecules/Forms/FormFilterServiceTypeReport";
import { Layout } from "../Layout";
import * as S from "./styles";
import { useServiceTypeReport } from "./useServiceTypeReport";
import { GraphColors } from "../../../Util/graphCorlors";

export const ServiceTypeReportTemplate = () => {
  const { handleSubmite } = useServiceTypeReport();

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
            <tr>
              <td>São Luís</td>
              <td>400</td>
              <td>400</td>
              <td>800</td>
              <td>400</td>
              <td>600</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>São Luís</td>
              <td>400</td>
              <td>400</td>
              <td>800</td>
              <td>400</td>
              <td>600</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>São Luís</td>
              <td>400</td>
              <td>400</td>
              <td>800</td>
              <td>400</td>
              <td>600</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>São Luís</td>
              <td>400</td>
              <td>400</td>
              <td>800</td>
              <td>400</td>
              <td>600</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>São Luís</td>
              <td>400</td>
              <td>400</td>
              <td>800</td>
              <td>400</td>
              <td>600</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>São Luís</td>
              <td>400</td>
              <td>400</td>
              <td>800</td>
              <td>400</td>
              <td>600</td>
              <td>1000</td>
            </tr>
          </S.TableBody>
        </S.Table>

        <h3>Vistorias de Transfeência x Primeiro Emplacamento </h3>

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
                  hidden: true,
                },
              }}
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Lojas", "Deliverys"],
                  colorMap: {
                    type: "ordinal",
                    values: ["Lojas", "Deliverys"],
                    colors: [
                      "#2d2d2d",
                      GraphColors[import.meta.env.VITE_APP_PROJECT],
                    ],
                  },
                },
              ]}
              series={[]}
              skipAnimation={true}
            />
          </Card>
        </S.WrapperCards>
      </S.Container>
    </Layout>
  );
};
