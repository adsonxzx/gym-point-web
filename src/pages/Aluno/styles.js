import styled from 'styled-components';

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

export const FormBox = styled.form`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  > h2 {
    font-weight: 500;
    color: #696a80;
    margin-bottom: 15px;
  }

  form {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 7px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    padding: 30px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    > div {
      flex-basis: 100%;

      &.col-3 {
        flex-basis: 32%;
      }

      &:last-child {
        margin-top: 30px;
        text-align: center;
      }
    }

    label {
      color: #777777;
      width: 100%;
      display: block;
      margin-bottom: 7px;
      font-size: 16px;
    }

    input {
      width: 100%;
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 4px;
      border: 1px solid #dddddd;
    }
  }
`;
