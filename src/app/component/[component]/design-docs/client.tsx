import { css } from '@emotion/css';
import { ContentstackRichText } from '@/components/content-stack';
import { CSNode } from '@/components/content-stack/types';

interface DesignDocsContentProps {
  content?: CSNode;
}

export const DesignDocsContent = ({ content }: DesignDocsContentProps) => {
  return (
    <div
      className={css`
        max-width: 700px;
      `}
    >
      <ContentstackRichText content={content} />
    </div>
  );
};
