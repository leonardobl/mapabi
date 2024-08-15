import { ComponentProps } from "react";
import { Button } from "../../../Atoms/Button";
import { InputDate } from "../../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import * as S from "./styles";
import { useFormFilterServiceTypeReport } from "./useFormFilterServiceTypeReport";
import dayjs from "dayjs";
import { ITipoServicoListProps } from "../../../../Types/tipoServico";
interface IFormFilterServiceTypeReportProps extends ComponentProps<"form"> {
  onSubmite: (data: ITipoServicoListProps) => void;
}

export const FormFilterServiceTypeReport = ({
  onSubmite,
  ...rest
}: IFormFilterServiceTypeReportProps) => {
  const { Controller, control, handleSubmit, lojas } =
    useFormFilterServiceTypeReport();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(onSubmite)}>
      <div>
        <Controller
          control={control}
          name="dataInicio"
          render={({ field: { onChange, value } }) => (
            <InputDate
              label="Data Inicial"
              placeholderText="___/___/___"
              selected={value ? dayjs(value).toDate() : null}
              onChange={(e) => {
                e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange("");
              }}
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="dataFim"
          render={({ field: { onChange, value } }) => (
            <InputDate
              label="Data Final"
              placeholderText="___/___/___"
              selected={value ? dayjs(value).toDate() : null}
              onChange={(e) =>
                e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange("")
              }
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="loja"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="Loja"
              isClearable
              options={lojas}
              value={lojas.find((i) => i.value === value) || null}
              onChange={(e) => onChange(e?.value)}
            />
          )}
        />
      </div>

      <div>
        <Button>Filtrar</Button>
      </div>
    </S.Form>
  );
};
