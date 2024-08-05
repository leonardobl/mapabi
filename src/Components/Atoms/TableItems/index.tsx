import { ComponentProps } from "react";
import * as S from "./styles";

interface ITableItemsProps extends ComponentProps<"div"> {}

export const TableItems = (props: ITableItemsProps) => {
  return <S.CustomTableItems {...props} />;
};
