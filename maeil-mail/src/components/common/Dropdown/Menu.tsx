import { useDropdownContext } from '@/contexts/DropdownContext';
import type { PropsWithChildren } from 'react';

interface MenuProps extends PropsWithChildren {
  className?: string;
}

export default function Menu({ children, className = '' }: MenuProps) {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;

  return <div className={className}>{children}</div>;
}
