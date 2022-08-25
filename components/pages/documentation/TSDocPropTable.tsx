import React from 'react';
import { ComponentDoc, PropItemType } from 'react-docgen-typescript';
import { Cell, Row, Table, TableHeader } from '@leafygreen-ui/table';
import { InlineCode, Subtitle } from '@leafygreen-ui/typography';
import { css } from '@leafygreen-ui/emotion';
import Card from '@leafygreen-ui/card';
import isNull from 'lodash/isNull';

interface PropTableProps {
  tsDoc?: ComponentDoc;
}

export const TSDocPropTable = ({ tsDoc }: PropTableProps) => {
  return (
    <>
      <Subtitle
        as="h2"
        className={css`
          margin-block: 2em 1em;
        `}
      >
        {tsDoc?.displayName} props
      </Subtitle>
      <Card>
        <Table
          data={Object.values(tsDoc!.props)}
          columns={[
            <TableHeader label="Prop" key="Prop" />,
            <TableHeader label="Type" key="Type" />,
            <TableHeader label="Description" key="Description" />,
            <TableHeader label="Default" key="Default" />,
          ]}
        >
          {({ datum }) => (
            <Row key={datum.name}>
              <Cell>
                <strong>{datum.name}</strong>
              </Cell>
              <Cell>
                <InlineCode>{getTypeString(datum.type)}</InlineCode>
              </Cell>
              <Cell>{datum.description}</Cell>
              <Cell>
                <InlineCode>
                  {getDefaultValueString(datum.defaultValue)}
                </InlineCode>
              </Cell>
            </Row>
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
  if (defaultValue?.value && !isNull(defaultValue?.value)) {
    return defaultValue.value.toString();
  }

  if (isNull(defaultValue)) {
    return '—';
  }

  return JSON.stringify(defaultValue);
}
