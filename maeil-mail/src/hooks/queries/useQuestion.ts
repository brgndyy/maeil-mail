import { useSuspenseQuery } from '@tanstack/react-query';
import { Category } from '@/types';
import { getQuestionByCategory } from '@/apis/api';
import { questionKeys } from './keys/queryKeys';

interface UseQuestionOptions {
  category: Category;
}

const useQuestion = ({ category }: UseQuestionOptions) => {
  return useSuspenseQuery({
    queryKey: questionKeys.category(category),
    queryFn: () => getQuestionByCategory({ category }),
  });
};

export default useQuestion;
