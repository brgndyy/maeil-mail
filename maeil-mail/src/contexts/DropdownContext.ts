import { createContext, useContext } from 'react';

interface DropdownContextType<T> {
  isOpen: boolean;
  toggleDropdown: () => void;
  selectedItem: T | null;
  setSelectedItem: (item: T) => void;
}

export const DropdownContext = createContext<DropdownContextType<any> | undefined>(undefined);

export const useDropdownContext = <T>() => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error('컨텍스트가 정의되지 않았어요!');
  }
  return context as DropdownContextType<T>;
};
