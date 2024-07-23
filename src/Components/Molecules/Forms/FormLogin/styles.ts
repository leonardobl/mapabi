import styled from "styled-components";

export const Form = styled.form`
  padding: 32px 24px;
  width: 100%;
  max-width: 400px;

  > p {
    margin-bottom: 48px;
  }

  > button {
    width: 100%;
    margin-bottom: 48px;
  }

  > a {
    text-align: center;
    display: block;
  }
`;

export const WrapperInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px 0;
  margin-bottom: 32px;
`;
