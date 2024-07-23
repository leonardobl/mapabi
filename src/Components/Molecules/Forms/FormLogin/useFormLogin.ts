import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { maskCpf } from "../../../../Util/masks";
import { useForm } from "react-hook-form";
import { IAutenticacaoForm } from "../../../../Types/autenticacao";

const schema = z.object({
  cpfCNPJ: z.string({ message: "Campo obrigatorio" }).min(14, "CPF invalido"),
  senha: z.string({ message: "Campo obrigatorio" }).min(1, "Campo obrigatorio"),
});

export const useFormLogin = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IAutenticacaoForm>({
    defaultValues: {
      cpfCNPJ: "",
      senha: "",
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    const result = maskCpf(watch("cpfCNPJ"));
    setValue("cpfCNPJ", result);
  }, [watch("cpfCNPJ")]);

  return { handleSubmit, register, errors, navigate };
};
