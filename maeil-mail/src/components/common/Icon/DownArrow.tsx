import DownArrowIcon from '@/assets/images/downArrow.svg?react';
import { myStyle } from '@/styles/vars.css';
import { icon } from './arrowIcon.css';

interface DownArrowProps {
  width: number;
  height: number;
}

export default function DownArrow({ width, height }: DownArrowProps) {
  return <DownArrowIcon width={width} height={height} className={`${myStyle} ${icon}`} />;
}
