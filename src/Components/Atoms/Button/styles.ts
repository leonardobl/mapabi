import styled from "styled-components";

export const CustomButtom = styled.button`
  height: 44px;
  width: fit-content;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors["green-100"]};

  color: ${(props) => props.theme.colors["white"]};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &[data-variante-dark="true"] {
    background-color: ${(props) => props.theme.colors["green-300"]};
  }

  &[data-variante-text="true"] {
    background-color: transparent;
    gap: 0 8px;
    align-items: center;
    color: #2d2d2d;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors["gray-100"]};
    cursor: default;
  }
`;
