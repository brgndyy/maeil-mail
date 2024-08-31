import { ButtonHTMLAttributes } from 'react';
import { buttonStyle, baseButtonStyle } from './button.css';
import type { PropsWithChildren } from 'react';
import { myStyle } from '@/styles/vars.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonStyle;
  isPending?: boolean;
}

export default function Button({
  variant,
  children,
  className,
  isPending = false,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = ` ${buttonStyle[variant]} ${myStyle} ${className ?? ''} ${baseButtonStyle}`;

  return (
    <button {...props} className={classNames} disabled={isPending}>
      {isPending ? <LoadingSpinner /> : children}
    </button>
  );
}
