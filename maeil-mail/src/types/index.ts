export type Category = 'frontend' | 'backend';

export type CategoryWithAll = Category | 'all';

export interface Question {
  id: number;
  title: string;
  content: string;
  category: Category;
}
