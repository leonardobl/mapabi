import { Card } from "../../Atoms/Card";
import { Layout } from "../Layout";
import * as S from "./styles";
import { BarChart, LineChart } from "@mui/x-charts";
import { useGeneralProduction } from "./useGeneralProduction";
import { FormFilterGeneral } from "../../Molecules/Forms/FormFilterGeneral";

export const GeneralProductionTemplate = () => {
  const { handleFilter } = useGeneralProduction();

  return (
    <Layout headerTitle="Produção Geral">
      <S.Container>
        <S.WrapperFilter>
          <FormFilterGeneral submitForm={handleFilter} />
        </S.WrapperFilter>

        <S.WrapperMiniCards>
          <S.MiniCards>
            <p>Ticket Médio</p>
            <span>R$00,00</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Revistorias</p>
            <span>000</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Delivery Veículos Leves</p>
            <span>000</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Delivery Veículos Grandes</p>
            <span>000</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Qtd. Primeiro Emplacamento</p>
            <span>000</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Qtd. Transferência</p>
            <span>000</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Total Loja</p>
            <span>000</span>
          </S.MiniCards>
          <S.MiniCards>
            <p>Total Delivery</p>
            <span>000</span>
          </S.MiniCards>
          <S.MiniCards data-dark>
            <p>Total Vistorias</p>
            <span>000</span>
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
                series={[
                  { data: [35, 44, 24, 34] },
                  { data: [51, 6, 49, 30] },
                  { data: [15, 25, 30, 50] },
                  { data: [60, 50, 15, 25] },
                ]}
                xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
                height={230}
                width={430}
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
                // xAxis={[{ scaleType: "band", data: ["Lojas", "Deliverys"] }]}
                // series={
                //   dataGeral?.empresas?.map((item) => ({
                //     data: [item.qtdLoja, item.qtdDelivery],
                //     label: item?.empresa,
                //     color: GraphColors[item?.empresa],
                //   })) || []
                // }
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
                // xAxis={[{ scaleType: "band", data: axisLinear || [] }]}
                // series={dadosQuantidades || []}
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                  },
                ]}
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
              />
            </Card>
          </S.WrapperCard>
        </S.WrapperCards>
      </S.Container>
    </Layout>
  );
};
