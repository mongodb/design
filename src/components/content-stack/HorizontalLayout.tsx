import { css, cx } from '@emotion/css';
import { Polymorph } from '@leafygreen-ui/polymorphic';
import { spacing } from '@leafygreen-ui/tokens';
import { ContentStackRichText } from './ContentstackRichText';
import { HorizontalLayoutBlockProps } from './types';

/// Note: can't use `css` from `@emotion/react` with `cx`
const flexColumnStyles = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  max-width: 100%;

  p + p {
    margin-top: ${spacing[200]}px;
  }
`;

export const HorizontalLayout = ({
  column_1,
  column_2,
  vertical_align = 'start',
  flex_ratio,
}: HorizontalLayoutBlockProps) => {
  const [flex1, flex2] = flex_ratio?.match(/[0-9]+/g) ?? [1, 1];
  return (
    <div
      className={css`
        display: flex;
        gap: ${spacing[400]}px;
        align-items: stretch;
      `}
    >
      <Polymorph
        as={column_1 ? ContentStackRichText : 'div'}
        content={column_1}
        // @ts-expect-error : isNested is not a valid attribute on `div`
        isNested={true}
        className={cx(
          css`
            // Only add styles to divs
            &:where(div) {
              ${flexColumnStyles};
              justify-content: ${vertical_align};
              flex: ${flex1};
            }
          `,
        )}
      />

      <Polymorph
        as={column_2 ? ContentStackRichText : 'div'}
        content={column_2}
        // @ts-expect-error : isNested is not a valid attribute on `div`
        isNested={true}
        className={cx(
          css`
            &:where(div) {
              ${flexColumnStyles};
              justify-content: ${vertical_align};
              flex: ${flex2};
            }
          `,
        )}
      />
    </div>
  );
};
