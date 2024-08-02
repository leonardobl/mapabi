import styled, { css } from "styled-components";
import { ITableItemProps } from ".";

export const CustomTableItem = styled.div<ITableItemProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  align-items: center;
  padding: 8px 16px;

  border-radius: 10px;
  background: #f6f6f6;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);

  > img {
    cursor: pointer;
  }

  p {
    color: #9d9d9d;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.42px;
  }

  ${({ lastElement }) =>
    lastElement &&
    css`
      :last-child {
        margin-left: auto;
      }
    `}
`;
