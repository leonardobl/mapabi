import styled from "styled-components";

export const Container = styled.div``;

export const WrapperCard = styled.div`
  h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 16px;
  }
`;

export const WrapperCards = styled.div`
  display: flex;
  gap: 0 70px;
  /* justify-content: space-between; */
  margin-bottom: 32px;
`;

export const WrapperFilter = styled.div`
  margin-bottom: 32px;
  width: fit-content;
`;

export const WrapperMiniCards = styled.div`
  display: flex;
  gap: 0 16px;
  margin-bottom: 48px;
`;

export const MiniCards = styled.div`
  border-radius: 10px;
  background: #f6f6f6;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
  width: 105px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;

  > P {
    color: ${(props) => props.theme.colors["green-100"]};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
  }

  span {
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }

  &[data-dark="true"] {
    background: #2d2d2d;

    span {
      color: #fff;
    }
  }
`;

export const WrapperButtonDown = styled.div`
  margin-bottom: 32px;
`;
