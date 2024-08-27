import { fadeIn, fadeOut } from '@/styles/animation.css';
import { style } from '@vanilla-extract/css';

export const backDrop = style({
  position: 'fixed',
  inset: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const fadeInClass = style({
  animation: `${fadeIn} 0.3s forwards`,
});

export const fadeOutClass = style({
  animation: `${fadeOut} 0.3s forwards`,
});
