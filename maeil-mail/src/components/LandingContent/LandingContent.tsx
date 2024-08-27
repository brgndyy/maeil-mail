import {
  container,
  logoWrapper,
  logoContainer,
  logo,
  first,
  second,
  third,
  fourth,
  buttonContainer,
} from './landingContent.css';
import { myStyle } from '@/styles/vars.css';
import Button from '../common/Button/Button';

interface LandingContentProps {
  handleModalOpen: () => void;
}

export default function LandingContent({ handleModalOpen }: LandingContentProps) {
  return (
    <div className={`${container} `}>
      <div className={logoWrapper}>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${first}`}>안녕하세요</h1>
        </div>

        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${second}`}>메일로 매일 면접 질문을 받아볼수 있는</h1>
        </div>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${third}`}>매일 메일이에요!</h1>
        </div>
      </div>

      <div className={buttonContainer}>
        <Button variant="border" className={fourth} onClick={handleModalOpen}>
          구독신청하기
        </Button>
      </div>
    </div>
  );
}
