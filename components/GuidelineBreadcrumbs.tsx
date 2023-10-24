import styled from '@emotion/styled';
import { useGuidelinesContext } from 'contexts/GuidelinesContext';
import kebabCase from 'lodash/kebabCase';

import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import { Overline } from '@leafygreen-ui/typography';

const BreadCrumb = styled('a')<{ $indented?: boolean }>`
  display: block;
  padding-left: ${props => props.$indented ? spacing[2] : 0}px;
`;

const GuidelineBreadcrumb = ({ header }) => {
  return <BreadCrumb href={`#${kebabCase(header.text)}`} $indented={header.type === 'h4'}>
    {header.text}
  </BreadCrumb>;
};

const GuidelineBreadcrumbs = () => {
  const { headers } = useGuidelinesContext();
  return (
    <>
      <Overline style={{ color: palette.gray.dark1 }}>Contents</Overline>
      {headers.map(header => (
        <GuidelineBreadcrumb header={header} />
      ))}
    </>
  );
};

export default GuidelineBreadcrumbs;
