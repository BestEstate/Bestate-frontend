import { css, DefaultTheme } from 'styled-components';

const deviceMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;
const color = {
  white: '#ffffff',
  gray0: '#f9f8fa',
  gray1: '#e9ecef',
  gray2: '#dee2e6',
  gray3: '#ced4da',
  gray4: '#adb5bd',
  gray5: '#868e96',
  gray6: '#495057',
  gray7: '#343a40',
  gray8: '#212529',
  grap9: '#1B1B1B',
  black: '#000000',
};

const font = {
  xsmall: css`
    font-size: 0.8rem;
  `,
  small: css`
    font-size: 1rem;
  `,
  medium: css`
    font-size: 1.6rem;
  `,
  large: css`
    font-sizse: 2rem;
  `,
  xlarge: css`
    font-sie: 3rem;
  `,
};

export const media = {
  mobileHeight: deviceMediaQuery(768),
  mobileWidth: deviceMediaQuery(480),
  tabletWidth: deviceMediaQuery(1024),
  desktop: deviceMediaQuery(1440),
};

export const theme: DefaultTheme = {
  color,
  font,
};
