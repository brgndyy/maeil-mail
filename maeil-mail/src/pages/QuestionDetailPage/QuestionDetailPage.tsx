import { useParams } from 'react-router-dom';
import useDetailQuestion from '@/hooks/useDetailQuestion';
import DetailTitle from '@/components/QuestionDetail/DetailTitle';
import { pageLayout } from './page.css';
import { myStyle } from '@/styles/vars.css';
import DetailCategory from '@/components/QuestionDetail/DetailCategory';
import Divider from '@/components/common/Divider/Divider';
import DetailAnswer from '@/components/QuestionDetail/DetailAnswer';
import MetaTag from '@/components/MetaTag/MetaTag';

export default function QuestionDetailPage() {
  const { id } = useParams();
  const { data: detailQuestion } = useDetailQuestion(id as string);

  return (
    <div className={`${pageLayout} ${myStyle}`}>
      <MetaTag
        title={`${detailQuestion.title} - 매일 메일`}
        description={`카테고리: ${detailQuestion.category}, 해당 카테고리에 대한 답변이 있어요!`}
        url={`/question/${id}`}
      />
      <DetailTitle title={detailQuestion.title} />
      <Divider variant="default" />
      <DetailCategory category={detailQuestion.category} />
      <Divider variant="default" />
      <DetailAnswer content={detailQuestion.content} />
    </div>
  );
}
