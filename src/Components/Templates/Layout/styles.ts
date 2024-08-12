import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const MenuBar = styled.div`
  width: 212px;
  min-height: 100dvh;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;

export const MenuBarImg = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;

  > img {
    display: block;
  }
`;

export const MenuItens = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 16px 0;

  a {
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    display: flex;
    align-items: center;
    gap: 0 8px;
    white-space: nowrap;
    border-radius: 4px;
    padding: 8px;
  }

  a.active {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors["green-100"]};

    > img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(75%) saturate(0%)
        hue-rotate(145deg) brightness(103%) contrast(101%);
    }
  }
`;

export const Main = styled.main`
  flex: 1;
`;

export const MainHeader = styled.header`
  height: 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

export const WrapperHeaderContent = styled.div`
  padding: 0 32px;
  width: 100%;
  max-width: ${(props) => props.theme.screens["2xl"]};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }
`;

export const WrapperHeaderImg = styled.div`
  display: flex;
  gap: 0 8px;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    align-items: start;

    p {
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0.48px;
    }

    button {
      color: #9d9d9d;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 12px;
      letter-spacing: 0.42px;
      border: none;
      outline: none;
      background-color: transparent;
    }
  }
`;

export const MainContent = styled.div`
  padding: 32px;
  width: 100%;
  max-width: ${(props) => props.theme.screens["2xl"]};
`;
