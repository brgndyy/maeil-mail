import { InputHTMLAttributes } from 'react';
import { baseInputStyle, inputStyle } from './input.css';
import { myStyle } from '@/styles/vars.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: keyof typeof inputStyle;
}

export default function Input({ variant, ...props }: InputProps) {
  const classNames = ` ${inputStyle[variant]} ${myStyle}  ${baseInputStyle}`;

  return <input className={classNames} {...props} />;
}
