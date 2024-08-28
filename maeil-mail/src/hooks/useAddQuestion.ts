import { type ChangeEvent, useState, FormEvent } from 'react';
import useCategory from './useCategory';
import { useMutation } from '@tanstack/react-query';
import { postNewQuestion } from '@/apis/api';
import { Category } from '@/types';
import toast from '@/utils/toast';

const useAddQuestion = () => {
  const { category, isValidCategory, handleCategory } = useCategory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { mutate: addNewQuestionMutation } = useMutation({
    mutationFn: postNewQuestion,
    onSuccess: () => {
      toast.success('새로운 질문 둥록에 성공했어요!');
    },
    onError: () => {
      toast.error('새로운 질문 둥록에 실패했어요!');
    },
  });

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: string) => {
    setContent(e);
  };

  const handleAddNewQuestion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidCategory) {
      toast.error('유효하지 않은 카테고리에요!');
      return;
    }

    addNewQuestionMutation({ title, category: category as Category, content });
  };

  return { handleAddNewQuestion, handleCategory, handleContent, handleTitle, title, content };
};

export default useAddQuestion;
