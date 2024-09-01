import { style } from '@vanilla-extract/css';
import { text1 } from '@/styles/vars.css';
import { fadeIn } from '@/styles/animation.css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const logoWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

export const logoContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1.3rem 0',
  minHeight: '4rem',
});

export const logo = style({
  color: text1,
  fontSize: '3rem',
  animation: `${fadeIn} 0.6s ease-out forwards`,
  opacity: 0,
  textAlign: 'center',
});

export const first = style({
  animationDelay: '0s',
});

export const second = style({
  animationDelay: '0.5s',
});

export const third = style({
  animationDelay: '1s',
});

export const fourth = style({
  animation: `${fadeIn} 0.6s ease-out 1.5s forwards`,
  opacity: 0,
  ':hover': {
    opacity: 0.3,
  },
});

export const buttonContainer = style({
  marginTop: '2rem',
});
