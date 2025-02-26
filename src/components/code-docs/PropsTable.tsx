"use client";

import React from "react";
import { css, cx } from "@emotion/css";
import ExpandableCard from "@leafygreen-ui/expandable-card";
import {
  Table,
  TableHead,
  HeaderRow,
  HeaderCell,
  TableBody,
  Row,
  Cell,
} from "@leafygreen-ui/table";
import { Body, InlineCode, Link } from "@leafygreen-ui/typography";
import { getHTMLAttributesLink, formatType } from "./utils";
import { PropTableState } from "./types";

const COLUMNS = ["name", "default", "description", "type"];

export const PropsTable = ({ props, name }: PropTableState) => {
  const { componentProps, inheritedProps } = props;

  return (
    <ExpandableCard
      defaultOpen
      title={
        <div
          className={css`
            text-transform: capitalize;
          `}
        >
          {name.split("-").join(" ")} Props
        </div>
      }
      contentClassName={css`
        padding-left: 0;
        padding-right: 0;
      `}
    >
      <Table
        shouldAlternateRowColor
        shouldTruncate={false}
      >
        <TableHead>
          <HeaderRow>
            {COLUMNS.map((columnName: string) => (
              <HeaderCell
                key={columnName}
                className={cx(
                  css`
                    text-transform: capitalize;
                  `,
                  {
                    [css`min-width: 175px;`]: columnName === "description",
                  }
                )}
              >
                {columnName}
              </HeaderCell>
            ))}
          </HeaderRow>
        </TableHead>
        <TableBody>
          {componentProps &&
            Object.keys(componentProps)
              .sort()
              .map((row: string) => {
                const {
                  name,
                  required,
                  defaultValue = false,
                  description,
                  type,
                } = componentProps[row];
                return (
                  <Row key={name}>
                    <Cell>
                      <>
                        <InlineCode>{name}</InlineCode>
                        <span
                          className={css`
                            color: red;
                          `}
                        >
                          {required ? "*" : ""}
                        </span>
                      </>
                    </Cell>
                    <Cell>
                      <InlineCode>{defaultValue?.value ?? `'-'`}</InlineCode>
                    </Cell>
                    <Cell>
                      <Body className={css`padding: 10px 0;`}>{description}</Body>
                    </Cell>
                    <Cell>
                      <InlineCode>{formatType(type)}</InlineCode>
                    </Cell>
                  </Row>
                );
              })}
          {inheritedProps && (
            <Row key="restProps">
              <Cell>
                <InlineCode>...rest</InlineCode>
              </Cell>

              <Cell colSpan={3}>
                Native attributes inherited from &nbsp;
                {inheritedProps.map(({ groupName }) => (
                  <Link
                    key={groupName}
                    target="_blank"
                    href={getHTMLAttributesLink(groupName)}
                  >
                    <InlineCode>{groupName}</InlineCode>
                  </Link>
                ))}
              </Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </ExpandableCard>
  );
};
