import { ComponentProps } from "react";
import * as S from "./styles";

interface ICustomButtomProps extends ComponentProps<"button"> {}

export const Button = (props: ICustomButtomProps) => {
  return <S.CustomButtom {...props} />;
};
