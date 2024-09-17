import type { PropsWithChildren } from 'react';
import { listWrapper } from './tabs.css';
import { myStyle } from '@/styles/vars.css';

export default function TabListWrapper({ children }: PropsWithChildren) {
  return <div className={`${listWrapper} ${myStyle}`}>{children}</div>;
}
