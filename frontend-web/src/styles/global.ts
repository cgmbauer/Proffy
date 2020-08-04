import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    background: ${colors.colorBackground};
  }

  body, input, button, textarea {
    font: 500 1.6rem Poppins;
    color: ${colors.colorTextBase};
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.2%;
    }
  }

`;
