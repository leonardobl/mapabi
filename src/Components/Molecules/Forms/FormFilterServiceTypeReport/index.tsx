import { ComponentProps } from "react";
import { Button } from "../../../Atoms/Button";
import { InputDate } from "../../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import * as S from "./styles";
import { useFormFilterServiceTypeReport } from "./useFormFilterServiceTypeReport";
import dayjs from "dayjs";
interface IFormFilterServiceTypeReportProps extends ComponentProps<"form"> {
  onSubmite: () => void;
}

export const FormFilterServiceTypeReport = ({
  onSubmite,
  ...rest
}: IFormFilterServiceTypeReportProps) => {
  const { Controller, control, handleSubmit } =
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
              onChange={(e) =>
                e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange(null)
              }
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="dataFinal"
          render={({ field: { onChange, value } }) => (
            <InputDate
              label="Data Final"
              placeholderText="___/___/___"
              selected={value ? dayjs(value).toDate() : null}
              onChange={(e) =>
                e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange(null)
              }
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="cidade"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="Loja"
              value={value}
              onChange={(e) => onChange(e)}
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
