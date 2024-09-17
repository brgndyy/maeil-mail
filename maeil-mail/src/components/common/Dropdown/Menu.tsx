import useDropdown from '@/hooks/useDropdown';
import type { PropsWithChildren } from 'react';

interface MenuProps extends PropsWithChildren {
  className?: string;
}

export default function Menu({ children, className = '' }: MenuProps) {
  const { isOpen } = useDropdown();

  if (!isOpen) return null;

  return <div className={className}>{children}</div>;
}
