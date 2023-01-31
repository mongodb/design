import { Fragment } from 'react';
import { isEmpty } from 'lodash';

import { HTMLElementProps } from '@leafygreen-ui/lib';
import { Polymorph } from '@leafygreen-ui/polymorphic';

import { CSTextNode } from './types';

interface CSRichTextProps extends HTMLElementProps<'span'> {
  node: CSTextNode;
}

const ContentstackText = ({ node, ...rest }: CSRichTextProps) => {
  const renderAs = node.bold ? 'b' : isEmpty(rest) ? Fragment : 'span';

  console.log(node.text, rest);

  return (
    <Polymorph as={renderAs} {...rest}>
      {node.text}
    </Polymorph>
  );
};

export default ContentstackText;
