import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  loja: z.string().min(1),
});

export const useInspectorProductivity = () => {
  const [stores] = useState([]);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      loja: "",
    },
    resolver: zodResolver(schema),
  });

  function onSubmite() {}

  return { Controller, control, stores, handleSubmit, onSubmite };
};
