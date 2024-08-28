import BaseModal from './components/common/Modal/BaseModal';
import SubscribeModalContent from './components/common/Modal/ModalContent/SubscribeModalContent';
import LandingContent from './components/LandingContent/LandingContent';
import ContentWrapper from './components/common/Wrapper/ContentWrapper';
import useModal from './hooks/useModal';
import SecretModalTrigger from './components/common/Modal/ModalContent/SecretModalTrigger';

function App() {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <ContentWrapper>
      <LandingContent handleModalOpen={handleModalOpen} />
      <BaseModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <SubscribeModalContent />
      </BaseModal>
      <SecretModalTrigger />
    </ContentWrapper>
  );
}

export default App;
