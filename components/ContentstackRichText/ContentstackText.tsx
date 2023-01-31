import { Fragment } from 'react';

import { HTMLElementProps } from '@leafygreen-ui/lib';
import { Polymorph } from '@leafygreen-ui/polymorphic';

import { CSTextNode } from './types';

interface CSRichTextProps extends HTMLElementProps<'span'> {
  node: CSTextNode;
}

const ContentstackText = ({ node, ...rest }: CSRichTextProps) => {
  const renderAs = node.bold ? 'b' : rest.className ? 'span' : Fragment;

  return (
    <Polymorph as={renderAs} {...rest}>
      {node.text}
    </Polymorph>
  );
};

export default ContentstackText;
