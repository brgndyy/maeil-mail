import { myStyle } from '@/styles/vars.css';
import {
  container,
  title,
  categoryText,
  radioWrapper,
  inputWrapper,
  buttonWrapper,
  subscriptionButton,
} from './subscribeModalContent.css';
import RadioInput from '../../RadioInput/RadioInput';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import useSubscription from '@/hooks/useSubscription';

export default function SubscribeModalContent() {
  const { email, handleCategory, handleEmail, insValidEmail, handleSubscription, isSuccess } =
    useSubscription();

  return (
    <form className={`${container} ${myStyle}`} onSubmit={handleSubscription}>
      <h2 className={title}>구독 정보 등록</h2>
      <p className={categoryText}>분야</p>
      <div className={radioWrapper}>
        <RadioInput category="frontend" text="프론트엔드" onChange={handleCategory} />
        <RadioInput category="backend" text="백엔드" onChange={handleCategory} />
      </div>

      <p className={categoryText}>이메일</p>
      <div className={inputWrapper}>
        <Input
          variant="underLine"
          placeholder="받으실 메일을 입력해주세요!"
          onChange={handleEmail}
          value={email}
        />
        {insValidEmail && <span>유효하지 않은 이메일이에요!</span>}
      </div>
      <div className={buttonWrapper}>
        <Button variant="border" className={subscriptionButton} type="submit">
          매일 메일 신청하기
        </Button>
      </div>
      {isSuccess && <div>이메일 전송에 성공했어요! 이메일을 확인해주세요</div>}
    </form>
  );
}
