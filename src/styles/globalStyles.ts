import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    font-family: 'AppleSDGothicNeo', 'Noto Sans KR', sans-serif;
    max-width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    &::-webkit-scrollbar {
      display: none;
    }
  }
  font-family: Noto Sans KR, Apple SD Gothic Neo, sans-serif;

  @font-face {
    font-family: 'Cafe24Ssurround';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
