import { useDropdownContext } from '@/contexts/DropdownContext';
import type { PropsWithChildren } from 'react';

interface ToggleProps extends PropsWithChildren {
  className?: string;
}

export default function Toggle({ children, className = '' }: ToggleProps) {
  const { toggleDropdown } = useDropdownContext();

  return (
    <button className={className} onClick={toggleDropdown}>
      {children}
    </button>
  );
}
