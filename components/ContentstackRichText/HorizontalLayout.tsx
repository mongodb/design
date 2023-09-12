import styled from '@emotion/styled';

import { Polymorph } from '@leafygreen-ui/polymorphic';

import ContentstackRichText from './ContentstackRichText';
import { HorizontalLayoutBlockProps } from './types';

import { css, cx } from '@emotion/css';

const FlexContainer = styled('div')`
  display: flex;
  gap: 32px;
  align-items: stretch;
`;

/// Note: can't use `css` from `@emotion/react` with `cx`
const flexColumnStyles = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  max-width: 100%;
`;

const HorizontalLayout = ({
  column_1,
  column_2,
  vertical_align = 'start',
  flex_ratio,
}: HorizontalLayoutBlockProps) => {
  const [flex1, flex2] = flex_ratio?.match(/[0-9]+/g) ?? [1, 1];
  return (
    <FlexContainer>
      <Polymorph
        as={column_1 ? ContentstackRichText : 'div'}
        content={column_1}
        // @ts-expect-error : isNested is not a valid attribute on `div`
        isNested={true}
        className={cx(
          flexColumnStyles,
          css`
            justify-content: ${vertical_align};
            flex: ${flex1};
          `,
        )}
      />

      <Polymorph
        as={column_2 ? ContentstackRichText : 'div'}
        content={column_2}
        // @ts-expect-error : isNested is not a valid attribute on `div`
        isNested={true}
        className={cx(
          flexColumnStyles,
          css`
            justify-content: ${vertical_align};
            flex: ${flex2};
          `,
        )}
      />
    </FlexContainer>
  );
};

export default HorizontalLayout;
