import React from 'react';
import {
  ComponentDoc,
  PropItemType,
  PropItem,
  Props,
} from 'react-docgen-typescript';
import { Cell, Row, Table, TableHeader } from '@leafygreen-ui/table';
import { Description, InlineCode, Subtitle } from '@leafygreen-ui/typography';
import { css } from '@leafygreen-ui/emotion';
import Card from '@leafygreen-ui/card';
import InlineDefinition from '@leafygreen-ui/inline-definition';
import { isUndefined, omit, pick } from 'lodash';

const InheritablePropGroup = [
  'HTMLAttributes',
  'DOMAttributes',
  'AriaAttributes',
  'ButtonHTMLAttributes',
] as const;
type InheritablePropGroup = keyof typeof InheritablePropGroup;
type PropCategory = Record<string, Props>;
type CustomComponentDoc = Omit<ComponentDoc, 'props'> & {
  props: PropCategory;
};
interface PropGroup {
  groupName: string;
  props: Array<PropItem>;
}

const isPropItem = (obj: any): obj is PropItem => {
  return (
    !isUndefined(obj.name) &&
    !isUndefined(obj.required) &&
    !isUndefined(obj.type) &&
    !isUndefined(obj.description) &&
    !isUndefined(obj.defaultValue)
  );
};
interface PropTableProps {
  tsDoc: CustomComponentDoc;
}

const PropTableTooltipContent = ({ prop }: { prop: PropItem }) => (
  <>
    <div>
      <strong>{prop.name}</strong>
    </div>
    {prop.description}
  </>
);

export const TSDocPropTable = ({ tsDoc }: PropTableProps) => {
  const _componentProps: PropCategory = omit(tsDoc.props, InheritablePropGroup);
  const componentProps = Object.values(_componentProps).flatMap((prop: Props) =>
    Object.values(prop),
  );

  const _inheritedProps: PropCategory = pick(tsDoc.props, InheritablePropGroup);
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
      <div
        className={css`
          margin-block: 2em 1em;
          padding-inline: 1em;
        `}
      >
        <Subtitle as="h2">{tsDoc?.displayName} props</Subtitle>
        <Description>{tsDoc?.description}</Description>
      </div>
      <Card>
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
      </Card>
    </>
  );
};

function getTypeString(propType: PropItemType): string | undefined {
  switch (propType.name) {
    case 'enum':
      if (['boolean', 'ReactNode'].includes(propType.raw as string)) {
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
