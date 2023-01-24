import styled from '@emotion/styled';

import ContentstackRichText from './ContentstackRichText';
import { CSNode } from './types';

const FlexContainer = styled('div')`
  display: flex;
  align-items: stretch;
  gap: 32px;
  * {
    max-width: 100%;
    width: fill-available;
  }
`;

// Defined here: https://app.contentstack.com/#!/stack/bltee845ee8bbd3fe1a/content-type/horizontal_layout/content-type-builder?branch=main
interface HorizontalLayoutProps {
  url: string;
  title: string;
  column_1: CSNode; // richText
  column_2: CSNode; // richText,
  vertical_align:
    | 'top'
    | 'center'
    | 'bottom'
    | 'space-evenly'
    | 'space-around'
    | 'space-between';
}

const HorizontalLayout = ({
  column_1,
  column_2,
  vertical_align: verticalAlign,
}: HorizontalLayoutProps) => {
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
