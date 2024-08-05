import { InputDate } from "../../../Atoms/Inputs/InputDate";
import * as S from "./styles";
import { Button } from "../../../Atoms/Button";
import { useFormFilterGeneral } from "./useFormFilterGeneral";
import { ComponentProps } from "react";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";
import { IGetGerenciamentoProps } from "../../../../Types/relatorioGeral";

interface IFormFilterGeneralProps extends ComponentProps<"form"> {
  submitForm: (e: IGetGerenciamentoProps) => void;
}

export const FormFilterGeneral = ({
  submitForm,
  ...rest
}: IFormFilterGeneralProps) => {
  const { Controller, control, errors, handleSubmit, dayjs } =
    useFormFilterGeneral();

  return (
    <S.FormFilterGeneral {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Controller
          control={control}
          name="dataInicio"
          render={({ field: { onChange, value } }) => (
            <InputDate
              label="Data Inicial"
              placeholderText="___/___/___"
              showIcon
              data-error={!!errors?.dataInicio}
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
              showIcon
              data-error={!!errors?.dataFim}
              selected={value ? dayjs(value).toDate() : null}
              onChange={(e) => {
                e ? onChange(dayjs(e).format("YYYY-MM-DD")) : onChange("");
              }}
            />
          )}
        />
      </div>

      <div>
        <Button>Filtrar</Button>
      </div>

      <div>
        {errors?.dataInicio && (
          <ErrorMessage>{errors.dataInicio.message}</ErrorMessage>
        )}
      </div>
    </S.FormFilterGeneral>
  );
};
