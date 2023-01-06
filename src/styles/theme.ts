import { DefaultTheme } from 'styled-components';

const color = {
  white: '#ffffff',
  gray1: '#e9ecef',
  gray2: '#dee2e6',
  gray3: '#ced4da',
  black: '#000000',
  primary1: '#2f735a',
  primary2: '#235644',
  primary3: '#eaf1ef',
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
