import { style } from '@vanilla-extract/css';
import { background1, borderColor1, text1 } from '@/styles/vars.css';

export const container = style({
  width: '30rem',
  height: '32rem',
  background: background1,
  color: text1,
  borderRadius: '1rem',
  padding: '2rem',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '2rem',
});

export const categoryText = style({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  textAlign: 'center',
});

export const radioWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
});

export const inputWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
});

export const subscriptionButton = style({
  fontSize: '1.2rem !important',
});
