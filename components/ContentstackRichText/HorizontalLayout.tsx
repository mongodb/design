import styled from '@emotion/styled';

import ContentstackRichText from './ContentstackRichText';
import { HorizontalLayoutBlockProps } from './types';

const FlexContainer = styled('div')`
  display: flex;
  align-items: stretch;
  gap: 32px;
  * {
    max-width: 100%;
    width: fill-available;
  }
`;

const HorizontalLayout = ({
  column_1,
  column_2,
  vertical_align: verticalAlign,
}: HorizontalLayoutBlockProps) => {
  return (
    <FlexContainer
      style={{
        verticalAlign,
      }}
    >
      <ContentstackRichText content={column_1} />
      <ContentstackRichText content={column_2} />
    </FlexContainer>
  );
};

export default HorizontalLayout;
