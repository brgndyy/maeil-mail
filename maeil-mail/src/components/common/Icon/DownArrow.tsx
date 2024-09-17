import DownArrowIcon from '@/assets/images/downArrow.svg?react';
import { myStyle } from '@/styles/vars.css';
import { icon } from './arrowIcon.css';

export default function DownArrow() {
  return <DownArrowIcon width={10} height={10} className={`${myStyle} ${icon}`} />;
}
