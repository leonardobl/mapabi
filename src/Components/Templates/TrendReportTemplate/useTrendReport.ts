import { useEffect, useState } from "react";
import { Gerenciamento } from "../../../Services/Gerenciamento";
import { GraphColors } from "../../../Util/graphCorlors";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";
import { ITendenciaDTO } from "../../../Types/relatorioTendencia";
import dayjs from "dayjs";

export const useTrendReport = () => {
  const { setIsLoad } = useContextSite();
  const [dadosQuantidades, setDadosQuantidades] = useState<
    { label: string; data: number[]; color: string }[]
  >([]);
  const [dadosValores, setDadosValores] = useState<
    { label: string; data: number[]; color: string }[]
  >([]);
  const [axisLinear, setAxisLinear] = useState<string[]>([]);
  const [desempenhos, setDesempenhos] = useState<ITendenciaDTO[]>([]);

  useEffect(() => {
    setIsLoad(true);

    Gerenciamento.tendencia()
      .then(({ data }) => {
        const dates: string[] = [];
        const seriesQuantidades = {
          label: data.empresa,
          data: data.tendencias.map((producao) => producao.qtdTotal),
          color: GraphColors[data.empresa],
        };

        data.tendencias.forEach((producao) => {
          if (!dates.includes(producao.data + "")) {
            dates.push(producao.data + "");
          }
        });

        const seriesValores = {
          label: data.empresa,
          data: data.tendencias.map((producao) => producao.valorTotal / 100),
          color: GraphColors[data.empresa],
        };

        const seriesDesempenhoEmpresas = {
          ...data,
          empresa: data?.empresa,
          meta: data?.meta ? data?.meta : 0,
          qtdTotal: data?.qtdTotal,
          valorTotal: data?.valorTotal,
          qtdMedia: data?.qtdMedia,
          valorMedio: data?.valorMedio,
          qtdMediaProjecao: data?.qtdMediaProjecao,
          valorMedioProjecao: data?.valorMedioProjecao,
          qtdMediaNecessaria: data?.qtdMediaNecessaria,
          valorMedioNecessario: data?.valorMedioNecessario,
        };

        setAxisLinear(dates.map((i) => dayjs(i).format("YYYY-MM-DD")));
        setDadosQuantidades([seriesQuantidades]); // Corrigido para ser um array de objetos
        setDadosValores([seriesValores]); // Corrigido para ser um array de objetos
        setDesempenhos([seriesDesempenhoEmpresas]);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => {
        setIsLoad(false);
      });
  }, []);

  return {
    dadosQuantidades,
    dadosValores,
    axisLinear,
    desempenhos,
  };
};
