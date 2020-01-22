import styled from 'styled-components';

export const Container = styled.div`
  button {
    height: 36px;
    width: 142px;
    background: #ee4d64;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;

    transition: background 0.2s;

    &:hover {
      background: #de4359;
    }
  }

  input {
    margin-left: 15px;
    height: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 20px;
  }
`;
