import { InputHTMLAttributes } from 'react';
import {
  baseInputStyle,
  inputStyle,
  dangerStyle,
  container,
  errorText,
  sizeStyle,
} from './input.css';
import { myStyle } from '@/styles/vars.css';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant: keyof typeof inputStyle;
  size?: keyof typeof sizeStyle;
  isError?: boolean;
  errorMessage?: string;
}

export default function Input({
  variant,
  size = 'full',
  isError = false,
  errorMessage = '',
  className,
  ...props
}: InputProps) {
  const classNames = `
    ${inputStyle[variant]} 
    ${sizeStyle[size]} 
    ${myStyle} 
    ${baseInputStyle} 
    ${className ? className : ''} 
    ${isError && dangerStyle}`;

  return (
    <div className={container}>
      <input className={classNames} {...props} />
      {isError && <span className={errorText}>{errorMessage}</span>}
    </div>
  );
}
