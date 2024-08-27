import type { PropsWithChildren } from 'react';
import Modal from './Modal';

interface BaseModalProps extends PropsWithChildren {
  isModalOpen: boolean;
  handleModalClose: () => void;
}

export default function BaseModal({ isModalOpen, handleModalClose, children }: BaseModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleModalClose}
      mountAnimation={''}
      unMountAnimation={''}
      animationTime={300}
    >
      <Modal.Portal id="portal">
        <Modal.Backdrop opacity="rgba(236, 236, 236, 0.35)">
          <Modal.Container>{children}</Modal.Container>
        </Modal.Backdrop>
      </Modal.Portal>
    </Modal>
  );
}
