import { CATEGORY } from '@/constants/category';

export type CategoryKO = keyof typeof CATEGORY;
export type CategoryEN = (typeof CATEGORY)[CategoryKO];

export interface Question {
  id: number;
  title: string;
  content: string;
  category: CategoryEN;
}
