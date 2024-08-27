import { globalStyle } from '@vanilla-extract/css';
import { lightTheme, darkTheme } from './styles/theme.css';

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('button', {
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  background: 'inherit',
  padding: '0',
  color: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
});

globalStyle('body', {
  margin: '0',
  overflow: 'hidden',
  overscrollBehavior: 'none',
  transition: 'all 0.3s ease',
  position: 'relative',
});

globalStyle('h1, h2, h3, p', {
  margin: '0',
  padding: '0',
});

globalStyle('a, a:link, a:visited, a:hover', {
  textDecoration: 'none',
});

globalStyle('li', {
  listStyle: 'none',
});

globalStyle(`:root`, {
  background: lightTheme.colorBackground,
});

globalStyle(`[data-theme='dark']`, {
  background: darkTheme.colorBackground,
});
