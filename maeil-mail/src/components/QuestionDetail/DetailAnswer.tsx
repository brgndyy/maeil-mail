import formatMarkdownContent from '@/utils/codemirror/formatMarkDownContent';
import MarkdownPreview from '@uiw/react-markdown-preview';

interface DetailAnswerProps {
  content: string;
}

export default function DetailAnswer({ content }: DetailAnswerProps) {
  const formattedContent = formatMarkdownContent(content);
  return <MarkdownPreview source={formattedContent} />;
}
