import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
// import Routes from './routes';

import Home from './pages/Home';

const App: React.FC = () => {
  // const [theme, setTheme] = useState(light);
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <BrowserRouter>
        <Routes />
      </BrowserRouter> */}

      <Home toggleTheme={toggleTheme} />

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
