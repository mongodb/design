import styled from '@emotion/styled';
import { kebabCase } from 'lodash';
import Link from 'next/link';

import Icon from '@leafygreen-ui/icon';
import { palette } from '@leafygreen-ui/palette';

import ContentstackChildren from './ContentstackChildren';
import { CSNode } from './types';
import { getCSNodeTextContent } from './utils';

const StyledAnchor = styled('a')`
  color: inherit;
  text-decoration: inherit;
  position: relative;
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
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0; // overridden on LinkContent hover
`;

/**
 * Content of headers in rich text markup need to be wrapped in links and anchors for hashed links.
 */
const HeaderContent = ({ node }: { node: CSNode }) => {
  const headerId = kebabCase(getCSNodeTextContent(node));

  return (
    <Link href={`#${headerId}`} passHref>
      <StyledAnchor id={headerId}>
        <LinkContent>
          <ContentstackChildren nodeChildren={node.children} />
        </LinkContent>
        <StyledIcon glyph="Link" fill={palette.gray.light1} />
      </StyledAnchor>
    </Link>
  );
};

export default HeaderContent;
