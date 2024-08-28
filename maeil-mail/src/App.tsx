import BaseModal from './components/common/Modal/BaseModal';
import SubscribeModalContent from './components/common/Modal/ModalContent/SubscribeModalContent';
import LandingContent from './components/LandingContent/LandingContent';
import ContentWrapper from './components/common/Wrapper/ContentWrapper';
import useModal from './hooks/useModal';
import SecretModalTrigger from './components/common/Modal/ModalContent/SecretModalTrigger';
import MetaTag from './components/MetaTag/MetaTag';

function App() {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <ContentWrapper>
      <MetaTag
        title="매일 메일의 메인페이지입니다."
        description="매일 메일을 구독할수 있어요!"
        url="/"
      />
      <LandingContent handleModalOpen={handleModalOpen} />
      <BaseModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <SubscribeModalContent />
      </BaseModal>
      <SecretModalTrigger />
    </ContentWrapper>
  );
}

export default App;
