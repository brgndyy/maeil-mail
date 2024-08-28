import { globalStyle } from '@vanilla-extract/css';
import { lightTheme, darkTheme } from './styles/theme.css';
import { text1, background1 } from './styles/vars.css';

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

globalStyle('.cm-line', {
  fontSize: '2.1rem !important',
});

globalStyle('.ͼ1.cm-focused', {
  outline: 'none !important',
});

// markdown-preview

globalStyle('.wmde-markdown', {
  background: `${background1} !important`,
  color: `${text1} !important`,
  fontSize: '1.3rem !importannt',
});

globalStyle('.wmde-markdown h2', {
  border: 'none !important',
});

globalStyle('.wmde-markdown code', {
  fontSize: '1.6rem !important',
});

globalStyle('.wmde-markdown pre', {
  background: `${background1} !important`,
});

globalStyle('.wmde-markdown hr', {
  background: '#82071e !important',
  height: '1px !important',
});

globalStyle('.wmde-markdown blockquote', {
  borderLeft: '0.25em solid #d9d9d9 !important',
  background: '#434343 !important',
  color: '#a6a6a6 !important',
  padding: '1em !important',
});

globalStyle('.wmde-markdown img', {
  background: 'none !important',
});
