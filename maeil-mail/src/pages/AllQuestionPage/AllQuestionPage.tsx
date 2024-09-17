import useQuestion from '@/hooks/queries/useQuestion';
import type { CategoryKO, CategoryEN } from '@/types';
import { useState } from 'react';
import ContentWrapper from '@/components/common/Wrapper/ContentWrapper';
import QuestionList from '@/components/Question/QuestionList';
import { CATEGORY } from '@/constants/category';
import CategorySelect from '@/components/CategorySelect/CategorySelect';

export default function AllQuestionPage() {
  const [category, setCategory] = useState<CategoryEN>('all');
  const { data: questionList } = useQuestion({ category });

  const handleCategorySelect = (selectedCategory: CategoryKO) => {
    setCategory(CATEGORY[selectedCategory]);
  };

  return (
    <ContentWrapper>
      <CategorySelect onClick={handleCategorySelect} category={category} />
      <QuestionList questionList={questionList} />
    </ContentWrapper>
  );
}
