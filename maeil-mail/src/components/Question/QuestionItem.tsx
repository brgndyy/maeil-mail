import type { Category } from '@/types';
import { questionItemContainer } from './question.css';
import { myStyle } from '@/styles/vars.css';
import PAGE_ROUTES from '@/constants/pageRoutes';
import { Link } from 'react-router-dom';
import Txt from '../common/Txt/Txt';
import Divider from '../common/Divider/Divider';
import SubTxt from '../common/SubTxt/SubTxt';

interface QuestionItemProps {
  id: number;
  title: string;
  category: Category;
}

const formatCategory = (category: Category) => {
  return category === 'backend' ? '백엔드' : category === 'frontend' ? '프론트엔드' : '전체';
};

export default function QuestionItem({ id, title, category }: QuestionItemProps) {
  return (
    <Link to={`${PAGE_ROUTES.question}/${id}`} className={`${questionItemContainer} ${myStyle}`}>
      <Txt variant="large">{title}</Txt>
      <Divider variant="none" />
      <SubTxt variant="default">분야: {formatCategory(category)}</SubTxt>
    </Link>
  );
}
