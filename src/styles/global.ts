import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.primary};

    font: 16px Roboto, sans-serif;
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  #root {
    /* max-width: 964px; */
    /* margin: 40px auto; */
    /* padding: 20px 40px; */
    /* border: 1px solid; */
  }
`;
