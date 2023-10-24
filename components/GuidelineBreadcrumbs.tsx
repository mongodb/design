import styled from '@emotion/styled';
import { palette } from '@leafygreen-ui/palette';
import { Overline } from '@leafygreen-ui/typography';
import { useGuidelinesContext } from 'contexts/GuidelinesContext';
import kebabCase from 'lodash/kebabCase';

const BreadCrumb = styled('a')`
  display: block;
`

const GuidelineBreadcrumb = ({ children, active = false }) => {
  return (
    <BreadCrumb href={`#${kebabCase(children)}`}>{children}</BreadCrumb>
  )
}

const GuidelineBreadcrumbs = () => {
  const { headers } = useGuidelinesContext();
  return (
    <>
      <Overline style={{ color: palette.gray.dark1 }}>
        Contents
      </Overline>
      {headers.map(header => (
        <GuidelineBreadcrumb>
          {header.text}
        </GuidelineBreadcrumb>
      ))}
    </>
  );
};

export default GuidelineBreadcrumbs;
