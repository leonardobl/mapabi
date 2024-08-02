import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;

  > div {
    flex: 1;
    height: 100dvh;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Rigth = styled.div`
  background-image: url("/assets/img/bg-login-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 450px;

  ${({ theme: { screens } }) => css`
    @media (min-width: ${screens.lg}) {
      background-image: url("/assets/img/bg-login-lg.png");
      height: 100dvh;
    }

    @media (min-width: ${screens.xl}) {
      background-image: url("/assets/img/bg-login-xl.png");
    }

    @media (min-width: ${screens["2xl"]}) {
      background-image: url("/assets/img/bg-login-2xl.png");
    }
  `}
`;
