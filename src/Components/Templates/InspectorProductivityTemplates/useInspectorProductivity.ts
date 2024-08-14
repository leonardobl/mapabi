import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { ISelectOptions } from "../../../Types/inputs";
import { useContextSite } from "../../../Context/Context";
import { Gerenciamento } from "../../../Services/Gerenciamento";
import { toast } from "react-toastify";

const schema = z.object({
  loja: z.string().min(1),
});

export const useInspectorProductivity = () => {
  const [stores, setStores] = useState<ISelectOptions<string>[]>(
    [] as ISelectOptions<string>[]
  );
  const { setIsLoad } = useContextSite();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      loja: "",
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

  function onSubmite() {}

  return { Controller, control, stores, handleSubmit, onSubmite };
};
