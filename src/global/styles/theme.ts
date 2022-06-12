import { DefaultTheme } from 'styled-components';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: '#F0F2F5';
    font-family: 'Poppins', sans-serif;
  }
`

export const theme: DefaultTheme = {
  colors: {
    primary: '#5636D3',
    secondary: '#FF872C',
    secondary_light: 'rgba(255, 135, 44, 0.3)',
    shape: '#FFFFFF',
    shadow: 'rgba(0, 0, 0, 0.1)',
    text: '#969CB2',
    text_dark: '#000000',
  }
};

