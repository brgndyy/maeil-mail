import { radioContainer, customRadio, hiddenRadio, checkIcon, selectText } from './radioInput.css';
import CheckIcon from '@/assets/images/check.svg?react';
import { myStyle } from '@/styles/vars.css';
import Input from '../Input/Input';
import { InputHTMLAttributes } from 'react';

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  category: string;
  text: string;
}

export default function RadioInput({ category, text, ...props }: RadioInputProps) {
  return (
    <div className={radioContainer}>
      <Input
        variant="default"
        type="radio"
        id={`${category}`}
        name="field"
        value={`${category}`}
        className={hiddenRadio}
        {...props}
      />
      <label htmlFor={`${category}`} className={customRadio}>
        <CheckIcon className={`${checkIcon} ${myStyle}`} />
        <span className={`${selectText} ${myStyle}`}>{text}</span>
      </label>
    </div>
  );
}
