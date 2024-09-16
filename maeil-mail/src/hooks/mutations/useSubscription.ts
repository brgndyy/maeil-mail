import { useMutation } from '@tanstack/react-query';
import useEmail from '../useEmail';
import validateEmail from '@/utils/validateEmail';
import useCategory from '../useCategory';
import { postSubscribe } from '@/apis/api';
import toast from '@/utils/toast';
import { CategoryEN } from '@/types';
import { PROGRESS_MESSAGE, ERROR_MESSAGE } from '@/constants/messages';

const useSubscription = () => {
  const { category, isValidCategory, handleCategory } = useCategory();

  const { email, handleEmail, isValidEmail } = useEmail();

  const {
    mutate: subscriptionMutation,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: postSubscribe,
    onSuccess: () => {
      toast.success(PROGRESS_MESSAGE.success_subscription);
    },
    onError: () => {
      toast.error(ERROR_MESSAGE.fail_subscription);
      console.error(ERROR_MESSAGE.fail_subscription);
    },
  });

  const handleSubmitSubscription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidCategory) {
      toast.error(ERROR_MESSAGE.invalid_category);
      return;
    }

    if (!isValidEmail || !validateEmail(email)) {
      toast.error(ERROR_MESSAGE.invalid_email);
      return;
    }

    subscriptionMutation({ email, category: category as CategoryEN });
  };

  return {
    email,
    handleCategory,
    handleEmail,
    isValidCategory,
    isValidEmail,
    handleSubmitSubscription,
    isSuccess,
    isPending,
  };
};

export default useSubscription;
