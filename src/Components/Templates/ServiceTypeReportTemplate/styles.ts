import styled from "styled-components";

export const Container = styled.div`
  > h3 {
    color: #2d2d2d;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;

export const WrapperFilter = styled.div`
  margin-bottom: 32px;
`;

export const Table = styled.table`
  background: #f6f6f6;
  border-collapse: collapse;
  width: 100%;
  max-width: 750px;
  margin-bottom: 32px;

  &,
  th,
  td {
    border: 1px solid #cbcbcb;
  }

  td {
    padding: 16px;
  }
`;

export const TableHead = styled.thead`
  tr.row_black {
    background-color: #2d2d2d;

    > :first-child {
      width: 180px;
    }
  }

  tr.row_green {
    background-color: #50d05d;
  }

  td {
    text-align: center;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    color: #fff;
    line-height: 14px;
  }
`;

export const TableBody = styled.tbody`
  td {
    color: #a3a3a3;
    text-align: start;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const WrapperCards = styled.div``;
