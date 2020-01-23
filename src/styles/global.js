import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #f5f5f5;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 4px;
  }
`;

export const ContentFull = styled.div`
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: 50px 10px;
`;

export const TitlePage = styled.h2`
  font-size: 26px;
  font-weight: 500;
  color: #696a80;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;

  > div {
    flex: 1;
  }
`;
