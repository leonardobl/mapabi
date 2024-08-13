import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  dataInicio: z.coerce.date().optional(),
  dataFinal: z.coerce.date().optional(),
  cidade: z.string().optional(),
});

export const useFormFilterServiceTypeReport = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      dataInicio: "",
      dataFinal: "",
      cidade: "",
    },
    resolver: zodResolver(schema),
  });

  return { control, handleSubmit, Controller };
};
