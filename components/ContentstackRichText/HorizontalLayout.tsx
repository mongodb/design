import { css } from '@emotion/react';
import styled from '@emotion/styled';

import ContentstackRichText from './ContentstackRichText';
import { HorizontalLayoutBlockProps } from './types';

const FlexContainer = styled('div')`
  display: flex;
  gap: 32px;
  > * {
    max-width: 100%;
    flex: 1;
  }
`;

const HorizontalLayout = ({
  column_1,
  column_2,
  vertical_align,
}: HorizontalLayoutBlockProps) => {
  return (
    <FlexContainer
      css={css`
        align-items: ${vertical_align};
      `}
    >
      <ContentstackRichText content={column_1} />
      <ContentstackRichText content={column_2} />
    </FlexContainer>
  );
};

export default HorizontalLayout;
