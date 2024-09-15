import { CategoryWithAll } from '@/types';

export const questionKeys = {
  all: ['questions'],
  detail: (id: string) => [questionKeys.all, id],
  category: (category: CategoryWithAll) => [questionKeys.all, category],
};
