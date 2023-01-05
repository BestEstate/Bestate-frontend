import { DefaultTheme } from 'styled-components';

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
  green1: '#2f735a',
};

const font = {
  xxsmall: '0.5rem',
  xsmall: '0.75rem',
  small: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
  xlarge: '1.75rem',
  xxlarge: '2rem',
  xxxlarge: '3rem',
};

const mediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const device = {
  custom: mediaQuery,
  mobile: mediaQuery(768),
  tablet: mediaQuery(1024),
  desktop: mediaQuery(1440),
};

export const theme: DefaultTheme = {
  color,
  font,
};
