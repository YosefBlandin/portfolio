import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
  body {
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }
  #app {
    max-width: 2500px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
