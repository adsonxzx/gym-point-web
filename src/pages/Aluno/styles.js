import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 70px;

  div {
    & + div {
      padding-left: 60px;
      margin-left: 60px;
      border-left: 1px solid #ddd;
    }

    span {
      display: block;
      color: #777777;
      font-size: 16px;
      margin-bottom: 10px;
    }

    strong {
      font-weight: 700;
      color: #5f8ce3;
      font-size: 28px;
    }
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    svg {
      cursor: pointer;
      margin-right: 15px;
    }
  }

  button {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 2px dotted #696a80;
    cursor: pointer;
  }
`;
