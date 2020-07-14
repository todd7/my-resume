import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

    <GlobalStyle />
  </ThemeProvider>
);

export default App;
