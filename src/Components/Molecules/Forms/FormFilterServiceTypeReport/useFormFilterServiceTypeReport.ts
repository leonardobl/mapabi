import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { ITipoServicoListProps } from "../../../../Types/tipoServico";
import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../../Types/inputs";
import { useContextSite } from "../../../../Context/Context";
import { Gerenciamento } from "../../../../Services/Gerenciamento";
import { toast } from "react-toastify";

const schema = z.object({
  dataInicio: z.string().optional(),
  dataFim: z.string().optional(),
  loja: z.string().optional(),
});

export const useFormFilterServiceTypeReport = () => {
  const [lojas, setLojas] = useState<ISelectOptions<string>[]>(
    [] as ISelectOptions<string>[]
  );
  const { setIsLoad } = useContextSite();
  const { control, handleSubmit } = useForm<ITipoServicoListProps>({
    defaultValues: {
      dataInicio: dayjs(new Date()).format("YYYY-MM-DD"),
      dataFim: dayjs(new Date()).format("YYYY-MM-DD"),
      loja: "",
      empresa: import.meta.env.VITE_APP_PROJECT,
    },
    resolver: zodResolver(schema),
  });

  function getLojas() {
    setIsLoad(true);
    Gerenciamento.listarLojas()
      .then(({ data }) => {
        const options = data.map((i) => ({ value: i, label: i }));
        setLojas(options);
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

  const getLojasCallback = useCallback(() => {
    getLojas();
  }, []);

  useEffect(() => {
    getLojasCallback();
  }, []);

  return { control, handleSubmit, Controller, lojas };
};
