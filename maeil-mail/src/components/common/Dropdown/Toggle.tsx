import useDropdown from '@/hooks/useDropdown';
import type { PropsWithChildren } from 'react';
import DownArrow from '../Icon/DownArrow';
import UpArrow from '../Icon/UpArrow';

interface ToggleProps extends PropsWithChildren {
  className?: string;
}

export default function Toggle({ children, className = '' }: ToggleProps) {
  const { isOpen, toggleDropdown } = useDropdown();

  return (
    <button className={className} onClick={toggleDropdown}>
      {children}
      {isOpen ? <UpArrow /> : <DownArrow />}
    </button>
  );
}
