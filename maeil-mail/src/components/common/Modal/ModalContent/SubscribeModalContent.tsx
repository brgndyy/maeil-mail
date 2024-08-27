import { myStyle } from '@/styles/vars.css';
import {
  container,
  title,
  categoryText,
  radioWrapper,
  inputWrapper,
  buttonWrapper,
  subscriptionButton,
  successText,
  errorText,
} from './subscribeModalContent.css';
import RadioInput from '../../RadioInput/RadioInput';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import useSubscription from '@/hooks/useSubscription';

export default function SubscribeModalContent() {
  const { email, handleCategory, handleEmail, isValidEmail, handleSubmitSubscription, isSuccess } =
    useSubscription();

  return (
    <form className={`${container} ${myStyle}`} onSubmit={handleSubmitSubscription}>
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
          danger={!isValidEmail}
          placeholder="받으실 메일을 입력해주세요!"
          onChange={handleEmail}
          value={email}
        />
        {!isValidEmail && <span className={errorText}>유효하지 않은 이메일이에요!</span>}
      </div>

      <div className={buttonWrapper}>
        {isSuccess ? (
          <span className={successText}>
            구독에 성공했어요! <br /> 내일부터 질문을 보내드릴게요!
          </span>
        ) : (
          <Button variant="border" className={subscriptionButton} type="submit">
            매일 메일 신청하기
          </Button>
        )}
      </div>
    </form>
  );
}
