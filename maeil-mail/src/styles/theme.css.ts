import { createGlobalTheme } from '@vanilla-extract/css';

export const lightTheme = createGlobalTheme(':root', {
  colorBackground: '#0a0a0a',
});

export const darkTheme = createGlobalTheme('[data-theme="dark"]', {
  colorBackground: '#0a0a0a',
});
