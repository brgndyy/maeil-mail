import { styleVariants, style } from '@vanilla-extract/css';
import { text1, borderColor1 } from '@/styles/vars.css';

export const buttonStyle = styleVariants({
  default: { background: 'none', color: text1 },
  border: { background: 'none', border: `0.1rem solid ${borderColor1}`, color: text1 },
});

export const baseButtonStyle = style({
  borderRadius: '0.8rem',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
  fontFamily: 'BMHANNAAir',
  padding: '1rem',
  fontSize: '2rem',
  ':hover': {
    opacity: '0.7',
  },
});
