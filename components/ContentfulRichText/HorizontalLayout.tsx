import styled from '@emotion/styled';
import EmbeddedEntry from './EmbeddedEntry';

const FlexContainer = styled('div')`
  display: flex;
  align-items: stretch;
  gap: 32px;
  > * > * { // first element inside column
    width: 100%;
  }
`;

const HorizontalLayout = ({ columns }) => {
  return (
    <FlexContainer>
      {columns.map((column) => (
        <EmbeddedEntry nodeTarget={column} />
      ))}
    </FlexContainer>
  )
}

export default HorizontalLayout;