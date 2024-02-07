import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { getEntryById } from 'utils/ContentStack/getContentstackResources';

import Badge from '@leafygreen-ui/badge';
import Button from '@leafygreen-ui/button';
import Callout, { Variant } from '@leafygreen-ui/callout';
import Card from '@leafygreen-ui/card';
import ExpandableCard from '@leafygreen-ui/expandable-card';
import ArrowRight from '@leafygreen-ui/icon/dist/ArrowRight';
import { spacing } from '@leafygreen-ui/tokens';

import LiveExampleBlock from './LiveExampleBlock/LiveExampleBlock';
import AnnotatedImageBlock from './AnnotatedImageBlock';
import BasicUsageBlock from './BasicUsageBlock';
import ExampleCardBlock from './ExampleCardBlock';
import HorizontalLayout from './HorizontalLayout';
import TwoColumnExampleCard from './TwoColumnExampleCard';
import { BlockPropsMap, ContentTypeUID } from './types';
import ContentstackRichText from '.';

/**
 * An object that maps keys of each `contentTypeUid`
 * to new function component.
 *
 * The new component accepts the relevant interface as props
 * (as defined by the key `contentTypeUid` in {@link BlockPropsMap})
 * and returns a JSX.Element.
 *
 * With this approach we can ensure that the value of `props` we're passing into
 * each component matches the expected interface
 */
const blockToElementMap: {
  [K in ContentTypeUID]: (props: BlockPropsMap[K]) => JSX.Element;
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
      rightGlyph={props.link ? <ArrowRight /> : undefined}
    >
      {props.content}
    </Button>
  ),
  callout_block: props => (
    <Callout
      variant={Variant[props.variant ?? Variant.Note]}
      className="nested-entry"
      css={{ marginBottom: `${spacing[5]}px` }}
    >
      <ContentstackRichText content={props.content} isNested={true} />
    </Callout>
  ),
  card_block: props => (
    <Card className="nested-entry">
      <ContentstackRichText content={props.content} isNested={true} />
    </Card>
  ),
  example_card_block: props => <ExampleCardBlock entry={props} />,
  example_card_block_2_column_: props => <TwoColumnExampleCard entry={props} />,
  expandable_card_block: props => (
    <ExpandableCard
      title={props.title}
      description={props.description}
      className="nested-entry"
    >
      <ContentstackRichText content={props.content} isNested={true} />
    </ExpandableCard>
  ),
  horizontal_layout: props => <HorizontalLayout {...props} />,
  live_example_block: props => (
    <LiveExampleBlock storyName={props.story_name} />
  ),
} as const;

const ContentstackEntry = <T extends ContentTypeUID>({
  contentTypeUid,
  entryUid,
}: {
  contentTypeUid: T;
  entryUid: string;
}) => {
  // Note: not using `useMemo` here, since `getEntryById` is async
  const [entry, setEntry] = useState<BlockPropsMap[T]>();
  useEffect(() => {
    getEntryById(contentTypeUid, entryUid).then(res => {
      if (res) setEntry(res);
    });
  }, [contentTypeUid, entryUid]);

  if (!entry) {
    return <>Loading embedded entry...</>;
  }

  return blockToElementMap[contentTypeUid](entry);
};

export default ContentstackEntry;
