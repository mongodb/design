import {
  Body,
  H1,
  H2,
  H3,
  Subtitle,
  Overline,
  Link,
} from '@leafygreen-ui/typography';
import ContentstackChildren from './ContentstackChildren';
import ContentstackReference from './ContentstackReference';
import HeaderContent from './HeaderContent';
import { BLOCKS } from './types';

const componentMap = {
  [BLOCKS.DOCUMENT]: node => (
    <ContentstackChildren nodeChildren={node.children} />
  ),
  [BLOCKS.FRAGMENT]: node => (
    <ContentstackChildren nodeChildren={node.children} />
  ),
  [BLOCKS.PARAGRAPH]: node => (
    <Body {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </Body>
  ),
  [BLOCKS.ANCHOR]: node => (
    <Link {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </Link>
  ),
  [BLOCKS.HEADING_1]: node => (
    <H1>
      <HeaderContent>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H1>
  ),
  [BLOCKS.HEADING_2]: node => (
    <H2>
      <HeaderContent>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H2>
  ),
  [BLOCKS.HEADING_3]: node => (
    <H3>
      <HeaderContent>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </H3>
  ),
  [BLOCKS.HEADING_4]: node => (
    <Subtitle>
      <HeaderContent>
        <ContentstackChildren nodeChildren={node.children} />
      </HeaderContent>
    </Subtitle>
  ),
  [BLOCKS.HEADING_5]: node => (
    <Overline>
      <ContentstackChildren nodeChildren={node.children} />
    </Overline>
  ),
  [BLOCKS.REFERENCE]: node => <ContentstackReference content={node} />,
  [BLOCKS.OL_LIST]: node => (
    <ol {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </ol>
  ),
  [BLOCKS.UL_LIST]: node => (
    <ul {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </ul>
  ),
  [BLOCKS.LIST_ITEM]: node => (
    <li {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </li>
  ),
  [BLOCKS.SPAN]: node => (
    <span {...node.attrs}>
      <ContentstackChildren nodeChildren={node.children} />
    </span>
  ),
};

export default componentMap;
