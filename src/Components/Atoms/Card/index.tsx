import { ComponentProps } from "react";
import * as S from "./styles";

interface ICardProps extends ComponentProps<"div"> {}

export const Card = (props: ICardProps) => {
  return <S.CustomCard {...props} />;
};
