import UpArrowIcon from '@/assets/images/upArrow.svg?react';
import { myStyle } from '@/styles/vars.css';
import { icon } from './arrowIcon.css';

interface UpArrowProps {
  width: number;
  height: number;
}

export default function UpArrow({ width, height }: UpArrowProps) {
  return <UpArrowIcon width={width} height={height} className={`${myStyle} ${icon}`} />;
}
