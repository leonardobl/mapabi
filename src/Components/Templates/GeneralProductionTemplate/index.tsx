import { Card } from "../../Atoms/Card";
import { Layout } from "../Layout";
import * as S from "./styles";
import { BarChart, LineChart } from "@mui/x-charts";
import { useGeneralProduction } from "./useGeneralProduction";
import { FormFilterGeneral } from "../../Molecules/Forms/FormFilterGeneral";
import { maskMoney } from "../../../Util/masks";
import { GraphColors } from "../../../Util/graphCorlors";
import { Button } from "../../Atoms/Button";
import { Table } from "../../Molecules/Table";

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
            <span>{dataGeral?.ticketMedio ? maskMoney(dataGeral?.ticketMedio/100) : "-"}</span>
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
                    valueFormatter: (value) => `${value} %`,
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

        <S.WrapperButtonDown>
          <Button data-variante-text>
            <img
              src="/assets/svg/icon-arrow-down-green.svg"
              alt="icone download"
            />
            Exportar
          </Button>
        </S.WrapperButtonDown>

        <Table.Root>
          <Table.Header
            columns=".8fr .5fr .5fr .5fr .5fr .5fr .5fr .2fr"
            headers={[
              "Loja",
              "Qtd. Loja",
              "%Loja",
              "Qtd.Delivery",
              "%Delivery",
              "Delivery Veíc.leves",
              "Delivery Veíc.Pesados",
              "Total",
            ]}
          />

          <Table.WrapperItems>
            {dataGeral?.lojas?.map((l) => (
              <Table.Item
                key={`${Math.random()}`}
                columns=".8fr .5fr .5fr .5fr .5fr .5fr .5fr .2fr"
                values={[
                  l.loja,
                  l.qtdLoja + "",
                  l.perLoja + "%",
                  l.qtdMovel + "",
                  l.perMovel + "%",
                  l.movelNaoObrigatorio + "",
                  l.movelObrigatorio + "",
                  l.total + "",
                ]}
              />
            ))}
          </Table.WrapperItems>
        </Table.Root>
      </S.Container>
    </Layout>
  );
};
