import useQuestion from '@/hooks/queries/useQuestion';
import type { CategoryKO, CategoryEN } from '@/types';
import { useState } from 'react';
import ContentWrapper from '@/components/common/Wrapper/ContentWrapper';
import QuestionList from '@/components/Question/QuestionList';
import CategoryDropdown from '@/components/CategoryDropdown/CategoryDropdown';
import { CATEGORY } from '@/constants/category';

export default function AllQuestionPage() {
  const [category, setCategory] = useState<CategoryEN>('all');
  const { data: questionList } = useQuestion({ category });

  const handleSelect = (selectedCategory: CategoryKO) => {
    setCategory(CATEGORY[selectedCategory] as CategoryEN);
  };

  return (
    <ContentWrapper>
      <CategoryDropdown category={category} onItemSelect={handleSelect} />
      <QuestionList questionList={questionList} />
    </ContentWrapper>
  );
}
