import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: AppleSDGothicNeo, Noto Sans KR, sans-serif;
    max-width: 100vw;
    max-height: 100vh;
    box-sizing: border-box;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display: none;
    }
  }

  button,
  input,
  select,
  textarea {
      color: inherit;
      font: inherit;
      margin: 0;
      background: #fff;
      border: none;
  }

  button,
  input,
  select,
  textarea {
    &:focus {
      outline: none;
    }
  }
  
  

  @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'LINESeedKR-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'LINESeedKR-Th';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Th.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }
`;
