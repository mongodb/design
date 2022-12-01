import ExpandableCard from '@leafygreen-ui/expandable-card';
import Callout, { Variant } from '@leafygreen-ui/callout';
import Badge from '@leafygreen-ui/badge';
import Button from '@leafygreen-ui/button';
import Card from '@leafygreen-ui/card';
import HorizontalLayout from './HorizontalLayout';
import HorizontalLayoutColumn from './HorizontalLayoutColumn';
import { useEffect, useState } from 'react';
import { getEntryById } from 'utils/getContentstackResources';
import ContentstackRichText from '.';
import { css } from '@emotion/react';
import AnnotatedImageBlock from './AnnotatedImageBlock';
import BasicUsageBlock from './BasicUsageBlock';

const ContentstackEntry = ({ contentTypeUid, entryUid }) => {
  const [entry, setEntry] = useState<any>();
  useEffect(() => {
    getEntryById(contentTypeUid, entryUid).then(res => {
      if (res) setEntry(res);
    });
  }, [contentTypeUid, entryUid]);

  if (!entry) {
    return <>Loading embedded entry...</>;
  }

  switch (contentTypeUid) {
    case 'annotated_image_block':
      return <AnnotatedImageBlock entry={entry} />;

    case 'badge_block':
      return (
        <Badge
          variant={entry.variant}
          css={css`
            margin: 0; // remove default Safari margin
          `}
        >
          {entry.title}
        </Badge>
      );

    case 'basic_usage_block':
      return <BasicUsageBlock entry={entry} />;

    case 'button_block':
      return (
        <Button
          variant={entry.variant}
          href={entry.link}
          css={css`
            margin: 0; // remove default Safari margin
          `}
        >
          {entry.content}
        </Button>
      );

    case 'callout_block':
      return (
        <Callout variant={Variant[entry.variant]} className="nested-entry">
          <ContentstackRichText
            content={entry.content}
            options={{ isNested: true }}
          />
        </Callout>
      );

    case 'card_block':
      return (
        <Card className="nested-entry">
          <ContentstackRichText
            content={entry.content}
            options={{ isNested: true }}
          />
        </Card>
      );

    case 'expandable_card_block':
      return (
        <ExpandableCard
          title={entry.title}
          description={entry.description}
          className="nested-entry"
        >
          <ContentstackRichText
            content={entry.content}
            options={{ isNested: true }}
          />
        </ExpandableCard>
      );

    case 'horizontal_layout':
      return <HorizontalLayout columns={entry.columns} />;

    case 'horizontal_layout_column':
      return <HorizontalLayoutColumn {...entry} />;

    default:
      return <>Unknown reference entry: {contentTypeUid}.</>;
  }
};

export default ContentstackEntry;
