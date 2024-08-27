import { Category } from '@/types';

export const postSubscribe = async ({ email, category }: { email: string; category: Category }) => {
  const response = await fetch('', {
    method: 'POST',
    body: JSON.stringify({
      email,
      category,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러~');
  }
};
