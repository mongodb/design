import { css } from '@leafygreen-ui/emotion';
import { spacing, typeScales } from '@leafygreen-ui/tokens';
import { Description, InlineCode, Label } from '@leafygreen-ui/typography';
import { PropItem } from 'react-docgen-typescript';
import { palette } from '@leafygreen-ui/palette';
import { Markdown } from 'components/Markdown';
import { getDefaultValueString, getTypeString } from 'utils/tsdoc.utils';
import { useIdAllocator } from '@leafygreen-ui/hooks';

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
  // Negative margin ensures divider spans to edge of tooltip
  margin: ${spacing[2]}px -${spacing[3]}px;
`;

const inlineLabelStyle = css`
  padding-right: 1ch;
`;

export const PropTableTooltipContent = ({
  propItem,
}: {
  propItem: PropItem;
}) => {
  const itemTypeId = useIdAllocator({ prefix: 'prop-table-tooltip-type' });
  const itemDefaultId = useIdAllocator({
    prefix: 'prop-table-tooltip-default',
  });

  return (
    <div className={globalMarginStyle}>
      <InlineCode darkMode className={propNameStyle}>
        {propItem.name}
      </InlineCode>

      <div>
        <Label className={inlineLabelStyle} htmlFor={itemTypeId} darkMode>
          Type:
        </Label>
        <InlineCode
          id={itemTypeId}
          className={css`
            display: inline; // This should be default. Waiting on https://jira.mongodb.org/browse/PD-2424
          `}
          darkMode
        >
          {getTypeString(propItem.type)}
        </InlineCode>
      </div>

      <div>
        <Label className={inlineLabelStyle} htmlFor={itemDefaultId} darkMode>
          Default:
        </Label>
        <InlineCode
          id={itemDefaultId}
          className={css`
            display: inline; // This should be default. Waiting on https://jira.mongodb.org/browse/PD-2424
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
};
