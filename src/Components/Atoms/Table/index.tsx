import { ComponentProps } from "react";
import * as S from "./styles";

interface ITableProps extends ComponentProps<"div"> {}

export const Table = (props: ITableProps) => {
  return <S.CustomTable {...props} />;
};
