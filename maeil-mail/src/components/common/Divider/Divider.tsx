import { dividerStyle } from './divider.css';
import { myStyle } from '@/styles/vars.css';

interface DividerProps {
  variant: keyof typeof dividerStyle;
}

export default function Divider({ variant }: DividerProps) {
  const classNames = ` ${dividerStyle[variant]} ${myStyle} `;

  return <div className={classNames}></div>;
}
