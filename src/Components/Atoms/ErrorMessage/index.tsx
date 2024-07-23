import { ComponentProps } from "react";
import * as S from "./styles";

interface IErrorMessageProps extends ComponentProps<"p"> {}

export const ErrorMessage = (props: IErrorMessageProps) => {
  return (
    <div>
      <S.ErrorMessage
        {...props}
        data-testid="erro-message"
        data-cy="erro-message"
      />
    </div>
  );
};
