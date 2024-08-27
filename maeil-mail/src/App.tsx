import BaseModal from './components/common/Modal/BaseModal';
import { useState } from 'react';
import SubscribeModalContent from './components/common/Modal/ModalContent/SubscribeModalContent';
import LandingContent from './components/LandingContent/LandingContent';
import MainWrapper from './components/common/Wrapper/MainWrapper';
import ContentWrapper from './components/common/Wrapper/ContentWrapper';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <MainWrapper>
      <ContentWrapper>
        <LandingContent handleModalOpen={handleModalOpen} />
        <BaseModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
          <SubscribeModalContent />
        </BaseModal>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default App;
