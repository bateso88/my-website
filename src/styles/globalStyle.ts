import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html {
    box-sizing: border-box;
  }

  body {
    background-color: rgba(157, 176, 197, 0.1);
    min-height: 100vh;
    font-family: Sofia Pro,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export default GlobalStyle;
