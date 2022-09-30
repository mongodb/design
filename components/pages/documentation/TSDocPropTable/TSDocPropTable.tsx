import { Props } from 'react-docgen-typescript';
import { Cell, Row, Table, TableHeader } from '@leafygreen-ui/table';
import { InlineCode, Link } from '@leafygreen-ui/typography';
import { css } from '@leafygreen-ui/emotion';
import ExpandableCard from '@leafygreen-ui/expandable-card';
import InlineDefinition from '@leafygreen-ui/inline-definition';
import { isUndefined, omitBy, pickBy } from 'lodash';
import { palette } from '@leafygreen-ui/palette';
import {
  isInheritableGroup,
  isPropItem,
  PropGroup,
  CustomComponentDoc,
  PropItem,
} from './TSDocPropsTable.types';
import { Markdown } from 'components/Markdown';
import { PropTableTooltipContent } from './PropTableTooltipContent';
import { getTypeString } from 'utils/tsdoc.utils';

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
  const componentProps = Object.values(omitBy(tsDoc.props, isInheritableGroup))
    .flatMap((prop: Props) => Object.values(prop))
    .sort((a, z) => {
      if (isRequired(a) && !isRequired(z)) return -1;
      if (isRequired(z)) return 1;
      return a.name.localeCompare(z.name);
    });

  const inheritedProps: Array<PropGroup> = Object.entries(
    pickBy(tsDoc.props, isInheritableGroup),
  ).map(([groupName, props]: [string, Props]) => {
    return {
      groupName,
      props: Object.values(props).flatMap(prop => prop),
    };
  });

  const props = [...componentProps, ...inheritedProps];

  return (
    <>
      <ExpandableCard
        title={`${tsDoc?.displayName} props`}
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

function getDefaultValueString(defaultValue: any): string {
  if (!defaultValue) {
    return '—';
  }

  if (isUndefined(defaultValue.value)) {
    return JSON.stringify(defaultValue);
  }

  return defaultValue.value.toString();
}

function getHTMLAttributesLink(groupName: string) {
  if (groupName === 'HTMLAttributes')
    return 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes';

  let tag = groupName
    .slice(0, groupName.indexOf('HTMLAttributes'))
    .toLowerCase();

  tag = tag == 'anchor' ? 'a' : tag;
  return `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`;
}

function isRequired(prop: PropItem): boolean {
  return prop.required || !isUndefined(prop.tags?.required);
}
