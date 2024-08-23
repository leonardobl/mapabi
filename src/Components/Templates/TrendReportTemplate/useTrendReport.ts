import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { Gerenciamento } from "../../../Services/Gerenciamento";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";
import { ILineChartprops } from "../../../Types/lineChart";
import { GraphColors } from "../../../Util/graphCorlors";
import { ITendenciaDTO } from "../../../Types/relatorioTendencia";

export const useTrendReport = () => {
  const { setIsLoad } = useContextSite();
  const [qtdChart, setQtdChart] = useState<ILineChartprops>(
    {} as ILineChartprops
  );

  const [valorChart, setValorChart] = useState<ILineChartprops>(
    {} as ILineChartprops
  );

  const [data, setData] = useState({} as ITendenciaDTO);

  const getTendencias = useCallback(() => {
    setIsLoad(true);
    Gerenciamento.tendencia()
      .then(({ data }) => {
        setData(data[0]);

        const dataQuantidade: ILineChartprops = {
          xAxis: data[0].tendencias.map((i) =>
            dayjs(i.data).format("DD/MM/YYYY")
          ),
          series: [
            {
              data: data[0].tendencias.map((i) => i.qtdTotal),
              label: data[0].empresa,
              color: GraphColors[data[0].empresa],
            },
          ],
        };

        const dataTotal: ILineChartprops = {
          xAxis: data[0].tendencias.map((i) =>
            dayjs(i.data).format("DD/MM/YYYY")
          ),
          series: [
            {
              data: data[0].tendencias.map((i) => i.valorTotal/100),
              label: data[0].empresa,
              color: GraphColors[data[0].empresa],
              valueFormatter: (value: number) => `R$ ${value}`,
            },
          ],
        };

        setQtdChart(dataQuantidade);
        setValorChart(dataTotal);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }, []);

  useEffect(() => {
    getTendencias();
  }, [getTendencias]);

  return { qtdChart, valorChart, data };
};
