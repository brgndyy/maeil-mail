import type { PropsWithChildren } from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import type { ModalContextProps } from '@/contexts/ModalContext';

export const ModalProvider = ({
  children,
  value,
}: PropsWithChildren<{ value: ModalContextProps }>) => {
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
