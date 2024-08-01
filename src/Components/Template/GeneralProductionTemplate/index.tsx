import { Card } from "../../Atoms/Card";
import { Layout } from "../Layout";
import * as S from "./styles";
import { BarChart, LineChart } from "@mui/x-charts";
import { useGeneralProduction } from "./useGeneralProduction";
import { FormFilterGeneral } from "../../Molecules/Forms/FormFilterGeneral";
import { maskMoney } from "../../../Util/masks";
import { GraphColors } from "../../../Util/graphCorlors";

export const GeneralProductionTemplate = () => {
  const { handleFilter, dataGeral, axisLinear, dataLinear } =
    useGeneralProduction();

  return (
    <Layout headerTitle="Produção Geral">
      <S.Container>
        <S.WrapperFilter>
          <FormFilterGeneral submitForm={handleFilter} />
        </S.WrapperFilter>

        <S.WrapperMiniCards>
          <S.MiniCards>
            <p>Ticket Médio</p>
            <span>{maskMoney(dataGeral?.ticketMedio)}</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Revistorias</p>
            <span>{dataGeral?.revistorias}</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Delivery Veículos Leves</p>
            <span>{dataGeral?.movelNaoObrigatorio}</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Delivery Veículos Grandes</p>
            <span>{dataGeral?.movelObrigatorio}</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Qtd. Primeiro Emplacamento</p>
            <span>{dataGeral?.qtdPrimeiroEmplacamento}</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Qtd. Transferência</p>
            <span>{dataGeral?.qtdTransferencia}</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Total Loja</p>
            <span>{dataGeral?.totalLoja}</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Total Delivery</p>
            <span>{dataGeral?.totalMovel}</span>
          </S.MiniCards>
          <S.MiniCards data-dark>
            <p>Total Vistorias</p>
            <span>{dataGeral?.totalVistorias}</span>
          </S.MiniCards>
        </S.WrapperMiniCards>

        <S.WrapperCards>
          <S.WrapperCard>
            <h3>Vistorias (%)</h3>

            <Card>
              <BarChart
                margin={{
                  bottom: 70,
                }}
                height={230}
                width={430}
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
                series={
                  dataGeral?.empresas?.map((item) => ({
                    data: [item.qtdLoja, item.qtdDelivery],
                  })) || []
                }
                skipAnimation={true}
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
                series={dataLinear || []}
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
