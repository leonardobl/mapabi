import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { ISelectOptions } from "../../../Types/inputs";
import { useContextSite } from "../../../Context/Context";
import { Gerenciamento } from "../../../Services/Gerenciamento";
import { toast } from "react-toastify";
import {
  IProdutividadeListProps,
  IProdutividadeVistoriadorDTO,
} from "../../../Types/produtividade";
import dayjs from "dayjs";

const schema = z.object({
  loja: z.string().optional(),
  dataFim: z.string().optional(),
  dataInicio: z.string().optional(),
});

export const useInspectorProductivity = () => {
  const [stores, setStores] = useState<ISelectOptions<string>[]>(
    [] as ISelectOptions<string>[]
  );
  const [produtividades, setProdutividades] = useState<
    IProdutividadeVistoriadorDTO[]
  >([] as IProdutividadeVistoriadorDTO[]);
  const { setIsLoad } = useContextSite();
  const { control, handleSubmit } = useForm<IProdutividadeListProps>({
    defaultValues: {
      loja: "",
      dataFim: dayjs(new Date()).format("YYYY-MM-DD"),
      dataInicio: dayjs(new Date()).format("YYYY-MM-DD"),
    },
    resolver: zodResolver(schema),
  });

  const getStores = useCallback(() => {
    setIsLoad(true);
    Gerenciamento.listarLojas()
      .then(({ data }) => {
        const options = data.map((i) => ({ value: i, label: i }));
        setStores(options);
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

  useEffect(() => {
    getStores();
  }, [getStores]);

  function onSubmite(data: IProdutividadeListProps) {
    getProdutividades(data);
  }

  function getProdutividades(data: IProdutividadeListProps) {
    setIsLoad(true);
    Gerenciamento.produtividade(data)
      .then(({ data }) => {
        setProdutividades(data[0]?.vistoriadores);
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

  useEffect(() => {
    const date = dayjs(new Date()).format("YYYY-MM-DD");

    getProdutividades({
      dataFim: date,
      dataInicio: date,
    });
  }, []);

  return {
    Controller,
    control,
    stores,
    handleSubmit,
    onSubmite,
    produtividades,
  };
};
