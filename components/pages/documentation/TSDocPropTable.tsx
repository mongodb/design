import React from 'react';
import { ComponentDoc, PropItemType } from 'react-docgen-typescript';
import { Cell, Row, Table, TableHeader } from '@leafygreen-ui/table';
import { Description, InlineCode, Subtitle } from '@leafygreen-ui/typography';
import { css } from '@leafygreen-ui/emotion';
import Card from '@leafygreen-ui/card';
import InlineDefinition from '@leafygreen-ui/inline-definition';
import isNull from 'lodash/isNull';

interface PropTableProps {
  tsDoc?: ComponentDoc;
}

export const TSDocPropTable = ({ tsDoc }: PropTableProps) => {
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
                <InlineDefinition definition={datum.description}>
                  <strong>{datum.name}</strong>
                </InlineDefinition>
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
  if (isNull(defaultValue)) {
    return '—';
  }

  if (!isNull(defaultValue?.value)) {
    return defaultValue.value.toString();
  }

  return JSON.stringify(defaultValue);
}
