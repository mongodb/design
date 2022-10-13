/** @jsxRuntime classic */
/** @jsx jsx */
// @ts-ignore unused import
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { palette } from '@leafygreen-ui/palette';
import ContentfulRichText from '.';

const StyledTable = styled.table`
  border-spacing: 0;
`;

export const TableBlock = (node, children) => (
  <StyledTable>
    {node.content.map(node => (
      <ContentfulRichText document={node} />
    ))}
  </StyledTable>
);
export const TableRowBlock = (node, children) => (
  <tr>
    {node.content.map(node => (
      <ContentfulRichText document={node} />
    ))}
  </tr>
);

const StyledTh = styled.th`
  > * {
    font-weight: 700;
    margin-bottom: 0; // overwrite global margin
  }
  min-width: 120px;
  text-align: left;
  padding: 8px;
  border-bottom: 3px solid ${palette.gray.light2};
`;
export const TableHeaderCellBlock = (node, children) => (
  <StyledTh>
    {node.content.map(node => (
      <ContentfulRichText document={node} />
    ))}
  </StyledTh>
);

const StyledTd = styled.td`
  min-width: 120px;
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid ${palette.gray.light2};
  & > * {
    margin-bottom: 0; // overwrite global margin
  }
`;
export const TableCellBlock = (node, children) => (
  <StyledTd>
    {node.content.map(node => (
      <ContentfulRichText document={node} />
    ))}
  </StyledTd>
);
