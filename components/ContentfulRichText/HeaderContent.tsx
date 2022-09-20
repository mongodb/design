import styled from '@emotion/styled';
import { palette } from '@leafygreen-ui/palette';
import kebabCase from 'lodash/kebabCase';
import { PropsWithChildren } from 'react';
import Icon from '@leafygreen-ui/icon';
import Link from 'next/link';

const StyledAnchor = styled('a')`
  color: inherit;
  text-decoration: inherit;
`;

const LinkContent = styled('span')`
  position: relative;
  color: inherit;
  text-decoration: inherit;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    border-radius: 2px;
  }

  &:hover {
    &:after {
      background-color: ${palette.gray.light2};
    }
    + svg {
      opacity: 1;
    }
  }
`;

const StyledIcon = styled(Icon)`
  margin-left: 8px;
  opacity: 0; // overridden on LinkContent hover
`;

const HeaderContent = ({ children }: PropsWithChildren<{}>) => {
  const headerId = kebabCase(children?.toString());
  return (
    <Link href={`#${headerId}`} passHref>
      <StyledAnchor id={headerId}>
        <LinkContent>{children}</LinkContent>
        <StyledIcon glyph="Link" fill={palette.gray.light1} />
      </StyledAnchor>
    </Link>
  );
};

export default HeaderContent;
