import { useDropdownContext } from '@/contexts/DropdownContext';
import type { PropsWithChildren } from 'react';

interface MenuItemProps<T> extends PropsWithChildren {
  item: T;
  className?: string;
}

export default function MenuItem<T>({ item, children, className = '' }: MenuItemProps<T>) {
  const { setSelectedItem } = useDropdownContext();

  return (
    <button className={className} onClick={() => setSelectedItem(item)}>
      {children}
    </button>
  );
}
