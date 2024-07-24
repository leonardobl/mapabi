import { InputDate } from "../../../Atoms/Inputs/InputDate";
import * as S from "./styles";
import { Button } from "../../../Atoms/Button";
import {
  IDatesFilterProps,
  useFormFilterGeneral,
} from "./useFormFilterGeneral";
import { ComponentProps } from "react";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

interface IFormFilterGeneralProps extends ComponentProps<"form"> {
  submitForm: (e: IDatesFilterProps) => void;
}

export const FormFilterGeneral = ({
  submitForm,
  ...rest
}: IFormFilterGeneralProps) => {
  const {
    Controller,
    control,
    errors,
    handleSubmit,
    dayjs,
    dataFim,
    setDataFim,
    dataInicio,
    setDataInicio,
  } = useFormFilterGeneral();

  return (
    <S.FormFilterGeneral {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Controller
          control={control}
          name="dataInicio"
          render={({ field: { onChange } }) => (
            <InputDate
              label="Data Inicial"
              placeholderText="___/___/___"
              showIcon
              data-error={!!errors?.dataInicio}
              selected={dataInicio}
              onChange={(e) => {
                onChange(dayjs(e).format("YYYY-MM-DD"));
                e ? setDataInicio(e) : setDataInicio(null);
              }}
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="dataFim"
          render={({ field: { onChange } }) => (
            <InputDate
              label="Data Final"
              placeholderText="___/___/___"
              showIcon
              data-error={!!errors?.dataFim}
              selected={dataFim}
              onChange={(e) => {
                onChange(dayjs(e).format("YYYY-MM-DD"));
                e ? setDataFim(e) : setDataFim(null);
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
