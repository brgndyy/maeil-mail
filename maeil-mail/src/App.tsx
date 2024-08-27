import BaseModal from './components/common/Modal/BaseModal';
import { useState } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>하이</div>
      <BaseModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <div>안녕</div>
      </BaseModal>
    </>
  );
}

export default App;
