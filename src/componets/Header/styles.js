import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;

  nav {
    display: flex;
    align-items: center;
    flex: 1;

    ul {
      display: flex;
      align-items: center;
      margin-left: 30px;
      padding-left: 20px;
      border-left: 1px solid #dddddd;
      height: 25px;

      a {
        text-transform: uppercase;
        color: #999999;
        padding: 10px;
        margin-right: 10px;

        &:hover,
        &.active {
          color: #444444;
        }
      }
    }
  }

  div {
    text-align: right;
    strong {
      color: #666666;
      display: block;
      margin-bottom: 5px;
    }

    span {
      color: #ee4d64;
    }
  }
`;
