import React from 'react';
import { PropItemType, PropItem, Props } from 'react-docgen-typescript';
import { Cell, Row, Table, TableHeader } from '@leafygreen-ui/table';
import { InlineCode } from '@leafygreen-ui/typography';
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

const PropTableTooltipContent = ({ prop }: { prop: PropItem }) => (
  <>
    <div>
      <strong>{prop.name}</strong>
    </div>
    {prop.description}
  </>
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
            <TableHeader label="Type" key="Type" />,
            <TableHeader label="Description" key="Description" />,
            <TableHeader label="Default" key="Default" />,
          ]}
        >
          {({ datum }) => (
            <>
              {isPropItem(datum) ? (
                <Row key={datum.name}>
                  <Cell>
                    <InlineDefinition
                      definition={<PropTableTooltipContent prop={datum} />}
                    >
                      <strong>{datum.name}</strong>
                    </InlineDefinition>
                    {datum.required && (
                      <sup
                        className={css`
                          color: ${palette.red.base};
                        `}
                      >
                        &nbsp; *
                      </sup>
                    )}
                  </Cell>
                  <Cell>
                    <InlineCode>{getTypeString(datum.type)}</InlineCode>
                  </Cell>
                  <Cell>{datum.description || '—'}</Cell>
                  <Cell>
                    <InlineCode>
                      {getDefaultValueString(datum.defaultValue)}
                    </InlineCode>
                  </Cell>
                </Row>
              ) : (
                <Row key={datum.groupName}>
                  <Cell>...</Cell>
                  <></>
                  <Cell>
                    Attributes inherited from &nbsp;
                    <InlineCode>{datum.groupName}</InlineCode>
                  </Cell>
                </Row>
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

  const staticEnums = ['boolean', 'ReactNode', 'keyof IntrinsicElements'];

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
