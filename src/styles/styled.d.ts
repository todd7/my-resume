import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      accent: string;
      text: string;
    };
  }
}
