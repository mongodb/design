import { useEffect, useMemo, useState } from 'react';
import { css } from '@emotion/react';
import { getEntryById } from 'utils/getContentstackResources';

import Badge from '@leafygreen-ui/badge';
import Button from '@leafygreen-ui/button';
import Callout, { Variant } from '@leafygreen-ui/callout';
import Card from '@leafygreen-ui/card';
import ExpandableCard from '@leafygreen-ui/expandable-card';

import AnnotatedImageBlock from './AnnotatedImageBlock';
import BasicUsageBlock from './BasicUsageBlock';
import ExampleCardBlock from './ExampleCardBlock';
import HorizontalLayout from './HorizontalLayout';
import { ContentTypePropMap, ContentTypeUID } from './types';
import ContentstackRichText from '.';

/**
 * An object that maps keys of each `contentTypeUid`
 * to new function component.
 *
 * The new component accepts the relevant interface as props
 * (as defined by the key `contentTypeUid` in {@link ContentTypePropMap})
 * and returns a JSX.Element.
 *
 * With this approach we can ensure that the value of `props` we're passing into
 * each component matches the expected interface
 */
const ComponentMap: {
  [K in ContentTypeUID]: (props: ContentTypePropMap[K]) => JSX.Element;
} = {
  annotated_image_block: props => <AnnotatedImageBlock entry={props} />,
  badge_block: props => (
    <Badge
      variant={props.variant}
      css={css`
        margin: 0; // remove default Safari margin
      `}
    >
      {props.title}
    </Badge>
  ),
  basic_usage_block: props => <BasicUsageBlock entry={props} />,
  button_block: props => (
    <Button
      variant={props.variant}
      href={props.link}
      css={css`
        margin: 0; // remove default Safari margin
      `}
    >
      {props.content}
    </Button>
  ),
  callout_block: props => (
    <Callout
      variant={Variant[props.variant ?? Variant.Note]}
      className="nested-entry"
    >
      <ContentstackRichText
        content={props.content}
        options={{ isNested: true }}
      />
    </Callout>
  ),
  card_block: props => (
    <Card className="nested-entry">
      <ContentstackRichText
        content={props.content}
        options={{ isNested: true }}
      />
    </Card>
  ),
  example_card_block: props => <ExampleCardBlock entry={props} />,
  expandable_card_block: props => (
    <ExpandableCard
      title={props.title}
      description={props.description}
      className="nested-entry"
    >
      <ContentstackRichText
        content={props.content}
        options={{ isNested: true }}
      />
    </ExpandableCard>
  ),
  horizontal_layout: props => <HorizontalLayout {...props} />,
} as const;

const ContentstackEntry = <T extends ContentTypeUID>({
  contentTypeUid,
  entryUid,
}: {
  contentTypeUid: T;
  entryUid: string;
}) => {
  // Note: not using `useMemo` here, since `getEntryById` is async
  const [entry, setEntry] = useState<ContentTypePropMap[T]>();
  useEffect(() => {
    getEntryById(contentTypeUid, entryUid).then(res => {
      if (res) setEntry(res);
    });
  }, [contentTypeUid, entryUid]);

  if (!entry) {
    return <>Loading embedded entry...</>;
  }

  return ComponentMap[contentTypeUid](entry);
};

export default ContentstackEntry;
