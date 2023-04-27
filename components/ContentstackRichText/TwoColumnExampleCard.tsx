import styled from '@emotion/styled';

import ExampleCardBlock from './ExampleCardBlock';
import { TwoColumnExampleCardBlockProps } from './types';

const FlexContainer = styled('div')`
  display: flex;
  gap: 32px;
  align-items: stretch;
`;

const FlexColumn = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  max-width: 100%;
`;

const TwoColumnExampleCard = ({
  entry,
}: {
  entry: TwoColumnExampleCardBlockProps;
}) => {
  return (
    <FlexContainer>
      <FlexColumn>
        <ExampleCardBlock
          entry={{
            title: entry.title,
            subtext: entry.column_1_subtext,
            variant: entry.column_1_variant,
            image: entry.column_1_image,
          }}
        />
      </FlexColumn>
      <FlexColumn>
        <ExampleCardBlock
          entry={{
            title: entry.title,
            subtext: entry.column_2_subtext,
            variant: entry.column_2_variant,
            image: entry.column_2_image,
          }}
        />
      </FlexColumn>
    </FlexContainer>
  );
};

export default TwoColumnExampleCard;
