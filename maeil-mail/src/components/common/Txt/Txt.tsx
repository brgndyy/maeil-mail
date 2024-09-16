import { textStyle, baseTxtStyle } from './txt.css';
import type { PropsWithChildren } from 'react';
import { myStyle } from '@/styles/vars.css';

interface TxtProps extends PropsWithChildren {
  variant: keyof typeof textStyle;
}

export default function Txt({ variant, children }: TxtProps) {
  const classNames = ` ${textStyle[variant]} ${myStyle} ${baseTxtStyle}`;

  return <p className={classNames}>{children}</p>;
}
