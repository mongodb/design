import { Body } from "@leafygreen-ui/typography";
import Image from "./Image";
import ExpandableCard from '@leafygreen-ui/expandable-card';
import { EntryFields } from "contentful";

interface Props {
  richContent: EntryFields.RichText;
}

const ContentfulRichContent = ({
  richContent
}: Props) => {
  return (
    <>
      {richContent?.content.map(node => {
        switch (node.nodeType) {
          case 'paragraph':
            return node.content?.map((node, i) => <Body key={i}>{node.value}</Body>);
          case 'embedded-entry-block':
            // @ts-expect-error
            switch (node.data.target?.sys?.contentType?.sys.id) {
              case 'expandableCardBlock':
                return (
                  <ExpandableCard
                    // @ts-expect-error
                    title={node?.data?.target.fields.title}
                    // @ts-expect-error
                    description={node?.data?.target.fields.description}
                    style={{ marginBottom: '16px' }}
                  >
                    {/* @ts-expect-error */}
                    <ContentfulRichContent richContent={node?.data?.target.fields.content} />
                  </ExpandableCard>
                )
              default:
                return <></>
            }
          // @ts-expect-error
          case 'embedded-asset-block':
            // Contentful's TS definitions seem to miss this content type, so the fields property is missing as well.
            return (
              <Image
                // @ts-expect-error
                src={node?.data?.target?.fields.file.url}
                // @ts-expect-error
                alt={node?.data?.target?.fields.description}
                width="100%"
              />
            );
          default:
            return <h1>Unsupported nodeType: ${node.nodeType!}</h1>;
        }
      })
      }
    </>
  );
}

export default ContentfulRichContent;