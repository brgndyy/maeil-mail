import { CategoryEN } from '@/types';

export const questionKeys = {
  all: ['questions'],
  detail: (id: string) => [questionKeys.all, id],
  category: (category: CategoryEN) => [questionKeys.all, category],
};
