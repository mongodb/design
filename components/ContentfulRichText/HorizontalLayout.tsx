import styled from "@emotion/styled";
import ContentfulRichText from ".";

const FlexContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const verticalAlignments = {
  'top': 'flex-start',
  'center': 'center',
  'bottom': 'flex-end',
}

const HorizontalLayout = ({ columns }) => {
  return (
    <FlexContainer>
      {columns.map((column) => (
        <div style={{
          alignSelf: verticalAlignments[column.fields.verticalAlign],
          flex: column.fields.widthRatio
        }}>
          <ContentfulRichText document={column.fields.content} />
        </div>
      ))}
    </FlexContainer>
  )
}

export default HorizontalLayout;