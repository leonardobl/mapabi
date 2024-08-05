import styled from "styled-components";

export const Container = styled.div`
  padding-top: 44px;
  width: 100%;
  max-width: 624px;
  margin: 0 auto;
`;

export const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px 0;
  margin-bottom: 32px;
`;

export const WrapperCard = styled.div`
  > div {
    margin: 0 auto;
  }

  h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 32px;
    text-align: center;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 0.5px solid #cbcbcb;
  background: #f6f6f6;

  th {
    background: #2d2d2d;
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  }

  td {
    color: #a3a3a3;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  td,
  th {
    border: 0.5px solid #cbcbcb;
    padding: 16px;
    width: 20%;
  }
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;
