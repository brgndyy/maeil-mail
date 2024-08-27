import { ButtonHTMLAttributes } from 'react';
import { buttonStyle, baseButtonStyle } from './button.css';
import type { PropsWithChildren } from 'react';
import { myStyle } from '@/styles/vars.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonStyle;
}

export default function Button({
  variant,
  children,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = ` ${buttonStyle[variant]} ${myStyle} ${className ?? ''} ${baseButtonStyle}`;

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
}
