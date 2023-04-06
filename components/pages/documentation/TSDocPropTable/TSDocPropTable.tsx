import {
  CustomComponentDoc,
  getComponentPropsArray,
  getDefaultValueString,
  getInheritedProps,
  getTypeString,
  isPropItem,
  isRequired,
} from 'utils/tsdoc.utils';

import { Markdown } from 'components/Markdown';

import { css } from '@leafygreen-ui/emotion';
import ExpandableCard from '@leafygreen-ui/expandable-card';
import InlineDefinition from '@leafygreen-ui/inline-definition';
import { palette } from '@leafygreen-ui/palette';
import {
  V10Cell as Cell,
  V10HeaderRow as HeaderRow,
  V10Row as Row,
  V10Table as Table,
  V10TableHeader as TableHeader,
  V11Adapter,
} from '@leafygreen-ui/table';
import { InlineCode, Link } from '@leafygreen-ui/typography';

import { PropTooltipContent } from '../../../PropTooltipContent';

const propDefinitionTooltipStyle = css`
  min-width: min-content;
  max-width: 384px;
`;

const requiredHighlightStyle = css`
  padding-left: 1ch;
  color: ${palette.red.base};
`;

const typeCellStyle = css`
  display: inline;
  max-width: 40ch;
`;

const inheritedAttrNameStyle = css`
  &:not(:last-child) {
    &:after {
      content: ',';
      color: ${palette.black};
      margin-left: -0.25ch;
      margin-right: 1ch;
    }
  }
`;

const cellStyles = css`
  & > * {
    max-height: unset;
  }
`;

export const TSDocPropTable = ({
  tsDoc,
  className,
}: {
  tsDoc: CustomComponentDoc;
  className?: string;
}) => {
  const componentProps = getComponentPropsArray(tsDoc.props);
  const inheritedProps = getInheritedProps(tsDoc.props).filter(
    ({ groupName }) =>
      groupName.endsWith('HTMLAttributes') ||
      groupName.endsWith('SVGAttributes'),
  );

  const allComponentProps = [
    ...componentProps,
    (inheritedProps && {
      isInheritedProps: true,
      props: inheritedProps,
    })
  ];

  return (
    <>
      <ExpandableCard
        title={`${tsDoc.displayName} props`}
        defaultOpen
        className={className}
      >
        <V11Adapter shouldAlternateRowColor={false}>
          <Table
            data={allComponentProps}
            columns={
              <HeaderRow>
                <TableHeader label="Prop" key="Prop" />
                <TableHeader label="Description" key="Description" />
                <TableHeader label="Type" key="Type" />
                <TableHeader label="Default" key="Default" />
              </HeaderRow>
            }
          >
            {({ datum }) => (
              <>
                {isPropItem(datum) ? (
                  <Row key={datum.name}>
                    <Cell className={cellStyles}>
                      <InlineDefinition
                        tooltipClassName={propDefinitionTooltipStyle}
                        definition={<PropTooltipContent propItem={datum} />}
                      >
                        <InlineCode>{datum.name}</InlineCode>
                      </InlineDefinition>
                      {isRequired(datum) && (
                        <sup className={requiredHighlightStyle}>(REQUIRED)</sup>
                      )}
                    </Cell>
                    <Cell className={cellStyles}>
                      <Markdown>{datum.description}</Markdown>
                    </Cell>
                    <Cell className={cellStyles}>
                      <InlineCode className={typeCellStyle}>
                        {getTypeString(datum.type)}
                      </InlineCode>
                    </Cell>
                    <Cell className={cellStyles}>
                      <InlineCode>
                        {getDefaultValueString(datum.defaultValue) || '—'}
                      </InlineCode>
                    </Cell>
                  </Row>
                ) : (
                  <>
                    {datum.isInheritedProps && (
                      <Row key="inherited">
                        <Cell className={cellStyles}>
                          <InlineCode>...rest</InlineCode>
                        </Cell>
                        <Cell className={cellStyles} colSpan={3}>
                          Native attributes inherited from &nbsp;
                          {datum.props.map(({ groupName }) => (
                            <Link
                              key={groupName}
                              target="_blank"
                              href={getHTMLAttributesLink(groupName)}
                              className={inheritedAttrNameStyle}
                            >
                              <InlineCode>{groupName}</InlineCode>
                            </Link>
                          ))}
                        </Cell>
                      </Row>
                    )}
                  </>
                )}
              </>
            )}
          </Table>
        </V11Adapter>
      </ExpandableCard>
    </>
  );
};

function getHTMLAttributesLink(groupName: string) {
  switch (groupName) {
    case 'SVGAttributes':
      return 'https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute';
    case 'HTMLAttributes':
      return 'https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes';

    default: {
      let tag = groupName
        .slice(0, groupName.indexOf('HTMLAttributes'))
        .toLowerCase();

      tag = tag == 'anchor' ? 'a' : tag;
      return `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`;
    }
  }
}
