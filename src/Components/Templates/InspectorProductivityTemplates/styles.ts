import styled from "styled-components";

export const Container = styled.div``;

export const FormFilter = styled.form`
  width: 100%;
  max-width: 260px;
  display: grid;
  gap: 0 16px;
  grid-template-columns: 180px 1fr;
  margin-bottom: 32px;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 1016px;
  border-collapse: collapse;
  background: #f6f6f6;

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
  td {
    color: #fff;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
  }

  tr.th_black {
    background-color: #1d1d1b;

    > td {
      min-width: 160px;
    }
  }

  tr.th_green {
    background-color: ${(props) => props.theme.colors["green-100"]};

    > td {
      min-width: 86px;
    }
  }
`;

export const TableBody = styled.tbody`
  td {
    color: #a3a3a3;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
  }
`;
