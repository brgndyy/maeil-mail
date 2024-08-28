import { InputHTMLAttributes } from 'react';
import { baseInputStyle, inputStyle, dangerStyle } from './input.css';
import { myStyle } from '@/styles/vars.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: keyof typeof inputStyle;
  danger?: boolean;
}

export default function Input({ variant, danger = false, className, ...props }: InputProps) {
  const classNames = ` ${inputStyle[variant]} ${myStyle}  ${baseInputStyle} ${className ? className : ''} ${danger && dangerStyle}`;

  return <input className={classNames} {...props} />;
}
