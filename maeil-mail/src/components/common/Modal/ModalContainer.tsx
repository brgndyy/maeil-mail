import { ModalContext } from '@/contexts/ModalContext';
import { useContext } from 'react';
import type { PropsWithChildren } from 'react';

export default function ModalContainer({ children }: PropsWithChildren) {
  const { mountAnimation, unMountAnimation, closing } = useContext(ModalContext);

  const modalClassName = closing ? unMountAnimation : mountAnimation;

  return <div className={modalClassName}>{children}</div>;
}
