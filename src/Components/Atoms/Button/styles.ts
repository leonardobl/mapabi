import styled from "styled-components";

export const CustomButtom = styled.button`
  height: 36px;
  width: fit-content;
  padding: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors["green-300"]};

  color: ${(props) => props.theme.colors["white"]};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &:disabled {
    background-color: ${(props) => props.theme.colors["gray-100"]};
    cursor: default;
  }
`;