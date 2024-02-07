import { Fragment } from 'react';

import { HTMLElementProps } from '@leafygreen-ui/lib';
import { Polymorph } from '@leafygreen-ui/polymorphic';
import { InlineCode } from '@leafygreen-ui/typography';

import { CSTextNode } from './types';

interface CSRichTextProps extends HTMLElementProps<'span'> {
  node: CSTextNode;
}

const ContentstackText = ({ node, ...rest }: CSRichTextProps) => {
  let renderAs;

  if (node.bold) {
    renderAs = 'b';
  } else if (node.inlineCode) {
    renderAs = InlineCode;
  } else if (rest.className) {
    renderAs = 'span';
  } else {
    renderAs = Fragment;
  }

  return (
    // @ts-ignore href not needed as no links will be rendered as a result of this component's logic
    <Polymorph as={renderAs} {...rest}>
      {node.text}
    </Polymorph>
  );
};

export default ContentstackText;
