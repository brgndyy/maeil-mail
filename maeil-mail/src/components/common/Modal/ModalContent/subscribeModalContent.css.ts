import { style } from '@vanilla-extract/css';
import { background1, text1 } from '@/styles/vars.css';

export const container = style({
  width: '30rem',
  height: '36rem',
  background: background1,
  color: text1,
  borderRadius: '1rem',
  padding: '2rem',
});

export const successLayout = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  height: '5rem',
});

export const errorText = style({
  color: 'red',
  textAlign: 'center',
  marginTop: '1rem',
  position: 'absolute',
  bottom: '-1rem',
  left: '30%',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '4rem',
});

export const subscriptionButton = style({
  fontSize: '1.2rem !important',
});

export const successText = style({
  fontSize: '1.8rem',
  textAlign: 'center',
});
