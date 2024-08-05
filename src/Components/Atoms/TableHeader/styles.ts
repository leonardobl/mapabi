import { ComponentProps } from "react";
import styled from "styled-components";

export interface ITableHeaderProps extends ComponentProps<"div"> {
  grid_columms: string;
}

export const CustomTableHeader = styled.div<ITableHeaderProps>`
  display: grid;
  grid-template-columns: ${(props) => props.grid_columms};

  h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
`;
