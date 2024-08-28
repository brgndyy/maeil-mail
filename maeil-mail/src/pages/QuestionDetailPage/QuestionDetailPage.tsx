import { useParams } from 'react-router-dom';
import useDetailQuestion from '@/hooks/useDetailQuestion';
import DetailTitle from '@/components/QuestionDetail/DetailTitle';
import { pageLayout } from './page.css';
import { myStyle } from '@/styles/vars.css';
import DetailCategory from '@/components/QuestionDetail/DetailCategory';
import Divider from '@/components/common/Divider/Divider';
import DetailAnswer from '@/components/QuestionDetail/DetailAnswer';

export default function QuestionDetailPage() {
  const { id } = useParams();
  const { data: detailQuestion } = useDetailQuestion(id as string);

  return (
    <div className={`${pageLayout} ${myStyle}`}>
      <DetailTitle title={detailQuestion.title} />
      <Divider variant="default" />
      <DetailCategory category={detailQuestion.category} />
      <Divider variant="default" />
      <DetailAnswer content={detailQuestion.content} />
    </div>
  );
}
