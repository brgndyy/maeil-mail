import BaseModal from './components/common/Modal/BaseModal';
import SubscribeModalContent from './components/common/Modal/ModalContent/SubscribeModalContent';
import LandingContent from './components/LandingContent/LandingContent';
import useModal from './hooks/useModal';
import SecretModalTrigger from './components/common/Modal/ModalContent/SecretModalTrigger';
import MetaTag from './components/MetaTag/MetaTag';
import MainPageWrapper from './components/common/Wrapper/MainPageWrapper';

function App() {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <MainPageWrapper>
      <MetaTag
        title="매일 메일로 면접 질문을 보내드려요!"
        description="매일 메일을 구독할수 있어요!"
        url="/"
      />
      <LandingContent handleModalOpen={handleModalOpen} />
      <BaseModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <SubscribeModalContent />
      </BaseModal>
      <SecretModalTrigger />
    </MainPageWrapper>
  );
}

export default App;
