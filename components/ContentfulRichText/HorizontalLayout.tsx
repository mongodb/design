import styled from '@emotion/styled';
import EmbeddedEntry from './EmbeddedEntry';

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
        <EmbeddedEntry nodeTarget={column} />
      ))}
    </FlexContainer>
  );
};

export default HorizontalLayout;
