import { postVerifyEmail } from '@/apis/subscriptionAPI';
import toast from '@/utils/toast';
import { useMutation } from '@tanstack/react-query';
import { ERROR_MESSAGE } from '@/constants/messages';
import { useState } from 'react';

interface UseVerifyMutationOptions {
  email: string;
  isValidCategory: boolean;
}

const useVerifyMutation = ({ email, isValidCategory }: UseVerifyMutationOptions) => {
  const [isSentEmail, setIsSentEmail] = useState(false);

  const { mutate: verifyEmailMutation } = useMutation({
    mutationFn: postVerifyEmail,
    onError: () => toast.error(ERROR_MESSAGE.fail_verify_email),
    onSuccess: () => setIsSentEmail(true),
  });

  const handleVerifyEmail = () => {
    if (!isValidCategory) {
      toast.error(ERROR_MESSAGE.invalid_category);
      return;
    }

    verifyEmailMutation(email);
  };

  return { isSentEmail, handleVerifyEmail };
};

export default useVerifyMutation;
