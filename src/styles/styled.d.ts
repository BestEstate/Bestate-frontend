import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      black: string;
      primary1: string;
      primary2: string;
      primary3: string;
    };
    font: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };
  }
}
