import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import dayjs from "dayjs";
import { useState } from "react";

export interface IDatesFilterProps {
  dataInicio: string;
  dataFim: string;
}

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
  const [dataInicio, setDataInicio] = useState<Date | null>(null);
  const [dataFim, setDataFim] = useState<Date | null>(null);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IDatesFilterProps>({
    defaultValues: {
      dataInicio: "",
      dataFim: "",
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
    dataInicio,
    setDataInicio,
    dataFim,
    setDataFim,
  };
};
