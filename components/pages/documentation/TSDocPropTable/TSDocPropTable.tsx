import { Cell, Row, Table, TableHeader } from '@leafygreen-ui/table';
import { InlineCode, Link } from '@leafygreen-ui/typography';
import { css } from '@leafygreen-ui/emotion';
import ExpandableCard from '@leafygreen-ui/expandable-card';
import InlineDefinition from '@leafygreen-ui/inline-definition';
import { palette } from '@leafygreen-ui/palette';
import { Markdown } from 'components/Markdown';
import {
  CustomComponentDoc,
  isPropItem,
  getComponentProps,
  getInheritedProps,
  getDefaultValueString,
  getTypeString,
  isRequired,
} from 'utils/tsdoc.utils';
import { PropTableTooltipContent } from './PropTableTooltipContent';

const propDefinitionTooltipStyle = css`
  min-width: min-content;
  max-width: 384px;
`;

const requiredHighlightStyle = css`
  padding-left: 1ch;
  color: ${palette.red.base};
  text-transform: uppercase;

  &::before {
    content: '(';
  }
  &::after {
    content: ')';
  }
`;

const typeCellStyle = css`
  display: inline;
  max-width: 40ch;
`;

export const TSDocPropTable = ({
  tsDoc,
  className,
}: {
  tsDoc: CustomComponentDoc;
  className?: string;
}) => {
  const componentProps = getComponentProps(tsDoc.props);
  const inheritedProps = getInheritedProps(tsDoc.props);

  const props = [...componentProps, ...inheritedProps];

  return (
    <>
      <ExpandableCard
        title={`${tsDoc.displayName} props`}
        defaultOpen
        className={className}
      >
        <Table
          data={props}
          columns={[
            <TableHeader label="Prop" key="Prop" />,
            <TableHeader label="Description" key="Description" />,
            <TableHeader label="Type" key="Type" />,
            <TableHeader label="Default" key="Default" />,
          ]}
        >
          {({ datum }) => (
            <>
              {isPropItem(datum) ? (
                <Row key={datum.name}>
                  <Cell>
                    <InlineDefinition
                      tooltipClassName={propDefinitionTooltipStyle}
                      definition={<PropTableTooltipContent propItem={datum} />}
                    >
                      <InlineCode>{datum.name}</InlineCode>
                    </InlineDefinition>
                    {isRequired(datum) && (
                      <sup className={requiredHighlightStyle}>required</sup>
                    )}
                  </Cell>
                  <Cell>
                    <Markdown>{datum.description}</Markdown>
                  </Cell>
                  <Cell>
                    <InlineCode className={typeCellStyle}>
                      {getTypeString(datum.type)}
                    </InlineCode>
                  </Cell>
                  <Cell>
                    <InlineCode>
                      {getDefaultValueString(datum.defaultValue) || '—'}
                    </InlineCode>
                  </Cell>
                </Row>
              ) : (
                <>
                  {datum.groupName.endsWith('HTMLAttributes') && (
                    <Row key={datum.groupName}>
                      <Cell>...</Cell>
                      <Cell colSpan={3}>
                        {datum.groupName === 'HTMLAttributes'
                          ? 'Global'
                          : 'Native attributes inherited from'}
                        &nbsp;
                        <Link
                          target="_blank"
                          href={getHTMLAttributesLink(datum.groupName)}
                        >
                          <InlineCode>{datum.groupName}</InlineCode>
                        </Link>
                      </Cell>
                    </Row>
                  )}
                </>
              )}
            </>
          )}
        </Table>
      </ExpandableCard>
    </>
  );
};

function getHTMLAttributesLink(groupName: string) {
  if (groupName === 'HTMLAttributes')
    return 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes';

  let tag = groupName
    .slice(0, groupName.indexOf('HTMLAttributes'))
    .toLowerCase();

  tag = tag == 'anchor' ? 'a' : tag;
  return `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`;
}
