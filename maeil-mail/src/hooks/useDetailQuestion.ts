import { useSuspenseQuery } from '@tanstack/react-query';
import { getDetailQuestion } from '@/apis/api';

const useDetailQuestion = (id: string) => {
  return useSuspenseQuery({
    queryKey: ['questions'],
    queryFn: () => getDetailQuestion({ id }),
  });
};

export default useDetailQuestion;
