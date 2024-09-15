import { useSuspenseQuery } from '@tanstack/react-query';
import type { CategoryWithAll } from '@/types';
import { getQuestionByCategory } from '@/apis/api';
import { questionKeys } from './keys/queryKeys';

interface UseQuestionOptions {
  category: CategoryWithAll;
}

const useQuestion = ({ category }: UseQuestionOptions) => {
  return useSuspenseQuery({
    queryKey: questionKeys.category(category),
    queryFn: () => getQuestionByCategory({ category }),
  });
};

export default useQuestion;
