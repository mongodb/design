import React from 'react';
import { PropItemType, PropItem, Props } from 'react-docgen-typescript';
import { Cell, Row, Table, TableHeader } from '@leafygreen-ui/table';
import {
  Description,
  InlineCode,
  Label,
  Link,
} from '@leafygreen-ui/typography';
import { css } from '@leafygreen-ui/emotion';
import ExpandableCard from '@leafygreen-ui/expandable-card';
import InlineDefinition from '@leafygreen-ui/inline-definition';
import { isUndefined, omitBy, pickBy } from 'lodash';
import { palette } from '@leafygreen-ui/palette';
import {
  isInheritableGroup,
  isPropItem,
  PropCategory,
  PropGroup,
  CustomComponentDoc,
} from './TSDocPropsTable.types';
import { Markdown } from 'components/Markdown';
import { spacing, typeScales } from '@leafygreen-ui/tokens';

const PropTableTooltipContent = ({ prop }: { prop: PropItem }) => (
  <div
    className={css`
      * {
        margin-block: ${typeScales.body1.lineHeight / 8}px;
      }
    `}
  >
    <InlineCode
      darkMode
      className={css`
        font-size: ${typeScales.code2.fontSize}px;
        display: inline-block;
      `}
    >
      {prop.name}
    </InlineCode>

    <div>
      <Label htmlFor={`${prop.name}-type`} darkMode>
        Type: &nbsp;
      </Label>
      <InlineCode
        id={`${prop.name}-type`}
        className={css`
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
          display: inline;
        `}
        darkMode
      >
        {getDefaultValueString(prop.defaultValue) || '—'}
      </InlineCode>
    </div>

    <hr
      className={css`
        border-color: ${palette.gray.dark1};
        margin: ${spacing[2]}px -${spacing[3]}px;
      `}
    />

    <Description darkMode>
      <Markdown darkMode>{prop.description}</Markdown>
    </Description>
  </div>
);

export const TSDocPropTable = ({
  tsDoc,
  className,
}: {
  tsDoc: CustomComponentDoc;
  className?: string;
}) => {
  const _componentProps: PropCategory = omitBy(tsDoc.props, isInheritableGroup);
  const componentProps = Object.values(_componentProps)
    .flatMap((prop: Props) => Object.values(prop))
    .sort((a, z) => a.name.localeCompare(z.name));

  const _inheritedProps: PropCategory = pickBy(tsDoc.props, isInheritableGroup);
  const inheritedProps: Array<PropGroup> = Object.entries(_inheritedProps).map(
    ([groupName, props]: [string, Props]) => {
      return {
        groupName,
        props: Object.values(props).flatMap(prop => prop),
      };
    },
  );

  const props = [...componentProps, ...inheritedProps];

  return (
    <>
      <ExpandableCard
        title={`${tsDoc?.displayName} props`}
        description={tsDoc?.description}
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
                      tooltipClassName={css`
                        min-width: min-content;
                        max-width: 384px;
                      `}
                      definition={<PropTableTooltipContent prop={datum} />}
                    >
                      <InlineCode>{datum.name}</InlineCode>
                    </InlineDefinition>
                    {datum.required && (
                      <sup
                        className={css`
                          color: ${palette.red.base};
                        `}
                      >
                        &nbsp; (REQUIRED)
                      </sup>
                    )}
                  </Cell>
                  <Cell>
                    <Markdown>{datum.description}</Markdown>
                  </Cell>
                  <Cell>
                    <InlineCode
                      className={css`
                        display: inline;
                        max-width: 40ch;
                      `}
                    >
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
                      <></>
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

export const TSDocPropTableSection = ({
  tsDocArray,
}: {
  tsDocArray: Array<CustomComponentDoc>;
}) => (
  <>
    {tsDocArray?.map(doc => (
      <TSDocPropTable
        key={doc.displayName}
        tsDoc={doc}
        className={css`
          margin-block: 2em;
        `}
      />
    ))}
  </>
);

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

function getHTMLAttributesLink(groupName: string) {
  if (groupName === 'HTMLAttributes')
    return 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes';

  let tag = groupName
    .slice(0, groupName.indexOf('HTMLAttributes'))
    .toLowerCase();

  tag = tag == 'anchor' ? 'a' : tag;
  return `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`;
}