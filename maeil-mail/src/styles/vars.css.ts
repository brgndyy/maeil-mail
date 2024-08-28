import { createVar, style } from '@vanilla-extract/css';

export const background1 = createVar();
export const text1 = createVar();
export const text2 = createVar();
export const borderColor1 = createVar();

export const myStyle = style({
  vars: {
    [background1]: '#131313',
    [text1]: '#fff',
    [text2]: '#868e96',
    [borderColor1]: '#505050',
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [background1]: '#1e1e1e',
        [text1]: '#fff',
        [text2]: '#868e96',
        [borderColor1]: '#505050',
      },
    },
  },
});
