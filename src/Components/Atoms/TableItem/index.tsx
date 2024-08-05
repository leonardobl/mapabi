import { ITableHeaderProps } from "../TableHeader/styles";
import * as S from "./styles";

export const TableItems = (props: ITableHeaderProps) => {
  return <S.CustomTableItem {...props} />;
};
