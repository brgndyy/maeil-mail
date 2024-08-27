import { style } from '@vanilla-extract/css';
import { softAppear } from '@/styles/animation.css';

export const mainWrapper = style({
  width: '100%',
  minWidth: '32rem',
  maxWidth: '100vw',
  minHeight: '100vh',
  height: 'auto',
  margin: '0 auto',
  animation: `${softAppear} 0.3s ease-in forwards`,
});

export const contentWrapper = style({
  width: '70%',
  margin: '0 auto',
  height: 'auto',
  minHeight: '100vh',
  //   paddingTop: '8rem',
  paddingBottom: '4rem',
  display: 'flex',
  justifyContent: 'center',
  overflowX: 'hidden',
});
