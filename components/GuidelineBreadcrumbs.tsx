import styled from '@emotion/styled';
import { useGuidelinesContext } from 'contexts/GuidelinesContext';
import kebabCase from 'lodash/kebabCase';

import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';
import { Overline } from '@leafygreen-ui/typography';

const BreadCrumb = styled('a')<{ $indented?: boolean; active: boolean }>`
  display: block;
  width: fit-content;
  padding: 6px 12px;
  margin-left: ${props => (props.$indented ? spacing[3] : 0)}px;
  color: ${palette.gray.dark1};
  text-decoration: none;
  border-radius: 24px;

  ${props =>
    props.active &&
    `
    background-color: ${palette.green.light3};
    color: ${palette.green.dark2};
    font-weight: bold;
  `}
`;

const GuidelineBreadcrumb = ({ header, active }) => {
  return (
    <BreadCrumb
      href={`#${kebabCase(header.text)}`}
      $indented={header.type === 'h4'}
      active={active}
    >
      {header.text}
    </BreadCrumb>
  );
};

const GuidelineBreadcrumbs = () => {
  const { headers, activeHeaderIndex } = useGuidelinesContext();
  return (
    <>
      <Overline
        style={{
          color: palette.gray.dark1,
          paddingBottom: '20px',
          paddingLeft: '12px',
        }}
      >
        Contents
      </Overline>
      {headers.map((header, i) => (
        <GuidelineBreadcrumb
          key={header.text}
          header={header}
          active={i === activeHeaderIndex}
        />
      ))}
      <a href="#scroll-top">Scroll to top</a>
    </>
  );
};

export default GuidelineBreadcrumbs;
