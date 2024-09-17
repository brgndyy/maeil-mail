import { useTabs } from '@/hooks/useTabs';
import { PropsWithChildren } from 'react';
import { active, headerContainer, inactive } from './tabs.css';
import { myStyle } from '@/styles/vars.css';

interface TabProps extends PropsWithChildren {
  index: number;
}

export default function TabHeader({ index, children }: TabProps) {
  const { selectedIndex, handleSelectedIndex } = useTabs();

  const classNames = `${headerContainer} ${selectedIndex === index ? active : inactive} ${myStyle}`;

  return (
    <div onClick={() => handleSelectedIndex(index)} className={classNames}>
      {children}
    </div>
  );
}
