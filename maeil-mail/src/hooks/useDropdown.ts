import { ERROR_MESSAGE } from '@/constants/messages';
import { DropdownContext } from '@/contexts/DropdownContext';
import { useContext } from 'react';

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (context === undefined) {
    throw new Error(ERROR_MESSAGE.not_defined_context);
  }
  return context;
};

export default useDropdown;
