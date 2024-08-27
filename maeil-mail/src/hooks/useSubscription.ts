import { useMutation } from '@tanstack/react-query';
import useEmail from './useEmail';
import useCategory from './useCategory';
import { postSubscribe } from '@/apis/api';

const useSubscription = () => {
  const { category, handleCategory } = useCategory();

  const { email, handleEmail, insValidEmail } = useEmail();

  const { mutate: subscriptionMutation, isSuccess } = useMutation({
    mutationFn: postSubscribe,
    onSuccess: () => {},
    onError: (error: Error) => {},
  });

  const handleSubscription = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    console.log(category);
    // subscriptionMutation({ email, category });
  };

  return { email, handleCategory, handleEmail, insValidEmail, handleSubscription, isSuccess };
};

export default useSubscription;
