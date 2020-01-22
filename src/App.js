import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle, { Container } from './styles/global';
import Sidebar from './componets/Sidebar';
import Header from './componets/Header';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Sidebar />
        <div>
          <Header />
          <Routes />
        </div>
      </Container>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
