import 'styled-components';
import { css } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string;
      gray0: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      gray7: string;
      black: string;
    };
    font: {
      xsmall: css;
      small: css;
      medium: css;
      large: css;
      xlarge: css;
    };
  }
}
