import styled from '@emotion/styled';

import ContentstackEntry from './ContentstackEntry';

const FlexContainer = styled('div')`
  display: flex;
  align-items: stretch;
  gap: 32px;
  * {
    max-width: 100%;
    width: fill-available;
  }
`;

const HorizontalLayout = ({ columns, ...rest }) => {
  return (
    <FlexContainer {...rest}>
      {columns.map(column => (
        <ContentstackEntry
          key={column.uid}
          contentTypeUid={column._content_type_uid}
          entryUid={column.uid}
        />
      ))}
    </FlexContainer>
  );
};

export default HorizontalLayout;
