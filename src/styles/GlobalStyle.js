import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    color: #333;
    line-height: 1.5;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    font-size: 1.4rem;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 3.6rem;
    line-height: 1.2;
    letter-spacing: -0.5px;
    color: #3b82f6;
  }

  p {
    font-size: 2rem;
    line-height: 1.5;
    color: inherit;
  }
`;
export default GlobalStyle;
