import styled from "styled-components";
import { ITableHeaderProps } from "../TableHeader/styles";
import { darken } from "polished";

export const CustomTableItem = styled.div<ITableHeaderProps>`
  display: grid;
  grid-template-columns: ${(props) => props.grid_columms};
  border-radius: 10px;
  background: #f6f6f6;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);

  > p {
    color: var(--PADRAO-2, #9d9d9d);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.42px;
  }

  :hover {
    background: ${darken(0.2, "#f6f6f6")};

    > p {
      color: ${darken(0.2, "#9d9d9d")};
    }
  }
`;
