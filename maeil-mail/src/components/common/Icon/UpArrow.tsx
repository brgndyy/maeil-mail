import UpArrowIcon from '@/assets/images/upArrow.svg?react';
import { myStyle } from '@/styles/vars.css';
import { icon } from './arrowIcon.css';

export default function UpArrow() {
  return <UpArrowIcon width={10} height={10} className={`${myStyle} ${icon}`} />;
}
