import { PropItem } from 'react-docgen-typescript';
import { css } from '@leafygreen-ui/emotion';
import { useIdAllocator } from '@leafygreen-ui/hooks';
import { useDarkMode } from '@leafygreen-ui/leafygreen-provider';
import { spacing, typeScales } from '@leafygreen-ui/tokens';
import { Description, InlineCode, Label } from '@leafygreen-ui/typography';
import { palette } from '@leafygreen-ui/palette';
import { Markdown } from 'components/Markdown';
import { getDefaultValueString, getTypeString } from 'utils/tsdoc.utils';

const globalMarginStyle = css`
  > * {
    margin-block: ${typeScales.body1.lineHeight / 8}px;
  }
`;

const propNameStyle = css`
  font-size: ${typeScales.code2.fontSize}px;
  display: inline-block;
`;

const dividerStyle = (darkMode: boolean) => css`
  border-color: ${darkMode ? palette.gray.light1 : palette.gray.dark1};
  border-width: 1px;
  // Negative margin ensures divider spans to edge of tooltip
  margin: ${spacing[2]}px -${spacing[3]}px;
`;

const tooltipRow = css`
  white-space: nowrap;
`;

const inlineLabelStyle = css`
  padding-right: 1ch;
`;

export const PropTooltipContent = ({ propItem }: { propItem: PropItem }) => {
  const itemTypeId = useIdAllocator({ prefix: 'prop-table-tooltip-type' });
  const itemDefaultId = useIdAllocator({
    prefix: 'prop-table-tooltip-default',
  });
  const { darkMode } = useDarkMode();

  return (
    <div className={globalMarginStyle}>
      <InlineCode className={propNameStyle}>{propItem.name}</InlineCode>

      <div className={tooltipRow}>
        <Label className={inlineLabelStyle} htmlFor={itemTypeId}>
          Type:
        </Label>
        <InlineCode
          id={itemTypeId}
          className={css`
            display: inline; // This should be default. Waiting on https://jira.mongodb.org/browse/PD-2424
          `}
        >
          {getTypeString(propItem.type)}
        </InlineCode>
      </div>

      <div className={tooltipRow}>
        <Label className={inlineLabelStyle} htmlFor={itemDefaultId}>
          Default:
        </Label>
        <InlineCode
          id={itemDefaultId}
          className={css`
            display: inline; // This should be default. Waiting on https://jira.mongodb.org/browse/PD-2424
          `}
        >
          {getDefaultValueString(propItem.defaultValue) || '—'}
        </InlineCode>
      </div>

      <hr className={dividerStyle(darkMode)} />

      <Description>
        <Markdown>{propItem.description}</Markdown>
      </Description>
    </div>
  );
};
