import Button from '../../Button/Button';
import Input from '../../Input/Input';
import { categoryText, inputWrapper } from './subscribeModalContent.css';
import { ChangeEventHandler } from 'react';

interface VerifyEmailInputProps {
  isValidEmail: boolean;
  handleEmail: ChangeEventHandler<HTMLInputElement>;
  email: string;
  isSentEmail: boolean;
  handleVerifyEmail: () => void;
}

export default function VerifyEmailInput({
  isValidEmail,
  handleEmail,
  email,
  isSentEmail,
  handleVerifyEmail,
}: VerifyEmailInputProps) {
  return (
    <>
      <p className={categoryText}>이메일</p>
      <div className={inputWrapper}>
        <Input
          variant="underLine"
          isError={!isValidEmail}
          placeholder="받으실 메일을 입력해주세요!"
          errorMessage="유효하지 않은 이메일이에요!"
          onChange={handleEmail}
          value={email}
        />

        <Button variant="border" disabled={isSentEmail} onClick={handleVerifyEmail}>
          인증
        </Button>
      </div>
    </>
  );
}
