import { toast } from "react-toastify";
import { Gerenciamento } from "../../../Services/Gerenciamento";
import {
  IGerenciamentoDTO,
  IGetGerenciamentoProps,
} from "../../../Types/relatorioGeral";
import { useContextSite } from "../../../Context/Context";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { GraphColors } from "../../../Util/graphCorlors";

interface ISeriesData {
  label: string;
  data: number[];
  color: string;
}

export const useGeneralProduction = () => {
  const { setIsLoad } = useContextSite();

  const [dataLinear, setDataLinear] = useState<ISeriesData[]>([]);
  const [axisLinear, setAxisLinear] = useState<string[]>([]);

  const [dataGeral, setDataGeral] = useState<IGerenciamentoDTO>(
    {} as IGerenciamentoDTO
  );

  async function handleFilter(data: IGetGerenciamentoProps) {
    getProducao(data);
  }

  const formatLineChartData = (data: IGerenciamentoDTO) => {
    const dates: string[] = [];
    const series = data.producaoDiaria.map((diario) => {
      diario.producao.forEach((producao) => {
        if (!dates.includes(producao.data)) {
          dates.push(producao.data);
        }
      });
      return {
        label: diario.empresa,
        data: diario.producao.map((producao) => producao.vistorias),
        color: GraphColors[diario.empresa],
      };
    });

    setDataLinear(series);
    setAxisLinear(dates.map((i) => dayjs(i).format("DD/MM/YYYY")));

    return { dates: dates.map((i) => dayjs(i).format("DD/MM/YYYY")), series };
  };

  function getProducao(date: IGetGerenciamentoProps) {
    setIsLoad(true);
    Gerenciamento.geral(date)
      .then(({ data }) => {
        setDataGeral(data);
        formatLineChartData(data);
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
  }

  useEffect(() => {
    const date = dayjs(new Date()).format("YYYY-MM-DD");
    getProducao({ dataInicio: date, dataFim: date });
  }, []);

  return { handleFilter, dataGeral, dataLinear, axisLinear };
};
