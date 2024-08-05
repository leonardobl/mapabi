import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import dayjs from "dayjs";
import { IGetGerenciamentoProps } from "../../../../Types/relatorioGeral";

const schema = z
  .object({
    dataInicio: z.string().min(1, "Campos obrigatorios"),
    dataFim: z.string().min(1, "Campos obrigatorios"),
  })
  .refine(
    (data) => {
      if (data.dataInicio && data.dataFim) {
        const dataInicio = new Date(data.dataInicio);
        const dataFim = new Date(data.dataFim);
        return dataInicio <= dataFim;
      }
      return true;
    },
    {
      message: "A data inicial não pode ser maior que a data final",
      path: ["dataInicio"], // caminho do erro
    }
  );

export const useFormFilterGeneral = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IGetGerenciamentoProps>({
    defaultValues: {
      dataInicio: dayjs(new Date()).format("YYYY-MM-DD"),
      dataFim: dayjs(new Date()).format("YYYY-MM-DD"),
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  return {
    control,
    errors,
    handleSubmit,
    Controller,
    dayjs,
  };
};
