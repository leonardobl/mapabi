import styled from "styled-components";

export const FormFilterGeneral = styled.form`
  display: grid;
  grid-template-columns: 160px 160px 160px;
  grid-template-areas: "dataInicial dataFinal button" "errorMessage errorMessage errorMessage";
  gap: 0 16px;
  align-items: center;
  width: fit-content;

  > :nth-child(1) {
    grid-area: dataInicial;
  }
  > :nth-child(2) {
    grid-area: dataFinal;
  }
  > :nth-child(3) {
    grid-area: button;
  }
  > :nth-child(4) {
    grid-area: errorMessage;
  }
`;
