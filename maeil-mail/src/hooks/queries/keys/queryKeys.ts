import { Category } from '@/types';

export const questionKeys = {
  all: ['questions'],
  detail: (id: string) => [questionKeys.all, id],
  category: (category: Category) => [questionKeys.all, category],
};
