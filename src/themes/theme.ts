import { green, lightGreen } from '@/themes/core';
import { renderTheme } from '@/utilities';

export const defaultTheme = renderTheme({ mode: 'light' });
export const lightTheme = renderTheme({ mode: 'light' });
export const darkTheme = renderTheme({ mode: 'dark' });

export const greenTheme = renderTheme({
  mode: 'light',
  primaryColor: green,
  secondaryColor: lightGreen,
});
export const greenLightTheme = renderTheme({
  mode: 'light',
  primaryColor: green,
});
export const greenDarkTheme = renderTheme({
  mode: 'dark',
  primaryColor: green,
});
