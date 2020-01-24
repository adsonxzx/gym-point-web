import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Sidebar from './componets/Sidebar';
import Header from './componets/Header';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
