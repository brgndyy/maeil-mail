import { createContext } from 'react';
import { TabInfo } from '@/types';

export interface TabsContextProps {
  selectedIndex: number;
  handleSelectedIndex: (index: number) => void;
  tabList: TabInfo[];
}

export const TabsContext = createContext<TabsContextProps | undefined>(undefined);
