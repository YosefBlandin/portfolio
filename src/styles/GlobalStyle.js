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
    &::-webkit-scrollbar {
      display: none
    }
  }
  #app {
    max-width: 1600px;
    margin: 0 auto;   
  @media screen and (min-width: 2500px) {
    #app {
      max-width: 2300px;
    }
  }
`;

export default GlobalStyle;
