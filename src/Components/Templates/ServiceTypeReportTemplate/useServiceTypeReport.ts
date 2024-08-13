import { useEffect, useMemo, useState } from "react";
import { useContextSite } from "../../../Context/Context";
import { Gerenciamento } from "../../../Services/Gerenciamento";
import {
  IProducaoTipoServicoDTO,
  ITipoServicoListProps,
} from "../../../Types/tipoServico";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { GraphColors } from "../../../Util/graphCorlors";

export const useServiceTypeReport = () => {
  const { setIsLoad } = useContextSite();
  const [tipoServicos, setTipoServicos] = useState<IProducaoTipoServicoDTO[]>(
    [] as IProducaoTipoServicoDTO[]
  );

  function handleSubmite(data?: ITipoServicoListProps) {
    getTipoServico(data);
  }

  function getTipoServico(data?: ITipoServicoListProps) {
    setIsLoad(true);

    Gerenciamento.TipoServico(data)
      .then(({ data }) => {
        setTipoServicos(data);
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
  }

  const formattedData = useMemo(() => {
    const lojas = tipoServicos.map((servico) => servico.loja);

    const totalPrimeiroEmplacamento = tipoServicos.map(
      (servico) =>
        servico.qtdPrimeiroEmplacamentoLoja +
        servico.qtdPrimeiroEmplacamentoMovel
    );
    const totalTransferencia = tipoServicos.map(
      (servico) => servico.qtdTransferenciaLoja + servico.qtdTransferenciaMovel
    );

    return {
      lojas,
      series: [
        {
          label: "Total Transferência",
          data: totalTransferencia,
          color: "#2D2D2D",
        },
        {
          label: "Total Primeiro Emplacamento",
          data: totalPrimeiroEmplacamento,
          color: GraphColors[import.meta.env.VITE_APP_PROJECT],
        },
      ],
    };
  }, [tipoServicos]);

  useEffect(() => {
    const date = dayjs(new Date()).format("YYYY-MM-DD");
    getTipoServico({ dataFim: date, dataInicio: date });
  }, []);

  return { tipoServicos, handleSubmite, formattedData };
};
