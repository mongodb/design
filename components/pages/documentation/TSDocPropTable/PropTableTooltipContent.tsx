import { css } from '@leafygreen-ui/emotion';
import { spacing, typeScales } from '@leafygreen-ui/tokens';
import { Description, InlineCode, Label } from '@leafygreen-ui/typography';
import { PropItem } from 'react-docgen-typescript';
import { isUndefined } from 'lodash';
import { palette } from '@leafygreen-ui/palette';
import { Markdown } from 'components/Markdown';
import { getTypeString } from 'utils/tsdoc.utils';

const globalMarginStyle = css`
  > * {
    margin-block: ${typeScales.body1.lineHeight / 8}px;
  }
`;

const propNameStyle = css`
  font-size: ${typeScales.code2.fontSize}px;
  display: inline-block;
`;

const dividerStyle = css`
  border-color: ${palette.gray.dark1};
  margin: ${spacing[2]}px -${spacing[3]}px;
`;

export const PropTableTooltipContent = ({
  propItem,
}: {
  propItem: PropItem;
}) => (
  <div className={globalMarginStyle}>
    <InlineCode darkMode className={propNameStyle}>
      {propItem.name}
    </InlineCode>

    <div>
      <Label htmlFor={`${propItem.name}-type`} darkMode>
        Type: &nbsp;
      </Label>
      <InlineCode
        id={`${propItem.name}-type`}
        className={css`
          // This should be default
          display: inline;
        `}
        darkMode
      >
        {getTypeString(propItem.type)}
      </InlineCode>
    </div>

    <div>
      <Label htmlFor={`${propItem.name}-default`} darkMode>
        Default: &nbsp;
      </Label>
      <InlineCode
        id={`${propItem.name}-default`}
        className={css`
          // This should be default
          display: inline;
        `}
        darkMode
      >
        {getDefaultValueString(propItem.defaultValue) || '—'}
      </InlineCode>
    </div>

    <hr className={dividerStyle} />

    <Description darkMode>
      <Markdown darkMode>{propItem.description}</Markdown>
    </Description>
  </div>
);

/**
 * Temporarily duplicating this function
 *
 * TODO: Move this to TSDoc utils
 */

function getDefaultValueString(defaultValue: any): string {
  if (!defaultValue) {
    return '—';
  }

  if (isUndefined(defaultValue.value)) {
    return JSON.stringify(defaultValue);
  }

  return defaultValue.value.toString();
}
