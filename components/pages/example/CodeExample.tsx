import { Transition } from 'react-transition-group';

import Code from '@leafygreen-ui/code';
import { css, cx } from '@leafygreen-ui/emotion';

import {
  codeExampleWrapperStyle,
  codeStyle,
  codeWrapperStateStyle,
} from './LiveExample.styles';

export const CodeExample = ({
  showCode,
  code,
  height,
}: {
  showCode: boolean;
  code: string;
  height: number;
}) => {
  return (
    <Transition in={showCode} timeout={200}>
      {state => (
        <div
          className={cx(
            codeExampleWrapperStyle,
            codeWrapperStateStyle[state],
            css`
              height: ${height}px;
            `,
          )}
          id="example-code"
        >
          <Code className={codeStyle} language="js">
            {code ?? 'No code found'}
          </Code>
        </div>
      )}
    </Transition>
  );
};
