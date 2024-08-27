import { useMutation } from '@tanstack/react-query';
import useEmail from './useEmail';
import useCategory from './useCategory';
import { postSubscribe } from '@/apis/api';
import toast from '@/utils/toast';
import { Category } from '@/types';

const useSubscription = () => {
  const { category, isValidCategory, handleCategory } = useCategory();

  const { email, handleEmail, isValidEmail } = useEmail();

  const { mutate: subscriptionMutation, isSuccess } = useMutation({
    mutationFn: postSubscribe,
    onSuccess: () => {
      toast.success('이메일 등록이 완료 되었어요!');
    },
    onError: (error: Error) => {
      toast.error('이메일 등록에 실패했어요!');
      console.error('이메일 등록에 실패했어요!');
    },
  });

  const handleSubmitSubscription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidCategory) {
      toast.error('카테고리를 올바르게 선택해주세요'); // 카테고리가 유효하지 않을 때 에러 메시지 표시
      return;
    }

    if (!isValidEmail) {
      toast.error('유효한 이메일을 입력해주세요.'); // 이메일이 유효하지 않을 때 에러 메시지 표시
      return;
    }

    subscriptionMutation({ email, category: category as Category });
  };

  return {
    email,
    handleCategory,
    handleEmail,
    isValidCategory,
    isValidEmail,
    handleSubmitSubscription,
    isSuccess,
  };
};

export default useSubscription;
