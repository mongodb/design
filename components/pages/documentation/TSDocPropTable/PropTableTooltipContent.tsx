import { css } from '@leafygreen-ui/emotion';
import { spacing, typeScales } from '@leafygreen-ui/tokens';
import { Description, InlineCode, Label } from '@leafygreen-ui/typography';
import { PropItem, PropItemType } from 'react-docgen-typescript';
import { isUndefined } from 'lodash';
import { palette } from '@leafygreen-ui/palette';
import { Markdown } from 'components/Markdown';

const globalMarginStyle = css`
  * {
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

export const PropTableTooltipContent = ({ prop }: { prop: PropItem }) => (
  <div className={globalMarginStyle}>
    <InlineCode darkMode className={propNameStyle}>
      {prop.name}
    </InlineCode>

    <div>
      <Label htmlFor={`${prop.name}-type`} darkMode>
        Type: &nbsp;
      </Label>
      <InlineCode
        id={`${prop.name}-type`}
        className={css`
          // This should be default
          display: inline;
        `}
        darkMode
      >
        {getTypeString(prop.type)}
      </InlineCode>
    </div>

    <div>
      <Label htmlFor={`${prop.name}-default`} darkMode>
        Default: &nbsp;
      </Label>
      <InlineCode
        id={`${prop.name}-default`}
        className={css`
          // This should be default
          display: inline;
        `}
        darkMode
      >
        {getDefaultValueString(prop.defaultValue) || '—'}
      </InlineCode>
    </div>

    <hr className={dividerStyle} />

    <Description darkMode>
      <Markdown darkMode>{prop.description}</Markdown>
    </Description>
  </div>
);

/**
 * Temporariliy duplicating this function
 *
 * TODO: Move this to TSDoc utils
 */

function getTypeString(propType: PropItemType): string | undefined {
  if (!propType || !propType.name) return;

  const staticEnums = [
    'boolean',
    'ReactNode',
    'keyof IntrinsicElements',
    'keyof IntrinsicElements | ComponentType<{}>',
  ];

  switch (propType.name) {
    case 'enum':
      if (staticEnums.includes(propType.raw as string)) {
        return propType.raw;
      } else {
        return propType.value.map(val => val.value).join(' | ');
      }

    case 'string':
    case 'number':
    case 'undefined':
    case 'null':
    default:
      return propType.name;
  }
}

function getDefaultValueString(defaultValue: any): string {
  if (!defaultValue) {
    return '—';
  }

  if (isUndefined(defaultValue.value)) {
    return JSON.stringify(defaultValue);
  }

  return defaultValue.value.toString();
}
