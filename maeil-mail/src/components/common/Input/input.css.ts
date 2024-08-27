import { style, styleVariants } from '@vanilla-extract/css';
import { text1 } from '@/styles/vars.css';

export const inputStyle = styleVariants({
  default: {
    background: 'none',
    color: '',
    padding: '1rem',
    fontSize: '1.8rem',
    minHeight: '3rem',
    borderRadius: '1rem',
  },
  primary: {
    background: 'none',
    color: '',
    padding: '1rem',
    fontSize: '1.8rem',
    minHeight: '3rem',
    borderRadius: '1rem',
  },
  underLine: {
    border: 'none',
    padding: '1rem',
    fontSize: '1.4rem',
    borderBottom: '0.1rem solid #fff',
    background: 'none',
    color: text1,
    textAlign: 'center',
  },
});

export const baseInputStyle = style({
  ':focus': {
    outline: 'none',
  },
});

export const dangerStyle = style({
  borderBottom: '0.01rem solid red !important',
  color: 'red !important',
});
